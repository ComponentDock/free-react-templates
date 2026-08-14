import { useState, type FormEvent } from 'react'
import { Button } from '@free-react-templates/ui'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const NAV_LINKS = ['Podcasts', 'Services', 'About Us', 'Blog', 'Contact']

export function Footer() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!EMAIL_PATTERN.test(email)) {
      setError('Please enter a valid email address.')
      return
    }
    setError(null)
    setSubscribed(true)
  }

  return (
    <footer className="bg-footer py-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-3">
        <div>
          <h3 className="mb-8 text-xl text-white">About Us</h3>
          <p className="text-subtle">
            Wavecast is a podcast about telling your story to the world. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </p>
        </div>
        <div className="md:mx-auto">
          <h3 className="mb-8 text-xl text-white">Navigation</h3>
          <ul className="space-y-2">
            {NAV_LINKS.map((label) => (
              <li key={label}>
                <a href="#" className="text-faded transition-colors hover:text-white">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-8 text-xl text-white">Subscribe</h3>
          <p className="mb-4 text-subtle">Get the latest episodes in your inbox.</p>
          {subscribed ? (
            <p role="status" className="text-white">
              Thanks for subscribing!
            </p>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter Email"
                aria-label="Footer email address"
                aria-invalid={error ? true : undefined}
                className="mb-3 h-[43px] w-full border border-line bg-transparent px-4 text-white outline-none transition-colors placeholder:text-white/50 focus:border-primary-600"
              />
              <Button type="submit" className="w-full rounded text-xs uppercase tracking-[0.2em]">
                Subscribe
              </Button>
            </form>
          )}
          {error && (
            <p role="alert" className="mt-2 text-white">
              {error}
            </p>
          )}
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-7xl border-t border-white/10 px-4 pt-8 text-center">
        <p className="text-xs font-medium text-white">
          Copyright © All rights reserved | More templates at{' '}
          <a
            href="https://www.componentdock.com/"
            className="underline transition-colors hover:text-primary-400"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
