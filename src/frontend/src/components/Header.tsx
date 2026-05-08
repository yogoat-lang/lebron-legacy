import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Career", href: "#documentary" },
  { label: "Facts", href: "#facts" },
  { label: "Timeline", href: "#timeline" },
  { label: "About", href: "#about" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      data-ocid="site.header"
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        scrolled
          ? "bg-card/95 backdrop-blur-md border-b border-border shadow-subtle"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo / Brand */}
        <button
          type="button"
          onClick={() => {
            handleNavClick("#home");
          }}
          data-ocid="site.logo_link"
          className="flex items-center gap-3 group bg-transparent border-0 p-0 cursor-pointer"
        >
          <div className="flex items-center gap-1">
            <span className="font-display font-800 text-xl uppercase tracking-tight leading-none text-foreground">
              LeBron
            </span>
            <span className="font-display font-800 text-xl uppercase tracking-tight leading-none gold-text">
              23
            </span>
          </div>
          <div className="hidden sm:block h-4 w-px bg-border" />
          <span className="hidden sm:block stat-label text-muted-foreground">
            Career Legacy
          </span>
        </button>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex items-center gap-1"
          data-ocid="site.desktop_nav"
        >
          {navItems.map((item) => (
            <button
              key={item.href}
              type="button"
              data-ocid={`nav.${item.label.toLowerCase()}_link`}
              onClick={() => handleNavClick(item.href)}
              className="px-4 py-2 text-sm font-display font-500 uppercase tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-200 relative group bg-transparent border-0 cursor-pointer"
            >
              {item.label}
              <span className="absolute bottom-0 left-4 right-4 h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
            </button>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          data-ocid="site.mobile_menu_toggle"
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav
          data-ocid="site.mobile_nav"
          className="md:hidden bg-card/98 backdrop-blur-md border-b border-border"
        >
          {navItems.map((item) => (
            <button
              key={item.href}
              type="button"
              data-ocid={`nav.mobile_${item.label.toLowerCase()}_link`}
              onClick={() => handleNavClick(item.href)}
              className="block w-full text-left px-6 py-4 text-sm font-display font-500 uppercase tracking-wide text-muted-foreground hover:text-foreground hover:bg-muted/30 transition-colors duration-200 border-b border-border last:border-0 bg-transparent cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}
