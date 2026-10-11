import { useState, type FormEvent } from 'react'
import { ArrowRight } from 'lucide-react'
import { validateEmail } from '../lib/booking'

const INSTA = [
  'voyara-insta-1',
  'voyara-insta-2',
  'voyara-insta-3',
  'voyara-insta-4',
  'voyara-insta-5',
  'voyara-insta-6',
  'voyara-insta-7',
  'voyara-insta-8',
] as const

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

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" />
    </svg>
  )
}

function DribbbleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M8.6 3.3c3.3 4.4 5.4 9.4 6 14.7" />
      <path d="M20.5 8.6C16 10.5 10.5 10 4.6 7.5" />
      <path d="M3.6 15.4c4.6-1.6 9.8-1.4 14.3 1.3" />
    </svg>
  )
}

const SOCIALS = [
  { label: 'Facebook', Icon: FacebookIcon },
  { label: 'Twitter', Icon: TwitterIcon },
  { label: 'Instagram', Icon: InstagramIcon },
  { label: 'Dribbble', Icon: DribbbleIcon },
] as const

/* Dark footer: About Us, Newsletter, Instagram Feed, and Follow Us widgets,
   closing on a centered Component Dock line. */
export function Footer() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [subscribed, setSubscribed] = useState(false)

  function onSubscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const message = validateEmail(email)
    if (message) {
      setError(message)
      setSubscribed(false)
      return
    }
    setError(null)
    setSubscribed(true)
  }

  return (
    <footer className="bg-ink pt-[100px] text-white/70">
      <div className="mx-auto max-w-[1140px] px-4">
        <div className="grid gap-12 pb-16 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h4 className="text-[18px] font-semibold text-white">About Us</h4>
            <p className="mt-4">
              Voyara is a small team of travellers who book rooms the way they would want them
              booked — honestly, and with the good rooms found first.
            </p>
          </div>

          <div>
            <h4 className="text-[18px] font-semibold text-white">Newsletter</h4>
            <p className="mt-4">Stay updated with our latest</p>
            <form onSubmit={onSubscribe} className="mt-4 flex" noValidate>
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                name="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Email address"
                className="h-11 w-full border border-white/20 bg-white/5 px-4 text-white outline-none focus:border-pink"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="flex h-11 w-11 shrink-0 items-center justify-center bg-gradient-to-t from-pink to-peach text-white"
              >
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </form>
            {error ? (
              <p role="alert" className="mt-2 text-pink">
                {error}
              </p>
            ) : null}
            {subscribed ? (
              <p role="status" className="mt-2 text-white">
                Thanks! You are on the list.
              </p>
            ) : null}
          </div>

          <div>
            <h4 className="text-[18px] font-semibold text-white">Instagram Feed</h4>
            <div className="mt-4 flex flex-wrap gap-2">
              {INSTA.map((seed) => (
                <img
                  key={seed}
                  src={`https://picsum.photos/seed/${seed}/120/120`}
                  alt="Voyara on Instagram"
                  loading="lazy"
                  className="h-14 w-14 object-cover"
                />
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[18px] font-semibold text-white">Follow Us</h4>
            <p className="mt-4">Let us be social</p>
            <div className="mt-4 flex gap-4">
              {SOCIALS.map(({ label, Icon }) => (
                <a
                  key={label}
                  href="#home"
                  aria-label={label}
                  className="text-white/70 transition-colors hover:text-pink"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <p className="border-t border-white/10 py-8 text-center">
          © {new Date().getFullYear()} Voyara. All rights reserved. More templates at{' '}
          <a
            href="https://www.componentdock.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white transition-colors hover:text-pink"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
