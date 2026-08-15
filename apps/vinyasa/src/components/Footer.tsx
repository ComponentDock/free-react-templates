import { FormEvent } from 'react'
import { MapPin, Phone } from 'lucide-react'
import { contact, newsletterLabel } from '../data'

export function Footer() {
  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <footer className="bg-black py-20 text-white/60">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <h2 className="text-xl font-bold uppercase tracking-wider text-white">
              <span className="text-brand">V</span>inyasa
            </h2>
            <p className="mt-5 leading-relaxed">
              A yoga and fitness studio for people who want to move well, breathe deep, and keep
              showing up.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Contact Us</h3>
            <p className="mt-5 flex items-start gap-2 leading-relaxed">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              {contact.address}
            </p>
            <p className="mt-4 flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              <span className="text-lg font-semibold text-brand">{contact.phones[0]}</span>
            </p>
            <p className="mt-1 pl-6">{contact.phones[1]}</p>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Newsletter</h3>
            <p className="mt-5 leading-relaxed">
              Weekly class schedule and training tips, straight to your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="mt-5 flex max-w-sm gap-2">
              <label htmlFor="newsletter-email" className="sr-only">
                {newsletterLabel}
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder={newsletterLabel}
                className="min-w-0 flex-1 rounded-none border border-white/20 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
              />
              <button
                type="submit"
                className="rounded-none bg-brand px-5 py-2.5 text-sm font-medium uppercase tracking-wider text-white transition-colors hover:bg-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 text-sm">
          <p>
            © 2026 Vinyasa. All rights reserved. More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-brand underline-offset-4 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            >
              Component Dock
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  )
}
