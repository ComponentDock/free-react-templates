import { Phone, Mail, MapPin } from 'lucide-react'
import { BrandIcon } from './BrandIcon'

const practiceLinks = ['Family Law', 'Drug Law', 'Insurance Law', 'Criminal Law', 'Business Law']

const quickLinks = ['About Us', 'Practice Areas', 'Appointment', 'Terms & Conditions', 'FAQ']

export function Footer() {
  return (
    <footer className="bg-brand text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Column 1: About Me */}
          <div>
            <h3 className="text-lg font-bold tracking-wide">About Me</h3>
            <p className="mt-6 text-sm leading-relaxed text-white/70">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                aria-label="Twitter"
                className="flex h-10 w-10 items-center justify-center rounded border border-white/30 text-white/70 transition-colors hover:bg-white/20"
              >
                <BrandIcon name="twitter" className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded border border-white/30 text-white/70 transition-colors hover:bg-white/20"
              >
                <BrandIcon name="facebook" className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded border border-white/30 text-white/70 transition-colors hover:bg-white/20"
              >
                <BrandIcon name="instagram" className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Useful Links */}
          <div>
            <h3 className="text-lg font-bold tracking-wide">Useful Links</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              {practiceLinks.map((link) => (
                <li key={link}>
                  <a href="#services" className="transition-colors hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="text-lg font-bold tracking-wide">Quick Links</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="transition-colors hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact + Component Dock */}
          <div>
            <h3 className="text-lg font-bold tracking-wide">Have a Questions?</h3>
            <ul className="mt-5 space-y-4 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                203 Fake St. Mountain View, San Francisco, California, USA
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                +1 392 3929 210
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                info@yourdomain.com
              </li>
            </ul>
            <div className="mt-6">
              <p className="text-sm text-white/70">
                More templates at{' '}
                <a
                  href="https://www.componentdock.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-white transition-colors hover:text-white/90"
                >
                  Component Dock
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/20 py-5 text-center text-sm text-white/50">
        &copy; {new Date().getFullYear()} Alibi Law Firm. All rights reserved.
      </div>
    </footer>
  )
}
