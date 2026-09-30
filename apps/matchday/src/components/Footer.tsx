import { useState, type FormEvent } from 'react'
import { contact, footerNav } from '../data'
import { Crest } from './Crest'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/** Footer: deep-navy contact + newsletter band with a decorative player
 *  photo, footer nav, and a darker bar with the Component Dock link. */
export function Footer() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!EMAIL_PATTERN.test(email)) {
      setError('Please enter a valid email address.')
      setSubscribed(false)
      return
    }
    setError(null)
    setSubscribed(true)
  }

  return (
    <footer id="contact" className="relative overflow-hidden bg-navy-deep pt-20">
      <img
        src="https://picsum.photos/seed/matchday-footer-player/500/600"
        alt=""
        className="pointer-events-none absolute bottom-0 right-0 hidden h-[420px] w-[420px] object-cover opacity-90 lg:block"
      />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact block */}
          <div>
            <div className="flex items-center gap-3">
              <Crest className="h-16 w-14" />
              <span className="text-2xl font-bold uppercase tracking-widest text-white">
                Matchday FC
              </span>
            </div>
            <ul className="mt-8 space-y-4">
              {contact.map((item) => (
                <li key={item.label} className="flex gap-4">
                  <span className="w-[86px] shrink-0 text-lg font-medium text-brand">
                    {item.label}
                  </span>
                  <span className="text-[15px] leading-relaxed text-mist">{item.value}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter + nav */}
          <div>
            <h2 className="text-2xl text-brand">Subscribe to newsletter</h2>
            <form onSubmit={handleSubmit} noValidate className="mt-5 max-w-md">
              <div className="flex">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Enter your email address"
                  className="h-14 flex-1 bg-navy px-4 text-sm text-white placeholder:text-[12px] placeholder:font-medium placeholder:text-mist focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                />
                <button
                  type="submit"
                  className="h-14 w-[107px] shrink-0 bg-brand text-base font-medium text-white transition-colors hover:bg-white hover:text-navy"
                >
                  Submit
                </button>
              </div>
              {error ? (
                <p role="alert" className="mt-2 text-sm text-live">
                  {error}
                </p>
              ) : null}
              {subscribed ? (
                <p role="status" className="mt-2 text-sm text-brand">
                  Thanks for subscribing!
                </p>
              ) : null}
              <p className="mt-3 text-xs italic text-[rgba(136,136,136,0.41)]">
                We respect your privacy — no spam, unsubscribe any time.
              </p>
            </form>

            <nav aria-label="Footer" className="mt-10">
              <ul className="flex flex-wrap gap-x-8 gap-y-3">
                {footerNav.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm uppercase tracking-wide text-mist transition-colors hover:text-brand"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className="mt-16 flex h-[57px] flex-col items-center justify-between gap-2 bg-bar px-6 text-xs text-mist sm:flex-row sm:text-sm">
          <p>Copyright &copy; 2026 Matchday FC. All rights reserved.</p>
          <p>
            More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              className="font-medium text-white underline transition-colors hover:text-brand"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
