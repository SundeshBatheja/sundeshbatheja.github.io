import { ArrowDown, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative flex min-h-[85vh] flex-col items-center justify-center px-4 text-center">
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute right-0 top-[10%] h-[400px] w-[500px] rounded-full bg-accent/10 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-2xl">
        <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.15em] text-muted-foreground">
          Backend Developer
        </p>
        <h1 className="mb-6 text-5xl font-black tracking-tight sm:text-7xl md:text-8xl">
          <span className="gradient-text">Sundesh Batheja</span>
        </h1>
        <p className="mx-auto max-w-lg text-base leading-relaxed text-muted-foreground">
          Building reliable backend systems — scalable APIs, solid databases,
          and production-ready cloud infrastructure.
        </p>

        {/* Open to and Location */}
        <div className="mt-6 space-y-2 flex flex-col items-center">
          <div className="flex items-center gap-2 text-sm font-bold text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-primary shadow-sm shadow-primary/40" />
            Location: Karachi, Pakistan · Remote-Friendly
          </div>
          <div className="flex items-center gap-2 text-sm font-bold text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-accent shadow-sm shadow-accent/40" />
            Open to Relocation
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-extrabold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/40"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/80 px-6 py-3 text-sm font-extrabold text-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            <Mail className="h-4 w-4" />
            Get in touch
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 animate-bounce text-muted-foreground/50 transition-colors hover:text-foreground"
      >
        <ArrowDown className="h-5 w-5" />
      </a>
    </section>
  );
};

export default Hero;
