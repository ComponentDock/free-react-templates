import { Mail, MapPin, Phone } from 'lucide-react'
import { footer, siteName } from '../data'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-footer pt-20 text-white/70">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h2 className="text-2xl font-bold text-white">{siteName}</h2>
          <p className="mt-4 leading-relaxed">{footer.blurb}</p>
        </div>
        <nav aria-label="Footer services">
          <h3 className="text-lg font-semibold text-white">{footer.servicesTitle}</h3>
          <ul className="mt-4 space-y-3">
            {footer.servicesLinks.map((link) => (
              <li key={link.label}>
                <a
                  href="#services"
                  className="block transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                >
                  {link.label}
                  <span className="ml-2 text-sm text-white/40">{link.meta}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Quick links">
          <h3 className="text-lg font-semibold text-white">{footer.quickLinksTitle}</h3>
          <ul className="mt-4 space-y-3">
            {footer.quickLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase().replace(' ', '-')}`}
                  className="transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h3 className="text-lg font-semibold text-white">{footer.questionsTitle}</h3>
          <ul className="mt-4 space-y-4">
            <li className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
              <span>{footer.address}</span>
            </li>
            <li>
              <a
                href={`tel:${footer.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-3 transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              >
                <Phone className="h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                <span>{footer.phone}</span>
              </a>
            </li>
            <li>
              <a
                href={`mailto:${footer.email}`}
                className="flex items-center gap-3 transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              >
                <Mail className="h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                <span>{footer.email}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-6 py-5 text-center text-sm">
          Copyright © {year} {siteName}. {footer.rights} | {footer.madeWith}{' '}
          <a
            href={footer.componentDockHref}
            className="font-medium text-brand transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          >
            {footer.componentDockLabel}
          </a>
        </p>
      </div>
    </footer>
  )
}
