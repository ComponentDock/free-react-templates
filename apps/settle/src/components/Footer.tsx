import { useState, type FormEvent } from 'react'
import {
  COPYRIGHT,
  FOOTER_COLUMNS,
  NEWSLETTER_BLURB,
  NEWSLETTER_BUTTON,
  NEWSLETTER_PLACEHOLDER,
  NEWSLETTER_SUCCESS,
  NEWSLETTER_TITLE,
} from '../data'
import { BrandIcon, type BrandIconName } from './BrandIcon'

const SOCIALS: BrandIconName[] = ['github', 'x', 'linkedin']

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/* footer_part — 5 columns (Top Products / Quick Links / Features (dup) /
   Resources / Newsletter form) + social links + copyright bar. */
export function Footer() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!EMAIL_PATTERN.test(email)) {
      setError('Please enter a valid email address.')
      return
    }
    setError(null)
    setSubscribed(true)
  }

  return (
    <footer className="bg-white py-16 dark:bg-ink">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-5">
        {FOOTER_COLUMNS.map((column) => (
          <div key={column.title}>
            <h2 className="text-[16px] font-bold text-ink dark:text-white">{column.title}</h2>
            <ul className="mt-4">
              {column.links.map((link) => (
                <li key={link} className="mb-2.5">
                  <a
                    href="#footer"
                    className="text-[14px] text-body transition-colors hover:text-brand dark:text-white/70 dark:hover:text-brand"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h2 className="text-[16px] font-bold text-ink dark:text-white">{NEWSLETTER_TITLE}</h2>
          <p className="mt-4 text-[14px] leading-6 text-body dark:text-white/70">
            {NEWSLETTER_BLURB}
          </p>
          {subscribed ? (
            <p role="status" className="mt-4 text-[14px] font-medium text-brand">
              {NEWSLETTER_SUCCESS}
            </p>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="mt-4">
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder={NEWSLETTER_PLACEHOLDER}
                aria-invalid={error ? true : undefined}
                aria-describedby={error ? 'footer-newsletter-error' : undefined}
                className="w-full rounded-[5px] border border-ink/20 px-4 py-3 text-[14px] text-ink placeholder:text-body focus:border-brand focus:outline-none dark:border-white/20 dark:bg-white/5 dark:text-white"
              />
              <button
                type="submit"
                className="mt-3 w-full cursor-pointer rounded-[5px] bg-brand px-4 py-3 text-[14px] font-medium tracking-[0.1em] text-white uppercase transition-colors hover:bg-primary-700"
              >
                {NEWSLETTER_BUTTON}
              </button>
              {error && (
                <p
                  id="footer-newsletter-error"
                  role="alert"
                  className="mt-3 text-[13px] font-medium text-brand"
                >
                  {error}
                </p>
              )}
            </form>
          )}
        </div>
      </div>

      <div className="mx-auto mt-14 flex max-w-6xl flex-col items-center gap-4 border-t border-ink/10 px-4 pt-6 sm:px-6 md:flex-row md:justify-between dark:border-white/10">
        <p className="text-[14px] text-body dark:text-white/70">{COPYRIGHT}</p>
        <ul className="flex items-center gap-3">
          {SOCIALS.map((social) => (
            <li key={social}>
              <a
                href="#footer"
                aria-label={social}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-body transition-colors hover:border-brand hover:text-brand dark:border-white/20 dark:text-white/70 dark:hover:text-brand"
              >
                <BrandIcon name={social} className="h-4 w-4" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
