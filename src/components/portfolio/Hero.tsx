import { motion } from "framer-motion";
import { ArrowUpRight, Download, Github, Linkedin, Mail, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid bg-radial-fade opacity-60" />
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[420px] w-[760px] rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/50 px-3 py-1 text-xs text-muted-foreground"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Available for FullStack Opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05] max-w-4xl"
        >
          Building modern web experiences with{" "}
          <span className="text-primary">React</span> ,{" "}
          <span className="text-accent">Javascript</span> &{" "}
          <span className="text-accent">TypeScript</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed"
        >
          I'm <span className="text-foreground font-medium">G. Lilith Vishwa</span>, a Frontend
          Developer crafting scalable, responsive and user-centric web applications. Currently
          building <span className="text-foreground font-medium">VRXLEARN</span>, a production LMS
          at VRNexGen Technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            View projects
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-card/50 px-4 py-2.5 text-sm font-medium text-foreground hover:bg-card transition-colors"
          >
            <Mail className="h-4 w-4" />
            Contact me
          </a>
          <a
            href="/Lilith_Vishwa_Resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-md border border-border/60 px-4 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:border-border transition-colors"
          >
            <Download className="h-4 w-4" />
            Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground"
        >
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-4 w-4" /> Krishnagiri, Tamil Nadu · India
          </span>
          <a
            href="https://github.com/lilithvishwa"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
          >
            <Github className="h-4 w-4" /> github.com/lilithvishwa
          </a>
          <a
            href="https://linkedin.com/in/lilithvishwa2005"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
          >
            <Linkedin className="h-4 w-4" /> lilithvishwa2005
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-16 rounded-xl border border-border/70 bg-card/60 shadow-2xl shadow-primary/5 overflow-hidden"
        >
          <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border/60 bg-background/40">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
            <span className="ml-3 text-xs font-mono text-muted-foreground">developer.js</span>
          </div>
          <pre className="px-5 py-5 text-[13px] sm:text-sm font-mono leading-relaxed overflow-x-auto">
{`const lilith: Developer = {
  name: "G. Lilith Vishwa",
  role: "Frontend Developer",
  stack: ["React", "Javascript" , "TypeScript", "Tailwind CSS", "Node.js"],
  currentlyBuilding: "VRXLEARN — production LMS @ VRNexGen",
  focus: ["Scalable UI systems", "Performance"],
};`}
          </pre>
        </motion.div>
      </div>
    </section>
  );
}