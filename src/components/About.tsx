const stats = [
  { value: "5+", label: "Years building APIs" },
  { value: "99.9%", label: "Uptime mindset" },
  { value: "<200ms", label: "Latency focus" },
];

const skills = [
  "Java / Spring Boot", "Node.js", "Python", "PostgreSQL", "Redis", "Kafka", "Docker", "AWS",
];

const About = () => (
  <section id="about" className="mx-auto max-w-5xl px-4 py-20">
    <div className="flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.15em] text-muted-foreground">
      <span className="h-px w-8 bg-border" />
      About
    </div>

    <div className="mt-6 grid gap-10 md:grid-cols-2">
      <div>
        <p className="text-muted-foreground leading-relaxed">
          I build reliable backend systems: scalable APIs, database design, caching, message queues, and cloud deployments. Focused on performance, observability, and clean architecture.
        </p>
        <div className="mt-4 flex items-center gap-2 text-sm font-bold text-muted-foreground">
          <span className="h-2 w-2 rounded-full bg-accent shadow-sm shadow-accent/40" />
          Open to: Backend / Platform / API Engineering
        </div>
        <div className="mt-2 flex items-center gap-2 text-sm font-bold text-muted-foreground">
          <span className="h-2 w-2 rounded-full bg-primary shadow-sm shadow-primary/40" />
          Location: Your City · Remote-friendly
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {skills.map((s) => (
          <span key={s} className="rounded-full border border-border bg-secondary px-3 py-1.5 text-xs font-bold text-foreground">
            {s}
          </span>
        ))}
      </div>
    </div>

    <div className="mt-10 grid grid-cols-3 gap-4">
      {stats.map((s) => (
        <div key={s.label} className="glass-card p-5 text-center">
          <div className="text-2xl font-black tracking-tight">{s.value}</div>
          <div className="mt-1 text-xs font-bold text-muted-foreground">{s.label}</div>
        </div>
      ))}
    </div>
  </section>
);

export default About;
