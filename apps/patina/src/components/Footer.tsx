import { Mail, MapPin, Phone } from 'lucide-react'
import { footer, site } from '../content'
import { Wordmark } from './Header'
import { containerClass } from './ui'

/**
 * Four zones on a 12-column plate: brand 4 / links 5 / licence 3. The brass phone
 * pill is the only full-radius surface in the footer and the only filled brass
 * action on the page.
 */
export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-800 pt-16 text-ink-200 lg:pt-24">
      <div className={containerClass}>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Wordmark className="items-start" />
            <p className="mt-6 max-w-xs text-base leading-6 text-gray-400">{footer.blurb}</p>

            <a
              href={site.componentDock}
              target="_blank"
              rel="noopener"
              aria-label="Component Dock"
              className="mt-6 inline-flex items-center rounded-lg bg-gray-800 p-2.5 text-gray-300 transition-colors hover:text-primary-400"
            >
              <span aria-hidden="true" className="font-serif text-base tracking-[0.18em]">
                CD
              </span>
            </a>

            <ul className="mt-6 space-y-2 text-sm leading-5 text-gray-400">
              <li className="flex items-start gap-2">
                <MapPin aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
                {site.address}
              </li>
              <li className="flex items-center gap-2">
                <Phone aria-hidden="true" className="h-4 w-4 shrink-0" />
                <a href={site.phoneHref} className="transition-colors hover:text-white">
                  {site.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail aria-hidden="true" className="h-4 w-4 shrink-0" />
                <a href={`mailto:${site.email}`} className="transition-colors hover:text-white">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>

          <div className="grid gap-8 sm:grid-cols-3 lg:col-span-5">
            {footer.columns.map((column) => (
              <div key={column.heading}>
                <h3 className="text-sm leading-5 font-semibold tracking-[0.7px] text-white uppercase">
                  {column.heading}
                </h3>
                <ul className="mt-4 space-y-3 text-sm leading-5">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="text-gray-400 transition-colors hover:text-white">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-sm leading-5 font-semibold tracking-[0.7px] text-white uppercase">
              Licensed
            </h3>
            <p className="mt-4 text-sm leading-6 text-gray-400">{footer.licenceLine}</p>
            <a
              href={site.phoneHref}
              className="mt-6 inline-flex items-center rounded-full bg-primary-600 px-5 py-3 text-base leading-6 font-bold text-white transition-colors hover:bg-primary-700"
            >
              {site.phone}
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-gray-800 py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm leading-5 text-gray-500">{footer.copyright}</p>
          <div className="flex flex-wrap items-center gap-6 text-sm leading-5 text-gray-500">
            {footer.legal.map((item) => (
              <a key={item.label} href={item.href} className="transition-colors hover:text-white">
                {item.label}
              </a>
            ))}
            <a
              href={site.componentDock}
              target="_blank"
              rel="noopener"
              className="transition-colors hover:text-white"
            >
              {footer.attribution}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
