import { useState, type FormEvent } from 'react'
import { CheckCircle2 } from 'lucide-react'
import {
  BRAND,
  FOOTER_ADDRESS,
  FOOTER_EMAIL,
  FOOTER_PHONE,
  FOOTER_PRACTICE_LINKS,
  FOOTER_USEFUL_LINKS,
  NEWSLETTER_TEXT,
  SOCIAL_LINKS,
} from '../data'
import { SocialIcon } from './SocialIcon'

/**
 * Footer — dark #202020 footer (source `.footer`): a brand + contact widget
 * (address / phone / email + social circles), a Practice Area link column, a
 * Useful Links column and a Subscribe form (white input + gold Sign Up
 * button) with the newsletter line, plus the copyright bar linking to
 * Component Dock.
 */
export function Footer() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError('Enter a valid email address')
      return
    }
    setError('')
    setSubscribed(true)
  }

  return (
    <footer id="contact" className="bg-footer text-paper">
      <div className="mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-[120px]">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <a href="#home" className="text-2xl font-bold tracking-widest text-paper uppercase">
              {BRAND}
            </a>
            <p className="mt-8 max-w-xs text-sm leading-6 text-hero-sub">{FOOTER_ADDRESS}</p>
            <p className="mt-2 text-sm leading-6 text-hero-sub">{FOOTER_PHONE}</p>
            <a
              href={`mailto:${FOOTER_EMAIL}`}
              className="mt-2 inline-block text-sm leading-6 text-hero-sub transition-colors hover:text-brand"
            >
              {FOOTER_EMAIL}
            </a>
            <ul className="mt-6 flex gap-3">
              {SOCIAL_LINKS.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2d2d2d] text-hero-sub transition-colors hover:bg-brand hover:text-paper"
                  >
                    <SocialIcon name={social.label} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Practice areas" className="lg:col-span-2">
            <h3 className="mb-8 font-body text-lg font-medium text-paper capitalize">
              Practice Area
            </h3>
            <ul>
              {FOOTER_PRACTICE_LINKS.map((item) => (
                <li key={item}>
                  <a
                    href="#practice"
                    className="block text-sm leading-[42px] text-hero-sub transition-colors hover:text-brand"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Useful links" className="lg:col-span-2">
            <h3 className="mb-8 font-body text-lg font-medium text-paper capitalize">
              Useful Links
            </h3>
            <ul>
              {FOOTER_USEFUL_LINKS.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="block text-sm leading-[42px] text-hero-sub transition-colors hover:text-brand"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-4">
            <h3 className="mb-8 font-body text-lg font-medium text-paper capitalize">Subscribe</h3>
            {subscribed ? (
              <p role="status" className="flex items-center gap-2 text-sm text-hero-sub">
                <CheckCircle2 className="h-4 w-4 text-brand" aria-hidden="true" />
                Thanks for subscribing!
              </p>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="relative mb-5">
                <label htmlFor="subscribe-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="subscribe-email"
                  type="email"
                  placeholder="Enter your mail"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value)
                    if (error) setError('')
                  }}
                  aria-invalid={error ? true : undefined}
                  aria-describedby={error ? 'subscribe-email-error' : undefined}
                  className="h-[45px] w-full bg-paper pr-28 pl-5 text-sm text-ink outline-none placeholder:text-hero-sub"
                />
                <button
                  type="submit"
                  className="absolute top-0 right-0 h-full bg-brand px-6 text-sm text-paper transition-colors hover:bg-brand-dark"
                >
                  Sign Up
                </button>
                {error && (
                  <p id="subscribe-email-error" role="alert" className="mt-2 text-sm text-brand">
                    {error}
                  </p>
                )}
              </form>
            )}
            <p className="text-sm text-hero-sub">{NEWSLETTER_TEXT}</p>
          </div>
        </div>

        <div className="mt-16 border-t border-paper/10 pt-8 text-center">
          <p className="text-sm text-hero-sub">
            Copyright © {new Date().getFullYear()} All rights reserved |{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noreferrer"
              className="text-hero-sub underline-offset-2 transition-colors hover:text-brand hover:underline"
            >
              More templates at Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
