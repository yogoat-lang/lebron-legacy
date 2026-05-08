import { motion } from "motion/react";

const careerStats = [
  { value: "40,474+", label: "Career Points", sub: "All-time NBA record" },
  { value: "10,813", label: "Career Assists", sub: "All-time for a forward" },
  {
    value: "11,282",
    label: "Career Rebounds",
    sub: "Second in franchise history",
  },
  { value: "27.2", label: "PPG Average", sub: "Career points per game" },
  { value: "7.4", label: "APG Average", sub: "Career assists per game" },
  { value: "7.5", label: "RPG Average", sub: "Career rebounds per game" },
];

const awards = [
  "4× NBA Champion (2012, 2013, 2016, 2020)",
  "4× NBA Finals MVP (2012, 2013, 2016, 2020)",
  "4× NBA Most Valuable Player (2009, 2010, 2012, 2013)",
  "21× All-NBA Team selections (13 First Team)",
  "20× NBA All-Star (record)",
  "2× Olympic Gold Medalist (2004, 2012) + 2024",
  "NBA Rookie of the Year (2004)",
  "2× NBA Scoring Champion",
  "All-Time NBA Scoring Leader (2023–present)",
  "NBPA Most Inspirational Player Award",
];

export function AboutSection() {
  return (
    <section
      id="about"
      data-ocid="about.section"
      className="py-20 md:py-28 bg-background"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 space-y-3"
        >
          <div className="flex items-center gap-3">
            <div className="accent-line" />
            <span className="stat-label gold-text">About LeBron</span>
          </div>
          <h2 className="section-title text-foreground">
            The Complete Profile
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="font-display font-700 text-xl text-foreground uppercase tracking-wide">
                LeBron Raymone James Sr.
              </h3>
              <div className="accent-line" />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Born on December 30, 1984, in Akron, Ohio, LeBron James grew
                  up in challenging circumstances with his mother Gloria. His
                  extraordinary basketball talent was evident from an early age,
                  earning him the nickname “The Chosen One” from Sports
                  Illustrated during his junior year of high school.
                </p>
                <p>
                  Selected #1 overall by the Cleveland Cavaliers in the 2003 NBA
                  Draft, LeBron entered the league at just 18 years old and has
                  spent over two decades proving he belongs not just among the
                  greats — but at the very top.
                </p>
                <p>
                  Beyond basketball, LeBron is known for the LeBron James Family
                  Foundation and the I PROMISE School in Akron, which provides
                  educational support to at-risk youth in his hometown
                  community.
                </p>
              </div>
            </div>

            {/* Quick facts */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              {[
                ["Born", "December 30, 1984"],
                ["Height", "6'9'' (2.06 m)"],
                ["Weight", "250 lbs (113 kg)"],
                ["Position", "Small Forward / PG"],
                ["Hometown", "Akron, Ohio"],
                ["Draft", "2003, #1 Overall"],
              ].map(([label, value]) => (
                <div key={label} className="space-y-0.5">
                  <div className="stat-label gold-text">{label}</div>
                  <div className="text-sm text-foreground font-medium">
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Stats + Awards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-8"
          >
            {/* Career stats grid */}
            <div>
              <h3 className="stat-label gold-text mb-4">Career Statistics</h3>
              <div
                data-ocid="about.stats_grid"
                className="grid grid-cols-3 gap-3"
              >
                {careerStats.map((stat, i) => (
                  <div
                    key={stat.label}
                    data-ocid={`about.stat.${i + 1}`}
                    className="bg-card border border-border rounded-lg p-3 space-y-0.5 hover:border-primary/40 transition-smooth"
                  >
                    <div className="stat-value text-xl">{stat.value}</div>
                    <div className="text-xs font-display font-600 text-foreground">
                      {stat.label}
                    </div>
                    <div className="text-xs text-muted-foreground/70">
                      {stat.sub}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Awards */}
            <div>
              <h3 className="stat-label gold-text mb-4">
                Major Awards & Honors
              </h3>
              <ul data-ocid="about.awards_list" className="space-y-2">
                {awards.map((award, i) => (
                  <li
                    key={award}
                    data-ocid={`about.award.${i + 1}`}
                    className="flex items-start gap-2.5 text-sm text-muted-foreground"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {award}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
