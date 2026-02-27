import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ProjectCard from "../ProjectCard";
import { ThemeProvider } from "../../context/ThemeContext";

describe("ProjectCard", () => {
  it("renders project details and links", () => {
    const project = {
      id: "alpha",
      title: "Alpha Project",
      summary: "A sample project for testing.",
      tech: ["React", "Vite"],
      githubUrl: "https://github.com/example/alpha",
      liveUrl: "https://example.com/alpha",
    };

    render(
      <MemoryRouter>
        <ThemeProvider>
          <ProjectCard project={project} />
        </ThemeProvider>
      </MemoryRouter>
    );

    const titleLink = screen.getByRole("link", { name: /alpha project/i });
    expect(titleLink).toHaveAttribute("href", "/projects/alpha");

    expect(screen.getByText(project.summary)).toBeInTheDocument();
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("Vite")).toBeInTheDocument();

    expect(screen.getByRole("link", { name: /view code/i })).toHaveAttribute(
      "href",
      project.githubUrl
    );
    expect(screen.getByRole("link", { name: /live demo/i })).toHaveAttribute(
      "href",
      project.liveUrl
    );
  });
});
