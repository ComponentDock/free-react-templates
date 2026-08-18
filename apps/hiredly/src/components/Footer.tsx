import { Briefcase } from 'lucide-react'
import { componentDockUrl, footerColumns } from '../data'
import { socialLinks } from './BrandIcons'

export function Footer() {
  return (
    <footer className="bg-white pb-[37px] pt-[97px]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-4">
          {/* Brand + pera */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-2">
              <span className="flex size-9 items-center justify-center rounded-[5px] bg-brand text-white">
                <Briefcase aria-hidden="true" className="size-5" />
              </span>
              <span className="font-display text-2xl font-bold tracking-wide text-ink">
                Hiredly<span className="text-brand">.</span>
              </span>
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-footer-text">
              The easiest way to find your next job or your next hire — free, fast, and made for
              everyone.
            </p>
          </div>

          {/* Link widgets */}
          {footerColumns.map((column) => (
            <nav key={column.heading} aria-label={column.heading}>
              <h4 className="mb-[30px] font-display text-xl font-semibold text-ink">
                {column.heading}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#home"
                      className="text-sm text-footer-text transition-colors hover:text-brand"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[rgba(76,87,83,0.15)] pt-6 md:flex-row">
          <p className="text-sm text-footer-text">
            &copy; 2026 Hiredly &mdash; Job Board &middot; All rights reserved
          </p>
          <div className="flex items-center gap-5">
            <a href={componentDockUrl} className="text-sm font-medium text-brand hover:underline">
              Made with Component Dock
            </a>
            <ul className="flex items-center gap-3">
              {socialLinks.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={`${label} profile`}
                    className="text-footer-text transition-colors hover:text-brand"
                  >
                    <Icon className="size-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
