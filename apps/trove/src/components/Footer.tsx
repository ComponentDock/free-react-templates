import { useState, type FormEvent } from 'react'
import { z } from 'zod'
import { footerAbout, instaImages, socialLabels, socialLinks } from '../data'
import { BrandIcon } from './BrandIcon'

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
    <footer className="bg-night text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h2 className="mb-7 font-display text-base font-semibold text-white">About Us</h2>
          <p className="text-sm leading-relaxed text-muted">{footerAbout}</p>
        </div>

        <div>
          <h2 className="mb-7 font-display text-base font-semibold text-white">Newsletter</h2>
          <p className="text-sm leading-relaxed text-muted">Stay updated with our latest trends</p>
          {subscribed ? (
            <p role="status" className="mt-5 text-sm font-medium text-brand">
              Thanks for subscribing!
            </p>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="mt-5">
              <div className="relative">
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
                  placeholder="Email address"
                  aria-invalid={error ? true : undefined}
                  aria-describedby={error ? 'newsletter-error' : undefined}
                  className="w-full border border-white/20 bg-white/5 px-4 py-3 pr-28 text-sm text-white outline-none placeholder:text-white/40 focus:border-brand"
                />
                <button
                  type="submit"
                  className="brand-gradient absolute top-0 right-0 h-full px-5 text-xs font-light tracking-wide text-white uppercase transition-opacity hover:opacity-90"
                >
                  Subscribe
                </button>
              </div>
            </form>
          )}
          {error && (
            <p id="newsletter-error" role="alert" className="mt-3 text-xs text-red-400">
              {error}
            </p>
          )}
        </div>

        <div>
          <h2 className="mb-7 font-display text-base font-semibold text-white">Instagram Feed</h2>
          <ul className="grid grid-cols-4 gap-2">
            {instaImages.map((image) => (
              <li key={image.seed}>
                <a href="#home" className="block overflow-hidden" aria-label={image.alt}>
                  <img
                    src={`https://picsum.photos/seed/${image.seed}/90/90`}
                    alt=""
                    loading="lazy"
                    className="aspect-square w-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-7 font-display text-base font-semibold text-white">Follow Us</h2>
          <p className="text-sm leading-relaxed text-muted">Let us be social</p>
          <ul className="mt-5 flex gap-3" aria-label="Footer social links">
            {socialLinks.map((name) => (
              <li key={name}>
                <a
                  href="#home"
                  aria-label={socialLabels[name]}
                  className="flex h-9 w-9 items-center justify-center text-white transition-colors hover:text-brand"
                >
                  <BrandIcon name={name} className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6">
          <p className="text-xs text-white/50">Copyright © 2026 Trove. All rights reserved.</p>
          <p className="text-xs text-white/50">
            This template is made with <span className="text-brand">Colorlib</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
