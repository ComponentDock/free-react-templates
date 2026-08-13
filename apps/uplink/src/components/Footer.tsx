import { useState, type FormEvent } from 'react'
import { instagramSeeds, topProducts } from '../data'
import { BehanceIcon, DribbbleIcon, FacebookIcon, TwitterIcon } from './social-icons'

const EMAIL_PATTERN = /^\S+@\S+\.\S+$/

const socials = [
  { name: 'Facebook', Icon: FacebookIcon },
  { name: 'Twitter', Icon: TwitterIcon },
  { name: 'Dribbble', Icon: DribbbleIcon },
  { name: 'Behance', Icon: BehanceIcon },
] as const

/** Near-black footer: product links, newsletter signup, feed grid, socials. */
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
    <footer id="contact" className="bg-night-900 text-white">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 py-20 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">
        <div>
          <h3 className="text-lg font-medium">Top Products</h3>
          <ul className="mt-6 space-y-4 text-sm text-mute-500">
            {topProducts.map((label) => (
              <li key={label}>
                <a href="#home" className="transition-colors hover:text-primary-500">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-medium">Newsletter</h3>
          <p className="mt-4 max-w-xs text-sm leading-6 text-mute-500">
            Subscribe for hosting tips, product updates, and special offers.
          </p>
          {subscribed ? (
            <p
              role="status"
              className="mt-6 rounded-md bg-primary-500/20 p-4 text-sm text-primary-200"
            >
              You have been subscribed. Thank you!
            </p>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="mt-6 flex max-w-sm">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter your email"
                className="h-[38px] w-full border border-form-border bg-transparent px-4 text-sm text-white placeholder:text-mute-500 focus:border-primary-500 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-primary-500 px-8 text-xs font-medium tracking-widest text-white uppercase transition-colors hover:bg-transparent hover:text-primary-500 hover:ring-1 hover:ring-primary-500"
              >
                Subscribe
              </button>
            </form>
          )}
          {error ? (
            <p className="mt-3 text-sm text-accent-400" role="alert">
              {error}
            </p>
          ) : null}
        </div>

        <div>
          <h3 className="text-lg font-medium">Instagram Feed</h3>
          <div className="mt-6 grid w-max grid-cols-4 gap-2">
            {instagramSeeds.map((seed) => (
              <img
                key={seed}
                src={`https://picsum.photos/seed/${seed}/120/120`}
                alt=""
                loading="lazy"
                className="h-[72px] w-[72px] object-cover"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-10 sm:flex-row lg:px-8">
          <p className="text-sm text-mute-500">&copy; 2026 Uplink. All rights reserved.</p>
          <div className="flex gap-4">
            {socials.map(({ name, Icon }) => (
              <a
                key={name}
                href="#home"
                aria-label={name}
                className="text-mute-500 transition-colors hover:text-primary-500"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
          <p className="text-sm text-mute-500">
            More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-white underline-offset-4 transition-colors hover:text-primary-500 hover:underline"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
