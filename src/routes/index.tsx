import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Certifications } from "@/components/portfolio/Certifications";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "G. Lilith Vishwa — Software Engineer (React.js & React Native)" },
      {
        name: "description",
        content:
          "Software Engineer specializing in Web and Mobile Application Development. Building scalable, responsive, and user-focused applications using React.js and React Native.",
      },
      {
        property: "og:title",
        content: "G. Lilith Vishwa — Software Engineer (Web & Mobile)",
      },
      {
        property: "og:description",
        content:
          "Building modern web & mobile experiences with React.js, React Native, JavaScript & TypeScript.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
