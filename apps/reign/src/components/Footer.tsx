const contactLinks = ['Contact Us', 'hello@mydomain.com', '+1 829 2293 382', 'Support']

const navColumns = [
  ['Home', 'Blog', 'Services', 'About Us'],
  ['Home', 'Blog', 'Services', 'About Us'],
]

const socialLinks = [
  { label: 'Facebook', path: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' },
  {
    label: 'Twitter',
    path: 'M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5 0-.28-.03-.56-.08-.83A7.72 7.72 0 0 0 23 3z',
  },
  {
    label: 'LinkedIn',
    path: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z',
  },
  {
    label: 'Instagram',
    path: 'M16 4H8a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4zm-4 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm3.5-7a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5z',
  },
]

export function Footer() {
  return (
    <>
      <footer className="bg-bg-warm py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-4">
            <div>
              <a href="#home" className="mb-4 block text-xl font-bold">
                Reign
              </a>
              <p className="text-sm leading-relaxed text-text-body/70">
                Crafting beautiful digital experiences with passion and precision. We bring your
                vision to life through thoughtful design.
              </p>
            </div>
            <div>
              <ul className="space-y-2">
                {contactLinks.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-text-body/50 transition-colors hover:text-text-primary"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {navColumns.map((col, i) => (
              <div key={i}>
                <ul className="space-y-2">
                  {col.map((item) => (
                    <li key={`${i}-${item}`}>
                      <a
                        href="#"
                        className="text-sm text-text-body/50 transition-colors hover:text-text-primary"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </footer>

      <div className="bg-bg-warm py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center gap-4 mb-6">
            {socialLinks.map(({ label, path }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="text-text-body/50 transition-colors hover:text-text-primary"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d={path} />
                </svg>
              </a>
            ))}
          </div>
          <p className="text-center text-sm text-text-body/50">
            &copy; {new Date().getFullYear()} All rights reserved | Made with{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand hover:underline"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </>
  )
}
