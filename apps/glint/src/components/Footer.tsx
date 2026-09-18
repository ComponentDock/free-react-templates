import { MapPin, Phone, Mail, Globe, AtSign, Share2 } from 'lucide-react'

const openingHours = [
  { days: 'Monday – Friday', hours: '8:00 AM – 6:00 PM' },
  { days: 'Saturday', hours: '9:00 AM – 4:00 PM' },
  { days: 'Sunday', hours: 'Closed' },
] as const

const serviceLinks = [
  'Crowns & Bridges',
  'Dental Implants',
  'Teeth Whitening',
  'Root Canals',
  'Wisdom Teeth',
  'Braces',
] as const

export function Footer() {
  return (
    <footer role="contentinfo" className="bg-footer text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
        {/* About + Social */}
        <div>
          <h3 className="mb-4 font-display text-xl font-bold">Glint</h3>
          <p className="mb-6 text-sm leading-relaxed text-white/70">
            Your trusted dental clinic providing comprehensive oral care with a gentle touch. We
            believe everyone deserves a beautiful smile.
          </p>
          <div className="space-y-2 text-sm text-white/70">
            <p className="flex items-center gap-2">
              <MapPin className="h-4 w-4 shrink-0 text-primary-400" aria-hidden="true" />
              123 Dental Ave, Suite 100
            </p>
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-primary-400" aria-hidden="true" />
              +1 (555) 123-4567
            </p>
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-primary-400" aria-hidden="true" />
              info@glint-dental.com
            </p>
          </div>
          <div className="mt-4 flex gap-3">
            <a
              href="#"
              aria-label="Facebook"
              className="text-white/70 transition-colors hover:text-primary-400"
            >
              <Globe className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-white/70 transition-colors hover:text-primary-400"
            >
              <AtSign className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-white/70 transition-colors hover:text-primary-400"
            >
              <Share2 className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="mb-4 border-b border-white/20 pb-2 text-base font-semibold">
            Our Services
          </h4>
          <ul className="space-y-3 text-sm">
            {serviceLinks.map((link) => (
              <li key={link}>
                <a
                  href="#services"
                  className="text-white/70 transition-colors hover:text-primary-400"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Opening Hours */}
        <div>
          <h4 className="mb-4 border-b border-white/20 pb-2 text-base font-semibold">
            Opening Hours
          </h4>
          <ul className="space-y-3 text-sm">
            {openingHours.map((entry) => (
              <li key={entry.days} className="flex justify-between text-white/70">
                <span>{entry.days}</span>
                <span>{entry.hours}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/20 py-5 text-center text-xs text-white/50">
        © {new Date().getFullYear()} All rights reserved | Made with{' '}
        <a
          href="https://www.componentdock.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-primary-400 transition-colors hover:text-primary-300"
        >
          Component Dock
        </a>
      </div>
    </footer>
  )
}
