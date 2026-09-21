import { FOOTER_COLUMNS } from '../data'

/* Footer recreated from the source template's footer-section: dark footer
   with link columns and a copyright bar linking Component Dock. */

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-logo-bg border-t border-border" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title}>
              <h3 className="font-heading text-base font-bold uppercase tracking-wider text-text-primary">
                {column.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-text-body transition-colors hover:text-brand"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <span className="font-heading text-lg font-bold uppercase tracking-wider text-text-primary">
            Fragstorm
          </span>
          <p className="text-xs text-text-muted">
            Copyright &copy; {year} All rights reserved | Made with{' '}
            <span aria-hidden="true">&hearts;</span> by{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-brand transition-colors hover:text-brand-light"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
