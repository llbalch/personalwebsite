import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

function ProjectsSection() {
  return (
    <section id="portfolio" className="mx-auto max-w-5xl px-4 py-16" aria-labelledby="projects-heading">
      <h2 id="projects-heading" className="text-2xl font-semibold">Projects & Case Studies</h2>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
