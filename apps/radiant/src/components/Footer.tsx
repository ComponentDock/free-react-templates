import { useState } from 'react'
import type { FormEvent } from 'react'

const footerLinks = {
  help: [
    { label: 'Contact us', href: '#contact' },
    { label: 'Web Design', href: '#' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#' },
  ],
  about: [
    { label: 'About us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Solutions', href: '#services' },
    { label: 'Team', href: '#' },
  ],
  support: [
    { label: 'Knowledge base', href: '#' },
    { label: 'Forum', href: '#' },
    { label: 'Contact', href: '#contact' },
  ],
} as const

export function Footer() {
  const [email, setEmail] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setEmail('')
  }

  return (
    <footer id="contact" className="bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-ink dark:text-white">
            Help
          </h3>
          <ul className="space-y-2 text-sm text-smoke dark:text-gray-400">
            {footerLinks.help.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition-colors hover:text-primary-400">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-ink dark:text-white">
            About
          </h3>
          <ul className="space-y-2 text-sm text-smoke dark:text-gray-400">
            {footerLinks.about.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition-colors hover:text-primary-400">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-ink dark:text-white">
            Support
          </h3>
          <ul className="space-y-2 text-sm text-smoke dark:text-gray-400">
            {footerLinks.support.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition-colors hover:text-primary-400">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-ink dark:text-white">
            Subscribe
          </h3>
          <form onSubmit={handleSubmit} className="flex gap-2">
            <label htmlFor="subscribe-email" className="sr-only">
              Email address
            </label>
            <input
              id="subscribe-email"
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email address"
              className="min-w-0 flex-1 rounded-md border border-gray-200 bg-white px-4 py-2.5 text-sm text-ink placeholder:text-gray-400 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400/30 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-500"
            />
            <button
              type="submit"
              className="shrink-0 rounded-md bg-ink px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-ink dark:hover:bg-gray-200"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-200 py-6 text-center text-sm text-smoke dark:border-gray-800 dark:text-gray-400">
        © {new Date().getFullYear()} Radiant. More templates at{' '}
        <a
          href="https://www.componentdock.com/"
          className="font-semibold text-primary-500 transition-colors hover:text-primary-600"
        >
          Component Dock
        </a>
        .
      </div>
    </footer>
  )
}
