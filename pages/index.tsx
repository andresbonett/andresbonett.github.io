import Header from "../components/header";
import Hero from "../components/hero";
import Projects from "../components/projects";
import Contact from "../components/contact";
import Footer from "../components/footer";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="../public/favicon.ico" />
        <title>Andres Bonett</title>
        <meta
          name="description"
          content="Personal page and web development portfolio of andres bonett, designed to have one more point of contact with my clients"
        />
        <meta
          name="keywords"
          content="Andrés Bonett, Andres Bonett, Web Developer, portafolio"
        />
        <meta name="robots" content="index, follow" />
      </Head>
      <Header />
      <Hero />
      <Projects />
      <Contact />
      <Footer />
      {/* <Link href="/about" as={process.env.BACKEND_URL + '/about'}></Link> */}
      Ana
    </>
  );
}
