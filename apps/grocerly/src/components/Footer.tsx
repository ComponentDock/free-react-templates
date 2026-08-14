import { useState, type FormEvent } from 'react'
import { CreditCard, Mail, MapPin, Phone } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import {
  componentDockUrl,
  footerAbout,
  newsletter,
  socialLabels,
  socials,
  usefulLinks,
} from '../data'
import { BrandIcon } from './BrandIcon'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/** Light footer (#F3F6FA): About column (wordmark + contact), a two-list
 *  Useful Links widget, a newsletter form with inline validation, social
 *  icons and the copyright bar with the Component Dock link. */
export function Footer() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const invalid = submitted && !EMAIL_PATTERN.test(email)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <footer className="bg-footerbg pb-0 pt-[70px]">
      <div className="mx-auto grid max-w-[1140px] grid-cols-1 gap-8 px-4 md:grid-cols-3">
        <div>
          <a
            href="#home"
            onClick={(event) => event.preventDefault()}
            className="text-2xl font-extrabold uppercase text-brand"
          >
            Grocerly
          </a>
          <ul className="mt-6 space-y-1 text-base leading-9 text-ink">
            <li className="flex items-center gap-2">
              <MapPin aria-hidden="true" className="h-4 w-4 shrink-0 text-brand" />
              {footerAbout.address}
            </li>
            <li className="flex items-center gap-2">
              <Phone aria-hidden="true" className="h-4 w-4 shrink-0 text-brand" />
              {footerAbout.phone}
            </li>
            <li className="flex items-center gap-2">
              <Mail aria-hidden="true" className="h-4 w-4 shrink-0 text-brand" />
              <a href={`mailto:${footerAbout.email}`} className="hover:text-brand">
                {footerAbout.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h6 className="mb-6 text-base font-bold uppercase text-ink">Useful Links</h6>
          <div className="grid grid-cols-2 gap-x-4">
            {usefulLinks.map((list, index) => (
              <ul key={index} className="space-y-1">
                {list.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      onClick={(event) => event.preventDefault()}
                      className="text-base text-ink transition-colors hover:text-brand"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <div>
          <h6 className="mb-4 text-base font-bold uppercase text-ink">{newsletter.title}</h6>
          <p className="mb-6 text-base text-ink">{newsletter.text}</p>
          <form onSubmit={handleSubmit} noValidate>
            <div className="flex">
              <input
                type="email"
                value={email}
                aria-label="Email address"
                aria-invalid={invalid}
                placeholder={newsletter.placeholder}
                onChange={(event) => setEmail(event.target.value)}
                className={cn(
                  'w-full border border-line bg-white px-4 py-3 text-sm text-ink outline-none placeholder:text-muted focus:border-brand',
                  invalid && 'border-red-500',
                )}
              />
              <button
                type="submit"
                className="bg-brand px-6 text-sm font-extrabold uppercase text-white transition-colors hover:bg-primary-700"
              >
                {newsletter.cta}
              </button>
            </div>
            {invalid && (
              <p role="alert" className="mt-2 text-sm text-red-600">
                Please enter a valid email address.
              </p>
            )}
          </form>
          <div className="mt-6 flex items-center gap-3">
            {socials.map((name) => (
              <a
                key={name}
                href="#"
                aria-label={socialLabels[name]}
                onClick={(event) => event.preventDefault()}
                className="flex h-10 w-10 items-center justify-center border border-line bg-white text-ink transition-colors hover:bg-brand hover:text-white"
              >
                <BrandIcon name={name} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-5 border-t border-line">
        <div className="mx-auto flex max-w-[1140px] flex-col items-center justify-between gap-3 px-4 py-[15px] text-sm text-ink md:flex-row">
          <p>
            Copyright © {new Date().getFullYear()} All rights reserved ·{' '}
            <a
              href={componentDockUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-brand"
            >
              More templates at Component Dock
            </a>
          </p>
          <div className="flex items-center gap-2 text-muted">
            <CreditCard aria-hidden="true" className="h-5 w-5" />
            <span>Visa · Mastercard · PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
