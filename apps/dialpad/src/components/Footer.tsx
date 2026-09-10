import { useState, type FormEvent } from 'react'
import { Phone, MapPin } from 'lucide-react'
import { BrandIcon, type BrandName } from './BrandIcon'

const socials: ReadonlyArray<{ label: string; name: BrandName }> = [
  { label: 'Facebook', name: 'facebook' },
  { label: 'X', name: 'x' },
  { label: 'Dribbble', name: 'dribbble' },
]

const EMAIL_PATTERN = /^\S+@\S+\.\S+$/

export function Footer() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!EMAIL_PATTERN.test(email.trim())) {
      setError('Please enter a valid email address.')
      return
    }
    setError('')
    setSubscribed(true)
  }

  return (
    <footer className="bg-charcoal text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <h4 className="mb-5 text-lg font-bold">About Us</h4>
            <p className="text-sm leading-relaxed text-gray-400">
              We are a leading call center solutions provider dedicated to delivering exceptional
              customer support experiences for businesses of all sizes.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-colors hover:bg-brand hover:text-white"
                >
                  <BrandIcon name={social.name} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-lg font-bold">Contact Us</h4>
            <p className="text-sm text-gray-400">
              Reach out to us anytime. Our team is always ready to assist you with your customer
              support needs.
            </p>
            <div className="mt-4 space-y-2">
              <p className="flex items-center gap-2 text-brand">
                <Phone className="h-4 w-4" aria-hidden="true" />
                012-6532-568-9746
              </p>
              <p className="flex items-center gap-2 text-brand">
                <Phone className="h-4 w-4" aria-hidden="true" />
                012-6532-569-9748
              </p>
              <p className="flex items-start gap-2 text-gray-400">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                123 Support Ave, Suite 100, Tech City
              </p>
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-lg font-bold">Newsletter</h4>
            <p className="text-sm text-gray-400">
              You can trust us — we only send offers, not a single spam.
            </p>
            {subscribed ? (
              <p className="mt-4 rounded-lg border border-brand/40 bg-brand/10 px-4 py-3 text-sm text-brand">
                Thanks for subscribing!
              </p>
            ) : (
              <form onSubmit={handleSubscribe} noValidate className="mt-4">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <div className="flex gap-2">
                  <input
                    id="newsletter-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email address"
                    className="flex-1 rounded-full bg-white px-4 py-2.5 text-sm text-ink placeholder:text-mist focus:outline-none focus:ring-2 focus:ring-brand"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand text-white transition-colors hover:bg-brand-dark"
                  >
                    &#8594;
                  </button>
                </div>
                {error ? (
                  <p role="alert" className="mt-2 text-sm text-red-400">
                    {error}
                  </p>
                ) : null}
              </form>
            )}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 py-5 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} All rights reserved | Made with{' '}
        <a
          href="https://www.componentdock.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand hover:underline"
        >
          Component Dock
        </a>
      </div>
    </footer>
  )
}
