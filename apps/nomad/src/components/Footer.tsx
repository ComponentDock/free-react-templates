import { Mail, MapPin, Phone } from 'lucide-react'
import { archives, contact, destinations, socials } from '../data'
import { BrandIcon } from './BrandIcon'

export function Footer() {
  return (
    <footer className="bg-[#141313] px-4 pt-16 pb-8 text-sm text-white/70">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h2 className="mb-6 text-lg font-normal text-white">Nomad</h2>
          <p className="mb-6 leading-relaxed">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
          <div className="flex gap-3">
            {socials.map((social) => (
              <a
                key={social.name}
                href="#footer"
                aria-label={social.label}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-white transition-colors hover:bg-coral"
              >
                <BrandIcon name={social.name} ariaLabel={social.label} className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-6 text-lg font-normal text-white">Destination</h2>
          <ul className="space-y-2">
            {destinations.map((item) => (
              <li key={item.label}>
                <a href="#blog" className="transition-colors hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-6 text-lg font-normal text-white">Archives</h2>
          <ul className="space-y-2">
            {archives.map((item) => (
              <li key={item.label}>
                <a href="#blog" className="transition-colors hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-6 text-lg font-normal text-white">Have a Questions?</h2>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-coral" aria-hidden="true" />
              <span>{contact.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-1 h-5 w-5 shrink-0 text-coral" aria-hidden="true" />
              <a
                href={`tel:${contact.phone.replace(/\s/g, '')}`}
                className="transition-colors hover:text-white"
              >
                {contact.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-1 h-5 w-5 shrink-0 text-coral" aria-hidden="true" />
              <a href={`mailto:${contact.email}`} className="transition-colors hover:text-white">
                {contact.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-6xl border-t border-white/10 pt-6 text-center">
        <p>&copy; 2026 Nomad &mdash; Travel blog template</p>
      </div>
    </footer>
  )
}
