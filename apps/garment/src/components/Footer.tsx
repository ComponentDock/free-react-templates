import { useState, type FormEvent } from 'react'
import { ArrowRight } from 'lucide-react'
import { footerLinkGroups, socialLinks } from '../data'
import {
  FacebookIcon,
  InstagramIcon,
  PinterestIcon,
  TwitterIcon,
  YoutubeIcon,
} from './social-icons'

const socialIcons = {
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
  Twitter: TwitterIcon,
  Pinterest: PinterestIcon,
  YouTube: YoutubeIcon,
} as const

export function Footer() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [subscribed, setSubscribed] = useState(false)
  const year = new Date().getFullYear()

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    if (!valid) {
      setError('Please enter a valid email address.')
      return
    }
    setError(null)
    setSubscribed(true)
  }

  return (
    <footer className="bg-footer text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="font-display text-2xl font-bold uppercase tracking-widest">Garment</p>
            <ul className="mt-6 space-y-2">
              {footerLinkGroups[0]!.links.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-base text-white/60 transition-colors hover:text-white"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              {footerLinkGroups[1]!.links.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-base text-white/60 transition-colors hover:text-white"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 grid items-end gap-10 md:grid-cols-2">
          <div>
            <h3 className="font-display text-base font-bold uppercase tracking-wide">Subscribe</h3>
            {subscribed ? (
              <p role="status" className="mt-4 text-sm text-white/80">
                Thanks for subscribing!
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="mt-4 flex max-w-sm">
                <label htmlFor="footer-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="footer-email"
                  type="text"
                  inputMode="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Email address"
                  className="h-12 w-full border border-white/20 bg-transparent px-4 text-sm text-white placeholder:text-white/40 outline-none focus:border-white"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="flex h-12 w-12 shrink-0 items-center justify-center bg-brand text-white transition-colors hover:bg-accent"
                >
                  <ArrowRight className="h-5 w-5" />
                </button>
              </form>
            )}
            {error ? (
              <p role="alert" className="mt-2 text-sm text-red-300">
                {error}
              </p>
            ) : null}
          </div>
          <div className="flex items-center gap-4 md:justify-end">
            {socialLinks.map((social) => {
              const Icon = socialIcons[social.label as keyof typeof socialIcons]
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center text-white transition-colors hover:text-brand"
                >
                  <Icon className="h-5 w-5" />
                </a>
              )
            })}
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-white/60">
          <p>
            © {year} Garment. All rights reserved. More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              className="font-medium text-white underline decoration-white/30 underline-offset-2 transition-colors hover:text-brand"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
