import { useTheme } from '../context/ThemeContext';

function ResumeSection() {
  const { isDark } = useTheme();
  const textColorClass = isDark ? "!text-slate-300" : "!text-slate-700";
  const backgroundClass = isDark ? "bg-slate-500/40" : "bg-orange-300/40";
  const buttonClass = isDark 
    ? 'bg-violet-500/20 hover:bg-violet-500/30 !text-slate-300 outline outline-violet-400' 
    : 'bg-white/80 hover:bg-orange-400/40 !text-slate-950 outline outline-orange-400';

  return (
    <section id="resume" className="mx-auto max-w-5xl px-4 py-16">
      <div className={`flex flex-col gap-6 rounded-xl p-6 ${backgroundClass}`}>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-2xl font-semibold">TL;DR</h2>
          <a
            href="LAUREN_POWELL_Resume.pdf"
            download
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${buttonClass}`}
          >
            Download Full Resume
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-3 text-sm">
          <div>
            <h3 className="font-semibold">Top Skills</h3>
            <ul className={`mt-2 space-y-1 ${textColorClass}`}>
              <li>Optimizing UX Functionality</li>
              <li>Version Control with Git</li>
              <li>Cross-Functional Team Collaboration</li>
              <li>SDLC Understanding</li>
              <li>Gen AI Expertise</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Languages</h3>
            <p className={`mt-2 space-y-1 ${textColorClass}`}>
              JavaScript, Java, SQL, HTML, CSS, Python
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Experience & Education</h3>
            <ul className={`mt-2 space-y-1 ${textColorClass}`}>
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