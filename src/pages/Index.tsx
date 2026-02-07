import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Hero />
    <About />
    <Features />
    <Projects />
    <Experience />
    <Contact />
    <footer className="py-12 text-center text-xs font-bold text-muted-foreground">
      © {new Date().getFullYear()} Your Name
    </footer>
  </div>
);

export default Index;
