export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
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
    {
      label: 'RSS',
      path: 'M4 11a9 9 0 0 1 9 9M4 4a16 16 0 0 1 16 16M5 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2z',
    },
  ]

  return (
    <footer className="bg-charcoal py-12 text-white">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <h2 className="mb-6 text-2xl font-bold uppercase tracking-wide">BizPlanner</h2>
        <div className="mb-6 flex justify-center gap-3">
          {socialLinks.map(({ label, path }) => (
            <a
              key={label}
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white/70 transition-colors hover:border-primary-500 hover:text-primary-500"
              aria-label={label}
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
        <div className="mx-auto mb-4 h-px w-24 bg-white/20" />
        <p className="mb-2 text-xs text-white/50">
          &copy; {currentYear} BizPlanner. All Rights Reserved.
        </p>
        <p className="text-xs text-white/50">
          More templates at{' '}
          <a
            href="https://www.componentdock.com/"
            className="text-primary-500 underline hover:text-primary-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
