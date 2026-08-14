import { Mail, MapPin, Phone } from 'lucide-react'
import { BRAND, CONTACT_DETAILS, FOOTER_ABOUT, FOOTER_COLUMNS, SOCIAL_LINKS } from '../data'
import { SOCIAL_ICONS } from './icons'

/* White footer: brand column ("Vocare Jobboard" + about + social
   circles), three link columns (Employers / Candidate / Account), a
   "Have a Questions?" contact widget, and a centered copyright row with
   the Component Dock credit. */
export function Footer() {
  return (
    <footer className="bg-white pb-[6em] pt-[4em]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.2fr]">
        <div>
          <h3 className="text-[18px] font-medium text-black/70">{BRAND} Jobboard</h3>
          <p className="mt-4 text-black/50">{FOOTER_ABOUT}</p>
          <ul className="mt-5 flex gap-3">
            {SOCIAL_LINKS.map(({ key, label, href }) => {
              const Icon = SOCIAL_ICONS[key]
              return (
                <li key={key}>
                  <a
                    href={href}
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-black/5 text-brand transition-colors hover:bg-brand hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </li>
              )
            })}
          </ul>
        </div>

        {FOOTER_COLUMNS.map((column) => (
          <nav key={column.heading} aria-label={column.heading}>
            <h3 className="text-[18px] font-medium text-black/70">{column.heading}</h3>
            <ul className="mt-4 space-y-2">
              {column.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-black/40 transition-colors hover:text-brand">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div>
          <h3 className="text-[18px] font-medium text-black/70">Have a Questions?</h3>
          <ul className="mt-4 space-y-3 text-black/40">
            <li className="flex gap-3">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              {CONTACT_DETAILS.address}
            </li>
            <li className="flex gap-3">
              <Phone className="mt-1 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              {CONTACT_DETAILS.phone}
            </li>
            <li className="flex gap-3">
              <Mail className="mt-1 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              {CONTACT_DETAILS.email}
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 border-t border-black/10 pt-6 text-center text-black/50">
        <p>
          Copyright &copy;{new Date().getFullYear()} All rights reserved | This template is made
          with <span aria-hidden="true">❤</span> by{' '}
          <a
            href="https://www.componentdock.com/"
            className="font-semibold text-brand transition-colors hover:text-black"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
