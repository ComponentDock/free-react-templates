import { GraduationCap, MapPin, Phone, Mail } from 'lucide-react'
import { BrandIcon, type BrandName } from './BrandIcon'

const socials: ReadonlyArray<{ label: string; name: BrandName }> = [
  { label: 'GitHub', name: 'github' },
  { label: 'X', name: 'x' },
  { label: 'LinkedIn', name: 'linkedin' },
]

const companyLinks = ['About Us', 'Company', 'Press & Blog', 'Privacy Policy', 'Faq'] as const
const courseLinks = [
  'Winter driving',
  'Program for seniors',
  'Adult in car lessons',
  'Defensive driving',
  'Stick shift lessons',
] as const
const usefulLinks = ['Home', 'Drupal Themes', 'WordPress Themes', 'Support', 'Services'] as const

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <a href="/" className="flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand text-white">
                <GraduationCap className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="font-display text-xl font-black uppercase tracking-tight">
                Gearly<span className="text-brand">.</span>
              </span>
            </a>
            <p className="mt-5 text-sm leading-relaxed text-white/60">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href="#contact"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-brand hover:bg-brand hover:text-white"
                >
                  <BrandIcon name={social.name} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-lg font-bold uppercase tracking-wide text-white/80">
              Company
            </h2>
            <ul className="mt-5 space-y-2 text-sm text-white/60">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a href="#about" className="transition-colors hover:text-brand">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-lg font-bold uppercase tracking-wide text-white/80">
              Courses
            </h2>
            <ul className="mt-5 space-y-2 text-sm text-white/60">
              {courseLinks.map((link) => (
                <li key={link}>
                  <a href="#courses" className="transition-colors hover:text-brand">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-lg font-bold uppercase tracking-wide text-white/80">
              Useful Links
            </h2>
            <ul className="mt-5 space-y-2 text-sm text-white/60">
              {usefulLinks.map((link) => (
                <li key={link}>
                  <a href="#about" className="transition-colors hover:text-brand">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-3 text-sm text-white/60">
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                Address : 15 Division Street, New York, NY 12032, United States of America
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                Phone : +0 (123) 456789
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                Kaseo@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-sm text-white/50">
        Copyright © {new Date().getFullYear()} All rights reserved | Gearly
      </div>
    </footer>
  )
}
