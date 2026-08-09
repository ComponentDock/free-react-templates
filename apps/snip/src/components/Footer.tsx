import { Mail, MapPin, Phone, Scissors } from 'lucide-react'
import { BrandIcon, type BrandName } from './BrandIcon'

const socials: ReadonlyArray<{ label: string; name: BrandName }> = [
  { label: 'GitHub', name: 'github' },
  { label: 'X', name: 'x' },
  { label: 'LinkedIn', name: 'linkedin' },
]

const usefulLinks = [
  { label: 'Design & creatives', href: '#services' },
  { label: 'Telecommunication', href: '#pricing' },
  { label: 'Restaurant', href: '#about' },
  { label: 'Programing', href: '#team' },
  { label: 'Architecture', href: '#home' },
] as const

export function Footer() {
  return (
    <footer id="contact" className="bg-navy text-white transition-colors dark:bg-navy-dark">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <a href="#home" className="flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand">
                <Scissors className="h-5 w-5 text-white" aria-hidden="true" />
              </span>
              <span className="font-display text-xl font-semibold uppercase tracking-[0.2em]">
                Snip<span className="text-brand-light">.</span>
              </span>
            </a>
            <p className="mt-6 text-sm leading-relaxed text-gray-300">
              Seed spirit replenish cattle one moved air created — classic barbering, sharpened
              every day by hands that care.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href="#contact"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-500 text-gray-300 transition-colors hover:border-brand-light hover:bg-brand-light hover:text-black"
                >
                  <BrandIcon name={social.name} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-brand-light">
              Useful Links
            </h3>
            <ul className="mt-5 space-y-2 text-sm text-gray-300">
              {usefulLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition-colors hover:text-brand-light">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-brand-light">
              Contact us
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-light" aria-hidden="true" />
                78/A, Green lane, Kings road, NYC-1989
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-brand-light" aria-hidden="true" />
                finlone@gmail.com
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-brand-light" aria-hidden="true" />
                +10 (87) 728 2870
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 py-5 text-center text-sm text-gray-400">
        Copyright © {new Date().getFullYear()} All rights reserved | Snip
      </div>
    </footer>
  )
}
