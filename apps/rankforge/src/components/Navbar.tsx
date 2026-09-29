import { ButtonLink } from '@free-react-templates/ui'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
  { label: 'Blog', href: '#blog' },
] as const

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <a
          href="#home"
          className="font-display text-2xl font-bold tracking-wide text-primary-700 dark:text-primary-300"
        >
          RankForge
        </a>

        <div className="flex items-center gap-4">
          <nav aria-label="Main navigation" className="hidden items-center gap-1 lg:flex">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-accent-400 dark:text-gray-200 dark:hover:text-accent-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <ButtonLink
            href="#contact"
            className="hidden rounded-md bg-accent-400 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-500 sm:inline-flex"
          >
            Contact Us
          </ButtonLink>
        </div>
      </div>
    </header>
  )
}
