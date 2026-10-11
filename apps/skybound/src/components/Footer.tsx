import { useState, type FormEvent } from 'react'
import { ArrowRight } from 'lucide-react'
import { Button } from '@free-react-templates/ui'
import { FOOTER } from '../data/content'
import { fieldErrors, newsletterSchema } from '../lib/forms'
import { BehanceIcon, DribbbleIcon, FacebookIcon, TwitterIcon } from './icons'

const SOCIALS = [
  { label: 'Facebook', Icon: FacebookIcon },
  { label: 'Twitter', Icon: TwitterIcon },
  { label: 'Dribbble', Icon: DribbbleIcon },
  { label: 'Behance', Icon: BehanceIcon },
]

export function Footer() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | undefined>(undefined)
  const [subscribed, setSubscribed] = useState(false)

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const parsed = newsletterSchema.safeParse({ email })
    if (!parsed.success) {
      setError(fieldErrors<'email'>(parsed.error).email)
      setSubscribed(false)
      return
    }
    setError(undefined)
    setSubscribed(true)
  }

  return (
    <footer className="bg-ink px-6 pb-8 pt-[120px]">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h6 className="mb-6 text-lg font-semibold text-white">{FOOTER.aboutTitle}</h6>
            <p className="text-social">{FOOTER.aboutText}</p>
          </div>

          <div>
            <h6 className="mb-6 text-lg font-semibold text-white">{FOOTER.navTitle}</h6>
            <div className="grid grid-cols-2 gap-4">
              {FOOTER.navColumns.map((column, columnIndex) => (
                <ul key={columnIndex === 0 ? 'primary' : 'secondary'}>
                  {column.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="footer-link">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>

          <div>
            <h6 className="mb-6 text-lg font-semibold text-white">{FOOTER.newsletterTitle}</h6>
            <form onSubmit={onSubmit} noValidate className="flex">
              <label htmlFor="footer-email" className="sr-only">
                Newsletter email address
              </label>
              <input
                id="footer-email"
                name="email"
                type="email"
                placeholder={FOOTER.inputPlaceholder}
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="w-full border border-divider bg-transparent px-4 py-2 text-white"
              />
              <Button type="submit" aria-label="Subscribe to newsletter" className="click-btn">
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Button>
            </form>
            {error ? (
              <p role="alert" className="mt-3 text-sm text-gold">
                {error}
              </p>
            ) : null}
            {subscribed ? (
              <p role="status" className="mt-3 text-sm text-gold">
                Thanks for subscribing! Please check your inbox.
              </p>
            ) : null}
            <p className="mt-4 text-social">{FOOTER.newsletterNote}</p>
          </div>

          <div>
            <h6 className="mb-6 text-lg font-semibold text-white">{FOOTER.instafeedTitle}</h6>
            <div className="grid grid-cols-4 gap-[5px]">
              {FOOTER.instafeed.map((src) => (
                <img
                  key={src}
                  src={src}
                  alt={FOOTER.instafeedAlt}
                  className="h-full w-full object-cover"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-divider pt-8">
          <p className="text-social">
            {FOOTER.copyright} · {FOOTER.credit} · More templates at{' '}
            <a href="https://www.componentdock.com/" className="font-medium text-gold">
              Component Dock
            </a>
          </p>
          <div className="flex gap-5">
            {SOCIALS.map(({ label, Icon }) => (
              <a key={label} href="#" aria-label={label} className="social-link">
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
