import { useState, type FormEvent } from 'react'
import { Send } from 'lucide-react'
import { Button } from '@free-react-templates/ui'
import {
  BRAND,
  CONTACT_ID,
  COPYRIGHT,
  EMAIL_ERROR,
  FOOTER_LINKS,
  HOME_ID,
  LISTINGS_ID,
  NEWSLETTER,
  NEWSLETTER_LABEL,
  SOCIALS,
} from '../lib/site'
import { containerClass } from '../lib/styles'
import { SOCIAL_ICONS } from './SocialIcon'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/**
 * The pale blue footer: the brand blurb over four social glyphs, the Navigation and Services
 * columns, the newsletter form (validated client-side — an error clears as soon as the visitor types
 * again) and the copyright bar crediting Component Dock.
 */
export function Footer() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!EMAIL_PATTERN.test(email.trim())) {
      setError(EMAIL_ERROR)
      return
    }
    setSubscribed(true)
  }

  function handleEmail(value: string) {
    setEmail(value)
    if (error) setError('')
  }

  return (
    <footer id={CONTACT_ID} className="bg-footerbg">
      <div className={containerClass + ' pt-20'}>
        <div className="grid gap-10 pb-14 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href={`#${HOME_ID}`} className="font-display text-2xl font-bold tracking-wide text-navy">
              {BRAND}
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-footertext">
              {FOOTER_LINKS.about}
            </p>
            <ul role="list" className="mt-6 flex gap-4">
              {SOCIALS.map((key) => {
                const Glyph = SOCIAL_ICONS[key]
                return (
                  <li key={key}>
                    <a
                      href={`#${HOME_ID}`}
                      aria-label={key}
                      className="block text-socials transition-colors hover:text-brand"
                    >
                      <Glyph className="h-5 w-5" />
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-xl font-medium text-navy">Navigation</h3>
            <ul role="list" className="mt-5 space-y-3">
              {FOOTER_LINKS.navigation.map((item) => (
                <li key={item}>
                  <a
                    href={`#${HOME_ID}`}
                    className="text-navy transition-colors hover:text-brand"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-xl font-medium text-navy">Services</h3>
            <ul role="list" className="mt-5 space-y-3">
              {FOOTER_LINKS.services.map((item) => (
                <li key={item}>
                  <a
                    href={`#${LISTINGS_ID}`}
                    className="text-navy transition-colors hover:text-brand"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-xl font-medium text-navy">{NEWSLETTER.heading}</h3>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-footertext">
              {NEWSLETTER.pitch}
            </p>
            {subscribed ? (
              <p role="status" className="mt-4 font-medium text-brand">
                {NEWSLETTER.success}
              </p>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="mt-4">
                <div className="flex">
                  <label htmlFor="newsletter-email" className="sr-only">
                    {NEWSLETTER_LABEL}
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    value={email}
                    onChange={(event) => handleEmail(event.target.value)}
                    placeholder={NEWSLETTER.placeholder}
                    className="h-[50px] w-full border border-edge bg-paper px-5 text-navy outline-none placeholder:text-[#999999] focus:border-brand"
                  />
                  <Button
                    type="submit"
                    aria-label={NEWSLETTER.submit}
                    className="h-[50px] w-12 shrink-0 rounded-none"
                  >
                    <Send className="h-5 w-5" aria-hidden="true" />
                  </Button>
                </div>
                {error && (
                  <p role="alert" className="mt-2 text-sm text-red-600">
                    {error}
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>

      <div className="border-t border-edge">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-sm text-footertext sm:flex-row">
          <p>{COPYRIGHT.line}</p>
          <p>
            {COPYRIGHT.creditLead}{' '}
            <a href={COPYRIGHT.creditUrl} className="font-semibold text-brand hover:underline">
              {COPYRIGHT.creditLink}
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
