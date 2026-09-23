const info = [
  {
    title: 'Address',
    lines: ['56/8, Panthapath, West', 'Dhanmondi, Kalabagan'],
  },
  {
    title: 'Email Address',
    lines: ['info@kinetic.com', 'support@kinetic.com'],
    isEmail: true,
  },
  {
    title: 'Phone Number',
    lines: ['012 4562 982 3612', '012 6321 956 4587'],
    isPhone: true,
  },
]

const socials = [
  { label: 'Facebook', path: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
  {
    label: 'Twitter',
    path: 'M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z',
  },
  {
    label: 'Dribbble',
    path: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.245.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.7-5.61.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z',
  },
  {
    label: 'Behance',
    path: 'M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zM3 11h3.584c2.508 0 2.906-3-.312-3H3v3zm3.391 3H3v3.016h3.341c3.055 0 2.868-3.016.05-3.016z',
  },
]

export function Footer() {
  return (
    <footer className="bg-white pt-16 pb-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Info columns */}
        <div className="mb-10 grid gap-8 sm:grid-cols-3">
          {info.map((col) => (
            <div key={col.title}>
              <h6 className="mb-3 text-sm font-medium text-ink">{col.title}</h6>
              <div className="space-y-1 text-sm font-light text-smoke">
                {col.lines.map((line) =>
                  col.isEmail ? (
                    <p key={line}>
                      <a
                        href={`mailto:${line}`}
                        className="transition-colors hover:text-primary-400"
                      >
                        {line}
                      </a>
                    </p>
                  ) : col.isPhone ? (
                    <p key={line}>
                      <a
                        href={`tel:${line.replace(/\s/g, '')}`}
                        className="transition-colors hover:text-primary-400"
                      >
                        {line}
                      </a>
                    </p>
                  ) : (
                    <p key={line}>{line}</p>
                  ),
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-6 sm:flex-row">
          <a href="/" className="text-lg font-semibold text-ink">
            Kinetic
          </a>
          <p className="text-xs text-smoke">
            Copyright &copy; {new Date().getFullYear()} &middot; All rights reserved &middot; More
            templates at{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-400 transition-colors hover:text-primary-500"
            >
              Component Dock
            </a>
          </p>
          <div className="flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="text-smoke transition-colors hover:text-primary-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="none"
                >
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
