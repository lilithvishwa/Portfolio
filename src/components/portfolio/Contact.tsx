import { useState, type FormEvent } from "react";
import { Section } from "./Section";
import { Github, Linkedin, Mail, Send, Phone } from "lucide-react";
import { Value } from "@radix-ui/react-select";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");
    if (!name || !email || !message) return;
    setStatus("sending");
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    window.location.href = `mailto:lilith04062005@gmail.com?subject=${subject}&body=${body}`;
    setTimeout(() => setStatus("sent"), 400);
  }

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something together."
      description="Open to frontend roles, freelance work and interesting collaborations. The fastest way to reach me is email or LinkedIn."
    >
      <div className="grid lg:grid-cols-5 gap-6">
        <div className="lg:col-span-2 space-y-3">
          {[
            {
              icon: Mail,
              label: "Email",
              value: "lilith04062005@gmail.com",
              href: "mailto:lilith04062005@gmail.com",
            },
            { icon: Phone, label: "Phone", value: "93613 95686", href: "tel:+919361395686" },
            {
              icon: Linkedin,
              label: "LinkedIn",
              value: "lilithvishwa2005",
              href: "https://linkedin.com/in/lilithvishwa2005",
            },
            {
              icon: Github,
              label: "GitHub",
              value: "lilithvishwa",
              href: "https://github.com/lilithvishwa",
            },
          ].map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="flex items-center gap-4 rounded-xl border border-border/70 bg-card/60 p-4 hover:border-primary/40 transition-colors"
            >
              <span className="grid place-items-center h-10 w-10 rounded-md bg-primary/10 text-primary">
                <Icon className="h-4 w-4" />
              </span>
              <div className="min-w-0">
                <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                  {label}
                </p>
                <p className="text-sm font-medium truncate">{value}</p>
              </div>
            </a>
          ))}
        </div>

        <form
          onSubmit={onSubmit}
          className="lg:col-span-3 rounded-xl border border-border/70 bg-card/60 p-6 sm:p-8 space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Field name="name" label="Name" placeholder="Your name" />
            <Field name="email" label="Email" placeholder="you@company.com" type="email" />
          </div>
          <div>
            <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
              Message
            </label>
            <textarea
              name="message"
              required
              maxLength={2000}
              rows={5}
              placeholder="Tell me a bit about the project or role…"
              className="mt-2 w-full resize-none rounded-md border border-border bg-background/60 px-3.5 py-2.5 text-sm placeholder:text-muted-foreground/70 focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition-colors"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-60"
            disabled={status === "sending"}
          >
            <Send className="h-4 w-4" />
            {status === "sent" ? "Opening your mail client…" : "Send message"}
          </button>
        </form>
      </div>
    </Section>
  );
}

function Field({
  name,
  label,
  type = "text",
  placeholder,
}: {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required
        maxLength={200}
        placeholder={placeholder}
        className="mt-2 w-full rounded-md border border-border bg-background/60 px-3.5 py-2.5 text-sm placeholder:text-muted-foreground/70 focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition-colors"
      />
    </div>
  );
}
