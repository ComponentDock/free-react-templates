import { Mail, MapPin, Phone, Scissors } from 'lucide-react'
import { BrandIcon, type BrandName } from './BrandIcon'

const socials: ReadonlyArray<{ label: string; name: BrandName }> = [
  { label: 'GitHub', name: 'github' },
  { label: 'X', name: 'x' },
  { label: 'LinkedIn', name: 'linkedin' },
]

const informationLinks = [
  { label: 'FAQs', href: '#home' },
  { label: 'Privacy', href: '#home' },
  { label: 'Terms Condition', href: '#home' },
] as const

const exploreLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
] as const

export function Footer() {
  return (
    <footer id="contact" className="bg-plum text-white transition-colors dark:bg-plum-dark">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <a href="#home" className="flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand">
                <Scissors className="h-5 w-5 text-white" aria-hidden="true" />
              </span>
              <span className="font-display text-xl font-semibold uppercase tracking-[0.2em]">
                Mane<span className="text-brand-light">.</span>
              </span>
            </a>
            <p className="mt-6 text-sm leading-relaxed text-gray-300">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts. Our stylists have kept the city beautiful for
              over a decade.
            </p>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-brand-light">
              Information
            </h3>
            <ul className="mt-5 space-y-2 text-sm text-gray-300">
              {informationLinks.map((link) => (
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
              Links
            </h3>
            <ul className="mt-5 space-y-2 text-sm text-gray-300">
              {exploreLinks.map((link) => (
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
              Have a Questions?
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-light" aria-hidden="true" />
                203 Fake St. Mountain View, San Francisco, California, USA
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-brand-light" aria-hidden="true" />
                +2 392 3929 210
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-brand-light" aria-hidden="true" />
                info@mane.example
              </li>
            </ul>
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
        </div>
      </div>
      <div className="border-t border-gray-700 py-5 text-center text-sm text-gray-400">
        Copyright © {new Date().getFullYear()} All rights reserved | Mane
      </div>
    </footer>
  )
}
