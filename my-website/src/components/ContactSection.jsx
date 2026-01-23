function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-4 py-16">
      <h2 className="text-2xl font-semibold text-orange-400">Get in Touch</h2>
      <p className="mt-4 text-sm text-slate-300">
        The best way to reach me is via email or LinkedIn.
      </p>

      <div className="mt-4 flex flex-wrap gap-4 text-sm">
        <a href="mailto:you@example.com" className="underline">
          Email
        </a>
        <a
          href="https://www.linkedin.com/in/your-profile"
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}

export default ContactSection;