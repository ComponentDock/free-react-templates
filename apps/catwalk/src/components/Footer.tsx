import { Mail, MapPin, Phone } from 'lucide-react'
import { SocialLinks } from './SocialLinks'

const popularLinks = [
  { label: 'Finding Agency', href: '#about' },
  { label: 'Types of Modeling', href: '#about' },
  { label: 'Freelance', href: '#about' },
  { label: 'Search Models', href: '#models' },
] as const

const quickLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Models', href: '#models' },
  { label: 'Blog', href: '#blog' },
  { label: 'Terms & Conditions', href: '#home' },
  { label: 'FAQ', href: '#home' },
] as const

export function Footer() {
  return (
    <footer id="contact" className="bg-peach py-16 text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="text-lg font-semibold text-white">About Me</h3>
          <p className="mt-5 text-sm font-light leading-relaxed text-white/80">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts. Separated they live in Bookmarksgrove.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">Popular Links</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {popularLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="font-light text-white/80 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="font-light text-white/80 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">Have a Questions?</h3>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white" aria-hidden="true" />
              <span className="font-light text-white/80">
                <span className="block">203 Fake St. Mountain View,</span>
                <span className="block">San Francisco, California, USA</span>
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-white" aria-hidden="true" />
              <span className="font-light text-white/80">+2 392 3929 210</span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-white" aria-hidden="true" />
              <a
                href="mailto:info@yourdomain.com"
                className="font-light text-white/80 transition-colors hover:text-white"
              >
                info@yourdomain.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-14 flex max-w-6xl flex-col items-center justify-between gap-6 border-t border-white/20 px-4 pt-8 sm:flex-row sm:px-6">
        <p className="text-sm font-light text-white/80">
          Copyright © {new Date().getFullYear()} Catwalk. All rights reserved.
        </p>
        <SocialLinks />
      </div>
    </footer>
  )
}
