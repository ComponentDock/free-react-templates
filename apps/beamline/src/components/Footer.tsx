import { MapPin, Phone, Mail } from 'lucide-react'
import { BrandIcon, type BrandName } from './BrandIcon'

const columns: ReadonlyArray<{
  heading: string
  links: ReadonlyArray<{ label: string; href: string }>
}> = [
  {
    heading: 'Community',
    links: [
      { label: 'Projects', href: '#projects' },
      { label: 'Team', href: '#team' },
      { label: 'Reviews', href: '#team' },
      { label: 'FAQs', href: '#quote' },
    ],
  },
  {
    heading: 'About Us',
    links: [
      { label: 'Our Story', href: '#about' },
      { label: 'Meet the team', href: '#team' },
      { label: 'Careers', href: '#contact' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About Us', href: '#about' },
      { label: 'Press', href: '#blog' },
      { label: 'Contact', href: '#contact' },
      { label: 'Careers', href: '#contact' },
    ],
  },
] as const

const socials: ReadonlyArray<{ name: BrandName; label: string }> = [
  { name: 'facebook', label: 'Facebook' },
  { name: 'twitter', label: 'X' },
  { name: 'linkedin', label: 'LinkedIn' },
]

export function Footer() {
  return (
    <footer id="contact" className="bg-coal text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <a href="#home" className="text-xl font-bold tracking-wide">
              Beamline<span className="text-brand">.</span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts.
            </p>
            <ul className="mt-6 flex gap-3">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={`https://${social.name}.com`}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand"
                  >
                    <BrandIcon name={social.name} className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {columns.map((column) => (
            <div key={column.heading}>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white/70">
                {column.heading}
              </h3>
              <ul className="mt-4 space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/60 transition-colors hover:text-brand"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-4 border-t border-white/10 pt-8 md:grid-cols-3">
          <p className="flex items-center gap-3 text-sm text-white/60">
            <MapPin className="h-4 w-4 text-brand" aria-hidden="true" />
            203 Fake St. Mountain View, San Francisco, California, USA
          </p>
          <p className="flex items-center gap-3 text-sm text-white/60">
            <Phone className="h-4 w-4 text-brand" aria-hidden="true" />
            +2 392 3929 210
          </p>
          <p className="flex items-center gap-3 text-sm text-white/60">
            <Mail className="h-4 w-4 text-brand" aria-hidden="true" />
            info@yourdomain.com
          </p>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-center">
          <p className="text-sm text-white/50">
            © 2026 Beamline. All rights reserved. Recreation of ColorLib Archlab.
          </p>
        </div>
      </div>
    </footer>
  )
}
