function Navbar() {
  return (
    <nav className="p-4 text-xl font-bold ml-20 mr-20">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white">D.Codes</div>
        <div className="space-x-20">
          <a href="/" className="text-white hover:text-secondary-font-color">
            <span className="text-primary-font-color">#</span>home
          </a>
          <a
            href="/about"
            className="text-white hover:text-secondary-font-color"
          >
            <span className="text-primary-font-color">#</span>works
          </a>
          <a
            href="/services"
            className="text-white hover:text-secondary-font-color"
          >
            <span className="text-primary-font-color">#</span>about-me
          </a>
          <a
            href="/contact"
            className="text-white hover:text-secondary-font-color"
          >
            <span className="text-primary-font-color">#</span>contacts
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
