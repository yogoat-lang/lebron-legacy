import { motion } from "motion/react";

interface EraEntry {
  year: string;
  achievement: string;
  description: string;
  highlight?: boolean;
}

interface Era {
  id: string;
  team: string;
  teamAbbr: string;
  years: string;
  color: string;
  accentClass: string;
  borderClass: string;
  bgClass: string;
  entries: EraEntry[];
}

const eras: Era[] = [
  {
    id: "cle1",
    team: "Cleveland Cavaliers",
    teamAbbr: "CLE",
    years: "2003 – 2010",
    color: "oklch(0.62 0.20 25)",
    accentClass: "border-l-4 border-l-[oklch(0.62_0.20_25)]",
    borderClass: "border-[oklch(0.62_0.20_25)]/30",
    bgClass: "bg-[oklch(0.62_0.20_25)]/10",
    entries: [
      {
        year: "2003",
        achievement: "#1 Overall Draft Pick",
        description:
          'Selected first overall by his hometown Cleveland Cavaliers. Called "The Chosen One" by Sports Illustrated as a high school junior, LeBron entered the NBA as perhaps the most anticipated rookie of all time.',
      },
      {
        year: "2004",
        achievement: "NBA Rookie of the Year",
        description:
          "Became the third teenager in NBA history to score 40+ points in a game and won Rookie of the Year honors, averaging 20.9 points, 5.9 assists, and 5.5 rebounds per game.",
        highlight: true,
      },
      {
        year: "2007",
        achievement: "First NBA Finals Appearance",
        description:
          "Led Cleveland to their first NBA Finals appearance, nearly single-handedly carrying the team. His 48-point performance in Game 5 of the Eastern Conference Finals against Detroit is legendary.",
        highlight: true,
      },
    ],
  },
  {
    id: "mia",
    team: "Miami Heat",
    teamAbbr: "MIA",
    years: "2010 – 2014",
    color: "oklch(0.55 0.21 12)",
    accentClass: "border-l-4 border-l-[oklch(0.55_0.21_12)]",
    borderClass: "border-[oklch(0.55_0.21_12)]/30",
    bgClass: "bg-[oklch(0.55_0.21_12)]/10",
    entries: [
      {
        year: "2010",
        achievement: "The Decision — Miami Heat",
        description:
          "Joined Dwyane Wade and Chris Bosh in Miami in a move that changed how NBA stars navigate free agency forever. Formed one of basketball's greatest Big Three.",
      },
      {
        year: "2012",
        achievement: "First NBA Championship & Finals MVP",
        description:
          "Won his first NBA title and Finals MVP, silencing doubters who questioned whether he could win a championship. Averaged 28.6 points, 10.2 rebounds, and 7.4 assists in the Finals.",
        highlight: true,
      },
      {
        year: "2013",
        achievement: "Back-to-Back Champion",
        description:
          "Repeated as NBA champion and Finals MVP with Miami. His iconic Ray Allen corner three in Game 6, followed by LeBron closing out the series, remains one of the most dramatic moments in Finals history.",
        highlight: true,
      },
    ],
  },
  {
    id: "cle2",
    team: "Cleveland Cavaliers",
    teamAbbr: "CLE",
    years: "2014 – 2018",
    color: "oklch(0.62 0.20 25)",
    accentClass: "border-l-4 border-l-[oklch(0.62_0.20_25)]",
    borderClass: "border-[oklch(0.62_0.20_25)]/30",
    bgClass: "bg-[oklch(0.62_0.20_25)]/10",
    entries: [
      {
        year: "2014",
        achievement: "The Return to Cleveland",
        description:
          "Announced his return to the Cavaliers to bring a championship to Northeast Ohio. His letter to fans remains one of the most moving statements in sports history.",
      },
      {
        year: "2016",
        achievement: "Greatest Comeback in Finals History",
        description:
          "Delivered Cleveland's first major championship in 52 years, overcoming a historic 3-1 deficit against the 73-win Golden State Warriors. His iconic block in Game 7 is one of the defining plays in NBA history.",
        highlight: true,
      },
    ],
  },
  {
    id: "lal",
    team: "Los Angeles Lakers",
    teamAbbr: "LAL",
    years: "2018 – Present",
    color: "oklch(0.72 0.17 70)",
    accentClass: "border-l-4 border-l-primary",
    borderClass: "border-primary/30",
    bgClass: "bg-primary/10",
    entries: [
      {
        year: "2020",
        achievement: "4th Championship — Lakers Legacy",
        description:
          'Won the pandemic "Bubble" championship with the Lakers, becoming just the fourth player to win titles with three different teams. Won his fourth Finals MVP, tying Michael Jordan.',
        highlight: true,
      },
      {
        year: "2023",
        achievement: "NBA All-Time Scoring Record",
        description:
          "Surpassed Kareem Abdul-Jabbar's 38,387 career points to become the NBA's all-time leading scorer, in front of his home crowd at Crypto.com Arena. A standing ovation from the entire basketball world.",
        highlight: true,
      },
      {
        year: "2024",
        achievement: "Olympic Gold — Paris 2024",
        description:
          "Won Olympic gold with Team USA at the Paris Olympics, closing out the tournament with total dominance. Continued to play at elite level in his 22nd NBA season, adding more records to his legacy.",
        highlight: true,
      },
    ],
  },
];

export function TimelineSection() {
  return (
    <section
      id="timeline"
      data-ocid="timeline.section"
      className="py-20 md:py-28 bg-muted/20"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 space-y-3"
        >
          <div className="flex items-center gap-3">
            <div className="accent-line" />
            <span className="stat-label gold-text">Career Timeline</span>
          </div>
          <h2 className="section-title text-foreground">Defining Moments</h2>
          <p className="text-muted-foreground max-w-xl leading-relaxed">
            Two decades of milestones that redefined what it means to be an NBA
            legend — four eras, one unstoppable legacy.
          </p>
        </motion.div>

        {/* Era groups */}
        <div data-ocid="timeline.list" className="space-y-12">
          {eras.map((era, eraIdx) => (
            <motion.div
              key={era.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: eraIdx * 0.1 }}
              data-ocid={`timeline.era.${eraIdx + 1}`}
              className={`rounded-xl border ${era.borderClass} overflow-hidden`}
            >
              {/* Era header */}
              <div
                className={`${era.bgClass} px-6 py-4 flex items-center justify-between border-b ${era.borderClass}`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="w-3 h-3 rounded-full flex-shrink-0"
                    style={{ background: era.color }}
                  />
                  <span className="font-display font-700 text-base uppercase tracking-wide text-foreground">
                    {era.team}
                  </span>
                  <span className="px-2 py-0.5 text-xs font-mono border border-border rounded text-muted-foreground">
                    {era.teamAbbr}
                  </span>
                </div>
                <span className="stat-label gold-text">{era.years}</span>
              </div>

              {/* Era entries */}
              <div className="divide-y divide-border">
                {era.entries.map((entry, entryIdx) => (
                  <motion.div
                    key={`${era.id}-${entry.year}`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      delay: eraIdx * 0.1 + entryIdx * 0.07,
                    }}
                    data-ocid={`timeline.item.${eraIdx * 10 + entryIdx + 1}`}
                    className={`flex items-start gap-5 px-6 py-5 transition-smooth hover:bg-muted/20 ${era.accentClass}`}
                  >
                    {/* Year badge */}
                    <div className="flex-shrink-0 w-14 text-right">
                      <span className="font-display font-700 text-lg gold-text">
                        {entry.year}
                      </span>
                    </div>

                    {/* Dot */}
                    <div className="flex-shrink-0 mt-1.5">
                      <div
                        className={`w-2.5 h-2.5 rounded-full border-2 ${
                          entry.highlight
                            ? "bg-primary border-primary shadow-gold"
                            : "bg-background border-border"
                        }`}
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0 space-y-1">
                      {entry.highlight && <div className="accent-line" />}
                      <h3 className="font-display font-700 text-sm uppercase tracking-wide text-foreground">
                        {entry.achievement}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {entry.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
