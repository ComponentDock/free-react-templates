import { useState } from 'react'
import type { FormEvent } from 'react'

const helpLinks = [
  { label: 'Contact us', href: '#contact' },
  { label: 'Account', href: '#account' },
  { label: 'Shipping', href: '#shipping' },
  { label: 'Returns', href: '#returns' },
  { label: 'FAQ', href: '#faq' },
] as const

const aboutLinks = [
  { label: 'About us', href: '#about' },
  { label: 'Press', href: '#press' },
  { label: 'Careers', href: '#careers' },
  { label: 'Team', href: '#team' },
  { label: 'FAQ', href: '#faq' },
] as const

const shopLinks = [
  { label: 'Store', href: '#store' },
  { label: 'Gift Cards', href: '#gift-cards' },
  { label: 'Student Discount', href: '#student' },
] as const

export function Footer() {
  const [email, setEmail] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setEmail('')
  }

  return (
    <footer className="bg-ink text-gray-400">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        {/* Help */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Help</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {helpLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition-colors hover:text-primary-400">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* About */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">About</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {aboutLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition-colors hover:text-primary-400">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Shop */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Shop</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {shopLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition-colors hover:text-primary-400">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            Join our list and receive exclusives
          </h3>
          <form onSubmit={handleSubmit} className="mt-4 flex gap-0">
            <label htmlFor="footer-email" className="sr-only">
              Email address
            </label>
            <input
              id="footer-email"
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email"
              className="flex-1 border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:border-primary-400 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-primary-400 px-4 py-2 text-xs font-bold uppercase text-white transition-colors hover:bg-accent-400"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Copyright + Component Dock */}
      <div className="border-t border-gray-800 py-6 text-center text-sm">
        <p>
          © {new Date().getFullYear()} Merch. All rights reserved.{' '}
          <a
            href="https://www.componentdock.com/"
            className="text-primary-400 transition-colors hover:text-primary-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            More templates at Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
