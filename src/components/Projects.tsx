import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Order Service (Microservices)",
    desc: "Spring Boot service with PostgreSQL + Redis, idempotent endpoints, and outbox pattern for reliable events.",
    tags: ["Spring Boot", "PostgreSQL", "Redis", "Kafka"],
  },
  {
    title: "Auth Gateway",
    desc: "API gateway handling OAuth2/JWT, rate limiting, request validation, and centralized observability.",
    tags: ["Node.js", "JWT", "Rate limiting", "OpenTelemetry"],
  },
  {
    title: "Async Worker Platform",
    desc: "Background jobs with retries, dead-letter queues, and dashboards for throughput and failure analysis.",
    tags: ["Python", "RabbitMQ", "Docker", "Prometheus"],
  },
];

const Projects = () => (
  <section id="projects" className="mx-auto max-w-5xl px-4 py-20">
    <div className="flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.15em] text-muted-foreground">
      <span className="h-px w-8 bg-border" />
      Projects
    </div>
    <h2 className="mt-3 text-2xl font-black tracking-tight">Work highlights</h2>

    <div className="mt-8 grid gap-4 md:grid-cols-3">
      {projects.map((p) => (
        <article key={p.title} className="glass-card-hover p-5">
          <h3 className="text-base font-bold">{p.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {p.tags.map((t) => (
              <span key={t} className="rounded-full border border-border bg-secondary px-2.5 py-1 text-[11px] font-bold">
                {t}
              </span>
            ))}
          </div>
          <div className="mt-4 flex gap-4">
            <a href="#" className="inline-flex items-center gap-1 text-sm font-extrabold text-primary hover:underline">
              GitHub <ExternalLink className="h-3 w-3" />
            </a>
            <a href="#" className="inline-flex items-center gap-1 text-sm font-extrabold text-primary hover:underline">
              Docs <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default Projects;
