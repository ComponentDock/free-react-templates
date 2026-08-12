import { Play } from 'lucide-react'
import { BRAND, FOOTER_COLUMNS } from '../data'

/* Footer recreated from the source's footer_area: a deep purple gradient
   with four link columns (About Gambit / Company / Support / Legal) and a
   copyright bar. The credit line links the Component Dock marketplace per
   repo convention. */

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-r from-purple-deep via-purple-end to-purple-deep">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title}>
              <h3 className="font-display text-lg font-semibold text-white">{column.title}</h3>
              <ul className="mt-6 space-y-4">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#home"
                      className="text-sm text-white/60 transition-colors hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <a href="#home" className="flex items-center gap-2" aria-label="Gambit home">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-r from-brand to-brand-2">
              <Play className="h-3.5 w-3.5 fill-purple-ink text-purple-ink" aria-hidden="true" />
            </span>
            <span className="font-display text-lg font-bold uppercase tracking-wide text-white">
              {BRAND}
            </span>
          </a>
          <p className="text-sm text-white/60">
            Copyright © {year} All rights reserved | This template is made with{' '}
            <span aria-hidden="true">♥</span> by{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-white transition-colors hover:text-brand-2"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
