import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Navbar from "../Navbar";
import { ThemeProvider } from "../../context/ThemeContext";

describe("Navbar", () => {
  it("renders nav links and toggles theme", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter initialEntries={["/"]}>
        <ThemeProvider>
          <Navbar />
        </ThemeProvider>
      </MemoryRouter>
    );

    expect(screen.getByRole("link", { name: /portfolio/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /resume/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /about/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /contact/i })).toBeInTheDocument();

    const toggleButton = screen.getByRole("button", { name: /toggle theme/i });
    expect(toggleButton).toHaveAttribute("aria-pressed", "true");
    expect(toggleButton).toHaveTextContent("Switch Theme ☀️");

    await user.click(toggleButton);

    expect(toggleButton).toHaveAttribute("aria-pressed", "false");
    expect(toggleButton).toHaveTextContent("Switch Theme 🌙");
  });

  it("scrolls to section when hash is present on home route", () => {
    const rafSpy = jest
      .spyOn(window, "requestAnimationFrame")
      .mockImplementation((cb) => {
        cb(0);
        return 0;
      });

    const scrollIntoView = jest.fn();
    const querySpy = jest
      .spyOn(document, "querySelector")
      .mockReturnValue({ scrollIntoView });

    render(
      <MemoryRouter initialEntries={["/#portfolio"]}>
        <ThemeProvider>
          <Navbar />
        </ThemeProvider>
      </MemoryRouter>
    );

    expect(querySpy).toHaveBeenCalledWith("#portfolio");
    expect(scrollIntoView).toHaveBeenCalledWith({
      behavior: "smooth",
      block: "start",
    });

    rafSpy.mockRestore();
    querySpy.mockRestore();
  });
});
