import { useState, type FormEvent } from 'react'
import { Car, Clock, Mail, MapPin, Phone } from 'lucide-react'

const RECENT_POSTS = [
  'Hello Dhaka! Road trip season is here',
  'New electric fleet arrives this spring',
  'Weekend rental deals you should not miss',
]

function handleSubscribe(event: FormEvent<HTMLFormElement>) {
  event.preventDefault()
}

export function Footer() {
  const [email, setEmail] = useState('')

  return (
    <footer id="contact" className="bg-carbon text-gray-300">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 lg:grid-cols-3">
        <div>
          <h3 className="text-xl font-semibold uppercase text-white">About Us</h3>
          <div className="mt-4 flex items-center gap-2">
            <Car className="h-7 w-7 text-brand" aria-hidden="true" />
            <span className="text-xl font-extrabold uppercase tracking-wide text-white">
              Autodock
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed">
            AutoDock is a free car rental landing page template. Replace this text with your own
            story — fleet highlights, service area, and what sets your rental company apart.
          </p>
          <form onSubmit={handleSubscribe} aria-label="Newsletter signup" className="mt-6 flex">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email address"
              className="w-full rounded-l-full border border-line bg-white px-5 py-2.5 text-sm text-ink focus:outline-none"
            />
            <button
              type="submit"
              className="whitespace-nowrap rounded-r-full bg-brand px-6 py-2.5 text-sm font-bold uppercase text-carbon transition-colors hover:bg-brand-deep"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div>
          <h3 className="text-xl font-semibold uppercase text-white">Recent Posts</h3>
          <ul className="mt-4 space-y-3 text-sm">
            {RECENT_POSTS.map((post) => (
              <li key={post}>
                <a href="#blog" className="transition-colors hover:text-brand">
                  {post}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold uppercase text-white">Get in Touch</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              800/8, Kazipara, Dhaka
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              +880 01 86 25 72 43
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              hello@autodock.example
            </li>
            <li className="flex items-center gap-2">
              <Clock className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              Mon-Fri 09.00 - 17.00
            </li>
            <li>
              <a
                href="https://maps.google.com/?q=Kazipara+Dhaka"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-brand hover:underline"
              >
                Show Location
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 bg-carbon-deep py-5 text-center text-sm">
        <p>
          Copyright © 2026 AutoDock. All rights reserved · More templates at{' '}
          <a
            href="https://www.componentdock.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-brand hover:underline"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
