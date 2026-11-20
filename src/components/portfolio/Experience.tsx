import { Section } from "./Section";
import { ArrowUpRight, Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Junior Software Engineer",
    company: "VRNeXGen Technologies",
    domain: "Mobile Application Development",
    period: "Jul 2026 — Present",
    current: true,
    project: {
      name: "SmartHealth — Patient Healthcare Mobile App",
      link: "https://play.google.com/store/apps/details?id=com.mysmarthealth",
      linkLabel: "View on Play Store",
    },
    on:"Currently Working on ",
    bullets: [
      "Currently working as a Junior Software Engineer focusing on React Native mobile application development.",
      "Contributing to the SmartHealth Patient Application for Android and iOS platforms.",
      "Developing responsive mobile UI screens, smooth user flows, and reusable mobile components.",
      "Handling REST API integration, client-side functionality, and healthcare service workflows.",
    ],
    tech: ["React Native", "JavaScript", "React Native CLI", "REST APIs", "Android", "iOS"],
  },
  {
    role: "Junior Software Developer ",
    company: "VRNeXGen Technologies",
    domain: "Frontend Web Development",
    period: "Jan 2026 — Jun 2026",
    current: false,
    project: {
      name: "VRXLEARN — Learning Management System",
      link: "https://vrxlearn.vrnexgen1.com/login",
      linkLabel: "Visit live app",
    },
    on: "Worked on ",
    bullets: [
      "Completed a six-month internship contributing to VRXLEARN, a production-level LMS.",
      "Developed responsive frontend components and layouts using React.js and TypeScript.",
      "Integrated FastAPI endpoints and built reusable UI components across the platform.",
      "Collaborated within Agile sprints on feature development, debugging, and testing.",
    ],
    tech: ["React.js", "TypeScript", "JavaScript", "Tailwind CSS", "FastAPI", "REST APIs"],
  },
];

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Building real products, in production."
      description="Professional software engineering experience spanning mobile application development and production web platforms."
    >
      <div className="relative space-y-8">
        <div className="absolute left-4 sm:left-6 top-2 bottom-2 w-px bg-border/70" />

        {experiences.map((exp) => (
          <article key={exp.role + exp.period} className="relative pl-12 sm:pl-16">
            <span
              className={`absolute left-0 sm:left-2 top-1 grid place-items-center h-8 w-8 rounded-full border bg-card ${exp.current
                ? "border-primary text-primary shadow-sm shadow-primary/20"
                : "border-border/70 text-muted-foreground"
                }`}
            >
              <Briefcase className="h-4 w-4" />
            </span>

            <div className="rounded-xl border border-border/70 bg-card/60 p-6 sm:p-7 hover:border-border transition-colors">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-4 flex-wrap">
                    <h3 className="text-lg font-semibold">{exp.role}</h3>
                    {/* {exp.current && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-400/10 text-emerald-400 border border-emerald-400/20">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Current
                      </span>
                    )} */}
                    {exp.current ? (
                      <span className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-400/10 text-emerald-400 border border-emerald-400/20">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Current
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-yellow-400/10 text-yellow-400 border border-yellow-400/20">
                        <span className="h-1.5 w-1.5 rounded-full bg-yellow-400 animate-pulse" />
                        Intern
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    {exp.company} · {exp.domain}
                  </p>
                </div>
                <span className="text-xs font-mono text-muted-foreground bg-background/60 border border-border/60 rounded-full px-2.5 py-1">
                  {exp.period}
                </span>
              </div>

              <div className="mt-5 rounded-lg border border-border/60 bg-background/40 p-4">
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground font-mono">
                      {exp.on}                    </p>
                    <p className="font-medium mt-0.5">{exp.project.name}</p>
                  </div>
                  <a
                    href={exp.project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
                  >
                    {exp.project.linkLabel}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>

              <ul className="mt-5 space-y-2.5 text-sm text-muted-foreground leading-relaxed">
                {exp.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="mt-2 h-1 w-1 rounded-full bg-primary shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-2 py-1 rounded-md bg-primary/10 text-primary/90 border border-primary/15"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
