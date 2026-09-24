import { useState, type FormEvent } from 'react'
import { Heart } from 'lucide-react'
import {
  siteName,
  footerAbout,
  quickLinksTitle,
  servicesTitle2,
  newsletterTitle,
  newsletterDescription,
  newsletterPlaceholder,
  subscribeLabel,
  subscribeConfirmation,
  copyright,
  footerCredit,
  footerCreditUrl,
  quickLinks,
  footerServices,
} from '../data'

export function Footer() {
  const [subscribed, setSubscribed] = useState(false)

  function handleSubscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubscribed(true)
  }

  return (
    <footer id="contact" className="bg-footer-bg text-white">
      <div className="mx-auto max-w-7xl px-4 pb-14 pt-20 sm:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-2 text-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand">
                <Heart aria-hidden="true" className="h-5 w-5" />
              </span>
              <span className="font-heading text-2xl font-bold">{siteName}</span>
            </a>
            <p className="mt-5 text-sm leading-6 text-gray-300">{footerAbout}</p>
          </div>

          {/* Quick Links */}
          <nav aria-label={quickLinksTitle}>
            <h4 className="mb-6 text-lg font-bold">{quickLinksTitle}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label={servicesTitle2}>
            <h4 className="mb-6 text-lg font-bold">{servicesTitle2}</h4>
            <ul className="space-y-2">
              {footerServices.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Newsletter */}
          <div>
            <h4 className="mb-6 text-lg font-bold">{newsletterTitle}</h4>
            <p className="text-sm text-gray-300">{newsletterDescription}</p>
            {subscribed ? (
              <p role="status" className="mt-5 text-sm text-accent">
                {subscribeConfirmation}
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="mt-5 flex">
                <label htmlFor="footer-email" className="sr-only">
                  {newsletterPlaceholder}
                </label>
                <input
                  id="footer-email"
                  type="email"
                  name="email"
                  required
                  placeholder={newsletterPlaceholder}
                  className="h-11 w-full rounded-l border border-gray-600 bg-transparent px-3 text-sm text-white placeholder:text-gray-400 focus:border-brand focus:outline-none"
                />
                <button
                  type="submit"
                  className="h-11 shrink-0 rounded-r bg-brand px-4 text-sm font-medium text-white transition-colors hover:bg-brand-hover"
                >
                  {subscribeLabel}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 py-6 text-center">
        <p className="text-sm text-gray-400">
          {copyright} |{' '}
          <a
            href={footerCreditUrl}
            className="text-gray-300 underline transition-colors hover:text-white"
          >
            {footerCredit}
          </a>
        </p>
      </div>
    </footer>
  )
}
