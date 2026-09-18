import { Phone, Mail, MapPin } from 'lucide-react'
import { BrandIcon, type BrandName } from './BrandIcon'

const socials: ReadonlyArray<{ label: string; name: BrandName }> = [
  { label: 'Twitter', name: 'x' },
  { label: 'Facebook', name: 'facebook' },
  { label: 'Instagram', name: 'instagram' },
]

const quickLinks = ['Home', 'About', 'Services', 'Blog', 'Contact'] as const

const serviceLinks = [
  'Custom Tailoring',
  'Alterations',
  'Bespoke Suits',
  'Wedding Attire',
  'Repairs',
] as const

const hours = [
  { day: 'Monday - Friday', time: '9:00 AM - 6:00 PM' },
  { day: 'Saturday', time: '10:00 AM - 4:00 PM' },
  { day: 'Sunday', time: 'Closed' },
] as const

export function Footer() {
  return (
    <footer className="bg-ink text-white transition-colors dark:bg-ink-dark">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#home" className="flex items-center gap-2">
              <span className="font-display text-xl font-bold uppercase tracking-[0.2em]">
                Stitchly<span className="text-brand">.</span>
              </span>
            </a>
            <p className="mt-5 text-sm leading-relaxed text-gray-400">
              Expert tailoring services with a personal touch. We bring your vision to life with
              precision and care.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href="#home"
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
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-gray-400">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="transition-colors hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-bold uppercase tracking-wide text-brand">
              Our Services
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-gray-400">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <a href="#services" className="transition-colors hover:text-white">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-bold uppercase tracking-wide text-brand">
              Opening Hours
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-gray-400">
              {hours.map((entry) => (
                <li key={entry.day} className="flex justify-between">
                  <span>{entry.day}</span>
                  <span>{entry.time}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 space-y-3 text-sm text-gray-400">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                (80) 783 367-3904
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                info@stitchly.com
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                <span>123 Tailor Street, Fashion District</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 py-5 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Stitchly. All rights reserved. · More templates at{' '}
        <a
          href="https://www.componentdock.com/"
          className="text-white underline-offset-4 transition-colors hover:text-brand hover:underline"
        >
          Component Dock
        </a>
      </div>
    </footer>
  )
}
