"use client";

import { IconMonitor, IconMoon, IconSun } from "./icons";
import { useTheme, type ThemePreference } from "./theme-provider";

const labels: Record<ThemePreference, string> = {
  system: "Tema del sistema",
  light: "Tema claro",
  dark: "Tema oscuro",
};

const ThemeToggle = () => {
  const { preference, cyclePreference } = useTheme();

  const Icon =
    preference === "light"
      ? IconSun
      : preference === "dark"
        ? IconMoon
        : IconMonitor;

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={cyclePreference}
      aria-label={`${labels[preference]}. Cambiar tema`}
      title={labels[preference]}
    >
      <Icon />
    </button>
  );
};

export default ThemeToggle;
