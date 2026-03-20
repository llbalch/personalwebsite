import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import { focusClasses } from "../utils/styles";

export default function ProjectDetailsPage() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <div className="container py-20">Project not found</div>;
  }

  return (
    <div className="container mx-auto max-w-4xl px-4 py-20">
      <Link to="/#portfolio" className={` ${focusClasses()}`}>
        ← Back to portfolio
      </Link>

      <h1 className="mt-6 text-4xl font-bold">{project.title}</h1>
      <p className="mt-4 text-lg text-orange-400">{project.summary}</p>

      {project.screenshot && (
        <div className="mt-6 flex justify-center">
          <img
            src={project.screenshot}
            alt={`${project.title} screenshot`}
            className={`h-auto w-full rounded-xl border border-slate-700/50 object-cover ${project.screenshotClassName ?? "max-w-4xl"}`}
            loading="lazy"
          />
        </div>
      )}

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-full bg-violet-500/10 px-3 py-1.5 text-sm text-violet-300"
          >
            {t}
          </span>
        ))}
      </div>

      <section
        className="mt-8 rounded-xl bg-violet-400/80 p-4"
        aria-labelledby="project-overview-heading"
      >
        <h2 id="project-overview-heading" className="text-xl font-semibold">
          Overview
        </h2>
        {project.overview?.length ? (
          <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-300">
            {project.overview.map((overview) => (
              <li key={overview}>{overview}</li>
            ))}
          </ul>
        ) : (
          <p className="mt-4 text-slate-400">More details coming soon.</p>
        )}
      </section>

      <section
        className="mt-8 rounded-xl bg-violet-400/80 p-4"
        aria-labelledby="project-reflections-heading"
      >
        <h2 id="project-reflections-heading" className="text-xl font-semibold">
          Reflections
        </h2>
        {project.reflections?.length ? (
          <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-300">
            {project.reflections.map((reflection) => (
              <li key={reflection}>{reflection}</li>
            ))}
          </ul>
        ) : (
          <p className="mt-4 text-slate-400">Reflections coming soon.</p>
        )}
      </section>

      <div className="mt-6 flex gap-16">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            View Code
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            Live Demo
          </a>
        )}
      </div>

      {/* Add more detailed content here */}
    </div>
  );
}
