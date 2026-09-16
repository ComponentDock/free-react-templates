import { Mail, Phone, MapPin } from 'lucide-react'
import { useState } from 'react'

const quickLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Sermons', href: '#sermons' },
  { label: 'Events', href: '#events' },
  { label: 'Contact', href: '#contact' },
]

export function Footer() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setEmail('')
  }

  return (
    <footer id="contact" className="bg-text-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-oldstandard text-2xl font-bold mb-6">Alleluia</h3>
            <div className="flex flex-col gap-3 text-white/70 text-sm">
              <span className="flex items-center gap-2">
                <MapPin size={16} className="text-brand-light" />
                123 Faith Street, Grace City
              </span>
              <span className="flex items-center gap-2">
                <Phone size={16} className="text-brand-light" />
                +1 (555) 123-4567
              </span>
              <span className="flex items-center gap-2">
                <Mail size={16} className="text-brand-light" />
                info@alleluia.church
              </span>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-3 text-white/70 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Newsletter</h4>
            <p className="text-white/70 text-sm mb-4">
              Subscribe to receive updates about our services and events.
            </p>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                aria-label="Email for newsletter"
                className="flex-1 px-4 py-2 rounded bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-brand-light"
                required
              />
              <button
                type="submit"
                className="bg-brand hover:bg-brand-dark px-4 py-2 rounded text-white text-sm font-semibold transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center text-white/50 text-sm">
          <p>
            Made with{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-light hover:text-white transition-colors"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
