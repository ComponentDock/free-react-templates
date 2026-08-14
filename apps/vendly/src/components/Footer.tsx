import { useState, type FormEvent } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
import { Button } from '@free-react-templates/ui'
import { BRAND, CONTACT, FOOTER_NAV, IMAGES, PROMO } from '../data'
import { fieldErrors, initialSubscribe, subscribeSchema } from '../lib/forms'

/* site-footer — white footer (border-top #edf0f5): Navigations link
   columns, Promo card, Contact Info + Subscribe form (validated, success
   state replaces the input), centered copyright bar with the Component
   Dock credit. */
export function Footer() {
  const [email, setEmail] = useState(initialSubscribe.email)
  const [error, setError] = useState<string | undefined>(undefined)
  const [confirmation, setConfirmation] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const result = subscribeSchema.safeParse({ email })
    if (!result.success) {
      setError(fieldErrors(result).email)
      setConfirmation('')
      return
    }
    setConfirmation('Thanks for subscribing! Check your inbox.')
    setEmail('')
    setError(undefined)
  }

  return (
    <footer id="contact" className="border-t border-line py-[60px] md:py-16">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <h3 className="mb-4 text-[20px] font-light text-ink">Navigations</h3>
          <div className="grid grid-cols-3 gap-4">
            {FOOTER_NAV.map((column) => (
              <ul key={column[0]} className="space-y-[10px]">
                {column.map((item) => (
                  <li key={item}>
                    <a
                      href="#shop"
                      className="text-[14px] text-[#5c626e] transition-colors hover:text-brand"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <div className="lg:col-span-3">
          <h3 className="mb-4 text-[20px] font-light text-ink">Promo</h3>
          <a href="#shop" className="group block">
            <img
              src={IMAGES.promo}
              alt={PROMO.heading}
              loading="lazy"
              className="w-full rounded-lg object-cover"
            />
            <h4 className="mt-3 text-[18px] font-light text-ink transition-colors group-hover:text-brand">
              {PROMO.heading}
            </h4>
            <p className="mt-1 text-[14px] font-light text-body">{PROMO.range}</p>
          </a>
        </div>

        <div className="lg:col-span-3">
          <h3 className="mb-4 text-[20px] font-light text-ink">Contact Info</h3>
          <ul className="space-y-3 text-[14px] font-light text-body">
            <li className="flex gap-3">
              <MapPin aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
              <span>{CONTACT.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
              <span>{CONTACT.phone}</span>
            </li>
            <li className="flex gap-3">
              <Mail aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
              <span>{CONTACT.email}</span>
            </li>
          </ul>

          <h3 className="mb-3 mt-8 text-[20px] font-light text-ink">Subscribe</h3>
          <form onSubmit={handleSubmit} noValidate className="flex">
            <label htmlFor="subscribe-email" className="sr-only">
              Email address
            </label>
            <input
              id="subscribe-email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value)
                if (error) {
                  setError(undefined)
                }
              }}
              aria-invalid={error ? true : undefined}
              className="h-[43px] w-full border border-line px-3 text-[14px] text-ink outline-none transition-colors placeholder:text-body focus:border-brand"
            />
            <Button
              type="submit"
              className="h-[43px] shrink-0 rounded-none bg-brand px-5 text-[14px] font-light uppercase tracking-[0.2em] text-white transition-all duration-200 hover:top-[-2px] hover:shadow-[0_5px_20px_-7px_rgba(0,0,0,0.9)]"
            >
              Send
            </Button>
          </form>
          {error && <p className="mt-2 text-[12px] text-red-600">{error}</p>}
          {confirmation && (
            <p role="status" className="mt-2 text-[12px] text-[#5c626e]">
              {confirmation}
            </p>
          )}
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-6xl border-t border-line px-4 pt-5 text-center">
        <p className="text-[14px] font-light text-body">
          Copyright &copy;{new Date().getFullYear()} All rights reserved | {BRAND} — a free React
          template.{' '}
          <a
            href="https://www.componentdock.com/"
            className="text-ink transition-colors hover:text-brand"
          >
            More templates at Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
