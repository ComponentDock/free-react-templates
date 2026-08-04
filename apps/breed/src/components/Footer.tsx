import { Mail, MapPin, Phone } from 'lucide-react'
import { SocialLinks } from './SocialLinks'

const quickLinks = ['About', 'Terms of Use', 'Disclaimers', 'Contact'] as const

export function Footer() {
  return (
    <footer id="contact" className="bg-night py-16 text-white/50">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 md:grid-cols-3">
        <div>
          <h3 className="text-base font-bold text-white">About The Breed</h3>
          <p className="mt-5 text-sm font-light leading-relaxed">
            A loving community for dog owners and breeders — breed guides, care tips, and everything
            your furry friend needs to live its best life.
          </p>
        </div>
        <div>
          <h3 className="text-base font-bold text-white">Contact Info</h3>
          <ul className="mt-5 space-y-4 text-sm font-light">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              <span>34 Street Name, City Name Here, United States</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              <a href="tel:+12424942290" className="transition-colors hover:text-white">
                +1 242 4942 290
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              <a href="mailto:info@yourdomain.com" className="transition-colors hover:text-white">
                info@yourdomain.com
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-base font-bold text-white">Quick Links</h3>
          <ul className="mt-5 space-y-3 text-sm font-light">
            {quickLinks.map((link) => (
              <li key={link}>
                <a href="#top" className="transition-colors hover:text-white">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-14 flex max-w-6xl flex-col items-center justify-between gap-6 border-t border-white/10 px-4 pt-8 sm:flex-row sm:px-6">
        <p className="text-sm font-light">
          Copyright © {new Date().getFullYear()} Breed. All rights reserved.
        </p>
        <SocialLinks />
      </div>
    </footer>
  )
}
