import { Scale, ArrowRight, MapPin, Phone, Mail } from 'lucide-react'
import { brand, footer } from '../data'

const socialLinks = ['twitter', 'facebook', 'instagram'] as const

/** Dark footer with four widgets and Component Dock copyright. */
export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand + social */}
        <div>
          <a href="#top" className="flex items-center gap-2">
            <Scale className="h-6 w-6 text-brand" />
            <span className="font-heading text-xl font-semibold">
              {brand.name}{' '}
              <span className="text-xs font-normal text-white/60">{brand.tagline}</span>
            </span>
          </a>
          <p className="mt-5 text-sm leading-relaxed text-white/60">{footer.about}</p>
          <div className="mt-6 flex gap-3">
            {socialLinks.map((name) => (
              <a
                key={name}
                href="#top"
                aria-label={name}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand"
              >
                <span className="text-xs uppercase">{name[0]}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Practice areas links */}
        <div>
          <h2 className="text-lg font-normal text-white">Practice Areas</h2>
          <ul className="mt-5 space-y-3">
            {footer.practiceLinks.map((link) => (
              <li key={link}>
                <a
                  href="#practice"
                  className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-brand"
                >
                  <ArrowRight className="h-4 w-4 text-brand" /> {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Business hours */}
        <div>
          <h2 className="text-lg font-normal text-white">Business Hours</h2>
          <ul className="mt-5 space-y-4">
            {footer.hours.map((row) => (
              <li key={row.label} className="text-sm">
                <span className="block font-medium text-white/80">{row.label}</span>
                <span className="block text-white/60">{row.value}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-lg font-normal text-white">Have a Questions?</h2>
          <ul className="mt-5 space-y-4 text-sm text-white/60">
            <li className="flex gap-3">
              <MapPin className="h-5 w-5 shrink-0 text-brand" />
              <span>{footer.contact.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="h-5 w-5 shrink-0 text-brand" />
              <span>{footer.contact.phone}</span>
            </li>
            <li className="flex gap-3">
              <Mail className="h-5 w-5 shrink-0 text-brand" />
              <span>{footer.contact.email}</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-white/10 py-6">
        <p className="px-6 text-center text-sm text-white/60">
          © {new Date().getFullYear()} Advocat — Free law firm template. More templates at{' '}
          <a
            href="https://www.componentdock.com/"
            className="font-medium text-brand transition-colors hover:text-white"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
