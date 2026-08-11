import { Mail, MapPin, Phone } from 'lucide-react'
import {
  footerColumns,
  footerCopyright,
  footerLabel,
  footerNewsletterPlaceholder,
  footerNewsletterSubmitLabel,
  socialColorClass,
  socialLabel,
  socialLinks,
  type SocialName,
} from '../data'
import { SocialIcon } from './SocialIcon'

/* Dark footer (reference `footer.footer-area`, bg #191C1D): widget
   columns (Latest Twister / Sport Videos / Our Address), a newsletter
   form, round social buttons with brand colors and a copyright bar. */
export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer aria-label={footerLabel} className="bg-footer">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h2 className="mb-5 font-display text-lg font-bold text-white">{column.title}</h2>
              {'tweets' in column && (
                <ul className="flex flex-col gap-3">
                  {column.tweets.map((tweet) => (
                    <li key={tweet} className="text-sm leading-relaxed text-body">
                      {tweet}
                    </li>
                  ))}
                </ul>
              )}
              {'address' in column && (
                <address className="flex flex-col gap-3 text-sm not-italic leading-relaxed text-body">
                  <span className="flex items-start gap-2">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                    {column.address}
                  </span>
                  <span className="flex items-center gap-2">
                    <Phone className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                    {column.phone}
                  </span>
                  <span className="flex items-center gap-2">
                    <Mail className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                    {column.email}
                  </span>
                </address>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 lg:flex-row lg:items-center">
          <form
            role="form"
            aria-label={footerNewsletterSubmitLabel}
            onSubmit={(event) => event.preventDefault()}
            className="flex w-full max-w-md gap-2"
          >
            <input
              type="email"
              aria-label={footerNewsletterPlaceholder}
              placeholder={footerNewsletterPlaceholder}
              className="min-w-0 flex-1 bg-ink px-4 py-3 font-display text-sm text-white outline-none placeholder:text-mute focus:ring-2 focus:ring-brand"
            />
            <button
              type="submit"
              className="shrink-0 bg-brand px-6 py-3 font-display text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-hover"
            >
              {footerNewsletterSubmitLabel}
            </button>
          </form>
          <ul aria-label={socialLabel} className="flex gap-3">
            {socialLinks.map((social) => (
              <li key={social.name}>
                <a
                  href={social.href}
                  aria-label={social.label}
                  className={`flex h-10 w-10 items-center justify-center rounded-full text-white transition-opacity hover:opacity-80 ${socialColorClass[social.name as SocialName]}`}
                >
                  <SocialIcon name={social.name} className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-8 text-center font-display text-xs text-meta">
          Copyright © {year} {footerCopyright}
        </p>
      </div>
    </footer>
  )
}
