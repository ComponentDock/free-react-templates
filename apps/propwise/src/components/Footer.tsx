import { MapPin, Phone, Mail, Globe, Share2, Camera, Play } from 'lucide-react'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Properties', href: '#property' },
  { label: 'Contact', href: '#contact' },
]

const propertyTypes = [
  { label: 'Apartments', href: '#' },
  { label: 'Houses', href: '#' },
  { label: 'Condos', href: '#' },
  { label: 'Townhouses', href: '#' },
]

export function Footer() {
  return (
    <footer id="contact" className="bg-dark text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <a href="#home" className="text-xl font-bold tracking-tight">
              Prop<span className="text-brand">wise</span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Your trusted partner in finding the perfect property. We connect buyers with their
              dream homes across the country.
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
                  className="flex h-10 w-10 items-center justify-center rounded border border-gray-600 text-gray-400 transition-colors hover:border-brand hover:bg-brand hover:text-white"
                >
                  <s.icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-brand">Contact Info</h3>
            <ul className="mt-5 space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                <span>200, A-block, Green Road, USA</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                +1 2312-3-1209
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                info@propwise.com
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-brand">Quick Links</h3>
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
            <h3 className="text-sm font-bold uppercase tracking-wide text-brand">Property Types</h3>
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
            &copy; {new Date().getFullYear()} Propwise. All rights reserved. More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              className="underline hover:text-brand transition-colors"
            >
              Component Dock
            </a>
          </p>
          <div className="flex items-center gap-4">
            {quickLinks.map((link) => (
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
