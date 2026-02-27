import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Hero from "../Hero";
import { ThemeProvider } from "../../context/ThemeContext";

describe("Hero", () => {
  it("renders primary content and CTAs", () => {
    render(
      <MemoryRouter>
        <ThemeProvider>
          <Hero />
        </ThemeProvider>
      </MemoryRouter>
    );

    expect(
      screen.getByRole("heading", { name: /hello/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/junior software engineer/i)
    ).toBeInTheDocument();

    expect(screen.getByRole("link", { name: /view portfolio/i })).toHaveAttribute(
      "href",
      "/#portfolio"
    );
    expect(screen.getByRole("link", { name: /view resume/i })).toHaveAttribute(
      "href",
      "/#resume"
    );

    expect(
      screen.getByAltText(/lauren powell's emoji profile picture/i)
    ).toBeInTheDocument();
  });
});
