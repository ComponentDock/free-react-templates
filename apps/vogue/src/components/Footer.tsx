import { useState } from 'react'
import type { FormEvent } from 'react'
import { footerColumns, socialLinks } from '../data'
import { BrandIcon } from './BrandIcon'

export function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubscribed(true)
  }

  return (
    <footer className="bg-footer">
      <div className="mx-auto max-w-[1200px] px-4 pt-[100px]">
        <form
          onSubmit={handleSubmit}
          className="mb-[90px] flex flex-col gap-4 md:flex-row md:items-stretch"
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Your email address"
            className="h-[53px] w-full flex-1 rounded-full border-2 border-[#454747] bg-transparent px-8 text-sm italic text-[#535353] outline-none placeholder:text-[#535353] focus:border-accent"
          />
          <button
            type="submit"
            className="h-[53px] w-full rounded-full bg-accent px-8 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand md:w-[310px]"
          >
            Subscribe to our newsletter
          </button>
        </form>

        {subscribed && (
          <p role="status" className="mb-8 text-center text-sm font-medium text-white">
            Thank you for subscribing!
          </p>
        )}

        <div className="grid grid-cols-1 gap-10 pb-20 sm:grid-cols-2 lg:grid-cols-4">
          {footerColumns.map((column) => (
            <div key={column.heading}>
              <h4 className="mb-11 text-[26px] font-bold text-white">{column.heading}</h4>
              <ul>
                {column.links.map((link) => (
                  <li key={link} className="mb-2">
                    <a
                      href="#"
                      className="text-sm text-white/50 transition-colors hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-social px-4 py-12">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-8 md:flex-row">
          <ul className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            {socialLinks.map((name) => (
              <li key={name}>
                <a
                  href="#"
                  aria-label={name}
                  className="flex items-center gap-2 text-[#9f9fa0] transition-colors hover:text-white"
                >
                  <BrandIcon name={name} className="h-[30px] w-[30px] text-[#d7d7d7]" />
                  <span className="text-xs font-semibold uppercase tracking-wider">{name}</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="text-center text-sm text-[#9f9fa0] md:text-right">
            <p>© 2026 Vogue. All rights reserved.</p>
            <p className="mt-1">
              Made with <span aria-hidden="true">❤</span> at{' '}
              <a
                href="https://www.componentdock.com/"
                className="underline transition-colors hover:text-white"
              >
                Component Dock
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
