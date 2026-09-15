import { useState, type FormEvent } from 'react'
import { MapPin, Phone } from 'lucide-react'
import { BrandIcon, type BrandName } from './BrandIcon'

const EMAIL_PATTERN = /^\S+@\S+\.\S+$/

const socials: ReadonlyArray<{ label: string; name: BrandName }> = [
  { label: 'Twitter', name: 'twitter' },
  { label: 'Facebook', name: 'facebook' },
  { label: 'Instagram', name: 'instagram' },
]

const quickLinks = ['Home', 'About', 'Services', 'Gallery', 'Blog'] as const

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
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <a href="#home" className="flex items-center gap-2">
              <span className="font-display text-xl font-bold uppercase tracking-[0.2em]">
                Cosyhaus<span className="text-brand">.</span>
              </span>
            </a>
            <p className="mt-6 text-sm leading-relaxed text-gray-400">
              Grabbing the consumer&apos;s attention isn&apos;t enough — you have to keep that
              attention for at least a little while. We craft interior spaces that inspire and
              endure.
            </p>
            <div className="mt-6 space-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                +564 7885 3222
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                youremail@gmail.com
              </div>
            </div>
            <div className="mt-6 flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-600 text-gray-400 transition-colors hover:border-brand hover:bg-brand hover:text-white"
                >
                  <BrandIcon name={social.name} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg font-bold uppercase tracking-wide text-brand">
              Useful Links
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-gray-400">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="transition-colors hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-4">
              <div>
                <span className="text-sm font-semibold text-gray-300">New York</span>
                <p className="mt-1 text-xs text-gray-500">
                  123 East 26th Street, Fifth Floor, New York, NY 10011
                </p>
              </div>
              <div>
                <span className="text-sm font-semibold text-gray-300">Japan</span>
                <p className="mt-1 text-xs text-gray-500">
                  123 East 26th Street, Fifth Floor, New York, NY 10011
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg font-bold uppercase tracking-wide text-brand">
              Instagram Feed
            </h3>
            <div className="mt-5 grid grid-cols-3 gap-2">
              {Array.from({ length: 6 }, (_, i) => (
                <a key={i} href="#" className="block overflow-hidden rounded-lg">
                  <img
                    src={`https://picsum.photos/seed/cosyhaus-ig${i + 1}/150/150`}
                    alt={`Instagram post ${i + 1}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </a>
              ))}
            </div>
            <div className="mt-6">
              <h4 className="mb-3 font-display text-sm font-bold uppercase tracking-wide text-gray-300">
                Newsletter
              </h4>
              {subscribed ? (
                <p className="rounded-lg border border-brand/40 bg-brand/10 px-4 py-3 text-sm text-brand">
                  Thanks for subscribing!
                </p>
              ) : (
                <form onSubmit={handleSubscribe} noValidate>
                  <label htmlFor="footer-email" className="sr-only">
                    Your Email Address
                  </label>
                  <div className="flex gap-2">
                    <input
                      id="footer-email"
                      type="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      placeholder="Your email"
                      aria-invalid={Boolean(error)}
                      className="w-full rounded-lg border border-gray-600 bg-gray-800 px-4 py-2 text-sm text-white placeholder:text-gray-500 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                    />
                    <button
                      type="submit"
                      className="shrink-0 rounded-lg bg-brand px-4 py-2 text-sm font-bold uppercase text-white transition-colors hover:bg-brand-dark"
                    >
                      Subscribe
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
      </div>

      <div className="border-t border-gray-700 py-5 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Cosyhaus. All rights reserved. Made with{' '}
        <a
          href="https://www.componentdock.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand hover:underline"
        >
          Component Dock
        </a>
      </div>
    </footer>
  )
}
