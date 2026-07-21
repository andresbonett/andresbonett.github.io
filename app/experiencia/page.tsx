import type { Metadata } from "next";
import Link from "next/link";
import Header from "../../components/header";
import Experience from "../../components/experience";
import Footer from "../../components/footer";
import { cv, displayName } from "../../lib/cv";

export const metadata: Metadata = {
  title: `Experiencia — ${displayName}`,
  description: `Trayectoria profesional de ${displayName}: ${cv.basics.headline}.`,
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
