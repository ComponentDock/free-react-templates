import { Mail, Phone, MapPin } from 'lucide-react'
import { BRAND, FOOTER_COPY, FOOTER_NAV_LINKS, FOOTER_CONTACT, FOOTER_HOURS } from '../data'

export function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-16 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <a href="#home" className="mb-4 block text-xl font-bold">
            {BRAND}
          </a>
          <p className="text-sm leading-relaxed text-white/60">{FOOTER_COPY}</p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wider">Navigation</h4>
          <ul className="space-y-2">
            {FOOTER_NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-white/60 transition-colors hover:text-[#2f89fc]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wider">Contact Information</h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-2 text-sm text-white/60">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#2f89fc]" />
              {FOOTER_CONTACT.address}
            </li>
            <li className="flex items-center gap-2 text-sm text-white/60">
              <Phone className="h-4 w-4 shrink-0 text-[#2f89fc]" />
              {FOOTER_CONTACT.phone}
            </li>
            <li className="flex items-center gap-2 text-sm text-white/60">
              <Mail className="h-4 w-4 shrink-0 text-[#2f89fc]" />
              {FOOTER_CONTACT.email}
            </li>
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wider">Opening Hours</h4>
          <ul className="space-y-2">
            {FOOTER_HOURS.map((h) => (
              <li key={h.days} className="text-sm text-white/60">
                <span className="font-medium text-white/80">{h.days}</span>
                <br />
                {h.hours}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/40">
        &copy; {new Date().getFullYear()} {BRAND}. All rights reserved. Built by{' '}
        <a
          href="https://www.componentdock.com/"
          className="underline transition-colors hover:text-[#2f89fc]"
          target="_blank"
          rel="noopener noreferrer"
        >
          Component Dock
        </a>
      </div>
    </footer>
  )
}
