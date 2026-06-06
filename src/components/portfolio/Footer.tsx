import { Github, Linkedin, Mail ,Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/60 mt-10">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          Designed & Developed by{" "}
          <span className="text-foreground font-medium">G. LilithVishwa</span>
        </p>
        <div className="flex items-center gap-2">
          {[
            { href: "mailto:lilith04062005@gmail.com", icon: Mail, label: "Email" },
            { href: "tel:+9193613956586", icon: Phone, label: "Phone" }, // Replace with your number
            { href: "https://github.com/lilithvishwa", icon: Github, label: "GitHub" },
            { href: "https://linkedin.com/in/lilithvishwa2005", icon: Linkedin, label: "LinkedIn" },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              aria-label={label}
              className="grid place-items-center h-9 w-9 rounded-md border border-border/60 text-muted-foreground hover:text-foreground hover:border-border transition-colors"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}