import FadeInWhenVisible from "./FadeInWhenVisibile";
import { motion } from "framer-motion";

const projects = [
  {
    title: "SuperView",
    description:
      "AI-driven adtech platform for influencer marketing and campaign management.",
    tags: ["FastAPI", "PostgreSQL", "Docker", "AWS", "Vertex AI"],
    link: "https://www.platformance.io/solutions/superview",
  },
  {
    title: "PerformR",
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
    <FadeInWhenVisible>
      <div className="flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.15em] text-muted-foreground">
        <span className="h-px w-8 bg-border" />
        Projects
      </div>
      <h2 className="mt-3 text-2xl font-black tracking-tight">Featured work</h2>
    </FadeInWhenVisible>

    <div className="mt-8 grid gap-4 md:grid-cols-2">
      {projects.map((project, index) => (
        <FadeInWhenVisible
          key={project.title}
          delay={index * 0.2}
          direction="up"
        >
          <motion.a
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.3 }}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card p-5 group block"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg font-bold group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <motion.svg
                whileHover={{ rotate: 45, scale: 1.2 }}
                transition={{ duration: 0.3 }}
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
              </motion.svg>
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
          </motion.a>
        </FadeInWhenVisible>
      ))}
    </div>
  </section>
);

export default Projects;
