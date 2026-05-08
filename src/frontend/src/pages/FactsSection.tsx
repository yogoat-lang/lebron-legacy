import {
  Award,
  Medal,
  Shield,
  Star,
  Target,
  TrendingUp,
  Trophy,
  Users,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";

const facts = [
  {
    icon: Trophy,
    category: "Championships",
    title: "4-Time NBA Champion",
    description:
      "Won championships with three different franchises — Miami Heat (2012, 2013), Cleveland Cavaliers (2016), and Los Angeles Lakers (2020). The 2016 title was the most historic, coming back from 3-1 down.",
    stat: "4×",
  },
  {
    icon: Star,
    category: "Scoring",
    title: "All-Time Scoring Leader",
    description:
      "On February 7, 2023, LeBron surpassed Kareem Abdul-Jabbar's record of 38,387 points to become the NBA's all-time leading scorer, a record that stood for 39 years. He now has 40,474+ career points.",
    stat: "40,474+",
  },
  {
    icon: Zap,
    category: "Versatility",
    title: "Triple-Double Machine",
    description:
      "LeBron is one of only a handful of players to lead his team in all five major statistical categories in a season. He has recorded 100+ career triple-doubles, showcasing unmatched versatility.",
    stat: "100+",
  },
  {
    icon: Target,
    category: "MVP Awards",
    title: "4-Time NBA Most Valuable Player",
    description:
      "Earned MVP honors in 2009, 2010, 2012, and 2013. He has also won 4 NBA Finals MVP awards (2012, 2013, 2016, 2020) and 20 All-Star selections — more than any player in history.",
    stat: "4×",
  },
  {
    icon: Award,
    category: "Longevity",
    title: "Playing at 40",
    description:
      "LeBron is still competing at elite level at age 40, making him the oldest player to score 40+ points in an NBA game. His dedication to physical fitness and recovery is legendary in sports.",
    stat: "40 yrs",
  },
  {
    icon: TrendingUp,
    category: "All-NBA Teams",
    title: "21 All-NBA Team Selections",
    description:
      "LeBron has been named to an All-NBA team a record 21 times, including 13 First Team selections. No other player in NBA history comes close to this level of sustained excellence.",
    stat: "21×",
  },
  {
    icon: Shield,
    category: "Assists",
    title: "All-Time Assists Among Forwards",
    description:
      "LeBron has amassed over 10,500 career assists — the most ever by a non-point guard in NBA history. He consistently averaged over 7 assists per game across his peak seasons.",
    stat: "10,500+",
  },
  {
    icon: Medal,
    category: "Olympics",
    title: "Olympic Gold Medalist",
    description:
      "Won gold medals at the 2004 Athens Olympics (bronze), 2012 London Olympics, and 2024 Paris Olympics representing Team USA. His leadership and international dominance cemented his global legacy.",
    stat: "2× Gold",
  },
  {
    icon: Users,
    category: "Teammates Elevated",
    title: "Franchise Turnaround Artist",
    description:
      "Every team LeBron has joined has immediately improved by 20+ wins. He transformed the Cavaliers, Heat, and Lakers into championship contenders purely through his presence and leadership.",
    stat: "3 Teams",
  },
];

export function FactsSection() {
  return (
    <section
      id="facts"
      data-ocid="facts.section"
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
            <span className="stat-label gold-text">Career Facts</span>
          </div>
          <h2 className="section-title text-foreground">By the Numbers</h2>
          <p className="text-muted-foreground max-w-xl leading-relaxed">
            Numbers alone cannot define a legend, but they paint an
            extraordinary picture of sustained excellence.
          </p>
        </motion.div>

        {/* Facts grid */}
        <div
          data-ocid="facts.list"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {facts.map((fact, i) => {
            const Icon = fact.icon;
            return (
              <motion.div
                key={fact.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                data-ocid={`facts.item.${i + 1}`}
                className={`rounded-lg border border-border p-6 space-y-4 hover:border-primary/40 transition-smooth ${
                  i % 2 === 0 ? "bg-card" : "bg-muted/20"
                }`}
              >
                {/* Icon + stat row */}
                <div className="flex items-start justify-between">
                  <div className="w-10 h-10 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 gold-text" />
                  </div>
                  <span className="stat-value text-3xl">{fact.stat}</span>
                </div>

                {/* Gold accent line */}
                <div className="accent-line" />

                {/* Content */}
                <div className="space-y-1.5">
                  <span className="stat-label gold-text">{fact.category}</span>
                  <h3 className="font-display font-700 text-base leading-snug text-foreground">
                    {fact.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {fact.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
