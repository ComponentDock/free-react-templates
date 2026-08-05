import { useState, type FormEvent } from 'react'
import { Send } from 'lucide-react'
import { SocialLinks } from './SocialLinks'

const columns = [
  {
    title: 'Top Products',
    links: ['Managed Website', 'Manage Reputation', 'Power Tools', 'Marketing Service'],
  },
  {
    title: 'Quick Links',
    links: ['Jobs', 'Brand Assets', 'Investor Relations', 'Terms of Service'],
  },
  {
    title: 'Features',
    links: ['Analytics', 'Automation', 'Integrations', 'Security'],
  },
  {
    title: 'Resources',
    links: ['Guides', 'Research', 'Experts', 'Agencies'],
  },
] as const

export function Footer() {
  const [email, setEmail] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setEmail('')
  }

  return (
    <footer id="contact" className="bg-night py-16 text-gray-300">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-6">
        {columns.map((column) => (
          <div key={column.title} className="lg:col-span-1">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white">
              {column.title}
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              {column.links.map((link) => (
                <li key={link}>
                  <a href="#home" className="text-gray-500 transition-colors hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="lg:col-span-2">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white">Newsletter</h4>
          <p className="mt-5 text-sm text-gray-500">
            You can trust us — we only send promo offers.
          </p>
          <form onSubmit={handleSubmit} className="mt-6 flex items-stretch">
            <label htmlFor="appru-newsletter" className="sr-only">
              Email address
            </label>
            <input
              id="appru-newsletter"
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Your Email Address"
              className="h-12 min-w-0 flex-1 border border-white/25 bg-transparent px-5 text-sm text-white placeholder:text-white/50 focus:border-azure focus:outline-none"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="flex h-12 w-12 shrink-0 items-center justify-center bg-gradient-to-b from-azure to-primary-600 text-white transition-opacity hover:opacity-90"
            >
              <Send className="h-5 w-5" aria-hidden="true" />
            </button>
          </form>
        </div>
      </div>

      <div className="mx-auto mt-14 flex max-w-6xl flex-col items-center justify-between gap-6 border-t border-white/10 px-4 pt-8 sm:flex-row sm:px-6">
        <p className="text-sm text-gray-500">
          Copyright © {new Date().getFullYear()} Appru. All rights reserved.
        </p>
        <SocialLinks />
      </div>
    </footer>
  )
}
