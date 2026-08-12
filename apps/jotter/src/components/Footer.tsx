import { Mail, MapPin, Phone } from 'lucide-react'
import {
  FOOTER_ARCHIVES,
  FOOTER_CATEGORIES,
  FOOTER_QUESTIONS,
  SOCIAL_LINKS,
  SOCIAL_PATHS,
} from '../data'

/* Footer (source: footer.ftco-footer.ftco-bg-dark — dark navy #132238
   background with three widget columns: Category, Archives, Have a
   Questions? — plus a bottom bar with the copyright line and socials). */
export function Footer() {
  return (
    <footer className="bg-footer px-8 py-24 text-sm">
      <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-3">
        <div>
          <h2 className="mb-10 font-heading text-[17px] font-bold tracking-widest text-white">
            Category
          </h2>
          <ul>
            {FOOTER_CATEGORIES.map((item) => (
              <li
                key={item}
                className="border-b border-white/10 py-2.5 text-white/50 transition-colors hover:text-white"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-10 font-heading text-[17px] font-bold tracking-widest text-white">
            Archives
          </h2>
          <ul>
            {FOOTER_ARCHIVES.map((item) => (
              <li
                key={item}
                className="border-b border-white/10 py-2.5 text-white/50 transition-colors hover:text-white"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-10 font-heading text-[17px] font-bold tracking-widest text-white">
            Have a Questions?
          </h2>
          <ul className="space-y-4 text-white/50">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              {FOOTER_QUESTIONS.address}
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              {FOOTER_QUESTIONS.phone}
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              {FOOTER_QUESTIONS.email}
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-5xl flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row">
        <p className="text-white/50">
          Copyright ©2026 All rights reserved · More templates at{' '}
          <a
            href="https://www.componentdock.com/"
            className="text-white underline-offset-4 transition-colors hover:text-accent hover:underline"
          >
            Component Dock
          </a>
        </p>
        <div className="flex gap-5">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="text-white/70 transition-colors hover:text-accent"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                <path d={SOCIAL_PATHS[social.label]} />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
