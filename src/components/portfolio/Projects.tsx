import { Section } from "./Section";
import { ArrowUpRight, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  live?: string;
  github?: string;
  badge?: string;
}

const projects: Project[] = [
  {
    title: "VRXLEARN LMS",
    description:
      "Production Learning Management System used daily by students, trainers and administrators. Contributed responsive UI features, reusable components and API integrations.",
    tags: ["React", "TypeScript", "Tailwind CSS"  , "FastAPI"],
    live: "https://vrxlearn.vrnexgen1.com/login",
     github: "https://github.com/lilithvishwa/VRNEXGEN_TECHTEAM",
    badge: "Production",
  },
  {
    title: "Bankist",
    description:
    "Digital banking app simulating transfers, loans, account closure and authentication, with auto-logout and session isolation.",
    tags: ["JavaScript", "HTML", "CSS", "DOM APIs"],
    live: "https://bankist-lilith.netlify.app",
    github: "https://github.com/lilithvishwa/Bankist-Project",
  },
  {
    title: "Mapty",
    description:
    "GPS-based workout tracker built with Leaflet.js and the Geolocation API. Persists workouts via LocalStorage using ES6 class architecture.",
    tags: ["JavaScript", "Leaflet.js", "Geolocation", "OOP"],
    live: "https://mapty-lilith.netlify.app/",
    github: "https://github.com/lilithvishwa/Mapty-Project",
  },
  {
    title: "FairLens : Loan Fairness Auditor",
    description:
      "Explainable AI platform for fairness analysis and bias mitigation in automated loan approval. Uses MLPClassifier with industry-standard fairness metrics.",
    tags: ["Python", "Scikit-learn", "Fairlearn", "Data Viz"],
    github: "https://github.com/lilithvishwa/FairLens",
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Selected work"
      title="Projects I've shipped and shaped."
      description="A mix of production work and personal builds that show how I approach UI, architecture and problem-solving."
    >
      <div className="grid md:grid-cols-2 gap-5">
        {projects.map((p) => {
          const primary = p.live ?? p.github;
          return (
            <div
          key={p.title}
          className="group relative flex flex-col rounded-xl border border-border/70 bg-card/60 p-6 hover:border-primary/40 hover:bg-card/80 transition-all"
>
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  {p.badge && (
                    <span className="text-[10px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded bg-emerald-400/10 text-emerald-300 border border-emerald-400/20">
                      {p.badge}
                    </span>
                  )}
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
                {p.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-2 py-0.5 rounded bg-background/60 border border-border/60 text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-5 pt-4 border-t border-border/60 flex gap-3">
  {p.live && (
    <a
      href={p.live}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-primary text-primary-foreground text-sm hover:opacity-90 transition"
    >
      Live Demo
      <ArrowUpRight className="h-4 w-4" />
    </a>
  )}

  {p.github && (
    <a
      href={p.github}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-border text-sm hover:bg-accent transition"
    >
      <Github className="h-4 w-4" />
      GitHub
    </a>
  )}
</div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 text-center">
        <a
          href="https://github.com/lilithvishwa"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <Github className="h-4 w-4" />
          See more on GitHub
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </Section>
  );
}