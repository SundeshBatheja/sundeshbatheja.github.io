const stats = [
  { value: "2+", label: "Years building APIs" },
  { value: "High", label: "System reliability" },
  { value: "Fast", label: "API performance" },
];

const skills = [
  "Python",
  "TypeScript",
  "Node.js",
  "FastAPI",
  "Express.js",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "BigQuery",
  "Docker",
  "AWS",
  "GitHub Actions",
  "Temporal",
  "Serverless",
];
const About = () => (
  <section id="about" className="mx-auto max-w-5xl px-4 py-20">
    <div className="flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.15em] text-muted-foreground">
      <span className="h-px w-8 bg-border" />
      About
    </div>

    <div className="mt-8 grid gap-10 md:grid-cols-2">
      <div>
        <p className="text-muted-foreground leading-relaxed">
          I build reliable backend systems: scalable APIs, database design,
          caching, message queues, and cloud deployments. Focused on
          performance, observability, and clean architecture.
        </p>
      </div>

      <div className="flex flex-wrap gap-4 justify-start items-center">
        {skills.map((s) => (
          <span
            key={s}
            className="rounded-full border border-border bg-secondary px-5 py-3 text-sm font-semibold text-foreground whitespace-nowrap"
          >
            {s}
          </span>
        ))}
      </div>
    </div>

    <div className="mt-10 grid grid-cols-3 gap-4">
      {stats.map((s) => (
        <div key={s.label} className="glass-card p-5 text-center">
          <div className="text-2xl font-black tracking-tight">{s.value}</div>
          <div className="mt-1 text-xs font-bold text-muted-foreground">
            {s.label}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default About;
