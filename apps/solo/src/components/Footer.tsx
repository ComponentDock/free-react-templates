import { useState, type FormEvent } from 'react'
import { Send } from 'lucide-react'
import { footer } from '../data'
import { BrandIcon, type SocialName } from './BrandIcon'

/** Dark #04091e footer with three widgets: About Me (description +
 *  copyright linking to Component Dock), Newsletter (email input + send
 *  button with a success message), and Follow Me (circular social icons). */
export function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubscribed(true)
  }

  return (
    <footer id="contact" className="bg-night py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-3">
        <div>
          <h2 className="text-xl font-medium text-white">{footer.aboutHeading}</h2>
          <p className="mt-6 text-sm font-light leading-relaxed text-white/60">
            {footer.aboutText}
          </p>
        </div>
        <div>
          <h2 className="text-xl font-medium text-white">{footer.newsletterHeading}</h2>
          <p className="mt-6 text-sm font-light text-white/60">{footer.newsletterText}</p>
          {subscribed ? (
            <p className="mt-4 text-sm text-primary-300" role="status">
              Thank you for subscribing!
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="mt-4 flex">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder={footer.newsletterPlaceholder}
                className="w-full bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                aria-label={footer.newsletterButton}
                className="flex shrink-0 items-center gap-2 bg-gradient-to-br from-primary to-accent px-5 py-3 text-sm font-medium uppercase tracking-wide text-white transition-opacity hover:opacity-90"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
                {footer.newsletterButton}
              </button>
            </form>
          )}
        </div>
        <div>
          <h2 className="text-xl font-medium text-white">{footer.followHeading}</h2>
          <p className="mt-6 text-sm font-light text-white/60">{footer.followText}</p>
          <ul className="mt-6 flex gap-3">
            {footer.socials.map((social) => (
              <li key={social.name}>
                <a
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-gradient-to-br hover:from-primary hover:to-accent"
                >
                  <BrandIcon name={social.name as SocialName} className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-6xl px-4">
        <p className="text-center text-sm font-light text-white/60">
          Copyright © {new Date().getFullYear()} All rights reserved | Made with ♥ by Solo · More
          templates at{' '}
          <a
            href="https://www.componentdock.com/"
            className="font-medium text-primary-300 transition-colors hover:text-white"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
