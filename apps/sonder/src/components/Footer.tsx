import { useState, type FormEvent } from 'react'
import { ArrowUp, Mail } from 'lucide-react'
import { z } from 'zod'
import { Button } from '@free-react-templates/ui'
import { BrandIcon } from './BrandIcon'
import {
  archives,
  copyright,
  credit,
  newsletterBlurb,
  newsletterError,
  newsletterLabel,
  newsletterPlaceholder,
  newsletterSubmitLabel,
  newsletterSuccess,
  newsletterTitle,
  quickLinks,
  socialLabels,
  socialLinks,
} from '../data'

const emailSchema = z.string().email(newsletterError)

const linkClasses =
  'block py-1.5 text-sm text-white/60 transition-colors hover:text-white'

/** Dark multi-column footer: Quick Links / Archives / Social columns, a
    newsletter form with zod validation + success state, and a bottom bar with
    copyright, credit and back-to-top (reference: .s-footer on the Philosophy
    preview). */
export function Footer() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const result = emailSchema.safeParse(email)
    if (!result.success) {
      setError(result.error.issues[0]!.message)
      setSubscribed(false)
      return
    }
    setError(null)
    setSubscribed(true)
    setEmail('')
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-coal text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <nav aria-label="Quick links">
          <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-white">Quick Links</h3>
          <ul className="mt-6">
            {quickLinks.map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className={linkClasses}>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Archives">
          <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-white">Archives</h3>
          <ul className="mt-6">
            {archives.map((month) => (
              <li key={month}>
                <a href={`#${month.toLowerCase()}`} className={linkClasses}>
                  {month}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Social">
          <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-white">Social</h3>
          <ul className="mt-6">
            {socialLinks.map((name) => (
              <li key={name}>
                <a href="#home" className={linkClasses}>
                  <span className="inline-flex items-center gap-3">
                    <BrandIcon name={name} className="h-4 w-4" />
                    {socialLabels[name]}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-white">
            {newsletterTitle}
          </h3>
          <p className="mt-6 text-sm leading-relaxed text-white/60">{newsletterBlurb}</p>
          <form onSubmit={handleSubmit} noValidate className="mt-6">
            <label htmlFor="newsletter-email" className="sr-only">
              {newsletterLabel}
            </label>
            <div className="flex">
              <div className="flex flex-1 items-center gap-2 border border-white/20 bg-white/5 px-4 focus-within:border-brand">
                <Mail className="h-4 w-4 shrink-0 text-white/40" aria-hidden="true" />
                <input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value)
                    if (error) setError(null)
                  }}
                  placeholder={newsletterPlaceholder}
                  aria-invalid={error ? true : undefined}
                  aria-describedby={error ? 'newsletter-error' : undefined}
                  className="h-12 w-full bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
                />
              </div>
              <Button
                type="submit"
                className="h-12 rounded-[3px] bg-brand px-7 text-xs font-bold uppercase tracking-[0.25em] text-white hover:bg-white hover:text-brand"
              >
                {newsletterSubmitLabel}
              </Button>
            </div>
          </form>
          {error ? (
            <p id="newsletter-error" role="alert" className="mt-3 text-xs text-red-400">
              {error}
            </p>
          ) : null}
          {subscribed ? (
            <p role="status" className="mt-3 text-xs font-medium text-emerald-400">
              {newsletterSuccess}
            </p>
          ) : null}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6">
          <p className="text-xs text-white/50">
            {copyright} · <a href="https://colorlib.com" className="hover:text-white">{credit}</a>
          </p>
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/60 transition-colors hover:text-white"
          >
            Back to top
            <ArrowUp className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  )
}
