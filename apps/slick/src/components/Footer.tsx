import { Mail, MapPin, Phone, Scissors } from 'lucide-react'
import { BrandIcon, type BrandName } from './BrandIcon'

const socials: ReadonlyArray<{ label: string; name: BrandName }> = [
  { label: 'GitHub', name: 'github' },
  { label: 'X', name: 'x' },
  { label: 'LinkedIn', name: 'linkedin' },
]

export function Footer() {
  return (
    <footer id="contact" className="bg-coal text-white transition-colors dark:bg-coal-dark">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <a href="#home" className="flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand">
                <Scissors className="h-5 w-5 text-white" aria-hidden="true" />
              </span>
              <span className="font-display text-xl font-bold uppercase tracking-[0.2em]">
                Slick<span className="text-brand">.</span>
              </span>
            </a>
            <p className="mt-6 text-sm leading-relaxed text-gray-400">
              There are many variations of passages of barber lore available, but the majority have
              suffered alteration in some form — our craft is the exception.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href="#contact"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-600 text-gray-400 transition-colors hover:border-brand hover:bg-brand hover:text-white"
                >
                  <BrandIcon name={social.name} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg font-bold uppercase tracking-wide text-brand">
              Contact Info
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-gray-400">
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                <span>
                  659, Rocky beach bullevard, santa monica, USA
                  <br />
                  Los Angeles, United States
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                913-473-7000
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                contact@slickbarber.com
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-bold uppercase tracking-wide text-brand">
              Opening Hours
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-gray-400">
              <li className="flex items-center justify-between border-b border-white/10 pb-3">
                <span>Monday — Friday</span>
                <span className="text-white">9am — 6pm</span>
              </li>
              <li className="flex items-center justify-between border-b border-white/10 pb-3">
                <span>Saturday</span>
                <span className="text-white">9am — 4pm</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Sunday</span>
                <span className="text-white">Closed</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-sm text-gray-500">
        Copyright © {new Date().getFullYear()} All rights reserved | Slick
      </div>
    </footer>
  )
}
