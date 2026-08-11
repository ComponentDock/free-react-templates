import { useState, type FormEvent } from 'react'
import { Cross } from 'lucide-react'
import {
  copyright,
  exploreLinks,
  exploreTitle,
  footerAboutBlurb,
  footerCredit,
  newsletterBlurb,
  newsletterPlaceholder,
  newsletterTitle,
  quickLinks,
  quickLinksTitle,
  resourcesLinks,
  resourcesTitle,
  siteName,
  socialNames,
  subscribeConfirmation,
  subscribeLabel,
} from '../data'
import { SocialIcons } from './SocialIcons'

export function Footer() {
  const [subscribed, setSubscribed] = useState(false)

  function handleSubscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubscribed(true)
  }

  return (
    <footer id="contact" className="bg-footer">
      <div className="mx-auto max-w-7xl px-4 pb-14 pt-20 sm:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2 text-heading">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-brand-2 to-brand text-white">
                <Cross aria-hidden="true" className="h-5 w-5" />
              </span>
              <span className="font-serif text-2xl font-bold">{siteName}</span>
            </a>
            <p className="mt-5 text-sm leading-6 text-muted">{footerAboutBlurb}</p>
            <SocialIcons
              names={socialNames}
              className="mt-6"
              iconClassName="border-heading/20 text-heading hover:border-brand hover:text-brand"
            />
          </div>

          <nav aria-label={quickLinksTitle}>
            <h4 className="mb-6 text-xl font-bold text-heading">{quickLinksTitle}</h4>
            <ul className="space-y-1">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-base text-muted transition-colors hover:text-brand"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={exploreTitle}>
            <h4 className="mb-6 text-xl font-bold text-heading">{exploreTitle}</h4>
            <ul className="space-y-1">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-base text-muted transition-colors hover:text-brand"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={resourcesTitle}>
            <h4 className="mb-6 text-xl font-bold text-heading">{resourcesTitle}</h4>
            <ul className="space-y-1">
              {resourcesLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-base text-muted transition-colors hover:text-brand"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h4 className="mb-6 text-xl font-bold text-heading">{newsletterTitle}</h4>
            <p className="text-sm leading-6 text-muted">{newsletterBlurb}</p>
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
                  className="h-11 w-full border border-gray-200 bg-white px-3 text-sm text-heading placeholder:text-gray-400 focus:border-brand focus:outline-none"
                />
                <button
                  type="submit"
                  className="h-11 shrink-0 bg-gradient-to-r from-brand-2 to-brand px-4 text-sm font-medium text-white transition-colors hover:bg-brand-hover"
                >
                  {subscribeLabel}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200/70 py-8 text-center">
        <p className="text-sm text-muted">
          {copyright} | {footerCredit}
        </p>
      </div>
    </footer>
  )
}
