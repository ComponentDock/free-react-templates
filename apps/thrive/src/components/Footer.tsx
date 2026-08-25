import { useState } from 'react'
import type { FormEvent } from 'react'

const HELP_LINKS = ['Contact us', 'Bootstrap 5', 'Web Design', 'Pricing', 'FAQ'] as const
const ABOUT_LINKS = ['About us', 'Services', 'Solutions', 'Team', 'FAQ'] as const
const SUPPORT_LINKS = ['Knowledge base', 'Forum', 'Contact'] as const

export function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address')
      return
    }
    setError('')
    setSubscribed(true)
  }

  return (
    <footer className="bg-surface-light pt-24 pb-16 text-sm">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Help */}
          <div>
            <h3 className="mb-6 text-base font-bold">Help</h3>
            <ul className="space-y-3">
              {HELP_LINKS.map((link) => (
                <li key={link}>
                  <a href="#" className="text-text-black-50 transition-colors hover:text-gray-900">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="mb-6 text-base font-bold">About</h3>
            <ul className="space-y-3">
              {ABOUT_LINKS.map((link) => (
                <li key={link}>
                  <a href="#" className="text-text-black-50 transition-colors hover:text-gray-900">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-6 text-base font-bold">Support</h3>
            <ul className="space-y-3">
              {SUPPORT_LINKS.map((link) => (
                <li key={link}>
                  <a href="#" className="text-text-black-50 transition-colors hover:text-gray-900">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="mb-6 text-base font-bold">Subscribe</h3>
            {subscribed ? (
              <p className="text-brand-teal font-semibold">Thank you for subscribing!</p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    setError('')
                  }}
                  className="w-full rounded-[7px] border border-transparent bg-icon-circle px-4 py-3 text-sm focus:border-brand-teal focus:outline-none"
                  aria-label="Email address"
                />
                {error && <p className="text-xs text-red-500">{error}</p>}
                <button
                  type="submit"
                  className="w-full rounded bg-brand-teal px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-teal-dark"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-gray-200 pt-8 text-center">
          <p className="text-text-black-50">
            Copyright &copy; {new Date().getFullYear()} All rights reserved | Made with &#10084; by{' '}
            <a
              href="https://www.componentdock.com/"
              className="font-semibold text-brand-teal transition-colors hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
