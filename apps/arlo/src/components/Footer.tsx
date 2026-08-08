import { GitHubIcon, XIcon, LinkedinIcon } from './social-icons'

const columns = [
  {
    title: 'Explore',
    links: ['About', 'Skills', 'Projects', 'Experience'],
  },
  {
    title: 'Resources',
    links: ['Blog', 'Pricing', 'Services', 'Gallery'],
  },
  {
    title: 'Contact',
    links: ['Email', 'LinkedIn', 'GitHub', 'X'],
  },
]

const socials = [
  { label: 'GitHub', href: 'https://github.com', Icon: GitHubIcon },
  { label: 'X', href: 'https://x.com', Icon: XIcon },
  { label: 'LinkedIn', href: 'https://linkedin.com', Icon: LinkedinIcon },
]

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-4">
          <div>
            <a
              href="#home"
              className="font-display text-xl font-bold tracking-tight text-primary-400"
            >
              Arlo
            </a>
            <p className="mt-4 max-w-xs text-sm text-gray-400">
              A designer-developer crafting fast, accessible, beautiful digital experiences.
            </p>
            <ul className="mt-6 flex items-center gap-3">
              {socials.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-700 text-gray-300 transition-colors hover:border-primary-400 hover:text-primary-400"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#home"
                      className="text-sm text-gray-300 transition-colors hover:text-primary-400"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-12 border-t border-gray-800 pt-8 text-sm text-gray-500">
          © {new Date().getFullYear()} Arlo. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
