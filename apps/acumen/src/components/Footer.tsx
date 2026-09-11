import { useState, type FormEvent } from 'react'
import { Mail } from 'lucide-react'

const EMAIL_PATTERN = /^\S+@\S+\.\S+$/

const company = ['About', 'Services', 'Portfolio', 'Blog', 'Contact'] as const
const resources = ['Documentation', 'Support', 'Privacy Policy', 'Terms'] as const
const solutions = ['Web Design', 'Development', 'UI/UX', 'Marketing'] as const

export function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!EMAIL_PATTERN.test(email.trim())) return
    setSubscribed(true)
  }

  return (
    <footer className="bg-ink text-white transition-colors dark:bg-ink-dark">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand + subscription */}
          <div className="md:col-span-1">
            <span className="font-display text-2xl font-bold">
              Acumen<span className="text-brand">.</span>
            </span>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Creative business solutions for modern enterprises. We help you grow with innovative
              strategies and technology.
            </p>
            {subscribed ? (
              <p className="mt-4 rounded-lg border border-brand/40 bg-brand/10 px-4 py-2 text-xs text-brand">
                Thanks for subscribing!
              </p>
            ) : (
              <form onSubmit={handleSubscribe} noValidate className="mt-4">
                <label htmlFor="footer-email" className="sr-only">
                  Email address
                </label>
                <div className="flex">
                  <input
                    id="footer-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    className="w-full rounded-l-lg border border-gray-600 bg-gray-800 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:border-brand focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="shrink-0 rounded-r-lg bg-brand px-3 py-2 text-white transition-colors hover:bg-brand-dark"
                    aria-label="Subscribe"
                  >
                    <Mail className="h-4 w-4" />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Link columns */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wide text-brand">
              Company
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-400">
              {company.map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="transition-colors hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wide text-brand">
              Resources
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-400">
              {resources.map((link) => (
                <li key={link}>
                  <a href="#footer" className="transition-colors hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wide text-brand">
              Solutions
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-400">
              {solutions.map((link) => (
                <li key={link}>
                  <a href="#footer" className="transition-colors hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 py-5 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Acumen. Built with{' '}
        <a
          href="https://www.componentdock.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand transition-colors hover:text-white"
        >
          Component Dock
        </a>
      </div>
    </footer>
  )
}
