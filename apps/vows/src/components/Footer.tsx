import { useState, type FormEvent } from 'react'
import { Heart, Send } from 'lucide-react'

const columns = [
  {
    title: 'Services',
    links: ['Full Planning', 'Day-of Coordination', 'Design & Decor', 'Venue Selection'],
  },
  {
    title: 'Information',
    links: ['FAQ', 'Testimonials', 'Press', 'Blog'],
  },
  {
    title: 'Connect',
    links: ['Instagram', 'Pinterest', 'Contact'],
  },
] as const

export function Footer() {
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubscribed(true)
  }

  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <a
              href="#home"
              className="flex items-center gap-2 font-serif text-xl font-bold text-white"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-600 text-white">
                <Heart className="h-4 w-4" aria-hidden="true" />
              </span>
              Vows
            </a>
            <p className="mt-4 max-w-sm text-sm">
              Crafting unforgettable wedding experiences with elegance, passion, and meticulous
              attention to every detail.
            </p>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#home" className="text-sm transition-colors hover:text-primary-400">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Mailing List
            </h3>
            <p className="mt-4 text-sm">Stay Inspired</p>
            {subscribed ? (
              <p className="mt-4 rounded-full bg-primary-600/20 px-4 py-2.5 text-sm text-primary-300">
                Thanks for subscribing — wedding inspiration is on its way!
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="mt-4 flex gap-2">
                <label htmlFor="footer-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="footer-email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full min-w-0 rounded-full border border-gray-700 bg-gray-800 px-4 py-2.5 text-sm text-white placeholder:text-gray-500 focus:border-primary-500 focus:outline-none"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary-600 text-white transition-colors hover:bg-primary-700"
                >
                  <Send className="h-4 w-4" aria-hidden="true" />
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-8 sm:flex-row">
          <p className="text-sm">© 2026 Vows. All rights reserved.</p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Style Guide'].map((link) => (
              <a
                key={link}
                href="#home"
                className="text-sm transition-colors hover:text-primary-400"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
