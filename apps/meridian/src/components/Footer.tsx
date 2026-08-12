import { BRAND, FOOTER_COLUMNS } from '../data'

/* Footer recreated from the source's brand-green footer: the white
   wordmark beside three link columns (Contact Info / Nav Links /
   Navigation) and a centered copyright bar. The credit line links the
   Component Dock marketplace per repo convention. */

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-brand">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-4">
          <div>
            <a
              href="#home"
              aria-label="Meridian home"
              className="text-2xl font-bold uppercase tracking-wide text-white"
            >
              {BRAND}
            </a>
          </div>

          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title}>
              <h3 className="text-base font-semibold uppercase tracking-wide text-white">
                {column.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/50 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-brand py-5">
        <div className="mx-auto max-w-7xl px-4 text-center text-sm text-white/70 lg:px-8">
          <p>
            Copyright © {year} All rights reserved | made with <span aria-hidden="true">♥</span> by{' '}
            <a
              href="https://www.componentdock.com/"
              className="font-medium text-white transition-colors hover:text-white/80"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
