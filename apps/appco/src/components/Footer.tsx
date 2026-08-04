import { useState, type FormEvent } from 'react'
import { Send } from 'lucide-react'
import { SocialLinks } from './SocialLinks'

const columns = [
  {
    title: 'Quick Links',
    links: ['Features', 'Services', 'Pricing', 'Testimonials'],
  },
  {
    title: 'Support',
    links: ['Help Center', 'API Docs', 'System Status', 'Contact Us'],
  },
] as const

export function Footer() {
  const [email, setEmail] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setEmail('')
  }

  return (
    <footer id="contact" className="bg-gray-950 py-16 text-gray-300">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="font-display text-2xl font-extrabold text-white">Appco</h3>
          <p className="mt-5 text-sm leading-relaxed text-gray-400">
            A powerful app for better productivity — trusted by teams in over 120 countries.
          </p>
        </div>

        {columns.map((column) => (
          <div key={column.title}>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white">
              {column.title}
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              {column.links.map((link) => (
                <li key={link}>
                  <a
                    href="#home"
                    className="text-gray-400 transition-colors hover:text-primary-400"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white">Newsletter</h4>
          <p className="mt-5 text-sm text-gray-400">
            Subscribe for product updates and productivity tips.
          </p>
          <form onSubmit={handleSubmit} className="mt-6 flex items-stretch">
            <label htmlFor="appco-newsletter" className="sr-only">
              Email address
            </label>
            <input
              id="appco-newsletter"
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter your email"
              className="h-12 min-w-0 flex-1 rounded-full border border-white/25 bg-transparent px-5 text-sm text-white placeholder:text-white/50 focus:border-primary-400 focus:outline-none"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="ml-2 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white transition-colors hover:bg-white hover:text-primary-600"
            >
              <Send className="h-5 w-5" aria-hidden="true" />
            </button>
          </form>
        </div>
      </div>

      <div className="mx-auto mt-14 flex max-w-6xl flex-col items-center justify-between gap-6 border-t border-white/10 px-4 pt-8 sm:flex-row sm:px-6">
        <p className="text-sm text-gray-400">
          Copyright © {new Date().getFullYear()} Appco. All rights reserved.
        </p>
        <SocialLinks />
      </div>
    </footer>
  )
}
