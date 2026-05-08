export function Footer() {
  const year = new Date().getFullYear();
  const utmUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")} `;

  return (
    <footer data-ocid="site.footer" className="bg-card border-t border-border">
      {/* Top accent line */}
      <div className="accent-line-full" />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand column */}
          <div className="space-y-4">
            <div className="flex items-baseline gap-1">
              <span className="font-display font-800 text-2xl uppercase tracking-tight">
                LeBron
              </span>
              <span className="font-display font-800 text-2xl uppercase tracking-tight gold-text">
                23
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Celebrating the career of one of the greatest basketball players
              of all time — King James, The Chosen One.
            </p>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h4 className="stat-label text-foreground">Sections</h4>
            <ul className="space-y-2">
              {[
                ["Home", "#home"],
                ["Career Documentary", "#documentary"],
                ["Career Facts", "#facts"],
                ["Timeline", "#timeline"],
                ["About LeBron", "#about"],
              ].map(([label, href]) => (
                <li key={href}>
                  <button
                    type="button"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 bg-transparent border-0 cursor-pointer p-0"
                    onClick={() =>
                      document
                        .querySelector(href)
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Stats callout */}
          <div className="space-y-4">
            <h4 className="stat-label text-foreground">Career Snapshot</h4>
            <div className="grid grid-cols-2 gap-3">
              {[
                ["40,000+", "Points"],
                ["4", "Championships"],
                ["21+", "Seasons"],
                ["4×", "MVP Awards"],
              ].map(([val, lbl]) => (
                <div key={lbl} className="space-y-0.5">
                  <div className="text-lg font-display font-700 gold-text">
                    {val}
                  </div>
                  <div className="stat-label">{lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            © {year}. Built with love using{" "}
            <a
              href={utmUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="gold-text hover:underline"
            >
              caffeine.ai
            </a>
          </p>
          <p className="text-xs text-muted-foreground">
            A tribute to King James — The GOAT
          </p>
        </div>
      </div>
    </footer>
  );
}
