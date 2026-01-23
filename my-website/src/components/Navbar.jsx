function Navbar() {
  return (
    <header className="sticky top-0 z-20 bg-slate-950/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-center px-4 py-3 lg:max-w-7xl lg:px-8">

        <div className="flex items-center gap-4 text-sm md:gap-8 lg:gap-12 md:text-base">
          <a href="#portfolio">Portfolio</a>
          <a href="#resume">Resume</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a> {" "}
          </div>
      </nav>
    </header>
  );
}

export default Navbar;