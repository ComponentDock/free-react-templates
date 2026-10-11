import { useState, type FormEvent } from 'react'
import { ArrowRight, Heart } from 'lucide-react'
import { FOOTER } from '../data/content'
import { fieldErrors, newsletterSchema } from '../lib/forms'
import { BehanceIcon, DribbbleIcon, FacebookIcon, TwitterIcon } from './icons'

const SOCIALS = [
  { label: 'Facebook', href: '#', Icon: FacebookIcon },
  { label: 'Twitter', href: '#', Icon: TwitterIcon },
  { label: 'Dribbble', href: '#', Icon: DribbbleIcon },
  { label: 'Behance', href: '#', Icon: BehanceIcon },
]

export function Footer() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | undefined>(undefined)
  const [subscribed, setSubscribed] = useState(false)

  function onSubscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const parsed = newsletterSchema.safeParse({ email })
    if (!parsed.success) {
      setError(fieldErrors<'email'>(parsed.error).email)
      setSubscribed(false)
      return
    }
    setError(undefined)
    setSubscribed(true)
  }

  return (
    <footer className="bg-ink px-6 pb-12 pt-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <h6 className="text-lg font-semibold uppercase tracking-widest text-white">About Us</h6>
            <p className="mt-6 text-social">{FOOTER.about}</p>
          </div>

          <div>
            <h6 className="text-lg font-semibold uppercase tracking-widest text-white">
              Newsletter
            </h6>
            <p className="mt-6 text-social">{FOOTER.newsletterBlurb}</p>
            <form onSubmit={onSubscribe} noValidate className="mt-5 flex">
              <input
                type="email"
                name="email"
                aria-label="Email address"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-4/5 bg-ink-deep px-5 py-3 text-body outline-none"
              />
              <button type="submit" aria-label="Subscribe" className="bb-btn w-16">
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </button>
            </form>
            {error ? (
              <p role="alert" className="mt-2 text-sm text-social">
                {error}
              </p>
            ) : null}
            {subscribed ? (
              <p role="status" className="mt-2 text-sm text-social">
                Thanks for subscribing!
              </p>
            ) : null}
          </div>

          <div>
            <h6 className="text-lg font-semibold uppercase tracking-widest text-white">
              Follow Us
            </h6>
            <p className="mt-6 text-social">{FOOTER.socialBlurb}</p>
            <div className="mt-5 flex gap-4">
              {SOCIALS.map(({ label, href, Icon }) => (
                <a key={label} href={href} aria-label={label} className="social-link">
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-social">
          <p>
            Copyright © {new Date().getFullYear()} All rights reserved | Made with{' '}
            <Heart aria-hidden="true" className="inline h-4 w-4" /> by Alpinora · More templates at{' '}
            <a href="https://www.componentdock.com/" className="social-link font-medium">
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
