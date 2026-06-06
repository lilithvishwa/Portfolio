import { Section } from "./Section";
import { ArrowUpRight, Briefcase } from "lucide-react";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Building real products, in production."
    >
      <div className="relative">
        <div className="absolute left-4 sm:left-6 top-2 bottom-2 w-px bg-border/70" />
        <article className="relative pl-12 sm:pl-16">
          <span className="absolute left-0 sm:left-2 top-1 grid place-items-center h-8 w-8 rounded-full border border-border/70 bg-card text-primary">
            <Briefcase className="h-4 w-4" />
          </span>
          <div className="rounded-xl border border-border/70 bg-card/60 p-6 sm:p-7">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="text-lg font-semibold">Junior Software Developer Intern</h3>
                <p className="text-sm text-muted-foreground">
                  VRNexGen Technologies · Frontend Development
                </p>
              </div>
              <span className="text-xs font-mono text-muted-foreground bg-background/60 border border-border/60 rounded-full px-2.5 py-1">
                Jan 2026 — Present
              </span>
            </div>

            <div className="mt-5 rounded-lg border border-border/60 bg-background/40 p-4">
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground font-mono">
                    Working on
                  </p>
                  <p className="font-medium mt-0.5">VRXLEARN — Learning Management System</p>
                </div>
                <a
                  href="https://vrxlearn.vrnexgen1.com/login"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
                >
                  Visit live app
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            <ul className="mt-5 space-y-2.5 text-sm text-muted-foreground leading-relaxed">
              {[
                "Developed responsive frontend features using React.js, TypeScript and Tailwind CSS.",
                "Built reusable UI components consumed across the LMS platform.",
                "Integrated FastAPI endpoints to deliver complete end-to-end user flows.",
                "Participated in feature development, debugging and testing within Agile sprints.",
              ].map((b) => (
                <li key={b} className="flex gap-3">
                  <span className="mt-2 h-1 w-1 rounded-full bg-primary shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-1.5">
              {["React","JavaScript", "TypeScript", "Tailwind CSS",  "REST APIs"].map((t) => (
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
      </div>
    </Section>
  );
}