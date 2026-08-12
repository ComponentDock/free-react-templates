import { useState, type FormEvent } from 'react'
import { Cross, Send } from 'lucide-react'
import {
  componentDockUrl,
  footerAboutText,
  footerNavLinks,
  footerNewsletterText,
  instaFeedImages,
} from '../data'
import { FacebookIcon, TwitterIcon } from './social-icons'

export function Footer() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [subscribed, setSubscribed] = useState(false)
  const year = new Date().getFullYear()

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    if (!valid) {
      setError('Please enter a valid email address.')
      return
    }
    setError(null)
    setSubscribed(true)
  }

  return (
    <footer className="bg-dark text-white">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <a
              href="#home"
              className="flex items-center gap-2 font-semibold uppercase tracking-widest"
            >
              <Cross className="h-5 w-5 text-brand" aria-hidden="true" />
              Creeds
            </a>
            <h3 className="mt-6 text-sm font-semibold uppercase tracking-wide">About Agency</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/60">{footerAboutText}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide">Navigation Links</h3>
            <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3">
              {footerNavLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-white/60 transition-colors hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide">Newsletter</h3>
            <p className="mt-6 text-sm leading-relaxed text-white/60">{footerNewsletterText}</p>
            {subscribed ? (
              <p role="status" className="mt-4 text-sm text-white/80">
                Thanks for subscribing!
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="relative mt-4">
                <label htmlFor="footer-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="footer-email"
                  type="text"
                  inputMode="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Email address"
                  className="h-11 w-full border border-white/30 bg-transparent px-3 pr-12 text-sm text-white placeholder:text-white/40 outline-none focus:border-brand"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="absolute right-0 top-0 flex h-11 items-center px-3 text-white transition-colors hover:bg-white/10"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
            )}
            {error ? (
              <p role="alert" className="mt-2 text-sm text-white/80">
                {error}
              </p>
            ) : null}
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide">InstaFeed</h3>
            <ul className="mt-6 grid grid-cols-4 gap-2">
              {instaFeedImages.map((image) => (
                <li key={image}>
                  <img
                    src={image}
                    alt=""
                    loading="lazy"
                    className="aspect-square w-full object-cover"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center gap-4 border-t border-white/10 pt-8 text-center text-sm text-white/60 md:flex-row md:justify-between md:text-left">
          <p>
            © {year} Creeds. All rights reserved. · Made with <span aria-hidden="true">❤</span> by
            Creeds
          </p>
          <div className="flex items-center gap-4">
            <a href={componentDockUrl} className="text-white/60 transition-colors hover:text-white">
              More templates at Component Dock
            </a>
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="text-white/60 transition-colors hover:text-white"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-white/60 transition-colors hover:text-white"
              >
                <TwitterIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
