import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#certs", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-colors ${
        scrolled ? "border-b border-border/60 bg-background/70 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight">
          {/* <span className="grid place-items-center h-7 w-7 rounded-md bg-primary/15 text-primary font-mono text-[13px]">
            lv  
          </span> */}
          <img className="grid place-items-center h-9 w-9 rounded-2xl bg-primary/15 text-primary font-mono text-[13px]" src="./DP.jpg" alt="Lilith_Vishwa DP" />
          <span className="sm:inline">LilithVishwa  G</span>
        </a>
        <nav className="hidden md:flex items-center gap-1 text-sm text-muted-foreground">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-2 rounded-md hover:text-foreground transition-colors"  
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-1.5 text-sm font-medium px-3.5 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          Get in touch
        </a>
      </div>
    </motion.header>
  );
}