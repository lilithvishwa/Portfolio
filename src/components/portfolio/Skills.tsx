import { Section } from "./Section";

const groups: { title: string; items: string[] }[] = [
  {
    title: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React.js", "Tailwind CSS", "Bootstrap"],
  },
  { title: "Backend", items: ["Node.js", "Express.js"] },
  { title: "Database & Services", items: ["Supabase"] },
  { title: "Languages", items: ["JavaScript", "TypeScript", "Python"] },
  {
    title: "Tools & Platforms",
    items: ["Git", "GitHub", "Postman", "VS Code", "Vercel", "Netlify"],
  },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="The tools I reach for."
      description="A pragmatic stack focused on shipping reliable, maintainable frontend products."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {groups.map((g) => (
          <div
            key={g.title}
            className="rounded-xl border border-border/70 bg-card/60 p-6 hover:border-primary/30 transition-colors"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-mono uppercase tracking-wider text-muted-foreground">
                {g.title}
              </h3>
              <span className="text-xs font-mono text-muted-foreground">{g.items.length}</span>
            </div>
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {g.items.map((s) => (
                <li
                  key={s}
                  className="text-sm px-2.5 py-1 rounded-md bg-background/60 border border-border/60 text-foreground/90"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}