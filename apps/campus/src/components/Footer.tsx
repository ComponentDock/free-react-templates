import { GraduationCap, Mail, MapPin, Phone } from 'lucide-react'
import {
  contactAddress,
  contactEmail,
  contactPhones,
  contactTitle,
  copyright,
  footerAboutBlurb,
  footerCredit,
  galleryCount,
  galleryLabel,
  galleryTitle,
  siteName,
  usefulLinks,
  usefulLinksTitle,
} from '../data'
import { SocialIcons } from './SocialIcons'

export function Footer() {
  return (
    <footer className="bg-footer text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 py-16 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
        {/* About widget */}
        <div>
          <a href="#" className="flex items-center gap-2 text-white">
            <GraduationCap aria-hidden="true" className="h-6 w-6 text-accent" />
            <span className="text-2xl font-extrabold uppercase tracking-wide">{siteName}</span>
          </a>
          <p className="mt-5 text-sm leading-relaxed text-white/70">{footerAboutBlurb}</p>
          <SocialIcons className="mt-6 text-muted hover:text-white" />
        </div>

        {/* Usefull Links */}
        <nav aria-label={usefulLinksTitle}>
          <h3 className="text-lg font-semibold text-white">{usefulLinksTitle}</h3>
          <ul className="mt-5 space-y-3">
            {usefulLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-muted transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Gallery */}
        <div>
          <h3 className="text-lg font-semibold text-white">{galleryTitle}</h3>
          <ul className="mt-5 grid grid-cols-3 gap-2">
            {Array.from({ length: galleryCount }, (_, index) => (
              <li key={index}>
                <a href="#" className="group relative block overflow-hidden">
                  <img
                    src={`https://picsum.photos/seed/campus-gallery-${index + 1}/300/200`}
                    alt={galleryLabel(index)}
                    className="h-16 w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-accent/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white">{contactTitle}</h3>
          <ul className="mt-5 space-y-4">
            <li className="flex items-start gap-3">
              <MapPin aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <span className="text-sm text-white/70">{contactAddress}</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <span className="text-sm text-white/70">{contactPhones}</span>
            </li>
            <li className="flex items-start gap-3">
              <Mail aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <a
                href="mailto:office@yourbusiness.com"
                className="text-sm text-white/70 hover:text-accent"
              >
                {contactEmail}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* bottom-footer-area */}
      <div className="bg-footer-dark py-8">
        <p className="text-center text-xs text-white/70">
          {copyright} | {footerCredit}
        </p>
      </div>
    </footer>
  )
}
