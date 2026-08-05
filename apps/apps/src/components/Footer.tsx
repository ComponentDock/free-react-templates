import { useState, type FormEvent } from 'react'
import { Send } from 'lucide-react'
import { SocialLinks } from './SocialLinks'

const topProducts = [
  'Managed Website',
  'Manage Reputation',
  'Power Tools',
  'Marketing Service',
] as const

const instagramImages = [
  'https://picsum.photos/seed/apps-ig-1/120/120',
  'https://picsum.photos/seed/apps-ig-2/120/120',
  'https://picsum.photos/seed/apps-ig-3/120/120',
  'https://picsum.photos/seed/apps-ig-4/120/120',
] as const

export function Footer() {
  const [email, setEmail] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setEmail('')
  }

  return (
    <footer className="bg-night py-16 text-gray-300">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white">Top Products</h4>
          <ul className="mt-5 space-y-3 text-sm">
            {topProducts.map((product) => (
              <li key={product}>
                <a href="#home" className="text-gray-500 transition-colors hover:text-white">
                  {product}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white">Newsletter</h4>
          <p className="mt-5 text-sm text-gray-500">
            You can trust us — we only send promo offers.
          </p>
          <form onSubmit={handleSubmit} className="mt-6 flex items-stretch">
            <label htmlFor="apps-newsletter" className="sr-only">
              Email address
            </label>
            <input
              id="apps-newsletter"
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Your Email Address"
              className="h-12 min-w-0 flex-1 rounded-l-full border border-white/25 bg-transparent px-5 text-sm text-white placeholder:text-white/50 focus:border-azure focus:outline-none"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-r-full bg-gradient-to-b from-primary-500 to-azure text-white transition-opacity hover:opacity-90"
            >
              <Send className="h-5 w-5" aria-hidden="true" />
            </button>
          </form>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white">
            Instagram Feed
          </h4>
          <ul className="mt-5 grid grid-cols-2 gap-2">
            {instagramImages.map((src) => (
              <li key={src}>
                <a href="#home" className="block">
                  <img
                    src={src}
                    alt="Instagram feed post"
                    className="h-14 w-14 object-cover"
                    loading="lazy"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-14 flex max-w-6xl flex-col items-center justify-between gap-6 border-t border-white/10 px-4 pt-8 sm:flex-row sm:px-6">
        <p className="text-sm text-gray-500">
          Copyright © {new Date().getFullYear()} Apps. All rights reserved.
        </p>
        <SocialLinks />
      </div>
    </footer>
  )
}
