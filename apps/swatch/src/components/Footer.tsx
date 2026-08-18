import { ArrowRight, MapPin, Mail, Phone } from 'lucide-react'
import { componentDockUrl, footer } from '../data'
import { socialLinks } from './BrandIcons'

export function Footer() {
  return (
    <footer className="bg-footer-bg pt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 pb-14 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand + blurb + socials */}
          <div>
            <a href="#home" className="text-2xl font-bold text-ink">
              {footer.brand}
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">{footer.blurb}</p>
            <ul className="mt-5 flex items-center gap-3">
              {socialLinks.slice(0, 3).map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={`${label} profile`}
                    className="text-muted transition-colors hover:text-brand"
                  >
                    <Icon className="size-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <nav aria-label={footer.servicesHeading}>
            <h4 className="mb-8 text-lg font-medium text-ink">{footer.servicesHeading}</h4>
            <ul className="space-y-3">
              {footer.services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-brand"
                  >
                    <ArrowRight aria-hidden="true" className="size-3.5 text-brand" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Questions */}
          <div>
            <h4 className="mb-8 text-lg font-medium text-ink">{footer.questionsHeading}</h4>
            <ul className="space-y-4 text-sm text-muted">
              <li className="flex items-start gap-3">
                <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-brand" />
                {footer.questions.address}
              </li>
              <li className="flex items-center gap-3">
                <Phone aria-hidden="true" className="size-4 shrink-0 text-brand" />
                {footer.questions.phone}
              </li>
              <li className="flex items-center gap-3">
                <Mail aria-hidden="true" className="size-4 shrink-0 text-brand" />
                {footer.questions.email}
              </li>
            </ul>
          </div>

          {/* CTA nudge */}
          <div>
            <h4 className="mb-8 text-lg font-medium text-ink">Let&apos;s work together</h4>
            <a
              href="#contactme"
              className="inline-block rounded border border-brand px-6 py-3 text-sm font-semibold uppercase tracking-wide text-brand transition-colors hover:bg-brand hover:text-white"
            >
              Start a Project
            </a>
          </div>
        </div>
      </div>

      <div className="bg-[#d9d9d9] py-5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 sm:px-6 md:flex-row lg:px-8">
          <p className="text-sm text-muted">{footer.copyright}</p>
          <div className="flex items-center gap-1.5">
            <span aria-hidden="true" className="text-brand">
              ♥
            </span>
            <a href={componentDockUrl} className="font-medium text-brand hover:underline">
              {footer.dockLabel}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
