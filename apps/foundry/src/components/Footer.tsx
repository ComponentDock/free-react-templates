import { MapPin, Phone } from 'lucide-react'
import { BrandIcon, type BrandName } from './BrandIcon'

const columns: ReadonlyArray<{
  heading: string
  links: ReadonlyArray<{ label: string; href: string }>
}> = [
  {
    heading: 'About Company',
    links: [
      { label: 'Our Story', href: '#about' },
      { label: 'Certification', href: '#about' },
      { label: 'Our Services', href: '#services' },
      { label: 'Career', href: '#engineers' },
      { label: 'Core Values', href: '#about' },
    ],
  },
  {
    heading: 'Recent Blog',
    links: [
      { label: 'Best Construction Company Prize', href: '#blog' },
      { label: 'Doublered Residence Facility', href: '#blog' },
      { label: 'Residence Hall Buzzing', href: '#blog' },
    ],
  },
  {
    heading: 'Information',
    links: [
      { label: 'Company History', href: '#about' },
      { label: 'FAQ', href: '#contact' },
      { label: 'Privacy Policy', href: '#contact' },
      { label: 'Terms of Use', href: '#contact' },
    ],
  },
] as const

const socials: ReadonlyArray<{ name: BrandName; label: string }> = [
  { name: 'github', label: 'GitHub' },
  { name: 'x', label: 'X' },
  { name: 'linkedin', label: 'LinkedIn' },
]

export function Footer() {
  return (
    <footer id="contact" className="bg-coal text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#home" className="font-display text-2xl font-bold uppercase tracking-wide">
              Foundry<span className="text-brand">.</span>
            </a>
            <p className="mt-5 text-sm leading-relaxed text-white/60">
              A construction company building all kinds of structures — from private apartments to
              mega malls — since 1980.
            </p>
            <ul className="mt-6 flex gap-3">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={`https://${social.name}.com`}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand hover:text-ink"
                  >
                    <BrandIcon name={social.name} className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/70">
              Contact Info
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-white/60">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                291 South 21th Street, Suite 721, New York NY 10016
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-brand" aria-hidden="true" />+ 1235 2355 98
              </li>
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

        <div className="mt-12 border-t border-white/10 pt-6 text-center">
          <p className="text-sm text-white/50">© 2026 Foundry. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
