export function Footer() {
  const currentYear = new Date().getFullYear()

  const socials = [
    {
      label: 'Facebook',
      path: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z',
    },
    {
      label: 'Twitter',
      path: 'M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5 0-.28-.03-.56-.08-.83A7.72 7.72 0 0 0 23 3z',
    },
    {
      label: 'Instagram',
      path: 'M16 8a6 6 0 0 1 6 6v7a6 6 0 0 1-6 6H8a6 6 0 0 1-6-6V8a6 6 0 0 1 6-6h8zM12 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM17.5 5.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2z',
    },
    {
      label: 'LinkedIn',
      path: 'M16 8a6 6 0 0 1 6 6v7a6 6 0 0 1-6 6H8a6 6 0 0 1-6-6V8a6 6 0 0 1 6-6h8zM3 12h2v6H3zM4 6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z',
    },
  ]

  return (
    <footer className="bg-charcoal py-10 text-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-sm text-white/60">
            &copy; {currentYear} All rights reserved. Made with{' '}
            <span className="text-accent-300">&hearts;</span> by{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-300 underline transition-colors hover:text-accent-200"
            >
              Component Dock
            </a>
          </p>
          <div className="flex gap-2">
            {socials.map(({ label, path }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center bg-gray-800 text-gray-400 transition-colors hover:bg-accent-300 hover:text-white"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d={path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
