import { useState, type FormEvent } from 'react'

const EMAIL_PATTERN = /^\S+@\S+\.\S+$/

const aboutLinks = ['About Us', 'Our Services', 'Case Studies', 'Blog', 'Contact'] as const

const serviceLinks = [
  'Business Strategy',
  'Digital Marketing',
  'Brand Consulting',
  'Financial Advisory',
  'Market Research',
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
    <footer className="bg-ink text-white transition-colors dark:bg-ink-dark">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <a href="#home" className="text-xl font-bold text-white">
              Buzzer<span className="text-brand">.</span>
            </a>
            <p className="mt-5 text-sm leading-relaxed text-lavender">
              We help businesses grow by leveraging the most engaging technology and innovative
              strategies to build trust fast.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {(['Twitter', 'Facebook', 'Pinterest'] as const).map((name) => (
                <a
                  key={name}
                  href="#home"
                  aria-label={name}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-600 text-lavender transition-colors hover:border-brand hover:bg-brand hover:text-white"
                >
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white">About</h3>
            <ul className="mt-5 space-y-3 text-sm text-lavender">
              {aboutLinks.map((link) => (
                <li key={link}>
                  <a href="#about" className="transition-colors hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white">Services</h3>
            <ul className="mt-5 space-y-3 text-sm text-lavender">
              {serviceLinks.map((link) => (
                <li key={link}>
                  <a href="#services" className="transition-colors hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white">Newsletter</h3>
            <p className="mt-5 text-sm text-lavender">
              Subscribe to our newsletter to get the latest updates.
            </p>
            {subscribed ? (
              <p className="mt-4 rounded-lg border border-brand/40 bg-brand/10 px-4 py-3 text-sm text-brand">
                Thanks for subscribing!
              </p>
            ) : (
              <form onSubmit={handleSubscribe} noValidate className="mt-4">
                <label htmlFor="footer-email" className="sr-only">
                  Your Email Address
                </label>
                <div className="flex gap-2">
                  <input
                    id="footer-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    aria-invalid={Boolean(error)}
                    className="w-full rounded-lg border border-gray-600 bg-gray-800 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                  />
                  <button
                    type="submit"
                    className="shrink-0 rounded-lg bg-brand px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-dark"
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

      <div className="border-t border-gray-700 py-5 text-center text-sm text-lavender">
        © {new Date().getFullYear()} Buzzer. All rights reserved. Made with{' '}
        <a
          href="https://www.componentdock.com/"
          className="underline transition-colors hover:text-white"
        >
          Component Dock
        </a>
      </div>
    </footer>
  )
}
