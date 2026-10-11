import { useState, type FormEvent } from 'react'
import { FOOTER_QUICK_LINKS, SOCIAL_LINKS } from '../data/content'
import { newsletterSchema } from '../lib/forms'

export function Footer() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [done, setDone] = useState(false)

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const result = newsletterSchema.safeParse({ email })
    if (!result.success) {
      setError('Please enter a valid email address')
      return
    }
    setError('')
    setDone(true)
  }

  return (
    <footer className="bg-footer px-4 pb-8 pt-16 text-footertext md:pt-32">
      <div className="mx-auto grid max-w-6xl gap-10 border-t border-white/10 pt-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h2 className="text-lg font-bold uppercase tracking-[0.2em] text-white">About Us</h2>
          <p className="mt-4">
            Cargolane is a logistics company moving air, ocean, and road freight with transparent
            pricing and real accountability — so your cargo always arrives when we say it will.
          </p>
        </div>
        <nav aria-label="Quick links">
          <h2 className="text-lg font-bold uppercase tracking-[0.2em] text-white">Quick Links</h2>
          <ul className="mt-4 space-y-2">
            {FOOTER_QUICK_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h2 className="text-lg font-bold uppercase tracking-[0.2em] text-white">Follow Us</h2>
          <ul className="mt-4 flex gap-3">
            {SOCIAL_LINKS.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center border border-white/20 hover:border-primary hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-bold uppercase tracking-[0.2em] text-white">
            Subscribe Newsletter
          </h2>
          {done ? (
            <p className="mt-4 text-white">Thanks for subscribing!</p>
          ) : (
            <form onSubmit={handleSubscribe} noValidate className="mt-4">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <div className="flex">
                <input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Your email"
                  className="h-[43px] w-full rounded-none border border-white/20 bg-transparent px-3 text-white focus:border-primary focus:outline-none"
                />
                <button
                  type="submit"
                  className="h-[43px] shrink-0 rounded-none bg-primary px-6 text-sm uppercase tracking-[0.2em] text-white hover:bg-primary/90"
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
      <div className="mx-auto mt-10 flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-sm md:flex-row">
        <p>© {new Date().getFullYear()} Cargolane. All rights reserved.</p>
        <p>
          More templates at{' '}
          <a
            href="https://www.componentdock.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
