import { useState, type FormEvent } from 'react'
import { Send } from 'lucide-react'
import { BRAND, COPYRIGHT, FOOTER_LINKS, NEWSLETTER, SOCIALS } from '../data'
import { SOCIAL_ICONS } from './icons'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/* Footer — pale blue wrapper with a brand column (about + 4 social icons),
   Navigation and Services link columns, a Subscribe newsletter form with
   client-side email validation, and a copyright bar crediting Component
   Dock. */
export function Footer() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!EMAIL_PATTERN.test(email.trim())) {
      setError('Please enter a valid email address.')
      return
    }
    setError('')
    setSuccess(true)
  }

  return (
    <footer id="contact" className="bg-footerbg">
      <div className="mx-auto max-w-7xl px-6 pt-20">
        <div className="grid gap-10 pb-14 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#home" className="font-display text-2xl font-bold tracking-wide text-navy">
              {BRAND}
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-footertext">
              {FOOTER_LINKS.about}
            </p>
            <ul role="list" className="mt-6 flex gap-4">
              {SOCIALS.map((key) => {
                const Icon = SOCIAL_ICONS[key]
                return (
                  <li key={key}>
                    <a
                      href="#home"
                      aria-label={key}
                      className="block text-socials transition-colors hover:text-brand"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xl font-medium text-navy">Navigation</h4>
            <ul role="list" className="mt-5 space-y-3">
              {FOOTER_LINKS.navigation.map((item) => (
                <li key={item}>
                  <a href="#home" className="text-navy transition-colors hover:text-brand">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xl font-medium text-navy">Services</h4>
            <ul role="list" className="mt-5 space-y-3">
              {FOOTER_LINKS.services.map((item) => (
                <li key={item}>
                  <a href="#listing" className="text-navy transition-colors hover:text-brand">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xl font-medium text-navy">{NEWSLETTER.heading}</h4>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-footertext">
              {NEWSLETTER.pitch}
            </p>
            {success ? (
              <p className="mt-4 font-medium text-brand" role="status">
                {NEWSLETTER.success}
              </p>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="mt-4">
                <div className="flex">
                  <label htmlFor="newsletter-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value)
                      if (error) setError('')
                    }}
                    placeholder={NEWSLETTER.placeholder}
                    className="h-[50px] w-full border border-[#f0e9ff] bg-paper px-5 text-navy outline-none placeholder:text-[#999999] focus:border-brand"
                  />
                  <button
                    type="submit"
                    aria-label={NEWSLETTER.submit}
                    className="flex h-[50px] w-12 shrink-0 items-center justify-center bg-brand text-white transition-colors hover:bg-deep"
                  >
                    <Send className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>
                {error && (
                  <p className="mt-2 text-sm text-red-600" role="alert">
                    {error}
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>

      <div className="border-t border-[#DEE0E5]">
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
