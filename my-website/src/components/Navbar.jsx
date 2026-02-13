import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import { focusClasses, themeFocusClasses } from "../utils/styles";

function Navbar() {
  const location = useLocation();
  const { toggleTheme, isDark } = useTheme();

  useEffect(() => {
    if (!location.hash || location.pathname !== "/") {
      return;
    }

    const hash = decodeURIComponent(location.hash);
    requestAnimationFrame(() => {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  }, [location.hash, location.pathname]);

  return (
    <header
      className={`sticky top-0 z-20 backdrop-blur transition-colors ${
        isDark ? "bg-slate-950/80" : "bg-violet-400/80"
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 lg:max-w-7xl lg:px-8" role="navigation" aria-label="Main navigation">
        <div className="flex items-center gap-4 text-sm md:gap-8 lg:gap-12 md:text-base">
          <Link to="/#portfolio" className={`rounded-sm ${focusClasses()}`}>Portfolio</Link>
          <Link to="/#resume" className={`rounded-sm ${focusClasses()}`}>Resume</Link>
          <Link to="/#about" className={`rounded-sm ${focusClasses()}`}>About</Link>
          <Link to="/#contact" className={`rounded-sm ${focusClasses()}`}>Contact</Link>
        </div>

        <button
          type="button"
          onClick={toggleTheme}
          className={`rounded-full p-2 text-lg transition-colors ${themeFocusClasses(isDark)} ${
            isDark
              ? "bg-violet-500/20 hover:bg-violet-500/30 text-black"
              : "bg-orange-400/30 hover:bg-orange-400/40 text-slate-800"
          }`}
          aria-label="Toggle theme"
          aria-pressed={isDark}
        >
          {isDark ? "Switch Theme ☀️" : "Switch Theme 🌙"}
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
