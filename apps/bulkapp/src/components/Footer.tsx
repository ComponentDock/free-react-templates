import { Send } from 'lucide-react'
import { SocialLinks } from './SocialLinks'

const columns = [
  {
    title: 'Top Products',
    links: ['Managed Website', 'Manage Reputation', 'Power Tools', 'Marketing Service'],
  },
] as const

const instagramSeeds = [
  'bulkapp-ig-1',
  'bulkapp-ig-2',
  'bulkapp-ig-3',
  'bulkapp-ig-4',
  'bulkapp-ig-5',
  'bulkapp-ig-6',
] as const

export function Footer() {
  return (
    <footer className="bg-night py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 md:grid-cols-3">
          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="font-display text-lg font-bold text-white">{column.title}</h3>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#home"
                      className="text-sm text-gray-400 transition-colors hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-display text-lg font-bold text-white">Newsletter</h3>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              You can trust us. We only send promo offers, not a single spam.
            </p>
            <form
              className="mt-5 flex gap-2"
              aria-label="Newsletter subscription"
              onSubmit={(event) => event.preventDefault()}
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Email address"
                className="w-full rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-gray-500 focus:border-primary-400 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe to the newsletter"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-gradient-to-r from-brand-start to-brand-end text-white transition-opacity hover:opacity-90"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
              </button>
            </form>
          </div>

          <div>
            <h3 className="font-display text-lg font-bold text-white">Instagram Feed</h3>
            <div className="mt-5 grid grid-cols-3 gap-2">
              {instagramSeeds.map((seed, index) => (
                <img
                  key={seed}
                  src={`https://picsum.photos/seed/${seed}/100/100`}
                  alt={`Instagram post ${index + 1}`}
                  className="h-20 w-full rounded-md object-cover"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <SocialLinks />
        </div>

        <p className="mt-8 border-t border-white/10 pt-8 text-center text-sm text-gray-500">
          Copyright © {new Date().getFullYear()} BulkApp. All rights reserved.
        </p>
        <div className="mt-4 flex justify-center gap-6 text-sm text-gray-500">
          <a href="#home" className="transition-colors hover:text-white">
            Terms &amp; Conditions
          </a>
          <a href="#home" className="transition-colors hover:text-white">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  )
}
