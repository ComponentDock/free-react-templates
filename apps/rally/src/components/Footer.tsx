import { useState, type FormEvent } from 'react'
import { Send } from 'lucide-react'
import { instagramThumbs, socialLinks, topProducts } from '../data'
import { FacebookIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from './social-icons'

const socialIcons = {
  Facebook: FacebookIcon,
  Twitter: TwitterIcon,
  Instagram: InstagramIcon,
  LinkedIn: LinkedInIcon,
} as const

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
    <footer className="bg-footer text-white">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <h3 className="font-display text-lg font-bold uppercase tracking-wide">Top Products</h3>
            <ul className="mt-6 space-y-3">
              {topProducts.map((product) => (
                <li key={product}>
                  <a href="#" className="text-sm text-white/60 transition-colors hover:text-white">
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-bold uppercase tracking-wide">Newsletter</h3>
            <p className="mt-6 text-sm leading-relaxed text-white/60">
              You can trust us. we only send promo offers, not a single spam.
            </p>
            {subscribed ? (
              <p role="status" className="mt-4 text-sm text-white/80">
                Thanks for subscribing!
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="mt-4 flex">
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
                  className="h-11 w-full border-b border-white/30 bg-transparent px-2 text-sm text-white placeholder:text-white/40 outline-none focus:border-white"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(0deg,#141da2_0%,#9b5cf6_100%)] text-white transition-opacity hover:opacity-90"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
            )}
            {error ? (
              <p role="alert" className="mt-2 text-sm text-red-300">
                {error}
              </p>
            ) : null}
          </div>

          <div>
            <h3 className="font-display text-lg font-bold uppercase tracking-wide">
              Instagram Feed
            </h3>
            <ul className="mt-6 grid grid-cols-4 gap-2">
              {instagramThumbs.map((thumb, index) => (
                <li key={thumb}>
                  <a
                    href="#"
                    aria-label={`Instagram photo ${index + 1}`}
                    className="block overflow-hidden"
                  >
                    <img
                      src={thumb}
                      alt=""
                      aria-hidden="true"
                      className="aspect-square w-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">
          <div className="flex items-center gap-5">
            {socialLinks.map((social) => {
              const Icon = socialIcons[social.label as keyof typeof socialIcons]
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="text-white/60 transition-colors hover:text-white"
                >
                  <Icon className="h-5 w-5" />
                </a>
              )
            })}
          </div>
          <p className="text-sm text-white/60">
            © {year} Rally. All rights reserved. Made with{' '}
            <a
              href="https://www.componentdock.com/"
              className="font-medium text-white underline decoration-white/30 underline-offset-2 transition-colors hover:text-white/80"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
