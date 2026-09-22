import { MapPin, Phone, Mail } from 'lucide-react'
import { FOOTER } from '../data'

const SOCIAL_ICONS: Record<string, string> = {
  Facebook: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z',
  Twitter:
    'M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z',
  Instagram: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zm1.5-4.87h.01',
  Pinterest:
    'M12 2C6.477 2 2 6.477 2 12c0 4.236 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.182-.78 1.172-4.97 1.172-4.97s-.299-.598-.299-1.482c0-1.388.806-2.425 1.808-2.425.853 0 1.265.64 1.265 1.408 0 .858-.546 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.177-4.068-2.845 0-4.515 2.135-4.515 4.34 0 .859.331 1.781.745 2.282a.3.3 0 0 1 .069.288l-.278 1.133c-.044.183-.145.222-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.527-2.291-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.449 2.962.449 5.523 0 10-4.477 10-10S17.523 2 12 2z',
}

export function Footer() {
  return (
    <footer className="bg-dark pt-16 pb-8">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-3">
        {/* About */}
        <div>
          <h3 className="font-heading text-xl font-semibold text-white">{FOOTER.about.heading}</h3>
          <p className="mt-4 text-sm leading-relaxed text-white/60">{FOOTER.about.text}</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-heading text-xl font-semibold text-white">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            {FOOTER.quickLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-heading text-xl font-semibold text-white">
            {FOOTER.contact.heading}
          </h3>
          <ul className="mt-4 space-y-3">
            <li className="flex items-start gap-3 text-sm text-white/60">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
              {FOOTER.contact.lines[0]}, {FOOTER.contact.lines[1]}, {FOOTER.contact.lines[2]}
            </li>
            <li className="flex items-center gap-3 text-sm text-white/60">
              <Phone className="h-4 w-4 shrink-0 text-brand" />
              {FOOTER.contact.lines[3]}
            </li>
            <li className="flex items-center gap-3 text-sm text-white/60">
              <Mail className="h-4 w-4 shrink-0 text-brand" />
              info@sovereignhotel.com
            </li>
          </ul>
        </div>
      </div>

      {/* Social + copyright */}
      <div className="mx-auto mt-12 max-w-6xl border-t border-white/10 px-4 pt-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex gap-4">
            {FOOTER.socialIcons.map((social) => (
              <a
                key={social.name}
                href={social.href}
                aria-label={social.name}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-brand"
              >
                <svg
                  className="h-4 w-4 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d={SOCIAL_ICONS[social.name]} />
                </svg>
              </a>
            ))}
          </div>
          <p className="text-xs text-white/40">{FOOTER.copyright}</p>
          <a
            href={FOOTER.dockLink.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-white/40 transition-colors hover:text-brand"
          >
            {FOOTER.dockLink.label}
          </a>
        </div>
      </div>
    </footer>
  )
}
