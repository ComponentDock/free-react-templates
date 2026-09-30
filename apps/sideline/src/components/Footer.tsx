import { useState, type FormEvent } from 'react'
import { Play } from 'lucide-react'
import { footerAbout, quickMenu, recentBlog, utilityContact } from '../data'
import { BrandIcon } from './BrandIcon'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const socials = [
  { name: 'facebook', label: 'Facebook' },
  { name: 'instagram', label: 'Instagram' },
  { name: 'twitter', label: 'Twitter' },
  { name: 'linkedin', label: 'LinkedIn' },
] as const

/** Footer: #333333 dark footer — About / Recent Blog / Quick Menu /
 *  Follow Us + Watch Video + Subscribe Newsletter, with the Component
 *  Dock attribution in the bottom bar. */
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
    <footer id="contact" className="bg-footer pt-16 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-12 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <h3 className="text-lg font-bold uppercase tracking-widest">About Sideline</h3>
          <p className="mt-4 text-sm leading-relaxed text-[#737373]">{footerAbout}</p>
          <div className="mt-4 flex items-center gap-3 text-sm text-muted">
            <span>{utilityContact.email}</span>
            <span aria-hidden="true">|</span>
            <span>{utilityContact.phone}</span>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-bold uppercase tracking-widest">Recent Blog</h3>
          <ul className="mt-4 space-y-2">
            {recentBlog.map((title) => (
              <li key={title}>
                <a href="#news" className="text-sm text-muted transition-colors hover:text-white">
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold uppercase tracking-widest">Quick Menu</h3>
          <ul className="mt-4 grid grid-cols-2 gap-2">
            {quickMenu.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-sm text-muted transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold uppercase tracking-widest">Follow Us</h3>
          <ul className="mt-4 flex items-center gap-4">
            {socials.map((social) => (
              <li key={social.name}>
                <a
                  href="#contact"
                  aria-label={social.label}
                  className="text-muted transition-colors hover:text-white"
                >
                  <BrandIcon name={social.name} className="h-5 w-5" />
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#highlights"
            className="mt-6 inline-flex items-center gap-2 text-sm uppercase tracking-widest text-muted transition-colors hover:text-white"
          >
            <Play className="h-4 w-4" aria-hidden="true" />
            Watch Video
          </a>
          <div className="mt-6">
            <h3 className="text-base font-bold uppercase tracking-widest">Subscribe Newsletter</h3>
            {subscribed ? (
              <p role="status" className="mt-3 text-sm text-white">
                Thanks for subscribing — welcome to the squad!
              </p>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="mt-3">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <div className="flex">
                  <input
                    id="newsletter-email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="Your email address"
                    className="h-11 flex-1 border border-white/20 bg-white/5 px-3 text-sm text-white placeholder:text-muted focus:border-brand focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="h-11 bg-brand px-5 text-xs font-light uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#d92f24]"
                  >
                    Send
                  </button>
                </div>
                {error ? (
                  <p role="alert" className="mt-2 text-sm text-brand">
                    {error}
                  </p>
                ) : null}
              </form>
            )}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 text-sm text-muted md:flex-row lg:px-8">
          <p>© {new Date().getFullYear()} All rights reserved</p>
          <p>
            More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              className="font-bold text-white transition-colors hover:text-brand"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
