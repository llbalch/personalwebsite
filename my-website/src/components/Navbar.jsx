import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function Navbar() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <header className="sticky top-0 z-20 bg-slate-950/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-center px-4 py-3 lg:max-w-7xl lg:px-8">

        <div className="flex items-center gap-4 text-sm md:gap-8 lg:gap-12 md:text-base">
          <Link to="/#portfolio">Portfolio</Link>
          <Link to="/#resume">Resume</Link>
          <Link to="/#about">About</Link>
          <Link to="/#contact">Contact</Link> {" "}
          </div>
      </nav>
    </header>
  );
}

export default Navbar;