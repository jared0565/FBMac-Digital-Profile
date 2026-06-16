import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import ResponsibleAI from "@/components/ResponsibleAI";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Process />
        <Projects />
        <Skills />
        <ResponsibleAI />
        <Education />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
