import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  return (
    <article className="flex flex-col gap-2 rounded-xl bg-slate-900 p-4 text-sm">
      <Link to={`/projects/${project.id}`}>
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="text-slate-300">{project.summary}</p>

        <div className="flex flex-wrap gap-2 text-xs text-violet-300">
          {project.tech.map((t) => (
            <span key={t} className="rounded-full bg-violet-500/10 px-2 py-1">
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
