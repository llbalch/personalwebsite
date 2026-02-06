import { useTheme } from '../context/ThemeContext';

function AboutSection() {
  const { isDark } = useTheme();
  const textColorClass = isDark ? "text-slate-300" : "text-slate-700";

  return (
    <section id="about" className="mx-auto max-w-5xl px-4 py-16">
      <h2 className="text-2xl font-semibold">About Me</h2>
      <p className={`mt-2 text-medium ${textColorClass}`}>
        Technology enthusiast with the ability to quickly evaluate, incorporate
        & apply new information and concepts. I am a team player & have a
        sunny disposition. I am always willing to take on new challenges to
        build new skills & I have a passion for building helpful, user‑centered
        software. Currently completing a software engineering apprenticeship
        focused on React & and modern DevOps practices.
      </p>
      
      <p className="mt-2 text-2xl uppercase tracking-wide text-orange-400">
        -------------------------
      </p>
      
      <p className={`mt-2 text-sm ${textColorClass}`}>
        Outside of work I enjoy hobbies that include the outdoors, cooking,
        being with family and serving my community. 
      </p>
      
      <p className={`mt-2 text-sm ${textColorClass}`}>
        Fun Fact: I make up a part of the 1% of the world population that has 
        completed a marathon.
      </p>
    </section>
  );
}

export default AboutSection;
