import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Superview",
    description:
      "AI-driven adtech platform for influencer marketing and campaign management.",
    tags: ["FastAPI", "PostgreSQL", "Docker", "AWS", "Vertex AI"],
    link: "https://www.platformance.io/solutions/superview",
  },
  {
    title: "Performr",
    description:
      "Performance analytics platform for influencer campaigns with real-time insights.",
    tags: [
      "Express.js",
      "TypeScript",
      "PostgreSQL",
      "Temporal",
      "Docker",
      "AWS",
    ],
    link: "https://www.platformance.io/performr",
  },
];

const Projects = () => (
  <section id="projects" className="mx-auto max-w-5xl px-4 py-20">
    <div className="flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.15em] text-muted-foreground">
      <span className="h-px w-8 bg-border" />
      Projects
    </div>
    <h2 className="mt-3 text-2xl font-black tracking-tight">Featured work</h2>

    <div className="mt-8 grid gap-4 md:grid-cols-2">
      {projects.map((project) => (
        <a
          key={project.title}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="glass-card p-5 transition-all hover:-translate-y-1 hover:shadow-lg group"
        >
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-lg font-bold group-hover:text-accent transition-colors">
              {project.title}
            </h3>
            <svg
              className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-bold rounded-full bg-secondary border border-border text-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </a>
      ))}
    </div>
  </section>
);

export default Projects;
