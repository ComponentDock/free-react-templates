import { useState, type FormEvent } from 'react'
import { Globe } from 'lucide-react'
import { navigationLinks, serviceLinks } from '../data'

const EMAIL_PATTERN = /^\S+@\S+\.\S+$/

/** Dark-purple footer: blurb, link columns, newsletter form, Component Dock credit. */
export function Footer() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | undefined>()
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!EMAIL_PATTERN.test(email)) {
      setError('Please enter a valid email address.')
      setSubscribed(false)
      return
    }
    setError(undefined)
    setSubscribed(true)
  }

  return (
    <footer id="contact" className="bg-primary-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <a href="#home" className="flex items-center gap-2" aria-label="Sitewise home">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-500 text-white">
              <Globe className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="text-2xl font-bold tracking-wide">Sitewise</span>
          </a>
          <p className="mt-6 text-sm leading-6 text-white/70">
            Fast, secure web hosting with a control panel your whole team will love — and engineers
            on call around the clock.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-medium">service</h3>
          <ul className="mt-6 space-y-3 text-sm text-white/70">
            {serviceLinks.map((label) => (
              <li key={label}>
                <a href="#pricing" className="transition-colors hover:text-accent-500">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-medium">Navigation</h3>
          <ul className="mt-6 space-y-3 text-sm text-white/70">
            {navigationLinks.map((label) => (
              <li key={label}>
                <a href="#home" className="transition-colors hover:text-accent-500">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-medium">Sign Up</h3>
          <p className="mt-4 text-sm leading-6 text-white/70">
            Subscribe newsletter to get updates
          </p>
          {subscribed ? (
            <p
              role="status"
              className="mt-6 rounded-md bg-accent-500/20 p-4 text-sm text-accent-200"
            >
              You have been subscribed. Thank you!
            </p>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="mt-6">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter your mail"
                className="h-12 w-full rounded-md border border-white/20 bg-white/10 px-4 text-sm text-white placeholder:text-white/50 focus:border-accent-500 focus:outline-none"
              />
              <button
                type="submit"
                className="mt-4 w-full rounded-full bg-accent-500 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-600"
              >
                Subscribe
              </button>
            </form>
          )}
          {error ? (
            <p className="mt-3 text-sm text-accent-200" role="alert">
              {error}
            </p>
          ) : null}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row lg:px-8">
          <p className="text-sm text-white/60">&copy; 2026 Sitewise. All rights reserved.</p>
          <p className="text-sm text-white/60">
            More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-white underline-offset-4 transition-colors hover:text-accent-500 hover:underline"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
