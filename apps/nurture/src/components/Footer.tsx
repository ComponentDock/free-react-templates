import { useState } from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    setEmail('')
  }

  return (
    <footer id="contact" className="bg-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="mb-4 text-xl font-bold">Nurture</h3>
            <p className="mb-4 text-sm text-white/60">
              Providing quality early childhood education in a warm, nurturing environment since
              2010.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <a href="#home" className="transition-colors hover:text-brand">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="transition-colors hover:text-brand">
                  About
                </a>
              </li>
              <li>
                <a href="#courses" className="transition-colors hover:text-brand">
                  Courses
                </a>
              </li>
              <li>
                <a href="#pricing" className="transition-colors hover:text-brand">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Contact</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-brand" />
                123 Education Lane, Learning City
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-brand" />
                +1 (123) 456-7890
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-brand" />
                info@nurture.com
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Newsletter</h4>
            <p className="mb-4 text-sm text-white/60">
              Subscribe to get updates on enrollment and events.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 rounded-full bg-white/10 px-4 py-2 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-brand"
                aria-label="Email for newsletter"
              />
              <button
                type="submit"
                className="rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-4 sm:flex-row">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Nurture. All rights reserved.
          </p>
          <a
            href="https://www.componentdock.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-white/40 transition-colors hover:text-brand"
          >
            More templates at Component Dock
          </a>
        </div>
      </div>
    </footer>
  )
}
