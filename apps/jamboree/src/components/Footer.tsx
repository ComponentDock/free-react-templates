import { useState, type FormEvent } from 'react'
import { BrandIcon, type BrandName } from './BrandIcon'

const socials: ReadonlyArray<{ label: string; name: BrandName }> = [
  { label: 'Facebook', name: 'facebook' },
  { label: 'X', name: 'x' },
  { label: 'Dribbble', name: 'dribbble' },
  { label: 'Instagram', name: 'instagram' },
]

const EMAIL_PATTERN = /^\S+@\S+\.\S+$/

export function Footer() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!EMAIL_PATTERN.test(email.trim())) {
      setError('A valid email address is required.')
      return
    }
    setError('')
    setSubscribed(true)
  }

  return (
    <footer className="bg-footer text-white transition-colors dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <h3 className="mb-5 text-lg font-semibold">Top Products</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              {['Event Management', 'Marketing Suite', 'Analytics Dashboard', 'Speaker Portal'].map(
                (item) => (
                  <li key={item}>
                    <a href="#" className="transition-colors hover:text-brand">
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-semibold">Newsletter</h3>
            <p className="mb-4 text-sm text-gray-400">
              You can trust us. We only send promo offers, not a single spam.
            </p>
            {subscribed ? (
              <p className="rounded-lg border border-brand/40 bg-brand/10 px-4 py-3 text-sm text-brand">
                Thanks for subscribing!
              </p>
            ) : (
              <form onSubmit={handleSubscribe} noValidate>
                <label htmlFor="footer-email" className="sr-only">
                  Email address
                </label>
                <div className="flex gap-2">
                  <input
                    id="footer-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Email"
                    aria-invalid={Boolean(error)}
                    className="w-full rounded-full bg-white px-5 py-3 text-sm text-ink placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand"
                  />
                  <button
                    type="submit"
                    className="shrink-0 rounded-full bg-gradient-to-r from-gradient-start via-gradient-mid to-gradient-end px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
                  >
                    Subscribe
                  </button>
                </div>
                {error && (
                  <p role="alert" className="mt-2 text-sm text-red-400">
                    {error}
                  </p>
                )}
              </form>
            )}
          </div>

          <div>
            <h3 className="mb-5 text-lg font-semibold">Follow Us</h3>
            <div className="flex gap-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-brand hover:text-white"
                >
                  <BrandIcon name={social.name} className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 py-5 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Jamboree. All rights reserved. · More templates at{' '}
        <a
          href="https://www.componentdock.com/"
          className="text-white underline-offset-4 transition-colors hover:text-brand hover:underline"
        >
          Component Dock
        </a>
      </div>
    </footer>
  )
}
