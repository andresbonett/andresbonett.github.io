import type { Metadata } from "next";
import Script from "next/script";
import { ViewTransition } from "react";
import AmbientBackground from "../components/ambient-background";
import GoogleTagManager from "../components/GoogleTagManager";
import { ThemeProvider } from "../components/theme-provider";
import {
  cv,
  displayName,
  email,
  githubUrl,
  heroSummary,
  linkedinUrl,
} from "../lib/cv";
import { GTM_ID } from "../lib/gtm";
import { OG_IMAGE_PATH, SITE_NAME, SITE_URL } from "../lib/site";
import "../styles/global.css";

const pageTitle = `${displayName} — ${cv.careerPositioning.recommendedHeadline}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: pageTitle,
  description: heroSummary,
  keywords: cv.atsKeywords,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: `${displayName} — Desarrollador Frontend`,
    description: heroSummary,
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "es_CO",
    images: [
      {
        url: OG_IMAGE_PATH,
        width: 480,
        height: 480,
        alt: displayName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${displayName} — Desarrollador Frontend`,
    description: heroSummary,
    images: [OG_IMAGE_PATH],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: heroSummary,
      inLanguage: "es",
      publisher: { "@id": `${SITE_URL}/#person` },
    },
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/#profilepage`,
      url: SITE_URL,
      name: pageTitle,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#person` },
      mainEntity: { "@id": `${SITE_URL}/#person` },
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: cv.basics.fullName,
      alternateName: displayName,
      jobTitle: cv.basics.headline,
      url: SITE_URL,
      email,
      image: `${SITE_URL}${OG_IMAGE_PATH}`,
      homeLocation: {
        "@type": "Place",
        name: cv.basics.location,
      },
      sameAs: [linkedinUrl, githubUrl, SITE_URL],
      knowsAbout: [
        ...cv.coreCompetencies,
        ...cv.technicalSkills.frontend.slice(0, 8),
      ],
      description: heroSummary,
    },
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
