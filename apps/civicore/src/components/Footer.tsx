import { useState } from 'react'
import { Heart } from 'lucide-react'

/* Inline SVG social icons — lucide-react doesn't ship brand marks. */

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function DribbbleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.81zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-2.272-2.016-5.286-3.225-8.648-3.225-.21 0-.418.014-.626.022zm10.448 3.08c-.21.282-1.89 2.478-5.643 4.014.24.49.47.985.68 1.486.075.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.39-6.35z" />
    </svg>
  )
}

const topProducts = [
  'Job Search',
  'Resume Builder',
  'Interview Prep',
  'Career Coaching',
  'Salary Calculator',
]

export function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
    }
  }

  return (
    <footer id="contact" className="bg-footer-bg text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {/* Column 1 — Top Products */}
          <div>
            <h3 className="font-display text-lg font-bold">Top Products</h3>
            <ul className="mt-4 space-y-2">
              {topProducts.map((item) => (
                <li key={item}>
                  <a
                    href="#products"
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 — Newsletter */}
          <div>
            <h3 className="font-display text-lg font-bold">Newsletter</h3>
            <p className="mt-4 text-sm text-white/70">
              Get the latest job opportunities delivered straight to your inbox.
            </p>
            {subscribed ? (
              <p className="mt-4 text-sm font-semibold text-brand">Thanks for subscribing!</p>
            ) : (
              <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
                <input
                  type="email"
                  aria-label="Email address"
                  placeholder="Your email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 rounded-[3px] px-4 py-2 text-sm text-ink outline-none"
                />
                <button
                  type="submit"
                  className="rounded-[3px] bg-brand px-4 py-2 text-sm font-semibold uppercase text-white transition-colors hover:bg-brand-dark"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>

          {/* Column 3 — Social */}
          <div>
            <h3 className="font-display text-lg font-bold">Follow Us</h3>
            <div className="mt-4 flex gap-4">
              <a
                href="#facebook"
                aria-label="Facebook"
                className="text-white/70 transition-colors hover:text-white"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a
                href="#twitter"
                aria-label="Twitter"
                className="text-white/70 transition-colors hover:text-white"
              >
                <TwitterIcon className="h-5 w-5" />
              </a>
              <a
                href="#dribbble"
                aria-label="Dribbble"
                className="text-white/70 transition-colors hover:text-white"
              >
                <DribbbleIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6">
          <p className="text-sm text-white/50">&copy; 2026 Civicore. All rights reserved.</p>
          <p className="flex items-center gap-1 text-sm text-white/50">
            Made with <Heart className="inline h-4 w-4 text-brand" /> by{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 underline transition-colors hover:text-white"
            >
              Component Dock
            </a>
          </p>
          <div className="flex gap-4">
            <a
              href="#facebook"
              aria-label="Facebook"
              className="text-white/50 transition-colors hover:text-white"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>
            <a
              href="#twitter"
              aria-label="Twitter"
              className="text-white/50 transition-colors hover:text-white"
            >
              <TwitterIcon className="h-4 w-4" />
            </a>
            <a
              href="#dribbble"
              aria-label="Dribbble"
              className="text-white/50 transition-colors hover:text-white"
            >
              <DribbbleIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
