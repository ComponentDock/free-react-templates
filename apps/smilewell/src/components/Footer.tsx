import { Globe, AtSign, Share2, Send } from 'lucide-react'
import { type FormEvent, useState } from 'react'

const features = ['About Us', 'Services', 'Testimonials', 'Contact Us'] as const

const socialLinks = [
  { Icon: Globe, label: 'Facebook' },
  { Icon: AtSign, label: 'Twitter' },
  { Icon: Share2, label: 'Instagram' },
  { Icon: Send, label: 'LinkedIn' },
] as const

export function Footer() {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault()
    setEmail('')
  }

  return (
    <footer role="contentinfo" className="bg-footer text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {/* About */}
          <div>
            <h3 className="mb-4 text-lg font-bold">About Us</h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Smilewell is a modern dental clinic dedicated to providing exceptional oral
              healthcare. Our experienced team combines advanced technology with compassionate care
              to give you the best dental experience.
            </p>
          </div>

          {/* Features */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Features</h3>
            <ul className="space-y-2">
              {features.map((f) => (
                <li key={f}>
                  <a href="#" className="text-sm text-gray-400 transition-colors hover:text-brand">
                    {f}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter + Social */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Newsletter</h3>
            <form onSubmit={handleSubscribe} className="mb-6 flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 rounded-l bg-gray-700 px-4 py-2 text-sm text-white placeholder-gray-400 outline-none focus:ring-1 focus:ring-brand"
                aria-label="Email for newsletter"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="rounded-r bg-brand px-4 text-white transition-colors hover:bg-primary-400"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
            <h4 className="mb-3 text-sm font-bold">Follow Us</h4>
            <div className="flex gap-4">
              {socialLinks.map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="text-gray-400 transition-colors hover:text-brand"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-4 sm:flex-row sm:px-6">
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Smilewell. All rights reserved.
          </p>
          <a
            href="https://www.componentdock.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-gray-400 transition-colors hover:text-brand"
          >
            Made with Component Dock
          </a>
        </div>
      </div>
    </footer>
  )
}
