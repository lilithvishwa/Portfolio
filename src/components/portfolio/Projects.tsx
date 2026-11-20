import { Section } from "./Section";
import { ArrowUpRight, Github, Globe, Smartphone } from "lucide-react";

function PlayStoreIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M3.609 1.814L13.793 12 3.61 22.186A2.22 2.22 0 0 1 3 20.615V3.385c0-.608.232-1.163.609-1.571z"
        fill="#00E676"
      />
      <path
        d="M17.207 8.586L4.78 1.417c-.389-.224-.834-.344-1.171-.397L13.793 12l3.414-3.414z"
        fill="#FFD600"
      />
      <path
        d="M3.609 22.98c.337-.053.782-.173 1.171-.397l12.427-7.169L13.793 12 3.609 22.98z"
        fill="#FF3D00"
      />
      <path
        d="M21.22 10.895l-4.013-2.309L13.793 12l3.414 3.414 4.013-2.309a1.27 1.27 0 0 0 0-2.21z"
        fill="#00B0FF"
      />
    </svg>
  );
}

interface Project {
  title: string;
  category: "Web Application" | "Mobile Application" | "Data & AI";
  description: string;
  features?: string[];
  tags: string[];
  live?: string;
  playStore?: string;
  github?: string;
  badge?: string;
}

const projects: Project[] = [
  {
    title: "SmartHealth – Patient App",
    category: "Mobile Application",
    description:
      "SmartHealth is a patient-focused healthcare mobile application developed using React Native, designed to make healthcare services more accessible and convenient. It enables patients to book doctor appointments, access online consultations, explore pharmacy and lab test services, and manage their appointments through a unified mobile platform.",
    features: [
      "Doctor Appointment Booking",
      "Online Doctor Consultation",
      "Pharmacy Services",
      "Lab Test Services",
      "My Appointments",
      "Patient-focused healthcare services",
    ],
    tags: [
      "React Native",
      "JavaScript",
      "React Native CLI",
      "REST API Integration",
      "Android",
      "iOS",
    ],
    playStore: "https://play.google.com/store/apps/details?id=com.mysmarthealth",
    badge: "Production · Mobile App",
  },
  {
    title: "VRXLEARN LMS",
    category: "Web Application",
    description:
      "Production Learning Management System used daily by students, trainers and administrators. Contributed responsive UI features, reusable components and API integrations.",
    tags: ["React", "TypeScript", "Tailwind CSS", "FastAPI"],
    live: "https://vrxlearn.vrnexgen1.com/login",
    github: "https://github.com/lilithvishwa/VRNEXGEN_TECHTEAM",
    badge: "Production",
  },

  {
    title: "Bankist",
    category: "Web Application",
    description:
      "Digital banking app simulating transfers, loans, account closure and authentication, with auto-logout and session isolation.",
    tags: ["JavaScript", "HTML", "CSS", "DOM APIs"],
    live: "https://bankist-lilith.netlify.app",
    github: "https://github.com/lilithvishwa/Bankist-Project",
  },
  {
    title: "Mapty",
    category: "Web Application",
    description:
      "GPS-based workout tracker built with Leaflet.js and the Geolocation API. Persists workouts via LocalStorage using ES6 class architecture.",
    tags: ["JavaScript", "Leaflet.js", "Geolocation", "OOP"],
    live: "https://mapty-lilith.netlify.app/",
    github: "https://github.com/lilithvishwa/Mapty-Project",
  },
  {
    title: "FairLens : Loan Fairness Auditor",
    category: "Data & AI",
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
          const primaryLink = p.playStore ?? p.live ?? p.github;
          const isMobile = p.category === "Mobile Application";

          return (
            <div
              key={p.title}
              className={`group relative flex flex-col rounded-xl border bg-card/60 p-6 transition-all ${isMobile
                  ? "border-accent/40 hover:border-accent hover:bg-card/80 shadow-sm shadow-accent/5"
                  : "border-border/70 hover:border-primary/40 hover:bg-card/80"
                }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span
                      className={`inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded-full ${isMobile
                          ? "bg-accent/10 text-accent border border-accent/20"
                          : "bg-muted/60 text-muted-foreground border border-border/60"
                        }`}
                    >
                      {isMobile ? (
                        <Smartphone className="h-3 w-3" />
                      ) : (
                        <Globe className="h-3 w-3" />
                      )}
                      {p.category}
                    </span>
                    {p.badge && (
                      <span className="text-[10px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded bg-emerald-400/10 text-emerald-300 border border-emerald-400/20">
                        {p.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
                </div>

                {primaryLink && (
                  <a
                    href={primaryLink}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${p.title}`}
                    className="p-1 text-muted-foreground transition-all group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
              </div>

              <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
                {p.description}
              </p>

              {p.features && (
                <div className="mt-4 pt-3.5 border-t border-border/40">
                  <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
                    Key Features
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-muted-foreground">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

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

              <div className="mt-5 pt-4 border-t border-border/60 flex flex-wrap gap-3">
                {p.playStore && (
                  <a
                    href={p.playStore}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md bg-emerald-600 text-white text-sm font-medium hover:bg-emerald-500 transition shadow-sm"
                  >
                    <PlayStoreIcon className="h-4 w-4" />
                    View on Play Store
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}

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
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-border text-sm hover:bg-accent hover:text-accent-foreground transition"
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
