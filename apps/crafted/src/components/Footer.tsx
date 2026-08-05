import { useState } from 'react'
import { SocialLinks } from './SocialLinks'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Team', href: '#team' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
] as const

export function Footer() {
  const [email, setEmail] = useState('')

  return (
    <footer id="contact" className="bg-ink py-16 text-gray-300">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <h2 className="font-display text-2xl font-bold text-white">About Crafted</h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              The world has become so fast paced that people don't want to stand by reading a page
              of information; they would much rather look at a presentation and understand it.
            </p>
            <div className="mt-6">
              <SocialLinks inverted />
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-white">Navigation Links</h2>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 transition-colors hover:text-primary-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-white">Newsletter</h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              For business professionals caught between high OEM price and mediocre print and
              graphic output.
            </p>
            <form
              aria-label="Newsletter signup"
              onSubmit={(event) => event.preventDefault()}
              className="mt-6 flex"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Email Address"
                className="w-full rounded-none border border-gray-600 bg-transparent px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-primary-400 focus:outline-none"
              />
              <button
                type="submit"
                className="shrink-0 bg-gradient-to-r from-primary-500 to-primary-300 px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center gap-4 border-t border-gray-800 pt-8 text-sm text-gray-500 sm:flex-row sm:justify-between">
          <p>Copyright © {new Date().getFullYear()} Crafted. All rights reserved.</p>
          <p>
            This template is made with <span aria-hidden="true">♥</span> by Crafted
          </p>
        </div>
      </div>
    </footer>
  )
}
