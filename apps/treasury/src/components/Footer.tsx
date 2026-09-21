import { useState, type FormEvent } from 'react'
import { Landmark } from 'lucide-react'
import { BrandIcon, type BrandName } from './BrandIcon'

const EMAIL_PATTERN = /^\S+@\S+\.\S+$/

const quickLinks = [
  'Terms',
  'Policy',
  'About Us',
  'Services',
  'Testimonials',
  'Contact Us',
] as const

const socials: ReadonlyArray<{ label: string; name: BrandName }> = [
  { label: 'Facebook', name: 'facebook' },
  { label: 'Twitter', name: 'twitter' },
  { label: 'LinkedIn', name: 'linkedin' },
]

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
    <footer className="bg-ink text-white transition-colors dark:bg-ink-dark">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <a href="#home" className="flex items-center gap-2">
              <Landmark className="h-6 w-6 text-brand" aria-hidden="true" />
              <span className="text-xl font-bold">
                Treasury<span className="text-brand">.</span>
              </span>
            </a>
            <p className="mt-6 text-sm leading-relaxed text-gray-400">
              Your trusted financial partner providing comprehensive banking solutions and
              investment services.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href="#footer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-600 text-gray-400 transition-colors hover:border-brand hover:bg-brand hover:text-white"
                >
                  <BrandIcon name={social.name} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold uppercase tracking-wide text-brand">Quick Links</h3>
            <ul className="mt-5 space-y-3 text-sm text-gray-400">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#footer" className="transition-colors hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold uppercase tracking-wide text-brand">Follow Us</h3>
            <ul className="mt-5 space-y-3 text-sm text-gray-400">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>LinkedIn</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold uppercase tracking-wide text-brand">
              Subscribe Newsletter
            </h3>
            <p className="mt-5 text-sm text-gray-400">Subscribe newsletter to get updates</p>
            {subscribed ? (
              <p className="mt-4 rounded-lg border border-brand/40 bg-brand/10 px-4 py-3 text-sm text-brand">
                Thanks for subscribing!
              </p>
            ) : (
              <form onSubmit={handleSubscribe} noValidate className="mt-4">
                <label htmlFor="footer-email" className="sr-only">
                  Enter Email
                </label>
                <div className="flex gap-2">
                  <input
                    id="footer-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Email"
                    aria-invalid={Boolean(error)}
                    className="w-full rounded-full border border-gray-600 bg-transparent px-4 py-2 text-sm text-white placeholder:text-gray-500 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                  />
                  <button
                    type="submit"
                    className="shrink-0 rounded-full bg-brand px-5 py-2 text-sm font-bold text-white transition-colors hover:bg-brand-dark"
                  >
                    Send
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
        &copy; {new Date().getFullYear()} Treasury. All rights reserved. &middot; More templates at{' '}
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
