import { Section } from "./Section";
import { Code2, Layers, Sparkles, Users } from "lucide-react";

const pillars = [
  {
    icon: Code2,
    title: "Web & Mobile Engineering",
    body: "Specialized in React.js and React Native — crafting responsive web platforms and performant cross-platform mobile apps.",
  },
  {
    icon: Layers,
    title: "Production-Level Applications",
    body: "Proven track record shipping features for real-world platforms, from enterprise LMS solutions to patient healthcare apps.",
  },
  {
    icon: Users,
    title: "API & Component Systems",
    body: "Building reusable, modular UI components and integrating seamless REST APIs for robust end-to-end functionality.",
  },
  {
    icon: Sparkles,
    title: "Scalable & User-Friendly",
    body: "Dedicated to building clean, accessible, and scalable digital solutions that elevate the end-user experience.",
  },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="A Software Engineer passionate about building web & mobile experiences."
      description="With hands-on professional experience in React.js and React Native, I engineer responsive web applications and cross-platform mobile solutions. My work centers on building modular reusable components, integrating robust REST APIs, and delivering high-performance, production-level digital products that are intuitive and built to scale."
    >
      <div className="grid sm:grid-cols-2 gap-4">
        {pillars.map(({ icon: Icon, title, body }) => (
          <div
            key={title}
            className="group relative rounded-xl border border-border/70 bg-card/60 p-6 hover:border-primary/40 transition-colors"
          >
            <div className="flex items-center gap-3">
              <span className="grid place-items-center h-9 w-9 rounded-md bg-primary/10 text-primary">
                <Icon className="h-4 w-4" />
              </span>
              <h3 className="font-medium">{title}</h3>
            </div>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
