import { Section } from "./Section";
import { Code2, Layers, Sparkles, Users } from "lucide-react";

const pillars = [
  {
    icon: Code2,
    title: "Frontend specialist",
    body: "Deep focus on React, TypeScript and modern CSS — building component systems that scale.",
  },
  {
    icon: Layers,
    title: "Production experience",
    body: "Shipping features used in a live LMS by students, trainers and administrators every day.",
  },
  {
    icon: Users,
    title: "Team collaboration",
    body: "Comfortable working with backend teams, designers and product owners in Agile workflows.",
  },
  {
    icon: Sparkles,
    title: "Always learning",
    body: "Constantly exploring new patterns, tools and best practices to write better software.",
  },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="A frontend developer who cares about the details."
      description="I build interfaces that feel fast, polished and considered. My day-to-day is a mix of designing reusable components, integrating APIs, and making sure the experience holds up under real-world use."
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