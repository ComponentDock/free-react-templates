import { Car } from 'lucide-react'
import { BrandIcon, type BrandName } from './BrandIcon'

const socials: ReadonlyArray<{ label: string; name: BrandName }> = [
  { label: 'GitHub', name: 'github' },
  { label: 'X', name: 'x' },
  { label: 'LinkedIn', name: 'linkedin' },
]

const quickLinks = [
  'About Us',
  'Testimonials',
  'Terms of Service',
  'Privacy',
  'Contact Us',
] as const

export function Footer() {
  return (
    <footer id="contact" className="bg-coal text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand text-white">
                <Car className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="font-display text-xl font-black uppercase tracking-tight">
                Drively<span className="text-brand">.</span>
              </span>
            </div>
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
              Quick Links
            </h2>
            <ul className="mt-5 space-y-2 text-sm text-white/60">
              {quickLinks.map((link) => (
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
              Quick Links
            </h2>
            <ul className="mt-5 space-y-2 text-sm text-white/60">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#about" className="transition-colors hover:text-brand">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-sm text-white/50">
        Copyright © {new Date().getFullYear()} All rights reserved | Drively
      </div>
    </footer>
  )
}
