import { useState, type FormEvent } from 'react'
import { Send } from 'lucide-react'

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  )
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

const EMAIL_PATTERN = /^\S+@\S+\.\S+$/

export function Footer() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!EMAIL_PATTERN.test(email.trim())) {
      setError('A valid email address is required.')
      return
    }
    setError('')
    setSubscribed(true)
  }

  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* About */}
          <div>
            <h3 className="mb-4 font-display text-xl font-bold">About Taster</h3>
            <p className="mb-6 leading-relaxed text-gray-400">
              The Big Oxmox advised her not to do so, because there were thousands of bad Commas,
              wild Question Marks and devious Semikoli, but the Little Blind Text didn't listen.
            </p>
            <a
              href="#home"
              className="inline-block rounded-sm border-2 border-brand bg-transparent px-6 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-brand"
            >
              Read More
            </a>
          </div>

          {/* Service hours */}
          <div>
            <h3 className="mb-4 font-display text-xl font-bold">Lunch Service</h3>
            <p className="mb-6 text-gray-400">Booking from 12:00pm — 1:30pm</p>
            <h3 className="mb-4 font-display text-xl font-bold">Dinner Service</h3>
            <p className="text-gray-400">
              Everyday:
              <br />
              Booking from 6:00pm — 9:00pm
            </p>
          </div>

          {/* Follow + Newsletter */}
          <div>
            <h3 className="mb-4 font-display text-xl font-bold">Follow Along</h3>
            <div className="mb-6 flex gap-4">
              <a
                href="#"
                aria-label="TripAdvisor"
                className="text-gray-400 transition-colors hover:text-brand"
              >
                <span className="sr-only">TripAdvisor</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="6" cy="16" r="2" />
                  <circle cx="18" cy="16" r="2" />
                  <path
                    d="M6 14a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <circle cx="12" cy="11" r="1" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-gray-400 transition-colors hover:text-brand"
              >
                <TwitterIcon className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-gray-400 transition-colors hover:text-brand"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-gray-400 transition-colors hover:text-brand"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
            </div>

            <h3 className="mb-4 font-display text-xl font-bold">Newsletter</h3>
            {subscribed ? (
              <p className="rounded border border-brand/40 bg-brand/10 px-4 py-3 text-sm text-brand">
                Thanks for subscribing!
              </p>
            ) : (
              <form onSubmit={handleSubscribe} noValidate>
                <label htmlFor="footer-email" className="sr-only">
                  Enter Email
                </label>
                <div className="flex">
                  <input
                    id="footer-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Email"
                    aria-invalid={Boolean(error)}
                    className="flex-1 rounded-l border-2 border-r-0 border-border bg-transparent px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-brand focus:outline-none"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="rounded-r bg-brand px-4 py-3 text-white transition-colors hover:bg-brand-dark"
                  >
                    <Send className="h-4 w-4" />
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

        {/* Copyright */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} All rights reserved. Made with{' '}
          <a
            href="https://www.componentdock.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand underline transition-colors hover:text-white"
          >
            Component Dock
          </a>
        </div>
      </div>
    </footer>
  )
}
