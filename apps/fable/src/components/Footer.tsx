import { Mail, MapPin, Phone } from 'lucide-react'
import {
  address,
  copyright,
  email,
  footerBrandText,
  footerCategories,
  footerCategoriesTitle,
  informationLinks,
  informationTitle,
  phone,
  questionsTitle,
  siteName,
} from '../data'
import { SocialIcons } from './SocialIcons'

export function Footer() {
  return (
    <footer className="bg-coal py-20 dark:bg-black">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand + description + socials. */}
          <div>
            <a
              href="#home"
              className="font-serif text-2xl font-bold text-white transition-colors hover:text-accent"
            >
              {siteName}
              <span aria-hidden="true" className="text-accent">
                .
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-white/60">{footerBrandText}</p>
            <SocialIcons className="mt-6" />
          </div>

          {/* Information. */}
          <div>
            <h2 className="mb-5 text-lg font-semibold text-white">{informationTitle}</h2>
            <ul className="space-y-3">
              {informationLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-white/60 transition-colors hover:text-accent">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories. */}
          <div>
            <h2 className="mb-5 text-lg font-semibold text-white">{footerCategoriesTitle}</h2>
            <ul className="space-y-3">
              {footerCategories.map((category) => (
                <li key={category}>
                  <a href="#" className="text-sm text-white/60 transition-colors hover:text-accent">
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Have a Questions? — block-23 contact list. */}
          <div>
            <h2 className="mb-5 text-lg font-semibold text-white">{questionsTitle}</h2>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-white/60">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <span>{address}</span>
              </li>
              <li>
                <a
                  href="#"
                  className="flex gap-3 text-sm text-white/60 transition-colors hover:text-accent"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  <span>{phone}</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex gap-3 text-sm text-white/60 transition-colors hover:text-accent"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  <span>{email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6 text-center">
          <p className="text-sm text-white/60">{copyright}</p>
        </div>
      </div>
    </footer>
  )
}
