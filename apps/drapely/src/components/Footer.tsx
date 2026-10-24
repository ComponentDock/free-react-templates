import { useState, type FormEvent } from 'react'
import { brand, contactInfo, photo, promo, quickLinkColumns } from '../data'

const CURRENT_YEAR = new Date().getFullYear()

/** Four-block footer — promo card, quick-link columns, contact details and a
 *  newsletter form — over a centered copyright line crediting Component
 *  Dock. */
export function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  function handleSubscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubscribed(true)
  }

  return (
    <footer id="contact" className="border-t border-line bg-white py-16">
      <div className="mx-auto w-full max-w-[1200px] px-4 md:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <h2 className="mb-4 text-sm tracking-[0.2em] text-ink uppercase">Promo</h2>
            <a href="#popular" className="block">
              <img
                src={photo(promo.seed, 600, 400)}
                alt="Summer shirt promo"
                loading="lazy"
                decoding="async"
                className="mb-4 w-full object-cover"
              />
              <p className="font-light text-ink">{promo.title}</p>
              <p className="mt-1 text-sm text-body">{promo.dates}</p>
            </a>
          </div>

          <div className="lg:col-span-5">
            <h2 className="mb-4 text-sm tracking-[0.2em] text-ink uppercase">Quick Links</h2>
            <nav aria-label="Quick Links">
              <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
                {quickLinkColumns.map((column, index) => (
                  <ul key={`column-${index}`} className="space-y-2 text-sm">
                    {column.map((label) => (
                      <li key={label}>
                        <a
                          href="#popular"
                          className="transition-colors hover:text-brand"
                        >
                          {label}
                        </a>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </nav>
          </div>

          <div className="lg:col-span-4">
            <h2 className="mb-4 text-sm tracking-[0.2em] text-ink uppercase">Contact Info</h2>
            <ul className="space-y-2 text-sm">
              <li>{contactInfo.address}</li>
              <li>
                <a
                  href={`tel:${contactInfo.phone.replace(/[^+\d]/g, '')}`}
                  className="transition-colors hover:text-brand"
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li>{contactInfo.email}</li>
            </ul>

            <div className="mt-8">
              <h2 className="mb-4 text-sm tracking-[0.2em] text-ink uppercase">Subscribe</h2>
              {subscribed ? (
                <p role="status" className="text-sm text-brand">
                  Thanks for subscribing — new arrivals are on their way.
                </p>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <label htmlFor="drapely-email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="drapely-email"
                    type="email"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="Email"
                    className="h-11 w-full border border-line px-3 text-sm text-ink focus:border-brand focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="h-11 shrink-0 bg-black px-6 text-[13px] tracking-[0.1em] text-white uppercase transition-colors hover:bg-[#333333]"
                  >
                    Send
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-line pt-6 text-center text-sm">
          <p>
            Copyright © {CURRENT_YEAR} {brand.name} — All rights reserved | Made with{' '}
            <span aria-hidden="true">♥</span> by{' '}
            <a
              href="https://www.componentdock.com/"
              className="font-bold text-brand transition-colors hover:text-ink"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
