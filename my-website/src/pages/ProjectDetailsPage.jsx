import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function ProjectDetailsPage() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <div className="container py-20">Project not found</div>;
  }

  return (
    <div className="container mx-auto max-w-4xl px-4 py-20">
      <Link to="/#portfolio" className="text-violet-400 hover:underline">
        ← Back to portfolio
      </Link>

      <h1 className="mt-6 text-4xl font-bold">{project.title}</h1>
      <p className="mt-4 text-lg text-slate-300">{project.summary}</p>

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

      <div className="mt-6 flex gap-4">
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
