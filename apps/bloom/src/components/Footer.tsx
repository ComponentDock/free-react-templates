import { Clock, Flower2, Mail, MapPin, Phone } from 'lucide-react'
import { BrandIcon, type BrandName } from './BrandIcon'

const socials: ReadonlyArray<{ label: string; name: BrandName }> = [
  { label: 'GitHub', name: 'github' },
  { label: 'X', name: 'x' },
  { label: 'LinkedIn', name: 'linkedin' },
]

const spaServices = ['Body Care', 'Massage', 'Hydrotherapy', 'Yoga', 'Sauna', 'Aquazone'] as const

export function Footer() {
  return (
    <footer id="contact" className="bg-ink text-white transition-colors dark:bg-ink-dark">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <a href="#home" className="flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand">
                <Flower2 className="h-5 w-5 text-white" aria-hidden="true" />
              </span>
              <span className="font-display text-xl font-bold uppercase tracking-[0.2em]">
                Bloom<span className="text-sky">.</span>
              </span>
            </a>
            <p className="mt-6 text-sm leading-relaxed text-gray-400">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href="#contact"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-600 text-gray-400 transition-colors hover:border-brand hover:bg-brand hover:text-white"
                >
                  <BrandIcon name={social.name} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg font-bold uppercase tracking-wide text-brand">
              Have A Questions?
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                <span>
                  203 Fake St. Mountain View
                  <br />
                  San Francisco, California, USA
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                +2 392 3929 210
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                info@bloombeauty.com
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                Mon to Sun: 08:00am — 09:00pm
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-bold uppercase tracking-wide text-brand">
              Spa Center
            </h3>
            <ul className="mt-5 grid grid-cols-2 gap-3 text-sm text-gray-400">
              {spaServices.map((service) => (
                <li key={service} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-sky" aria-hidden="true" />
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 py-5 text-center text-sm text-gray-500">
        Copyright © {new Date().getFullYear()} All rights reserved | Bloom
      </div>
    </footer>
  )
}
