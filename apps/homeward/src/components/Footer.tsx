import { Globe, Share2, Camera, Play, MapPin, Phone, Mail } from 'lucide-react'

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Listings', href: '#listings' },
  { label: 'News', href: '#news' },
  { label: 'Contact', href: '#contact' },
]

const propertyTypes = [
  { label: 'Houses', href: '#' },
  { label: 'Apartments', href: '#' },
  { label: 'Condos', href: '#' },
  { label: 'Townhomes', href: '#' },
]

const bottomLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Listings', href: '#listings' },
  { label: 'News', href: '#news' },
  { label: 'Contact', href: '#contact' },
]

export function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <a href="#home" className="text-xl font-bold tracking-tight">
              Home<span className="text-accent">ward</span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Finding your perfect home is our mission. Browse thousands of properties and discover
              the one that fits your lifestyle.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[
                { icon: Globe, label: 'Facebook' },
                { icon: Share2, label: 'Twitter' },
                { icon: Camera, label: 'Instagram' },
                { icon: Play, label: 'YouTube' },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded border border-gray-600 text-gray-400 transition-colors hover:border-accent hover:bg-accent hover:text-white"
                >
                  <s.icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
            <a
              href="#submit"
              className="mt-6 inline-block rounded bg-accent px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
            >
              Submit Listing
            </a>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-accent">Information</h3>
            <ul className="mt-5 space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <span>200, A-block, Green road, USA</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                +10 367 267 2678
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                info@homeward.com
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-accent">Useful Links</h3>
            <ul className="mt-5 space-y-3 text-sm text-gray-400">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-accent">
              Property Types
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-gray-400">
              {propertyTypes.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 py-5">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 text-xs text-gray-500 sm:flex-row sm:px-6">
          <p>
            &copy; {new Date().getFullYear()} Homeward. All rights reserved. Built by{' '}
            <a
              href="https://www.componentdock.com/"
              className="underline hover:text-accent transition-colors"
            >
              Component Dock
            </a>
          </p>
          <div className="flex items-center gap-4">
            {bottomLinks.map((link) => (
              <a key={link.label} href={link.href} className="hover:text-white transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
