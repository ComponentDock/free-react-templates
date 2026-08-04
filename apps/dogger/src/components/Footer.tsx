import { useState, type FormEvent } from 'react'
import { ArrowRight } from 'lucide-react'
import { SocialLinks } from './SocialLinks'

const quickLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Trainers', href: '#trainers' },
  { label: 'Services', href: '#services' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact Us', href: '#contact' },
] as const

export function Footer() {
  const [email, setEmail] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setEmail('')
  }

  return (
    <footer className="bg-night py-16 text-white/50">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 md:grid-cols-4">
        <div>
          <h3 className="text-base font-bold text-white">About Us</h3>
          <p className="mt-5 text-sm font-light leading-relaxed">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
        </div>
        <div>
          <h3 className="text-base font-bold text-white">Quick Links</h3>
          <ul className="mt-5 space-y-3 text-sm font-light">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition-colors hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-base font-bold text-white">Follow Us</h3>
          <div className="mt-5">
            <SocialLinks />
          </div>
        </div>
        <div>
          <h3 className="text-base font-bold text-white">Subscribe Newsletter</h3>
          <form onSubmit={handleSubmit} className="mt-5">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <div className="flex items-stretch gap-2">
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter your email"
                className="h-11 min-w-0 flex-1 rounded-md border border-white/10 bg-white/5 px-4 text-sm text-white placeholder:text-white/40 focus:border-brand focus:outline-none"
              />
              <button
                type="submit"
                className="flex h-11 items-center gap-2 rounded-md bg-brand px-5 text-sm font-semibold text-white transition-colors hover:bg-black"
              >
                Send
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="mx-auto mt-14 flex max-w-6xl flex-col items-center justify-between gap-6 border-t border-white/10 px-4 pt-8 sm:flex-row sm:px-6">
        <p className="text-sm font-light">
          Copyright © {new Date().getFullYear()} Dogger. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
