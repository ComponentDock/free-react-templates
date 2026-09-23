import { Send } from 'lucide-react'
import { useState } from 'react'

const topCategories = [
  'Design & creatives',
  'Telecommunication',
  'Restaurant',
  'Programming',
  'Architecture',
  'Marketing',
] as const

const employerLinks = ['Post a Job', 'Browse Candidates', 'Pricing', 'Resources'] as const

const companyLinks = ['About Us', 'Blog', 'Contact', 'Privacy Policy', 'Terms of Service'] as const

export function Footer() {
  const [email, setEmail] = useState('')

  return (
    <footer className="bg-bg-dark text-gray-400">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div>
            <a href="#" className="flex items-center gap-2 text-xl font-bold text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded bg-brand text-white font-bold text-sm">
                J
              </span>
              JobGrid
            </a>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Connecting talented professionals with great opportunities. Your career journey starts
              with the right job.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                aria-label="Twitter"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-gray-400 transition-colors hover:bg-brand hover:text-white"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-gray-400 transition-colors hover:bg-brand hover:text-white"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Pinterest"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-gray-400 transition-colors hover:bg-brand hover:text-white"
              >
                <Send className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Top categories */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Top categories
            </h3>
            <ul className="mt-4 space-y-3">
              {topCategories.map((cat) => (
                <li key={cat}>
                  <a href="#" className="text-sm text-gray-400 transition-colors hover:text-white">
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* For employer */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              For employer
            </h3>
            <ul className="mt-4 space-y-3">
              {employerLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-gray-400 transition-colors hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Company</h3>
            <ul className="mt-4 space-y-3">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-gray-400 transition-colors hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-sm font-semibold text-white">Subscribe to our newsletter</h3>
              <p className="mt-1 text-sm text-gray-400">
                Get the latest job listings delivered to your inbox.
              </p>
            </div>
            <form
              className="flex w-full gap-2 sm:w-auto"
              onSubmit={(e) => {
                e.preventDefault()
                setEmail('')
              }}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full rounded-lg bg-white/10 px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-brand sm:w-64"
              />
              <button
                type="submit"
                className="rounded-lg bg-brand px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-blue"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 py-6">
        <div className="mx-auto max-w-7xl px-4 text-center text-sm text-gray-500 sm:px-6 lg:px-8">
          &copy; {new Date().getFullYear()} JobGrid. Crafted by{' '}
          <a
            href="https://www.componentdock.com/"
            className="font-medium text-brand transition-colors hover:text-brand-blue"
            target="_blank"
            rel="noopener noreferrer"
          >
            Component Dock
          </a>
        </div>
      </div>
    </footer>
  )
}
