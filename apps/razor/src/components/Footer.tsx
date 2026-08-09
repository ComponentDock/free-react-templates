import { MapPin, Phone, Mail } from 'lucide-react'
import { BrandIcon, type BrandName } from './BrandIcon'

const socials: ReadonlyArray<{ label: string; name: BrandName }> = [
  { label: 'X', name: 'x' },
  { label: 'Facebook', name: 'facebook' },
  { label: 'Instagram', name: 'instagram' },
]

const exploreLinks = ['About', 'Services', 'Gallery', 'Blog'] as const
const infoLinks = ['Join us', 'Make Appointment', 'Privacy & Policy', 'Terms & Conditions'] as const

export function Footer() {
  return (
    <footer className="bg-ink py-16 text-white dark:bg-black lg:py-[100px]">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <a href="#home" className="font-display text-2xl font-bold uppercase tracking-widest">
            Razor<span className="text-brand">.</span>
          </a>
          <p className="mt-5 text-sm leading-relaxed text-white/70">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href="#home"
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white/75 transition-colors hover:border-brand hover:bg-brand hover:text-ink"
              >
                <BrandIcon name={social.name} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-brand">
            Explore
          </h3>
          <ul className="mt-5 space-y-2.5 text-sm text-white/70">
            {exploreLinks.map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} className="transition-colors hover:text-brand">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-brand">
            Info
          </h3>
          <ul className="mt-5 space-y-2.5 text-sm text-white/70">
            {infoLinks.map((link) => (
              <li key={link}>
                <a href="#contact" className="transition-colors hover:text-brand">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-brand">
            Have a Question?
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              203 Fake St. Mountain View, San Francisco, California, USA
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              +2 392 3929 210
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              info@yourdomain.com
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-14 border-t border-white/10 py-6 text-center text-sm text-white/60">
        Copyright © {new Date().getFullYear()} All rights reserved | This template is made with ♥ by
        Component Dock
      </div>
    </footer>
  )
}
