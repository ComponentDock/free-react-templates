import { useState, type FormEvent } from 'react'
import { BrandIcon } from './BrandIcon'
import { BRAND, FOOTER_NAV, INSTA_FEED } from '../data'

const FOOTER_SOCIALS = [
  { network: 'facebook' as const, label: 'Conclave on Facebook' },
  { network: 'twitter' as const, label: 'Conclave on Twitter' },
  { network: 'instagram' as const, label: 'Conclave on Instagram' },
  { network: 'linkedin' as const, label: 'Conclave on LinkedIn' },
]

/* Footer: dark navy #111429 background, 4 columns — About text,
   Navigation links, Newsletter form, InstaFeed (8 images).
   Must include Component Dock link. */

export function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
    }
  }

  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#111429]">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: About */}
          <div>
            <a
              href="#home"
              className="text-2xl font-bold uppercase tracking-wide text-white"
              aria-label="Conclave home"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {BRAND}
            </a>
            <p className="mt-5 text-sm leading-relaxed text-[#797979]">
              Three days of keynotes, workshops and networking for UX professionals. Join us in
              Buffalo City this January for the conference of the year.
            </p>
            <div className="mt-6 flex gap-3">
              {FOOTER_SOCIALS.map((social) => (
                <a
                  key={social.network}
                  href="#home"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full text-[#797979] transition-colors hover:bg-[#3b1d82] hover:text-white"
                >
                  <BrandIcon name={social.network} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h5
              className="mb-5 text-xl font-semibold text-white"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Navigation
            </h5>
            <ul className="space-y-3 text-sm">
              {FOOTER_NAV.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#797979] transition-colors hover:text-[#ea0763]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Newsletter */}
          <div>
            <h5
              className="mb-5 text-xl font-semibold text-white"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Newsletter
            </h5>
            {subscribed ? (
              <p className="text-sm text-[#3b1d82]">Thanks for subscribing!</p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  aria-label="Email address"
                  className="w-full border-0 border-b border-[#797979] bg-transparent px-0 py-2 text-sm text-white placeholder:text-[#797979]/60 focus:border-[#ea0763] focus:outline-none"
                />
                <button
                  type="submit"
                  className="inline-flex items-center rounded-[4px] bg-[#ea0763] px-6 py-2 text-sm font-medium uppercase tracking-wider text-white transition-all hover:bg-[#c90656]"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>

          {/* Column 4: InstaFeed */}
          <div>
            <h5
              className="mb-5 text-xl font-semibold text-white"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              InstaFeed
            </h5>
            <div className="grid grid-cols-4 gap-2">
              {INSTA_FEED.map((image, i) => (
                <a key={image} href="#gallery" aria-label={`Instagram image ${i + 1}`}>
                  <img src={image} alt="" className="h-14 w-14 object-cover" loading="lazy" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-[#1a1d3a] pt-8 text-sm text-[#797979] sm:flex-row">
          <p>
            Copyright &copy; {year} All rights reserved | made with{' '}
            <span aria-hidden="true">&hearts;</span> by{' '}
            <a
              href="https://www.componentdock.com/"
              className="font-medium text-white transition-colors hover:text-[#ea0763]"
            >
              Component Dock
            </a>
          </p>
          <div className="flex gap-6">
            <a href="#home" className="transition-colors hover:text-white">
              Terms of Service
            </a>
            <a href="#home" className="transition-colors hover:text-white">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
