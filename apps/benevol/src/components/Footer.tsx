import { useState, type FormEvent } from 'react'
import { z } from 'zod'
import { Button } from '@free-react-templates/ui'
import {
  COMPONENT_DOCK_URL,
  FOOTER_ABOUT,
  FOOTER_FEATURES,
  FOOTER_PARAGRAPH,
  FOOTER_SOCIALS,
} from '../data'
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from './social-icons'

const emailSchema = z.string().email()

const SOCIAL_ICONS = [FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon]

/**
 * Footer — dark grey (#333333) footer with an About column, a Features
 * link column, a paragraph/newsletter column (zod-validated email +
 * orange Subscribe), a Follow Us social row, and a copyright line that
 * links Component Dock.
 */
export function Footer() {
  const year = new Date().getFullYear()
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const result = emailSchema.safeParse(email)
    if (!result.success) {
      setError('Please enter a valid email address.')
      setSubscribed(false)
      return
    }
    setError(null)
    setSubscribed(true)
    setEmail('')
  }

  return (
    <footer className="bg-footer pb-24 pt-16 text-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <h2 className="font-display text-base uppercase tracking-[0.2rem] text-white">
                About Us
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-white/60">{FOOTER_ABOUT}</p>
            </div>
            <div>
              <h2 className="font-display text-base uppercase tracking-[0.2rem] text-white">
                Features
              </h2>
              <ul className="mt-4 space-y-2 text-sm">
                {FOOTER_FEATURES.map((item) => (
                  <li key={item}>
                    <a
                      href="#home-section"
                      className="text-footlink transition-colors hover:text-white"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h2 className="font-display text-base uppercase tracking-[0.2rem] text-white">
              Some Paragraph
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/60">{FOOTER_PARAGRAPH}</p>

            <h2 className="mt-8 font-display text-base uppercase tracking-[0.2rem] text-white">
              Subscribe to Newsletter
            </h2>
            <form onSubmit={handleSubscribe} noValidate className="mt-4">
              <div className="flex max-w-md">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Enter Email"
                  aria-invalid={error ? 'true' : undefined}
                  aria-describedby={error ? 'newsletter-error' : undefined}
                  className="w-full rounded-l border border-gray-600 bg-transparent px-4 py-3 text-white placeholder:text-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/40"
                />
                <Button type="submit" className="shrink-0 rounded-l-none rounded-r px-5 py-3">
                  Subscribe
                </Button>
              </div>
              {error ? (
                <p id="newsletter-error" role="alert" className="mt-2 text-sm text-red-400">
                  {error}
                </p>
              ) : null}
              {subscribed ? (
                <p role="status" className="mt-2 text-sm text-green-400">
                  Thank you for subscribing!
                </p>
              ) : null}
            </form>

            <h2 className="mt-8 font-display text-base uppercase tracking-[0.2rem] text-white">
              Follow Us
            </h2>
            <div className="mt-4 flex gap-3">
              {FOOTER_SOCIALS.map((social, index) => {
                const Icon = SOCIAL_ICONS[index]!
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={`Benevol on ${social.label}`}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-primary-600 hover:text-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/40"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-5 text-center text-sm text-white/60">
          Copyright © {year} All rights reserved | This template is made with ♥ ·{' '}
          <a
            href={COMPONENT_DOCK_URL}
            target="_blank"
            rel="noreferrer"
            className="text-white/90 hover:text-primary-600"
          >
            More templates at Component Dock
          </a>
        </div>
      </div>
    </footer>
  )
}
