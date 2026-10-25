import { useState, type FormEvent } from 'react'
import { Mail } from 'lucide-react'
import { brand, footerColumns, legalLinks } from '../data'
import { Wordmark } from './Wordmark'

const socials = [
  { label: 'GitHub', mark: 'GH' },
  { label: 'Status page', mark: 'ST' },
  { label: 'Release feed', mark: 'RSS' },
] as const

/** Near-black footer: brand block, three link columns, the release-notes
 * newsletter, and a bottom bar that carries the Component Dock credit. */
export function Footer() {
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!event.currentTarget.checkValidity()) {
      return
    }

    setSubscribed(true)
  }

  return (
    <footer className="bg-gray-900 pt-16 text-gray-300 lg:pt-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <a href="#top" className="inline-block" aria-label="Chalkline home">
              <Wordmark tone="light" />
            </a>
            <p className="mt-4 max-w-xs text-sm text-gray-400">{brand.tagline}</p>
            <div className="mt-6 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href="#contact"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 font-mono text-xs font-medium text-gray-400 transition-colors hover:bg-gray-700 hover:text-white"
                >
                  {social.mark}
                </a>
              ))}
            </div>
            <p className="mt-6 flex items-center gap-2 text-sm text-gray-400">
              <Mail aria-hidden="true" className="h-4 w-4 shrink-0" />
              <a href={`mailto:${brand.email}`} className="transition-colors hover:text-white">
                {brand.email}
              </a>
            </p>
            <p className="mt-4 text-xs text-gray-500">{brand.licence}</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3 lg:col-span-5">
            {footerColumns.map((column) => (
              <nav key={column.title} aria-label={column.title}>
                <h3 className="font-mono text-xs font-medium tracking-wider text-white uppercase">
                  {column.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-gray-400 transition-colors hover:text-white"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>

          <div id="newsletter" className="scroll-mt-24 lg:col-span-3">
            <h3 className="font-mono text-xs font-medium tracking-wider text-white uppercase">
              Stay Updated
            </h3>
            <p className="mt-4 text-sm text-gray-400">
              Release notes, standards updates and migration guides. Sent when something ships, not
              on a schedule.
            </p>
            <form onSubmit={handleSubscribe} className="mt-4" aria-label="Newsletter">
              <div className="flex gap-2">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@institution.edu"
                  className="min-w-0 flex-1 rounded-lg border border-gray-700 bg-gray-800 px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 focus:outline-none"
                />
                <button
                  type="submit"
                  className="rounded-lg bg-primary-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-700"
                >
                  Subscribe
                </button>
              </div>
              {subscribed ? (
                <p role="status" className="mt-3 text-sm text-primary-200">
                  You are on the list — the next release note goes out when the next version lands.
                </p>
              ) : null}
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col-reverse items-start justify-between gap-4 border-t border-gray-800 py-6 text-sm text-gray-500 sm:flex-row sm:items-center">
          <p>© 2026 Chalkline. All rights reserved.</p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition-colors hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://www.componentdock.com/"
                className="font-medium text-primary-200 transition-colors hover:text-white"
              >
                More templates at Component Dock
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
