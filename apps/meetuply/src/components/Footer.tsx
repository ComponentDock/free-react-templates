import { MapPin, Phone, Mail, Globe, MessageSquare, Send, Share2 } from 'lucide-react'

const USEFUL_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Speakers', href: '#speakers' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Blog', href: '#blog' },
]

const CONTACT_INFO = [
  { icon: MapPin, text: '204 Manhattan, Convention Center, Manila' },
  { icon: Phone, text: '+63 917 123 4567' },
  { icon: Mail, text: 'info@meetuply.com' },
]

const SOCIALS = [
  { icon: Globe, label: 'Facebook', href: '#' },
  { icon: MessageSquare, label: 'Twitter', href: '#' },
  { icon: Send, label: 'Instagram', href: '#' },
  { icon: Share2, label: 'LinkedIn', href: '#' },
]

export function Footer() {
  return (
    <footer id="contact" className="bg-charcoal py-12 text-gray-300">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 md:grid-cols-3">
        <div>
          <h4 className="mb-4 text-lg font-bold text-white">
            <span className="text-white">Meetup</span>
            <span className="text-brand">ly</span>
          </h4>
          <p className="text-sm leading-relaxed">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
          </p>
          <div className="mt-4 flex gap-3">
            {SOCIALS.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="text-gray-400 transition-colors hover:text-brand"
                >
                  <Icon size={16} />
                </a>
              )
            })}
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-lg font-bold text-white">Useful Links</h4>
          <ul className="space-y-2">
            {USEFUL_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-sm transition-colors hover:text-brand">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-lg font-bold text-white">Have a Questions?</h4>
          <ul className="space-y-3">
            {CONTACT_INFO.map((item) => {
              const Icon = item.icon
              return (
                <li key={item.text} className="flex items-start gap-2 text-sm">
                  <Icon size={16} className="mt-0.5 shrink-0 text-brand" />
                  {item.text}
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-white/10 pt-6 text-center">
        <p className="text-sm text-gray-400">
          More templates at{' '}
          <a href="https://www.componentdock.com/" className="text-brand hover:underline">
            Component Dock
          </a>
        </p>
        <p className="mt-2 text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Meetuply. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
