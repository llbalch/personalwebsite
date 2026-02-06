import { Link } from "react-router-dom";
import { useTheme } from '../context/ThemeContext';

function ProjectCard({ project }) {
    const { isDark } = useTheme();

  return (
    <article className={`flex flex-col gap-2 rounded-xl p-4 text-sm ${isDark ? 'bg-slate-950/80' : 'bg-violet-400/80'}`}>
      <Link to={`/projects/${project.id}`}>
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="text-slate-100">{project.summary}</p>

        <div className="flex flex-wrap gap-2 text-xs">
          {project.tech.map((t) => (
            <span 
              key={t} 
              className={`rounded-full px-2 py-1 ${
                isDark 
                  ? 'bg-violet-500/10 text-violet-300' 
                  : 'bg-white/60 text-violet-700'
              }`}
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-3 flex flex-wrap gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-medium text-violet-400 underline"
            >
              View Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-medium text-sky-400 underline"
            >
              Live Demo
            </a>
          )}
        </div>
      </Link>
    </article>
  );
}

export default ProjectCard;
