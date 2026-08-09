import { useState } from 'react'
import { Mail, Phone, Scissors } from 'lucide-react'
import { BrandIcon, type BrandName } from './BrandIcon'

const socials: ReadonlyArray<{ label: string; name: BrandName }> = [
  { label: 'GitHub', name: 'github' },
  { label: 'X', name: 'x' },
  { label: 'LinkedIn', name: 'linkedin' },
]

const informationLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
] as const

const exploreLinks = [
  { label: 'Team', href: '#team' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonial' },
  { label: 'Blog', href: '#blog' },
] as const

export function Footer() {
  const [subscribed, setSubscribed] = useState(false)

  return (
    <footer id="contact" className="relative overflow-hidden text-white">
      <img
        src="https://picsum.photos/seed/taper-footer/1920/900"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/85" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <a href="#home" className="flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand">
                <Scissors className="h-5 w-5 text-white" aria-hidden="true" />
              </span>
              <span className="font-display text-xl font-semibold uppercase tracking-[0.2em]">
                Taper<span className="text-brand-light">.</span>
              </span>
            </a>
            <p className="mt-6 text-sm leading-relaxed text-gray-400">
              Receive updates and latest news direct from Simply enter. Our barbershop has kept the
              city sharp for over five decades.
            </p>
            <p className="mt-5 flex items-center gap-2 text-sm text-gray-400">
              <Phone className="h-4 w-4 text-brand-light" aria-hidden="true" />
              +564 7885 3222
            </p>
            <p className="mt-3 flex items-center gap-2 text-sm text-gray-400">
              <Mail className="h-4 w-4 text-brand-light" aria-hidden="true" />
              youremail@gmail.com
            </p>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-brand-light">
              Information
            </h3>
            <ul className="mt-5 space-y-2 text-sm text-gray-400">
              {informationLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition-colors hover:text-brand-light">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-brand-light">
              Explore
            </h3>
            <ul className="mt-5 space-y-2 text-sm text-gray-400">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition-colors hover:text-brand-light">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-brand-light">
              Newsletter
            </h3>
            <p className="mt-5 text-sm text-gray-400">Subscribe now to get daily updates</p>
            {subscribed ? (
              <p role="status" className="mt-5 text-sm text-brand-light">
                Thank you for subscribing!
              </p>
            ) : (
              <form
                className="mt-5 flex"
                onSubmit={(event) => {
                  event.preventDefault()
                  setSubscribed(true)
                }}
              >
                <input
                  type="email"
                  required
                  placeholder="Enter email address"
                  aria-label="Enter email address"
                  className="h-10 w-full flex-1 rounded-l border border-gray-700 bg-gray-900 px-4 text-sm text-white outline-none transition-colors focus:border-brand-light"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="h-10 shrink-0 rounded-r bg-brand px-5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                >
                  Send
                </button>
              </form>
            )}
            <h3 className="mt-8 font-display text-lg font-semibold uppercase tracking-wide text-brand-light">
              Follow Us
            </h3>
            <div className="mt-4 flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href="#contact"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 text-gray-400 transition-colors hover:border-brand-light hover:bg-brand-light hover:text-black"
                >
                  <BrandIcon name={social.name} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-10 border-t border-gray-800 py-5 text-center text-sm text-gray-500">
        Copyright © {new Date().getFullYear()} All rights reserved | Taper
      </div>
    </footer>
  )
}
