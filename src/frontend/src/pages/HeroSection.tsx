import { motion } from "motion/react";

export function HeroSection() {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      data-ocid="hero.section"
      className="relative min-h-screen flex items-end overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/assets/generated/lebron-hero.dim_1200x700.jpg')",
        }}
      />
      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />

      {/* Gold accent vertical line */}
      <div className="absolute left-8 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-primary to-transparent opacity-60" />

      <div className="relative container mx-auto px-4 pb-24 pt-32 md:pb-32 md:pt-40">
        <div className="max-w-2xl space-y-6">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <div className="accent-line" />
            <span className="stat-label tracking-widest gold-text">
              The Chosen One
            </span>
          </motion.div>

          {/* Main title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="hero-title text-foreground"
          >
            LeBron
            <br />
            <span className="gold-text">James</span>
          </motion.h1>

          {/* Sub-tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed"
          >
            From Akron, Ohio to the top of the basketball world. A 21-year
            journey defined by excellence, resilience, and an unrelenting
            pursuit of greatness.
          </motion.p>

          {/* Stat chips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-wrap gap-4 pt-2"
          >
            {[
              ["40,474", "Career Points"],
              ["4×", "Champion"],
              ["4×", "NBA MVP"],
              ["21+", "Seasons"],
            ].map(([val, lbl]) => (
              <div
                key={lbl}
                className="flex flex-col"
                data-ocid={`hero.stat.${lbl.toLowerCase().replace(/\s/g, "_")}`}
              >
                <span className="font-display font-800 text-2xl leading-tight gold-text">
                  {val}
                </span>
                <span className="stat-label">{lbl}</span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-3 pt-2"
          >
            <button
              type="button"
              data-ocid="hero.watch_documentary_button"
              onClick={() => scrollTo("#documentary")}
              className="px-6 py-3 bg-primary text-primary-foreground font-display font-600 text-sm uppercase tracking-wide rounded transition-smooth hover:opacity-90 hover:shadow-gold"
            >
              Watch Documentary
            </button>
            <button
              type="button"
              data-ocid="hero.view_facts_button"
              onClick={() => scrollTo("#facts")}
              className="px-6 py-3 border border-border text-foreground font-display font-600 text-sm uppercase tracking-wide rounded transition-smooth hover:border-primary hover:text-primary"
            >
              Explore Career Facts
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <span className="stat-label text-muted-foreground">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-muted-foreground to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}
