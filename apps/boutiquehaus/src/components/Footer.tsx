import { useState, type FormEvent } from 'react'
import { BrandIcon, type BrandName } from './BrandIcon'

const EMAIL_PATTERN = /^\S+@\S+\.\S+$/

const socials: ReadonlyArray<{ label: string; name: BrandName }> = [
  { label: 'Facebook', name: 'facebook' },
  { label: 'Twitter', name: 'x' },
  { label: 'Dribbble', name: 'dribbble' },
  { label: 'Behance', name: 'behance' },
]

const instaImages = Array.from(
  { length: 8 },
  (_, i) => `https://picsum.photos/seed/bh-insta${i + 1}/80/80`,
)

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
    <footer className="bg-ink text-white transition-colors dark:bg-ink-dark">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-4">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold uppercase tracking-wide">About Us</h3>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore dolore magna aliqua.
            </p>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold uppercase tracking-wide">Newsletter</h3>
            <p className="mt-4 text-sm text-gray-400">Stay update with our latest</p>
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
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Email"
                    aria-invalid={Boolean(error)}
                    className="w-full border border-gray-600 bg-gray-800 px-4 py-2 text-sm text-white placeholder:text-gray-500 focus:border-brand focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="shrink-0 bg-brand px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-brand-dark"
                  >
                    &rarr;
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

          {/* Instagram Feed */}
          <div>
            <h3 className="mb-4 text-lg font-bold uppercase tracking-wide">Instagram Feed</h3>
            <div className="grid grid-cols-4 gap-2">
              {instaImages.map((src, i) => (
                <a key={i} href="#">
                  <img
                    src={src}
                    alt={`Instagram post ${i + 1}`}
                    className="h-16 w-16 object-cover"
                    loading="lazy"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-lg font-bold uppercase tracking-wide">Follow Us</h3>
            <p className="mt-4 text-sm text-gray-400">Let us be social</p>
            <div className="mt-4 flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center border border-gray-600 text-gray-400 transition-colors hover:border-brand hover:bg-brand hover:text-white"
                >
                  <BrandIcon name={s.name} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 py-5 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} All rights reserved | Made with{' '}
        <a href="https://www.componentdock.com/" className="text-brand hover:underline">
          Component Dock
        </a>
      </div>
    </footer>
  )
}
