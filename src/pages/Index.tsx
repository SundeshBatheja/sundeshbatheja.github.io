import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show header after scrolling past 85vh (the hero section height)
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      setShowHeader(scrollPosition > viewportHeight * 0.85);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      {/* Sticky Header - Shows after scrolling */}
      <div
        className={`fixed left-0 top-0 z-50 w-full backdrop-blur-md py-4 transition-transform duration-300 ${
          showHeader ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="mx-auto max-w-5xl px-4 flex justify-between items-start">
          {/* Left - Name and Title */}
          <div className="space-y-1">
            <h2 className="text-lg font-black tracking-tight">
              Sundesh Batheja
            </h2>
            <p className="text-sm font-bold text-muted-foreground">
              Backend Developer
            </p>
          </div>

          {/* Right - Open to and Location */}
          <div className="space-y-2 text-right">
            <div className="flex items-center gap-2 text-sm font-bold text-muted-foreground justify-end">
              <span className="h-2 w-2 rounded-full bg-primary shadow-sm shadow-primary/40" />
              Karachi · Pakistan
            </div>
            <div className="flex items-center gap-2 text-sm font-bold text-muted-foreground justify-end">
              <span className="h-2 w-2 rounded-full bg-accent shadow-sm shadow-accent/40" />
              #Relocation - #Remote
            </div>
          </div>
        </div>
      </div>

      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
};

export default Index;
