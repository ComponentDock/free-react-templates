import { Mail, MapPin, Phone } from 'lucide-react'
import { SocialLinks } from './SocialLinks'

const services = ['Pet Insurance', 'Pet surgeries', 'Pet Adoption', 'Dog Insurance'] as const

const quickLinks = ['Privacy Policy', 'Terms of Service', 'Login info', 'Knowledge Base'] as const

export function Footer() {
  return (
    <footer id="contact" className="bg-night py-16 text-gray-300">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="text-lg font-semibold text-white">Pawcare</h3>
          <p className="mt-5 text-sm font-light leading-relaxed text-gray-400">
            A caring home for pets of every kind — boarding, meals, spa, and love, all in one place.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              <a
                href="mailto:Demomail@gmail.Com"
                className="font-light text-gray-400 transition-colors hover:text-brand"
              >
                Demomail@gmail.Com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              <span className="font-light text-gray-400">700, Green Lane, New York, USA</span>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold uppercase text-white">Our Services</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {services.map((service) => (
              <li key={service}>
                <a
                  href="#about"
                  className="font-light text-gray-400 transition-colors hover:text-brand"
                >
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold uppercase text-white">Quick Link</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {quickLinks.map((link) => (
              <li key={link}>
                <a
                  href="#contact"
                  className="font-light text-gray-400 transition-colors hover:text-brand"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold uppercase text-white">Reach Us</h3>
          <p className="mt-5 text-sm font-light text-gray-400">239 E 5th St, New York</p>
          <p className="mt-1 text-sm font-light text-gray-400">NY 10003, USA</p>
          <p className="mt-4 inline-flex items-center gap-2 text-sm font-light text-gray-400">
            <Phone className="h-4 w-4 text-brand" aria-hidden="true" />
            +555 0000 565
          </p>
        </div>
      </div>
      <div className="mx-auto mt-14 flex max-w-6xl flex-col items-center justify-between gap-6 border-t border-white/10 px-4 pt-8 sm:flex-row sm:px-6">
        <p className="text-sm font-light text-gray-400">
          Copyright © {new Date().getFullYear()} Pawcare. All rights reserved.
        </p>
        <SocialLinks />
      </div>
    </footer>
  )
}
