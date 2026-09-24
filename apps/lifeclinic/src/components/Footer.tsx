import { useState, type FormEvent } from 'react'
import { Heart, Globe, Share2, MessageCircle, Send } from 'lucide-react'
import {
  siteName,
  footerAbout,
  quickLinksTitle,
  contactFormTitle,
  newsletterTitle,
  newsletterDescription,
  newsletterPlaceholder,
  subscribeLabel,
  subscribeConfirmation,
  copyright,
  footerCredit,
  footerCreditUrl,
  footerQuickLinks,
} from '../data'

export function Footer() {
  const [subscribed, setSubscribed] = useState(false)
  const [contactName, setContactName] = useState('')
  const [contactEmail, setContactEmail] = useState('')
  const [contactMessage, setContactMessage] = useState('')

  function handleSubscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubscribed(true)
  }

  function handleContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setContactName('')
    setContactEmail('')
    setContactMessage('')
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
              <span className="text-2xl font-bold">{siteName}</span>
            </a>
            <p className="mt-5 text-sm leading-6 text-gray-300">{footerAbout}</p>
            <div className="mt-5 flex gap-3">
              <a
                href="#"
                aria-label="Social 1"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <Globe className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Social 2"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <Share2 className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Social 3"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Social 4"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <Send className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Latest News */}
          <nav aria-label={quickLinksTitle}>
            <h4 className="mb-6 text-lg font-bold">{quickLinksTitle}</h4>
            <ul className="space-y-2">
              {footerQuickLinks.map((link) => (
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

          {/* Contact Form */}
          <div>
            <h4 className="mb-6 text-lg font-bold">{contactFormTitle}</h4>
            <form onSubmit={handleContact} className="space-y-3">
              <input
                type="text"
                placeholder="Your Name"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                className="w-full rounded border border-gray-600 bg-transparent px-3 py-2 text-sm text-white placeholder:text-gray-400 focus:border-brand focus:outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                className="w-full rounded border border-gray-600 bg-transparent px-3 py-2 text-sm text-white placeholder:text-gray-400 focus:border-brand focus:outline-none"
              />
              <textarea
                placeholder="Your Message"
                rows={3}
                value={contactMessage}
                onChange={(e) => setContactMessage(e.target.value)}
                className="w-full resize-none rounded border border-gray-600 bg-transparent px-3 py-2 text-sm text-white placeholder:text-gray-400 focus:border-brand focus:outline-none"
              />
              <button
                type="submit"
                className="rounded bg-brand px-6 py-2 text-sm font-bold text-white transition-colors hover:bg-brand-hover"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="mb-6 text-lg font-bold">{newsletterTitle}</h4>
            <p className="text-sm text-gray-300">{newsletterDescription}</p>
            {subscribed ? (
              <p role="status" className="mt-5 text-sm text-brand">
                {subscribeConfirmation}
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="mt-5 flex">
                <label htmlFor="newsletter-email" className="sr-only">
                  {newsletterPlaceholder}
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  name="email"
                  required
                  placeholder={newsletterPlaceholder}
                  className="h-11 w-full rounded-l border border-gray-600 bg-transparent px-3 text-sm text-white placeholder:text-gray-400 focus:border-brand focus:outline-none"
                />
                <button
                  type="submit"
                  className="h-11 shrink-0 rounded-r bg-brand px-4 text-sm font-bold text-white transition-colors hover:bg-brand-hover"
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
