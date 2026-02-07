const features = [
  {
    badge: "API Engineering",
    badgeClass: "text-primary bg-primary/8 border-primary/20",
    title: "Modern backend APIs",
    items: ["REST & GraphQL design", "Auth: JWT / OAuth2", "Rate limiting & pagination"],
  },
  {
    badge: "Data & Performance",
    badgeClass: "text-accent bg-accent/8 border-accent/20",
    title: "Database-first thinking",
    items: ["PostgreSQL modeling & indexing", "Redis caching strategies", "Query profiling & optimization"],
  },
  {
    badge: "Cloud & Observability",
    badgeClass: "text-success bg-success/8 border-success/20",
    title: "Production-ready systems",
    items: ["Docker & CI/CD pipelines", "Logging, metrics, tracing", "Queues: Kafka / RabbitMQ"],
  },
];

const Features = () => (
  <section className="mx-auto max-w-5xl px-4 py-10">
    <div className="grid gap-4 md:grid-cols-3">
      {features.map((f) => (
        <article key={f.title} className="glass-card-hover relative overflow-hidden p-5">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
          <div className="relative z-10">
            <span className={`inline-block rounded-full border px-3 py-1 text-xs font-extrabold ${f.badgeClass}`}>
              {f.badge}
            </span>
            <h3 className="mt-3 text-base font-bold tracking-tight">{f.title}</h3>
            <ul className="mt-3 space-y-2">
              {f.items.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/40" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default Features;
