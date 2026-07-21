import type { Metadata } from "next";
import Script from "next/script";
import { ViewTransition } from "react";
import AmbientBackground from "../components/ambient-background";
import GoogleTagManager from "../components/GoogleTagManager";
import { ThemeProvider } from "../components/theme-provider";
import { cv, displayName, heroSummary } from "../lib/cv";
import { GTM_ID } from "../lib/gtm";
import "../styles/global.css";

export const metadata: Metadata = {
  title: `${displayName} — ${cv.careerPositioning.recommendedHeadline}`,
  description: heroSummary,
  keywords: cv.atsKeywords,
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: `${displayName} — Desarrollador Frontend`,
    description: heroSummary,
    type: "website",
    url: "https://andresbonett.github.io",
    locale: "es_ES",
  },
  metadataBase: new URL("https://andresbonett.github.io"),
  icons: {
    icon: "/favicon.ico",
  },
};

const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    var pref =
      stored === "light" || stored === "dark" || stored === "system"
        ? stored
        : "system";
    var resolved =
      pref === "system"
        ? window.matchMedia("(prefers-color-scheme: light)").matches
          ? "light"
          : "dark"
        : pref;
    document.documentElement.setAttribute("data-theme", resolved);
    document.documentElement.style.colorScheme = resolved;
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <Script
          id="gtm-base"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `,
          }}
        />
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        <ThemeProvider>
          <AmbientBackground />
          <div className="site">
            <GoogleTagManager />
            <ViewTransition>{children}</ViewTransition>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
