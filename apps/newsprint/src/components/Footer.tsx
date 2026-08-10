import { BrandIcon } from './BrandIcon'
import { footerWidgetColumns, socials } from '../data'

export function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-6xl px-4 pb-10 pt-16 lg:px-6">
        {/* CTA heading in accent orange */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-accent sm:text-4xl">Newsprint Magazine</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-body">
            A daily digest of ideas worth sharing — business, travel, food and technology, written
            by people who care about craft.
          </p>
        </div>

        {/* Widget columns */}
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {footerWidgetColumns.map((column) => (
            <div key={column.heading}>
              <h3 className="text-xs font-bold uppercase tracking-widest text-teal">
                {column.heading}
              </h3>
              <ul className="mt-4 space-y-2">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#top"
                      className="text-sm text-body transition-colors hover:text-accent"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social circles */}
        <ul className="mt-12 flex justify-center gap-3">
          {socials.map((social) => (
            <li key={social.label}>
              <a
                href="#top"
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-soft text-body transition-colors hover:bg-accent hover:text-white"
              >
                <BrandIcon name={social.name} className="h-4 w-4" />
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-sm text-body sm:flex-row lg:px-6">
          <p>Copyright © {new Date().getFullYear()} All rights reserved</p>
          <ul className="flex gap-4">
            <li>
              <a href="#top" className="transition-colors hover:text-accent">
                Terms &amp; Conditions
              </a>
            </li>
            <li>
              <a href="#top" className="transition-colors hover:text-accent">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
