import {
  HardHat,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  Globe,
  MessageSquare,
  Camera,
} from 'lucide-react'

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Rental Services', href: '#services' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

const serviceLinks = [
  'Customer Services',
  'Prompt Delivery',
  'Reliable Equipment',
  'New Heavy Equipment',
]

const socialLinks = [
  { icon: Globe, label: 'Twitter', href: '#' },
  { icon: MessageSquare, label: 'Facebook', href: '#' },
  { icon: Camera, label: 'Instagram', href: '#' },
]

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <a href="#home" className="mb-4 flex items-center gap-2 text-xl font-bold text-white">
              <HardHat className="h-6 w-6 text-primary-500" aria-hidden="true" />
              Squadly
            </a>
            <p className="mb-4 text-sm text-gray-400">
              Far far away, behind the word mountains, far from the countries.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-colors hover:bg-primary-500 hover:text-white"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    <ChevronRight className="h-3 w-3 text-primary-500" aria-hidden="true" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((svc) => (
                <li key={svc}>
                  <a
                    href="#services"
                    className="flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    <ChevronRight className="h-3 w-3 text-primary-500" aria-hidden="true" />
                    {svc}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Have a Questions?</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin
                  className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary-500"
                  aria-hidden="true"
                />
                <span>203 Fake St. Mountain View, San Francisco, California, USA</span>
              </li>
              <li>
                <a
                  href="tel:+123923929210"
                  className="flex items-center gap-3 text-sm text-gray-400 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4 flex-shrink-0 text-primary-500" aria-hidden="true" />
                  +2 392 3929 210
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@yourdomain.com"
                  className="flex items-center gap-3 text-sm text-gray-400 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 flex-shrink-0 text-primary-500" aria-hidden="true" />
                  info@yourdomain.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="bg-primary-600 py-4">
        <div className="mx-auto max-w-6xl px-4 text-center text-sm text-white sm:px-6">
          &copy; {new Date().getFullYear()} All rights reserved | Made with{' '}
          <a
            href="https://www.componentdock.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-gray-200"
          >
            Component Dock
          </a>
        </div>
      </div>
    </footer>
  )
}
