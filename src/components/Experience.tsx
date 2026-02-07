const roles = [
  {
    title: "Backend Developer — Company Name",
    period: "2023 — Present",
    bullets: [
      "Designed and shipped APIs serving X requests/day with p95 latency under Y ms.",
      "Improved database performance by Z% via indexing, query rewrites, and caching.",
      "Added tracing/metrics/logging to cut incident triage time by N%.",
    ],
  },
  {
    title: "Software Engineer — Company Name",
    period: "2021 — 2023",
    bullets: [
      "Built message-driven workflows with reliable retries and DLQs.",
      "Automated CI/CD pipelines for containerized services.",
    ],
  },
];

const Experience = () => (
  <section id="experience" className="mx-auto max-w-5xl px-4 py-20">
    <div className="flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.15em] text-muted-foreground">
      <span className="h-px w-8 bg-border" />
      Experience
    </div>
    <h2 className="mt-3 text-2xl font-black tracking-tight">Career timeline</h2>

    <div className="mt-8 space-y-4">
      {roles.map((r) => (
        <div key={r.title} className="glass-card p-5">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="text-base font-bold">{r.title}</h3>
            <span className="text-xs font-bold text-muted-foreground">{r.period}</span>
          </div>
          <ul className="mt-3 space-y-1.5 pl-4">
            {r.bullets.map((b) => (
              <li key={b} className="text-sm leading-relaxed text-muted-foreground list-disc">{b}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default Experience;
