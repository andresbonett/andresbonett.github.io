import type { Metadata } from "next";
import Link from "next/link";
import Header from "../../components/header";
import Experience from "../../components/experience";
import Footer from "../../components/footer";
import { cv, displayName, heroSummary } from "../../lib/cv";
import { OG_IMAGE_PATH, SITE_URL } from "../../lib/site";

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
        width: 480,
        height: 480,
        alt: displayName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: heroSummary,
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
