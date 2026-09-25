import { useState, type FormEvent } from 'react'
import { z } from 'zod'
import { BrandIcon } from './BrandIcon'
import { footerProducts, instaImages, socialLabels, socialLinks } from '../data'

const emailSchema = z.string().email('Please enter a valid email address.')

export function Footer() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const result = emailSchema.safeParse(email)
    if (!result.success) {
      setError(result.error.issues[0]!.message)
      return
    }
    setError(null)
    setSubscribed(true)
  }

  return (
    <footer className="bg-ink text-white dark:bg-gray-950">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-3">
        <div>
          <h2 className="text-sm font-semibold tracking-wide uppercase">Top Products</h2>
          <ul className="mt-5 space-y-2.5">
            {footerProducts.map((product) => (
              <li key={product}>
                <a
                  href="#home"
                  className="text-sm text-white/60 transition-colors hover:text-brand"
                >
                  {product}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold tracking-wide uppercase">Newsletter</h2>
          <p className="mt-5 text-sm text-white/60">
            Stay updated with our latest news, travel tips and fashion reports.
          </p>
          {subscribed ? (
            <p role="status" className="mt-5 text-sm font-medium text-brand">
              Thanks for subscribing!
            </p>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="mt-5 flex gap-2">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value)
                  if (error) setError(null)
                }}
                placeholder="Your email"
                aria-invalid={error ? true : undefined}
                aria-describedby={error ? 'newsletter-error' : undefined}
                className="w-full rounded-full border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white outline-none placeholder:text-white/40 focus:border-brand"
              />
              <button
                type="submit"
                className="brand-gradient shrink-0 rounded-full px-5 py-2.5 text-xs font-semibold tracking-wide uppercase text-white transition-opacity hover:opacity-90"
              >
                Subscribe
              </button>
            </form>
          )}
          {error && (
            <p id="newsletter-error" role="alert" className="mt-3 text-xs text-red-400">
              {error}
            </p>
          )}
        </div>

        <div>
          <h2 className="text-sm font-semibold tracking-wide uppercase">Instagram Feed</h2>
          <ul className="mt-5 grid grid-cols-2 gap-2">
            {instaImages.map((image) => (
              <li key={image.seed}>
                <a href="#home" className="block overflow-hidden rounded">
                  <img
                    src={`https://picsum.photos/seed/${image.seed}/300/300`}
                    alt={image.alt}
                    className="aspect-square w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6">
          <p className="text-xs text-white/50">Copyright © 2026 Quill. All rights reserved.</p>
          <p className="text-xs text-white/50">Made with React, Tailwind &amp; TypeScript</p>
          <ul className="flex items-center gap-3" aria-label="Footer social links">
            {socialLinks.map((name) => (
              <li key={name}>
                <a
                  href="#home"
                  aria-label={socialLabels[name]}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-chip text-white/70 transition-colors hover:brand-gradient hover:text-white"
                >
                  <BrandIcon name={name} className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
