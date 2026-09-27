const socialLinks = [
  { label: 'Twitter', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Dribbble', href: '#' },
  { label: 'Instagram', href: '#' },
] as const

export function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto flex max-w-[1330px] flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6">
        <p className="text-xs text-smoke">
          © {new Date().getFullYear()} Daybreak. All rights reserved.
        </p>

        <a
          href="#"
          className="font-display text-lg font-bold tracking-wide text-ink dark:text-white"
        >
          Daybreak
        </a>

        <nav aria-label="Social links">
          <ul className="flex gap-4">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-xs text-smoke transition-colors hover:text-ink dark:text-gray-400 dark:hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-gray-100 py-3 text-center text-xs text-smoke dark:border-gray-800">
        More templates at{' '}
        <a
          href="https://www.componentdock.com/"
          className="underline transition-colors hover:text-ink dark:hover:text-white"
        >
          Component Dock
        </a>
      </div>
    </footer>
  )
}
