import { Mail, MapPin, Phone } from 'lucide-react'
import { SocialLinks } from './SocialLinks'

const usefulLinks = [
  { label: 'Home', href: '/' },
  { label: 'Service', href: '#about' },
  { label: 'About', href: '#about' },
  { label: 'Case Study', href: '#about' },
  { label: 'Pricing', href: '#about' },
  { label: 'Team', href: '#about' },
] as const

export function Footer() {
  return (
    <footer id="contact" className="bg-night py-16 text-gray-300">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-3">
        <div>
          <h3 className="text-lg font-semibold uppercase text-white">About Us</h3>
          <p className="mt-5 text-sm font-light leading-relaxed text-gray-400">
            A caring shelter for pets of every kind. We rescue, nurture, and rehome animals with the
            help of our community of volunteers and guardians.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold uppercase text-white">Useful Links</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {usefulLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="font-light text-gray-400 transition-colors hover:text-brand"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold uppercase text-white">Contact Us</h3>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              <span className="font-light text-gray-400">
                <span className="block">Binghamton, New York</span>
                <span className="block">4343 Hinkle Deegan Lake Road</span>
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              <span className="font-light text-gray-400">
                <span className="block">00 (953) 9865 562</span>
                <span className="block">Mon to Fri 9am to 6 pm</span>
              </span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              <a
                href="mailto:support@colorlib.com"
                className="font-light text-gray-400 transition-colors hover:text-brand"
              >
                support@colorlib.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-14 flex max-w-6xl flex-col items-center justify-between gap-6 border-t border-white/10 px-4 pt-8 sm:flex-row sm:px-6">
        <p className="text-sm font-light text-gray-400">
          Copyright © {new Date().getFullYear()} Animal Shelter. All rights reserved.
        </p>
        <SocialLinks />
      </div>
    </footer>
  )
}
