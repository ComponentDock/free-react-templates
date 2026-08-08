import { GitHubIcon, XIcon, LinkedinIcon } from './social-icons'

const columns = [
  {
    title: 'Event',
    links: ['Speakers', 'Schedule', 'Venue', 'Tickets'],
  },
  {
    title: 'Resources',
    links: ['FAQ', 'Code of Conduct', 'Accessibility', 'Press Kit'],
  },
  {
    title: 'Connect',
    links: ['Contact', 'Newsletter', 'Community', 'Sponsors'],
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
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          <div>
            <a
              href="#home"
              className="font-display text-xl font-bold tracking-tight text-primary-400"
            >
              Keynote
            </a>
            <p className="mt-4 max-w-xs text-sm text-gray-400">
              September 18–20, 2026 in San Francisco, CA. Three days that will shape how you build,
              deploy, and think about AI.
            </p>
            <ul className="mt-6 flex items-center gap-3">
              {socials.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-colors hover:bg-primary-500 hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {columns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#home"
                      className="text-sm text-gray-400 transition-colors hover:text-primary-400"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-8 sm:flex-row">
          <p className="text-sm text-gray-500">
            &copy; 2026 Keynote Conference. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {['Privacy Policy', 'Terms of Service', 'Code of Conduct'].map((link) => (
              <a
                key={link}
                href="#home"
                className="text-sm text-gray-500 transition-colors hover:text-gray-300"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
