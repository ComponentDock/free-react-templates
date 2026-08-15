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
    <footer className="bg-footer pt-20">
      <div className="mx-auto grid max-w-[1170px] gap-12 px-4 pb-16 md:grid-cols-3">
        <div>
          <h3 className="font-heading text-lg font-light uppercase text-white">About Us</h3>
          <p className="mt-5 leading-relaxed text-footer-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, voluptate. Sed
            perspiciatis doloremque corrupti perferendis.
          </p>
        </div>
        {footerColumns.map((column) => (
          <div key={column.heading}>
            <h3 className="font-heading text-lg font-light uppercase text-white">
              {column.heading}
            </h3>
            <ul className="mt-5 space-y-2">
              {column.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-footer-text transition-colors hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <h3 className="font-heading text-lg font-light uppercase text-white">
            Subscribe Newsletter
          </h3>
          <form onSubmit={handleSubmit} className="mt-5 flex">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter Email"
              className="h-[43px] w-full rounded-l border border-[#6c757d] bg-transparent px-4 text-sm text-white outline-none placeholder:text-footer-text focus:border-brand"
            />
            <button
              type="submit"
              className="rounded-r bg-brand px-6 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
            >
              Send
            </button>
          </form>
          {subscribed && (
            <p role="status" className="mt-3 text-sm text-brand">
              Thank you for subscribing!
            </p>
          )}
          <h3 className="mt-8 font-heading text-lg font-light uppercase text-white">Follow Us</h3>
          <ul className="mt-5 flex gap-3">
            {socialLinks.map((name) => (
              <li key={name}>
                <a
                  href="#"
                  aria-label={name}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand"
                >
                  <BrandIcon name={name} className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1170px] flex-col items-center justify-between gap-3 px-4 py-6 text-sm text-footer-text md:flex-row">
          <p>© 2026 Depot. All rights reserved.</p>
          <p>
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
    </footer>
  )
}
