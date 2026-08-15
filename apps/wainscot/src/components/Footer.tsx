import { useState, type FormEvent } from 'react'
import { Send } from 'lucide-react'
import {
  componentDockLabel,
  componentDockUrl,
  copyrightPrefix,
  footerProducts,
  footerProductsTitle,
  instagramHandle,
  instagramPhotos,
  instagramTitle,
  newsletterError,
  newsletterLabel,
  newsletterPlaceholder,
  newsletterSuccess,
  newsletterText,
  newsletterTitle,
  siteName,
  subscribeLabel,
} from '../data'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function Footer() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!EMAIL_PATTERN.test(email)) {
      setError(newsletterError)
      return
    }
    setError('')
    setSubscribed(true)
  }

  return (
    <footer id="contact-section" className="bg-ink pb-0 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 md:grid-cols-3">
        <div>
          <h6 className="mb-6 text-base font-medium uppercase tracking-wide">
            {footerProductsTitle}
          </h6>
          <ul className="space-y-3 text-[15px] text-white/70">
            {footerProducts.map((product) => (
              <li key={product}>
                <a href="#top" className="transition-colors hover:text-brand">
                  {product}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h6 className="mb-6 text-base font-medium uppercase tracking-wide">{newsletterTitle}</h6>
          <p className="mb-6 text-[15px] leading-7 text-white/70">{newsletterText}</p>
          {subscribed ? (
            <p role="status" className="text-sm text-brand">
              {newsletterSuccess}
            </p>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <label htmlFor="newsletter-email" className="sr-only">
                {newsletterLabel}
              </label>
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder={newsletterPlaceholder}
                  aria-invalid={error ? true : undefined}
                  aria-describedby={error ? 'newsletter-error' : undefined}
                  className="h-11 flex-1 rounded-[5px] border border-white/20 bg-transparent px-4 text-sm text-white placeholder:text-white/40 focus:border-brand focus:outline-none"
                />
                <button
                  type="submit"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-[5px] bg-brand px-6 text-sm font-medium text-white transition-colors hover:bg-brand/90"
                >
                  <Send aria-hidden="true" className="h-4 w-4" />
                  {subscribeLabel}
                </button>
              </div>
              {error && (
                <p id="newsletter-error" role="alert" className="mt-2 text-sm text-red-300">
                  {error}
                </p>
              )}
            </form>
          )}
        </div>

        <div>
          <h6 className="mb-6 text-base font-medium uppercase tracking-wide">{instagramTitle}</h6>
          <p className="mb-4 text-sm text-white/60">{instagramHandle}</p>
          <ul className="grid grid-cols-4 gap-2">
            {instagramPhotos.map((photo) => (
              <li key={photo.src}>
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="h-[72px] w-full rounded-[3px] object-cover"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-1 px-4 py-6 text-center text-sm text-white/60">
          <span>
            Copyright © {new Date().getFullYear()} {siteName} — {copyrightPrefix}
          </span>
          <span aria-hidden="true">♥</span>
          <a href={componentDockUrl} className="text-white transition-colors hover:text-brand">
            {componentDockLabel}
          </a>
        </p>
      </div>
    </footer>
  )
}
