const links = ['Home', 'About', 'Course', 'Instructor', 'Blog', 'Contact']

export function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full bg-brand-dark/90 text-white backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#" className="text-xl font-bold text-white">
          Studium
        </a>
        <ul className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-sm text-gray-300 transition-colors hover:text-white"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
