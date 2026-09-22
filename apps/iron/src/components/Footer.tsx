import { useState } from 'react'
import type { FormEvent } from 'react'
import { ExternalLink, Mail, Phone, Send } from 'lucide-react'

export function Footer() {
  const [email, setEmail] = useState('')

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setEmail('')
  }

  return (
    <footer id="contact" className="bg-ink text-gray-400">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
        {/* About Us */}
        <div>
          <a
            href="#home"
            className="font-display text-2xl font-bold tracking-wide text-primary-400"
          >
            IRON
          </a>
          <h3 className="mt-5 text-sm font-semibold uppercase tracking-wider text-white">
            About Us
          </h3>
          <p className="mt-4 text-sm leading-relaxed">
            Heaven fruitful doesn't over lesser days appear creeping seasons so behold bearing days
            open. Heaven fruitful doesn't over lesser days appear creeping seasons so behold bearing
            days open.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="#"
              aria-label="Follow us on Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-gray-400 transition-colors hover:bg-primary-400 hover:text-white"
            >
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#"
              aria-label="Follow us on Twitter"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-gray-400 transition-colors hover:bg-accent-400 hover:text-white"
            >
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#"
              aria-label="Follow us on LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-gray-400 transition-colors hover:bg-blue-400 hover:text-white"
            >
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Contact Us</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary-400" aria-hidden="true" />
              <div className="flex flex-col">
                <a href="tel:+8004551234" className="transition-colors hover:text-primary-400">
                  +800 455 1234
                </a>
                <a href="tel:+456789012" className="transition-colors hover:text-primary-400">
                  +456 789 012
                </a>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary-400" aria-hidden="true" />
              <a
                href="mailto:info@ironfitness.dev"
                className="transition-colors hover:text-primary-400"
              >
                info@ironfitness.dev
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Newsletter</h3>
          <p className="mt-4 text-sm leading-relaxed">
            Heaven fruitful doesn't over lesser in days. Appear creeping seasons deve behold bearing
            days open.
          </p>
          <form onSubmit={handleSubscribe} className="mt-6 flex flex-col gap-3">
            <label htmlFor="footer-newsletter" className="sr-only">
              Email address
            </label>
            <input
              id="footer-newsletter"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="w-full min-w-0 rounded border border-gray-700 bg-gray-800 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400/30"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded bg-primary-400 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-500"
            >
              <Send className="h-4 w-4" aria-hidden="true" />
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 py-6 text-center text-sm">
        © {new Date().getFullYear()}{' '}
        <a
          href="https://www.componentdock.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-400 underline-offset-2 transition-colors hover:text-primary-300 hover:underline"
        >
          Component Dock
        </a>
        . All rights reserved.
      </div>
    </footer>
  )
}
