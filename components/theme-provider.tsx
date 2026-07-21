"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";

export type ThemePreference = "system" | "light" | "dark";
export type ResolvedTheme = "light" | "dark";

type ThemeContextValue = {
  preference: ThemePreference;
  resolved: ResolvedTheme;
  setPreference: (value: ThemePreference) => void;
  cyclePreference: () => void;
};

const STORAGE_KEY = "theme";
const CHANGE_EVENT = "theme-preference-change";

const ThemeContext = createContext<ThemeContextValue | null>(null);

function getSystemTheme(): ResolvedTheme {
  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}

function readPreference(): ThemePreference {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark" || stored === "system") {
    return stored;
  }
  return "system";
}

function resolveTheme(preference: ThemePreference): ResolvedTheme {
  return preference === "system" ? getSystemTheme() : preference;
}

function applyTheme(resolved: ResolvedTheme) {
  document.documentElement.setAttribute("data-theme", resolved);
  document.documentElement.style.colorScheme = resolved;
}

function syncDomTheme() {
  applyTheme(resolveTheme(readPreference()));
}

function withViewTransition(update: () => void) {
  const doc = document as Document & {
    startViewTransition?: (cb: () => void) => { finished: Promise<void> };
  };

  if (
    typeof doc.startViewTransition === "function" &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    doc.startViewTransition(update);
    return;
  }

  update();
}

function subscribe(onStoreChange: () => void) {
  const onChange = () => {
    syncDomTheme();
    onStoreChange();
  };

  syncDomTheme();
  window.addEventListener("storage", onChange);
  window.addEventListener(CHANGE_EVENT, onChange);
  const media = window.matchMedia("(prefers-color-scheme: light)");
  media.addEventListener("change", onChange);

  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener(CHANGE_EVENT, onChange);
    media.removeEventListener("change", onChange);
  };
}

function getSnapshot(): ThemePreference {
  return readPreference();
}

function getServerSnapshot(): ThemePreference {
  return "system";
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const preference = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  const resolved =
    preference === "system"
      ? typeof window === "undefined"
        ? ("dark" as const)
        : getSystemTheme()
      : preference;

  const setPreference = useCallback((value: ThemePreference) => {
    withViewTransition(() => {
      localStorage.setItem(STORAGE_KEY, value);
      applyTheme(resolveTheme(value));
      window.dispatchEvent(new Event(CHANGE_EVENT));
    });
  }, []);

  const cyclePreference = useCallback(() => {
    const order: ThemePreference[] = ["system", "light", "dark"];
    const idx = Math.max(0, order.indexOf(preference));
    setPreference(order[(idx + 1) % order.length]);
  }, [preference, setPreference]);

  const value = useMemo(
    () => ({ preference, resolved, setPreference, cyclePreference }),
    [preference, resolved, setPreference, cyclePreference]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return ctx;
}
