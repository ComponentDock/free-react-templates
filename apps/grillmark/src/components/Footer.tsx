import { useState, type FormEvent } from 'react'
import { Send } from 'lucide-react'

const EMAIL_PATTERN = /^\S+@\S+\.\S+$/

const topProducts = [
  'Grilled Steak',
  'BBQ Ribs',
  'Smoked Brisket',
  'Lamb Chops',
  'Seafood Platter',
] as const
const quickLinks = ['Home', 'About', 'Breakfast', 'Lunch', 'Reservation'] as const
const features = [
  'Fresh Ingredients',
  'Master Chefs',
  'Cozy Ambiance',
  'Fine Wine Selection',
  'Private Events',
] as const
const resources = ['Menu', 'Gallery', 'Chef Profile', 'Blog', 'Careers'] as const

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}

function DribbbleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
      <path
        d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  )
}

function BehanceIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zM3 11h3.584c2.508 0 2.906-3-.312-3H3v3zm3.391 3H3v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
    </svg>
  )
}

const socials = [
  { label: 'Facebook', Icon: FacebookIcon },
  { label: 'Twitter', Icon: TwitterIcon },
  { label: 'Dribbble', Icon: DribbbleIcon },
  { label: 'Behance', Icon: BehanceIcon },
] as const

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
    <footer id="contact" className="bg-heading text-white dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Top Products */}
          <div>
            <h3 className="font-display text-lg text-white">Top Products</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              {topProducts.map((item) => (
                <li key={item}>
                  <a href="#gallery" className="transition-colors hover:text-brand">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              {quickLinks.map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="transition-colors hover:text-brand">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-display text-lg text-white">Features</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              {features.map((item) => (
                <li key={item}>
                  <a href="#about" className="transition-colors hover:text-brand">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-display text-lg text-white">Resources</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              {resources.map((item) => (
                <li key={item}>
                  <a href="#gallery" className="transition-colors hover:text-brand">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-display text-lg text-white">Newsletter</h3>
            <p className="mt-4 text-sm text-gray-400">
              Subscribe to get updates on our latest dishes and offers.
            </p>
            {subscribed ? (
              <p className="mt-4 rounded border border-brand/40 bg-brand/10 px-4 py-3 text-sm text-brand">
                Thanks for subscribing!
              </p>
            ) : (
              <form onSubmit={handleSubscribe} noValidate className="mt-4">
                <label htmlFor="footer-email" className="sr-only">
                  Email Address
                </label>
                <div className="flex">
                  <input
                    id="footer-email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="Your email"
                    aria-invalid={Boolean(error)}
                    className="w-full rounded-l border border-gray-600 bg-gray-800 px-4 py-2 text-sm text-white placeholder:text-gray-500 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="shrink-0 rounded-r bg-brand px-4 py-2 text-white transition-colors hover:bg-brand/80"
                  >
                    <Send className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
                {error && (
                  <p role="alert" className="mt-2 text-xs text-red-400">
                    {error}
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Grillmark. All rights reserved. Made with{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand transition-colors hover:underline"
            >
              Component Dock
            </a>
          </p>
          <div className="flex items-center gap-3">
            {socials.map(({ label, Icon }) => (
              <a
                key={label}
                href="#home"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded border border-gray-600 text-gray-400 transition-colors hover:border-brand hover:bg-brand hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
