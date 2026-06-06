import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
}

export function Section({ id, eyebrow, title, description, children }: Props) {
  return (
    <section id={id} className="relative py-24 sm:py-28 scroll-mt-0">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-primary">
            <span className="h-px w-6 bg-primary/60" />
            {eyebrow}
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">{title}</h2>
          {description && (
            <p className="mt-3 text-muted-foreground leading-relaxed">{description}</p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}