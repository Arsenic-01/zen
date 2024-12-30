export const Header = () => {
  return (
    <div className="flex justify-center items-center fixed w-full top-5 z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/15 backdrop-blur-xl md:backdrop-blur">
        <a href="#" className="nav-link">
          Home
        </a>
        <a href="#projects" className="nav-link">
          Projects
        </a>
        <a href="#about" className="nav-link">
          About
        </a>
        <a
          href="#contact"
          className="nav-link bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
        >
          Contact
        </a>
      </nav>
    </div>
  );
};
