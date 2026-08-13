import { useState, type FormEvent } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

const products = [
  'Managed Website',
  'Manage Reputation',
  'Power Tools',
  'Marketing Service',
] as const

const EMAIL_PATTERN = /^\S+@\S+\.\S+$/

/** Dark three-column footer: products, contact, newsletter + copyright bar. */
export function Footer() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!EMAIL_PATTERN.test(email)) {
      setError('Please enter a valid email address.')
      setSubscribed(false)
      return
    }
    setError(null)
    setSubscribed(true)
    setEmail('')
  }

  return (
    <footer className="bg-ink-900 text-mute-500">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <nav aria-label="Top Products">
            <h3 className="text-lg font-semibold tracking-wider text-white">Top Products</h3>
            <ul className="mt-6 space-y-3">
              {products.map((product) => (
                <li key={product}>
                  <a href="#home" className="text-sm transition-colors hover:text-primary-500">
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-lg font-semibold tracking-wider text-white">Contact Us</h3>
            <ul className="mt-6 space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-primary-500" aria-hidden="true" />
                012-6532-568-97468
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-primary-500" aria-hidden="true" />
                emergency@sana.health
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-500" aria-hidden="true" />
                203 Fake St. Mountain View, San Francisco, California, USA
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold tracking-wider text-white">Newsletter</h3>
            <p className="mt-6 text-sm leading-6">
              Subscribe for health tips, clinic updates, and community news.
            </p>
            <form onSubmit={handleSubscribe} noValidate className="mt-6 flex">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                aria-invalid={Boolean(error)}
                aria-describedby={error ? 'newsletter-error' : undefined}
                className="h-12 w-full rounded-none border border-white/20 bg-transparent px-4 text-sm text-white placeholder:text-mute-500 focus:border-primary-500 focus:outline-none"
              />
              <Button
                type="submit"
                className="h-12 shrink-0 rounded-none bg-primary-500 px-6 text-sm font-medium text-white uppercase hover:bg-primary-600"
              >
                Subscribe
              </Button>
            </form>
            {error ? (
              <p id="newsletter-error" className="mt-3 text-sm text-red-400">
                {error}
              </p>
            ) : null}
            {subscribed ? (
              <p role="status" className="mt-3 text-sm text-primary-300">
                Subscribed — welcome aboard!
              </p>
            ) : null}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm sm:flex-row">
          <p>© {new Date().getFullYear()} Sana. All rights reserved.</p>
          <a
            href="https://www.componentdock.com/"
            className="transition-colors hover:text-primary-500"
          >
            More templates at Component Dock
          </a>
        </div>
      </div>
    </footer>
  )
}
