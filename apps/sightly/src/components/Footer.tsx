import { Phone, Mail, MapPin, Globe, Globe2, MessageCircle } from 'lucide-react'

const navLinks = ['Home', 'About', 'Services', 'Blog', 'Contact']
const serviceLinks = [
  'Digital Marketing',
  'Social Media Marketing',
  'Content Marketing',
  'Web Design',
  'SEO Strategy',
]

export function Footer() {
  return (
    <footer role="contentinfo" className="bg-footer-bg text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-16 md:grid-cols-4">
        {/* Brand & Social */}
        <div>
          <h3 className="mb-4 text-2xl font-bold font-heading">Expo</h3>
          <p className="mb-4 text-sm text-gray-300">
            Helping brands grow through strategic digital marketing solutions.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              aria-label="Facebook"
              className="text-gray-300 transition-colors hover:text-white"
            >
              <Globe size={20} />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-gray-300 transition-colors hover:text-white"
            >
              <Globe2 size={20} />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-gray-300 transition-colors hover:text-white"
            >
              <MessageCircle size={20} />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="mb-4 text-lg font-semibold font-heading">Navigation</h4>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="text-sm text-gray-300 transition-colors hover:text-white"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="mb-4 text-lg font-semibold font-heading">Services</h4>
          <ul className="space-y-2">
            {serviceLinks.map((link) => (
              <li key={link}>
                <a
                  href="#services"
                  className="text-sm text-gray-300 transition-colors hover:text-white"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-4 text-lg font-semibold font-heading">Contact</h4>
          <ul className="space-y-3">
            <li className="flex items-center gap-2 text-sm text-gray-300">
              <Phone size={16} />
              +1 234 567 890
            </li>
            <li className="flex items-center gap-2 text-sm text-gray-300">
              <Mail size={16} />
              info@expo.com
            </li>
            <li className="flex items-center gap-2 text-sm text-gray-300">
              <MapPin size={16} />
              123 Marketing St, Digital City
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 py-6">
        <div className="mx-auto max-w-7xl px-4 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Expo. All rights reserved. More templates at{' '}
          <a
            href="https://www.componentdock.com/"
            className="text-primary transition-colors hover:text-white"
          >
            Component Dock
          </a>
        </div>
      </div>
    </footer>
  )
}
