import { MapPin, Phone, Mail, Globe, MessageCircle, Link, Share } from 'lucide-react'

const socials = [
  { icon: Globe, label: 'Facebook' },
  { icon: MessageCircle, label: 'Twitter' },
  { icon: Link, label: 'Instagram' },
  { icon: Share, label: 'Dribbble' },
] as const

const usefulLinks = [
  'Family Law',
  'Drug Law',
  'Insurance Law',
  'Criminal Law',
  'Business Law',
] as const
const quickLinks = [
  'About Us',
  'Practice Areas',
  'Appointment',
  'Terms & Conditions',
  'FAQ',
] as const

export function Footer() {
  return (
    <footer className="bg-darker-bg text-gray-400">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand + Social */}
          <div>
            <a href="#home" className="text-2xl font-bold text-white">
              Statute
            </a>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              We are a dedicated law firm committed to providing exceptional legal services and
              fighting for the rights of our clients.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href="#"
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded border border-gray-600 text-gray-400 transition-colors hover:border-brand hover:bg-brand hover:text-white"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-bold text-white">Useful Links</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {usefulLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="transition-colors hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white">Quick Links</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="transition-colors hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-white">Contact</h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                <span>123 Legal Avenue, Justice City, JC 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                <span>info@statute.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
