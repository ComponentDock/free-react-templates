import { useState, type FormEvent } from 'react'
import { Send } from 'lucide-react'
import { SocialLinks } from './SocialLinks'

const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
] as const

const services = ['Pet Care', 'Pet Treatment', 'Pet Training', 'Hygienic Care'] as const

export function Footer() {
  const [email, setEmail] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setEmail('')
  }

  return (
    <footer id="contact" className="bg-navy2 py-16 text-gray-300">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="font-display text-xl text-brand">Thepetcare</h3>
          <p className="mt-5 text-sm font-light leading-relaxed text-gray-400">
            Far far away, behind the word mountains, far from the countries Vokalia — a caring home
            for animals of every kind.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold uppercase text-white">Navigation</h4>
          <ul className="mt-5 space-y-3 text-sm">
            {navigation.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="font-light text-gray-400 transition-colors hover:text-brand"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold uppercase text-white">Services</h4>
          <ul className="mt-5 space-y-3 text-sm">
            {services.map((service) => (
              <li key={service}>
                <a
                  href="#services"
                  className="font-light text-gray-400 transition-colors hover:text-brand"
                >
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold uppercase text-white">Subscribe newsletter</h4>
          <p className="mt-5 text-sm font-light text-gray-400">
            Subscribe our newsletter to get updates about our services and offers.
          </p>
          <form onSubmit={handleSubmit} className="mt-6 flex items-stretch">
            <label htmlFor="thepetcare-newsletter" className="sr-only">
              Email address
            </label>
            <input
              id="thepetcare-newsletter"
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
              className="ml-2 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand text-white transition-colors hover:bg-navy3"
            >
              <Send className="h-5 w-5" aria-hidden="true" />
            </button>
          </form>
        </div>
      </div>
      <div className="mx-auto mt-14 flex max-w-6xl flex-col items-center justify-between gap-6 border-t border-white/10 px-4 pt-8 sm:flex-row sm:px-6">
        <p className="text-sm font-light text-gray-400">
          Copyright © {new Date().getFullYear()} Thepetcare. All rights reserved.
        </p>
        <SocialLinks />
      </div>
    </footer>
  )
}
