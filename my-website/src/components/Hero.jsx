import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { themeFocusClasses } from "../utils/styles";

function Hero() {
  const { isDark } = useTheme();
  const textColorClass = isDark ? "text-slate-300" : "text-slate-700";

  return (
    <section
      id="top"
      className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-4 py-16 md:flex-row md:gap-12 md:py-24 lg:max-w-7xl lg:px-8"
    >
      <div className="flex-1 space-y-4">
        <h1 className="text-3xl font-bold md:text-5xl lg:text-6xl">
          Hello, <br></br> I&apos;m Lauren Powell.
        </h1>
        <p className="text-2xl uppercase tracking-wide text-orange-400 md:text-3xl">
          Junior Software Engineer
        </p>
        <p className={`max-w-xl text-sm md:text-base ${textColorClass}`}>
          THRIVE Software Engineer Apprentice @ Verizon
        </p>

        <div className={`flex flex-wrap gap-3`}>
          <Link
            to="/#portfolio"
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${themeFocusClasses(isDark)} ${
              isDark ? "bg-violet-500/20 hover:bg-violet-500/30" : "bg-violet-400/80 hover:bg-violet-500/80"
            }`}
          >
            View Portfolio
          </Link>
          <Link
            to="/#resume"
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${themeFocusClasses(isDark)} ${
              isDark ? "bg-violet-500/20 hover:bg-violet-500/30" : "bg-violet-400/80 hover:bg-violet-500/80"
            }`}
          >
            View Resume
          </Link>
        </div>
      </div>

      <div className="flex-1 flex justify-center">
        <img
          src="/LPEmoji.png"
          alt="Profile"
          className={`rounded-full h-40 w-40 object-cover md:h-64 md:w-64 lg:h-80 lg:w-80`}
        />
      </div>
    </section>
  );
}

export default Hero;
