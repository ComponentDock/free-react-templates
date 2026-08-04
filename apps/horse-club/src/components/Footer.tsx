import { useState, type FormEvent } from 'react'
import { Send } from 'lucide-react'
import { SocialLinks } from './SocialLinks'

export function Footer() {
  const [email, setEmail] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setEmail('')
  }

  return (
    <footer id="contact" className="bg-ink py-16 text-gray-300">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="text-xl font-bold uppercase tracking-wide text-white">Horse Club</h3>
          <p className="mt-5 text-sm font-light leading-relaxed text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold uppercase text-white">About Us</h4>
          <p className="mt-5 text-sm font-light leading-relaxed text-gray-400">
            A community of riders, trainers, and horses — built on care, skill, and a lifelong love
            of equestrian sport.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold uppercase text-white">Contact Us</h4>
          <ul className="mt-5 space-y-3 text-sm font-light text-gray-400">
            <li>012-6532-568-9746</li>
            <li>012-6532-569-9748</li>
            <li>info@horseclub.com</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold uppercase text-white">Newsletter</h4>
          <p className="mt-5 text-sm font-light text-gray-400">
            Subscribe our newsletter to get updates about our events and offers.
          </p>
          <form onSubmit={handleSubmit} className="mt-6 flex items-stretch">
            <label htmlFor="horseclub-newsletter" className="sr-only">
              Email address
            </label>
            <input
              id="horseclub-newsletter"
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter your email"
              className="h-12 min-w-0 flex-1 rounded-full border border-white/25 bg-transparent px-5 text-sm text-white placeholder:text-white/50 focus:border-brand focus:outline-none"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="ml-2 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand text-white transition-colors hover:bg-white hover:text-brand"
            >
              <Send className="h-5 w-5" aria-hidden="true" />
            </button>
          </form>
        </div>
      </div>
      <div className="mx-auto mt-14 flex max-w-6xl flex-col items-center justify-between gap-6 border-t border-white/10 px-4 pt-8 sm:flex-row sm:px-6">
        <p className="text-sm font-light text-gray-400">
          Copyright © {new Date().getFullYear()} Horse Club. All rights reserved.
        </p>
        <SocialLinks />
      </div>
    </footer>
  )
}
