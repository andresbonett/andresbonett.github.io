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
      </Head>
      <Header />
      <Hero />
      <Projects />
      <Contact />
      <Footer />
      {/* <Link href="/about" as={process.env.BACKEND_URL + '/about'}></Link> */}
    </>
  );
}
