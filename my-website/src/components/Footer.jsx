function Footer() {
  return (
    <footer className="border-t border-slate-800">
      <div className="mx-auto max-w-5xl px-4 py-6 text-xs text-slate-400">
        © {new Date().getFullYear()} Lauren Powell. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
