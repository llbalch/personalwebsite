function ResumeSection() {
  return (
    <section id="resume" className="mx-auto max-w-5xl px-4 py-16">
      <div className="flex flex-col gap-6 rounded-xl bg-slate-900 p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-2xl font-semibold">TL;DR</h2>
          <a
            href="LAUREN_POWELL_Resume.pdf"
            download
            className="rounded-full outline outline-orange-400 px-4 py-2 text-sm font-medium"
          >
            Download Full Resume
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-3 text-sm">
          <div>
            <h3 className="font-semibold">Top Skills</h3>
            <ul className="mt-2 space-y-1 text-slate-300">
              <li>Optimizing UX Functionality</li>
              <li>Version Control with Git</li>
              <li>Cross-Functional Team Collaboration</li>
              <li>SDLC Understanding</li>
              <li>Gen AI Expertise</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Languages</h3>
            <p className="mt-2 text-slate-300">
              JavaScript, Java, SQL, HTML, CSS, Python
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Experience & Education</h3>
            <ul className="mt-2 text-slate-300">
              <li>Verizon Software Engineering Apprenticeship</li>
              <li>Multiverse Full Stack Certification</li>
              <li>BS in Software Development</li>
            </ul>
          </div>

        
        </div>
      </div>
    </section>
  );
}

export default ResumeSection;