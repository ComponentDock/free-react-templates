import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react'
import { brand, contact, practiceAreasLinks } from '../data'
import { BrandIcon } from './BrandIcon'

/** Dark #222831 footer with four columns (About, Practice Areas, Have a
 *  Questions?, Business Hours), a copyright bar, and a Component Dock link. */
export function Footer() {
  const phoneHref = 'tel:' + contact.phone.replace(/[^\d+]/g, '')

  return (
    <footer className="bg-ink py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="text-2xl font-bold">
              {brand.name} <span className="text-brand">{brand.tagline}</span>
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-white/70">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts — a firm that fights for your justice with
              steady, experienced counsel.
            </p>
            <ul className="mt-6 flex gap-3">
              {(['twitter', 'facebook', 'instagram'] as const).map((name) => (
                <li key={name}>
                  <a
                    href="#home"
                    aria-label={name}
                    className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white/5 text-white transition-colors hover:bg-brand"
                  >
                    <BrandIcon name={name} className="h-5 w-5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Practice areas">
            <h2 className="text-lg font-semibold text-white">Practice Areas</h2>
            <ul className="mt-5 space-y-1">
              {practiceAreasLinks.map((label) => (
                <li key={label}>
                  <a
                    href="#practice"
                    className="flex items-center gap-3 py-1 text-sm text-white transition-colors hover:text-brand"
                  >
                    <ArrowRight className="h-4 w-4 text-brand" /> {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-lg font-semibold text-white">Have a Questions?</h2>
            <ul className="mt-5 space-y-4 text-sm text-white/80">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                {contact.address}
              </li>
              <li>
                <a
                  href={phoneHref}
                  className="flex items-center gap-3 text-white transition-colors hover:text-brand"
                >
                  <Phone className="h-5 w-5 shrink-0 text-brand" /> {contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-3 text-white transition-colors hover:text-brand"
                >
                  <Mail className="h-5 w-5 shrink-0 text-brand" /> {contact.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">Business Hours</h2>
            <div className="mt-5 text-base text-brand">
              <h3 className="font-semibold">Opening Days:</h3>
              <p className="mt-1 pl-3 text-white/80">{contact.openingDays[0]}</p>
              <p className="pl-3 text-white/80">{contact.openingDays[1]}</p>
              <h3 className="mt-4 font-semibold">Vacations:</h3>
              <p className="mt-1 pl-3 text-white/80">{contact.vacations[0]}</p>
              <p className="pl-3 text-white/80">{contact.vacations[1]}</p>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-6 text-center text-sm text-white/60">
          <p>© 2026 Counsely — Law Firm Agency · All rights reserved</p>
          <p className="mt-1">
            More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              className="font-medium text-brand transition-colors hover:text-white"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
