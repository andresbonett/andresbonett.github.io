import Head from "next/head";
import Header from "../components/header";
import Hero from "../components/hero";
import Skills from "../components/skills";
import Projects from "../components/projects";
import Contact from "../components/contact";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Andrés Bonett — Desarrollador Frontend</title>
        <meta
          name="description"
          content="Portafolio de Andrés Bonett, desarrollador frontend con 5 años de experiencia en React, React Native, TypeScript, Tauri y más."
        />
        <meta
          name="keywords"
          content="Andrés Bonett, desarrollador frontend, React, React Native, TypeScript, Tailwind, Tauri, portafolio"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Andrés Bonett — Desarrollador Frontend" />
        <meta
          property="og:description"
          content="Desarrollador frontend autodidacta con 5 años de experiencia en React, TypeScript y el ecosistema moderno."
        />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
