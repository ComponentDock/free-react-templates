import { Calendar, Mail, MapPin, Phone, User } from 'lucide-react'
import { brand, footer } from '../data'
import { BrandIcon } from './BrandIcon'

export function Footer() {
  const year = new Date().getFullYear()
  const phoneHref = `tel:${footer.phoneDisplay.replace(/-/g, '')}`

  return (
    <footer className="bg-footer pt-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 pb-16 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <a
              href="#home"
              className="text-3xl font-medium text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            >
              {brand.name}
            </a>
            <span className="mt-1 block text-xs font-semibold uppercase tracking-[2px] text-brand">
              {brand.tagline}
            </span>
            <p className="mt-5 max-w-sm leading-relaxed text-muted">{footer.blurb}</p>
            <ul className="mt-6 flex gap-3">
              {footer.socials.map((social) => (
                <li key={social}>
                  <a
                    href={`#${social}`}
                    aria-label={social}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-white transition-colors hover:bg-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                  >
                    <BrandIcon name={social} className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-base font-medium text-ink">{footer.exploreTitle}</h4>
            <ul className="space-y-3">
              {footer.exploreLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#home"
                    className="text-sm text-link transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-base font-medium text-ink">{footer.quickTitle}</h4>
            <ul className="space-y-3">
              {footer.quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#pricing"
                    className="text-sm text-link transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="mb-6 text-base font-medium text-ink">{footer.postsTitle}</h4>
            <ul className="space-y-6">
              {Array.from({ length: 3 }).map((_, index) => (
                <li key={index} className="flex gap-4">
                  <img
                    src={`https://picsum.photos/seed/learnly-post-${index + 1}/80/80`}
                    alt=""
                    className="h-20 w-20 rounded object-cover"
                    loading="lazy"
                  />
                  <div>
                    <p className="flex items-center gap-2 text-xs text-muted">
                      <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>{footer.postMeta}</span>
                      <User className="ml-1 h-3.5 w-3.5" aria-hidden="true" />
                      <span>Admin</span>
                    </p>
                    <a
                      href="#journal"
                      className="mt-1 block text-base leading-snug text-link transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                    >
                      {footer.postTitle}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid gap-10 pb-16 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <h4 className="mb-6 text-base font-medium text-ink">{footer.questionsTitle}</h4>
            <ul className="space-y-4 text-sm text-link">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                {footer.address}
              </li>
              <li>
                <a
                  href={phoneHref}
                  className="flex items-center gap-3 transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                >
                  <Phone className="h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                  {footer.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${footer.email}`}
                  className="flex items-center gap-3 transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                >
                  <Mail className="h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                  {footer.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-ink py-5 text-center text-sm text-white">
        <p>
          © {year} {brand.name}. All rights reserved. ·{' '}
          <a
            href={footer.componentDockHref}
            className="text-white underline underline-offset-2 transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            {footer.componentDockLabel}
          </a>
        </p>
      </div>
    </footer>
  )
}
