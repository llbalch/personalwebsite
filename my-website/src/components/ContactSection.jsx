import { useTheme } from "../context/ThemeContext";


function ContactSection() {
  const { isDark } = useTheme();
  const textColorClass = isDark ? "!text-slate-300" : "!text-slate-700";

  return (
    <section id="contact" className="mx-auto max-w-5xl px-4 py-16">
      <h2 className="text-2xl font-semibold text-orange-400">Get in Touch</h2>
      <p className={`mt-4 text-sm ${textColorClass}`}>
        The best way to reach me is via email or LinkedIn.
      </p>

      <div className="mt-4 flex flex-wrap gap-4 text-medium">
        <a href="mailto:llbalch@gmail.com" className={`underline transition-colors hover:!text-orange-400 ${textColorClass}`}>
          Email
        </a>
        <a
          href="https://www.linkedin.com/in/laurenpowell7/"
          target="_blank"
          rel="noreferrer"
          className={`underline transition-colors hover:!text-orange-400 ${textColorClass}`}
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/llbalch/"
          target="_blank"
          rel="noreferrer"
          className={`underline transition-colors hover:!text-orange-400 ${textColorClass}`}
        >
          GitHub
        </a>
      </div>
    </section>
  );
}

export default ContactSection;