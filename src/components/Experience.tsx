import FadeInWhenVisibile from "./FadeInWhenVisibile";

const roles = [
  {
    company: "Platformance.io",
    companyUrl: "https://www.platformance.io/",
    jobType: "Remote",
    location: "Dubai, UAE",
    positions: [
      {
        title: "Software Engineer",
        period: "Aug 2025 — Present",
      },
      {
        title: "Junior Software Engineer II",
        period: "Feb 2025 — Aug 2025",
      },
      {
        title: "Junior Software Engineer",
        period: "Aug 2024 — Feb 2025",
      },
    ],
    bullets: [
      "Built backend services for AI-driven adtech and influencer platforms.",
      "Integrated third-party APIs, Google Vertex AI, and background workflows.",
      "Developed serverless automations using AWS Lambda and scheduled jobs.",
      "Deployed containerized services on AWS with CI/CD pipelines.",
    ],
  },
  {
    company: "Agilosoft",
    companyUrl: "https://agilosoft.com/",
    jobType: "Onsite",
    location: "Karachi, Pakistan",
    positions: [
      {
        title: "Associate Software Engineer",
        period: "Feb 2024 — Aug 2024",
      },
    ],
    bullets: [
      "Developed scalable backend services using .NET and Entity Framework.",
      "Designed REST APIs to support business workflows and integrations.",
      "Optimized PostgreSQL queries and indexing for better performance.",
    ],
  },
  {
    company: "Bykea",
    companyUrl: "https://bykea.com/",
    jobType: "Onsite",
    location: "Karachi, Pakistan",
    positions: [
      {
        title: "Backend Intern",
        period: "Jul 2023 — Aug 2023",
      },
    ],
    bullets: [
      "Worked on backend features using Node.js for a large-scale platform.",
      "Built and optimized APIs with Express.js and Fastify.",
      "Collaborated on API design and database management with senior engineers.",
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
      {roles.map((role, idx) => (
        <FadeInWhenVisibile key={role.company} delay={idx * 0.1}>
          <div className="glass-card p-5">
            <div className="mb-4">
              <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
                <div className="flex flex-col gap-1">
                  <a
                    href={role.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-bold inline-flex items-center gap-2 hover:text-accent transition-colors"
                  >
                    {role.company}
                    <svg
                      className="h-4 w-4"
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
                  </a>
                  <span className="text-xs text-muted-foreground font-semibold">
                    {role.location}
                  </span>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary text-xs font-bold text-muted-foreground border border-border">
                  <svg
                    className="h-3 w-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  {role.jobType}
                </span>
              </div>
              <div className="relative pl-8">
                {/* Timeline line */}
                {role.positions.length > 1 && (
                  <div className="absolute left-2 top-3 bottom-3 w-0.5 bg-gradient-to-b from-accent via-primary to-accent"></div>
                )}

                {/* Positions with dots */}
                <div className="space-y-3">
                  {role.positions.map((position, index) => (
                    <div
                      key={position.title + position.period}
                      className="relative flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between"
                    >
                      {/* Dot */}
                      <div className="absolute -left-8 top-1 h-4 w-4 rounded-full bg-gradient-to-br from-accent to-primary shadow-lg shadow-accent/30 border-2 border-background"></div>

                      <div className="flex-1">
                        <h4 className="text-base font-bold">
                          {position.title}
                        </h4>
                      </div>
                      <span className="text-xs font-bold text-muted-foreground whitespace-nowrap">
                        {position.period}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <ul className="mt-3 space-y-1.5 pl-4">
              {role.bullets.map((b) => (
                <li
                  key={b}
                  className="text-sm leading-relaxed text-muted-foreground list-disc"
                >
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </FadeInWhenVisibile>
      ))}
    </div>
  </section>
);

export default Experience;
