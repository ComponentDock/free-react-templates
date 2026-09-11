const leftLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Technology', href: '#features' },
  { label: 'Careers', href: '#blog' },
] as const

const rightLinks = [
  { label: 'About', href: '#about' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
] as const

export function Navbar() {
  return (
    <header className="absolute left-0 right-0 top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <nav aria-label="Left navigation">
          <ul className="flex gap-4">
            {leftLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm font-normal text-white transition-colors hover:text-primary-400"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#home" className="font-display text-2xl font-bold tracking-wide text-white">
          Helm
        </a>

        <nav aria-label="Right navigation">
          <ul className="flex gap-4">
            {rightLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm font-normal text-white transition-colors hover:text-primary-400"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
