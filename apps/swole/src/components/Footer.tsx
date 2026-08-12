import { useState, type FormEvent } from 'react'
import { MapPin, Phone, Send } from 'lucide-react'
import { BRAND, FOOTER_ADDRESS, FOOTER_BLURB, FOOTER_PHONES } from '../data'
import { FacebookIcon, InstagramIcon, SkypeIcon, TwitterIcon } from './social-icons'

const socials = [
  { label: 'Facebook', href: 'https://www.facebook.com/', icon: FacebookIcon },
  { label: 'Twitter', href: 'https://twitter.com/', icon: TwitterIcon },
  { label: 'Instagram', href: 'https://www.instagram.com/', icon: InstagramIcon },
  { label: 'Skype', href: 'https://www.skype.com/', icon: SkypeIcon },
] as const

/**
 * Footer — solid red `#ff0000` footer with About Us / Contact us (address +
 * two phone numbers) / Newsletter (email input + Subscribe button that shows
 * a confirmation on submit) columns, plus a copyright bar with a Component
 * Dock credit and 4 square social icon buttons.
 */
export function Footer() {
  const year = new Date().getFullYear()
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubscribed(true)
  }

  return (
    <footer id="contact" className="bg-brand text-white">
      <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8 lg:py-24">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h4 className="text-2xl text-white">About Us</h4>
            <p className="mt-5 max-w-xs text-base leading-relaxed">{FOOTER_BLURB}</p>
          </div>

          <div>
            <h4 className="text-2xl text-white">Contact us</h4>
            <p className="mt-5 flex items-start gap-3 text-base leading-relaxed">
              <MapPin className="mt-1 h-4 w-4 shrink-0" aria-hidden="true" />
              {FOOTER_ADDRESS}
            </p>
            {FOOTER_PHONES.map((phone) => (
              <p key={phone} className="mt-3 flex items-center gap-3 text-2xl">
                <Phone className="h-5 w-5 shrink-0" aria-hidden="true" />
                {phone}
              </p>
            ))}
          </div>

          <div className="md:col-span-2 lg:col-span-1">
            <h4 className="text-2xl text-white">Newsletter</h4>
            <p className="mt-5 max-w-sm text-base leading-relaxed">
              Stay updated with our latest classes, offers, and training tips.
            </p>
            {subscribed ? (
              <p role="status" className="mt-6 bg-white/15 px-5 py-3.5 text-base">
                Thanks for subscribing — see you at the gym!
              </p>
            ) : (
              <form onSubmit={onSubmit} className="mt-6 flex max-w-sm">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Enter your email"
                  className="h-10 w-2/3 border-none bg-brand-soft px-5 text-[13px] text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button
                  type="submit"
                  className="inline-flex h-10 items-center gap-2 bg-ink px-5 text-[13px] font-medium uppercase tracking-wide text-white transition-colors hover:bg-black"
                >
                  Subscribe <Send className="h-3.5 w-3.5" aria-hidden="true" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <div className="border-t border-white/25">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-5 text-sm text-white sm:flex-row lg:px-8">
          <p>
            Copyright © {year} All rights reserved | This template is made with love by{' '}
            <span className="text-white">{BRAND}</span>
          </p>
          <div className="flex gap-2">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="flex h-7 w-7 items-center justify-center bg-brand-social text-white transition-colors hover:bg-white hover:text-brand"
              >
                <social.icon className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-black/20 py-3 text-center">
        <p className="text-sm text-white/90">
          More templates at{' '}
          <a
            href="https://www.componentdock.com/"
            className="font-semibold underline underline-offset-2 transition-colors hover:text-white"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
