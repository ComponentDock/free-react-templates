import { Send } from 'lucide-react'
import { useState } from 'react'

const quickLinks = [
  'Home',
  'Feature',
  'Services',
  'Portfolio',
  'Team',
  'Pricing',
  'Blog',
  'Contact',
]

export function Footer() {
  const [email, setEmail] = useState('')

  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider">
              About Agency
            </h4>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              The world has become so fast paced that people don&apos;t want to stand by reading a
              page of information to be they would much rather look at a presentation and
              understand.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider">
              Navigation Links
            </h4>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-sm text-gray-400 transition-colors hover:text-primary-400"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider">Newsletter</h4>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              For business professionals caught between high OEM price and mediocre print and
              graphic output.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="mt-4 flex">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-gray-500 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="bg-primary-500 px-4 text-white transition-colors hover:bg-primary-600"
              >
                <Send size={16} />
              </button>
            </form>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider">Follow Us</h4>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Stay connected for the latest travel deals and destination guides.
            </p>
            <div className="mt-4 flex gap-3">
              {['Facebook', 'Twitter', 'Instagram'].map((social) => (
                <a
                  key={social}
                  href="#"
                  aria-label={social}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-xs text-gray-400 transition-colors hover:bg-primary-500 hover:text-white"
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 sm:flex-row lg:px-8">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Expedio. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-primary-400 underline hover:text-primary-300"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
