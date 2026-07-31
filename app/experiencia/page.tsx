import type { Metadata } from "next";
import Link from "next/link";
import Header from "../../components/header";
import Experience from "../../components/experience";
import Footer from "../../components/footer";
import { cv, displayName } from "../../lib/cv";
import {
  OG_IMAGE_HEIGHT,
  OG_IMAGE_PATH,
  OG_IMAGE_WIDTH,
  SITE_DESCRIPTION,
  SITE_URL,
  TWITTER_SITE,
} from "../../lib/site";

const title = `Experiencia — ${displayName}`;
const description = `Trayectoria profesional de ${displayName}: ${cv.basics.headline}.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/experiencia/",
  },
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/experiencia/`,
    type: "profile",
    images: [
      {
        url: OG_IMAGE_PATH,
        width: OG_IMAGE_WIDTH,
        height: OG_IMAGE_HEIGHT,
        alt: displayName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: TWITTER_SITE,
    title,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE_PATH],
  },
};

export default function ExperienciaPage() {
  return (
    <>
      <Header />
      <main className="page-main">
        <div className="container page-intro reveal">
          <p className="section-label">CV</p>
          <h1 className="section-title page-intro-title">Experiencia</h1>
          <p className="page-intro-text">
            {cv.careerFocus} · {cv.yearsOfExperience}+ años ·{" "}
            {cv.basics.location}
          </p>
          <Link
            href="/"
            className="btn btn-secondary"
            transitionTypes={["page-back"]}
          >
            Volver al inicio
          </Link>
        </div>
        <Experience />
      </main>
      <Footer />
    </>
  );
}
