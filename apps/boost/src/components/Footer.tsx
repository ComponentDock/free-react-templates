import type { FormEvent } from 'react'
import { Send } from 'lucide-react'
import { SocialLinks } from './SocialLinks'

const quickLinks = [
  { label: 'Terms', href: '#home' },
  { label: 'Policy', href: '#home' },
  { label: 'About Us', href: '#features' },
  { label: 'Services', href: '#features' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact Us', href: '#contact' },
] as const

export function Footer() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    event.currentTarget.reset()
  }

  return (
    <footer className="bg-paper py-16 dark:bg-gray-950">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="text-lg font-semibold text-ink dark:text-white">About Us</h3>
          <p className="mt-5 text-sm font-light leading-relaxed text-mist dark:text-gray-400">
            Boost is the all-in-one productivity suite for modern teams. Plan, collaborate, and ship
            faster — everything in one place.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-ink dark:text-white">Quick Links</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="font-light text-mist transition-colors hover:text-brand dark:text-gray-400 dark:hover:text-brand"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-ink dark:text-white">Follow Us</h3>
          <div className="mt-5">
            <SocialLinks />
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-ink dark:text-white">Subscribe Newsletter</h3>
          <p className="mt-5 text-sm font-light text-mist dark:text-gray-400">
            Get product news and tips in your inbox.
          </p>
          <form onSubmit={handleSubmit} className="mt-5 flex gap-2">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              name="email"
              type="email"
              required
              placeholder="Email address"
              className="w-full rounded border border-line bg-white px-3 py-2 text-sm text-ink outline-none transition-colors focus:border-brand dark:border-gray-700 dark:bg-gray-900 dark:text-white"
            />
            <button
              type="submit"
              className="inline-flex shrink-0 items-center gap-1.5 rounded bg-brand px-4 py-2 text-sm font-semibold text-white transition-colors hover:brightness-95"
            >
              <Send className="h-4 w-4" aria-hidden="true" />
              Send
            </button>
          </form>
        </div>
      </div>
      <div className="mx-auto mt-14 flex max-w-6xl flex-col items-center justify-between gap-6 border-t border-line px-4 pt-8 sm:flex-row sm:px-6">
        <p className="text-sm font-light text-mist dark:text-gray-400">
          Copyright © {new Date().getFullYear()} Boost. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
