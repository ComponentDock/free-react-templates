import { Church, Mail, MapPin, Phone } from 'lucide-react'
import { componentDockUrl, footerAboutText, footerContact, footerQuickLinks } from '../data'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-dark text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          {/* About */}
          <div>
            <a
              href="#home"
              className="flex items-center gap-2 font-semibold uppercase tracking-widest"
            >
              <Church className="h-5 w-5 text-brand" aria-hidden="true" />
              Synod
            </a>
            <p className="mt-4 text-sm leading-relaxed text-white/60">{footerAboutText}</p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {footerQuickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-white/60 transition-colors hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide">Contact</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2 text-sm text-white/60">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{footerContact.address}</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/60">
                <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{footerContact.phone}</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/60">
                <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{footerContact.email}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center gap-4 border-t border-white/10 pt-8 text-center text-sm text-white/60 md:flex-row md:justify-between md:text-left">
          <p>© {year} Synod Church. All rights reserved.</p>
          <a href={componentDockUrl} className="text-white/60 transition-colors hover:text-white">
            More templates at Component Dock
          </a>
        </div>
      </div>
    </footer>
  )
}
