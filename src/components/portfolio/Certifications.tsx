import { Section } from "./Section";
import { Award } from "lucide-react";

const certs = [
  { title: "Full Stack Web Development", issuer: "Fantasy Solution" ,   type: "Internship" },  
  { title: "Web Development", issuer: "SystemTron" , type: "Internship" },
  { title: "Data Structures & Algorithms using Python", issuer: "NPTEL" },
  { title: "The Ultimate React Course", issuer: "Udemy" },
  { title: "JavaScript Specialist Certification", issuer: "Udemy" },
  { title: "SQL Certification", issuer: "Simplilearn" },
];

export function Certifications() {
  return (
    <Section id="certs" eyebrow="Achievements" title="Certifications & Continued Learning.">
      <div className="grid sm:grid-cols-2 gap-4">
        {certs.map((c) => (
          <div
            key={c.title}
            className="flex items-start gap-4 rounded-xl border border-border/70 bg-card/60 p-5 hover:border-primary/30 transition-colors"
          > 
            <span className="grid place-items-center h-10 w-10 rounded-md bg-accent/10 text-accent shrink-0">
              <Award className="h-5 w-5" />
            </span>
            <div>
              <h3 className="font-medium leading-snug">{c.title}</h3>
             
            <p className="text-sm text-muted-foreground mt-0.5">{c.issuer}</p>
            </div>
             {c.type === "Internship" && (
      <span className="text-[10px] font-semibold uppercase tracking-wide px-2 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/20">
        Internship
      </span>
    )}
          </div>
        ))}
      </div>
    </Section>
  );
}