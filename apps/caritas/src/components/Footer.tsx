import { useState, type FormEvent } from 'react'
import { Clock, Globe } from 'lucide-react'
import {
  COPYRIGHT,
  FOOTER_CAUSES_LINKS,
  FOOTER_TAGLINE,
  GALLERY_SEEDS,
  NEWSLETTER_BLURB,
  NEWSLETTER_BUTTON,
  NEWSLETTER_PLACEHOLDER,
  NEWSLETTER_TITLE,
  WORKING_HOURS,
} from '../data'

/* Brand social icons — lucide-react removed brand icons, so Facebook /
   Twitter / Linkedin are inline SVG paths (simple-icons style); the 4th
   social (source: Behance) is substituted with the lucide Globe icon. */
interface SocialLink {
  label: string
  href: string
  path?: string
}

const SOCIALS: SocialLink[] = [
  {
    label: 'Facebook',
    href: 'https://facebook.com/',
    path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com/',
    path: 'M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z',
  },
  {
    label: 'Globe',
    href: 'https://example.com/',
  },
  {
    label: 'Linkedin',
    href: 'https://linkedin.com/',
    path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z',
  },
]

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/* .footer_part — lavender #faf4ff background, 4 columns: brand + working
   hours + socials; Causes links; gallery grid; newsletter form (inline
   validation, presentational). Copyright bar on the bottom. */
export function Footer() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!EMAIL_PATTERN.test(email)) {
      setError('Please enter a valid email address.')
      return
    }
    setError(null)
    setSubscribed(true)
  }

  return (
    <footer className="bg-lavender px-4 pt-[130px] pb-[25px]">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 lg:grid-cols-4">
        {/* Column 1 — brand + tagline + working hours + socials. */}
        <div>
          <a href="#home" className="text-[26px] font-bold text-ink">
            Caritas
          </a>
          <p className="mt-5 text-[15px] leading-[1.8] text-gray-600">{FOOTER_TAGLINE}</p>

          <h3 className="mt-8 text-[18px] font-semibold text-ink">Working Hours</h3>
          <ul className="mt-4 space-y-2 text-[15px] text-gray-600">
            {WORKING_HOURS.map((row) => (
              <li key={row.days} className="flex justify-between gap-4">
                <span className="inline-flex items-center gap-2">
                  <Clock aria-hidden="true" className="h-4 w-4 text-brand" />
                  {row.days}
                </span>
                <span className="font-medium">{row.hours}</span>
              </li>
            ))}
          </ul>

          <ul className="mt-6 flex gap-3">
            {SOCIALS.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-brand/30 text-brand transition-colors hover:border-transparent hover:bg-[linear-gradient(to_left,#7f00ff_0%,#e100ff_50%,#7f00ff_100%)] hover:text-white"
                >
                  {social.path ? (
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path d={social.path} />
                    </svg>
                  ) : (
                    <Globe aria-hidden="true" className="h-4 w-4" />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 2 — Causes links. */}
        <div>
          <h3 className="text-[18px] font-semibold text-ink">Causes</h3>
          <ul className="mt-5">
            {FOOTER_CAUSES_LINKS.map((label) => (
              <li key={label}>
                <a
                  href="#causes"
                  className="block py-2 text-[15px] text-gray-600 transition-colors hover:text-brand"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 — gallery grid (8 seeded images). */}
        <div>
          <h3 className="text-[18px] font-semibold text-ink">Our Gallery</h3>
          <ul className="mt-5 grid grid-cols-4 gap-2">
            {GALLERY_SEEDS.map((seed) => (
              <li key={seed}>
                <img
                  src={`https://picsum.photos/seed/${seed}/200/200`}
                  alt=""
                  className="h-full w-full rounded-[5px] object-cover"
                />
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 — newsletter form with inline validation. */}
        <div>
          <h3 className="text-[18px] font-semibold text-ink">{NEWSLETTER_TITLE}</h3>
          <p className="mt-5 text-[15px] leading-[1.8] text-gray-600">{NEWSLETTER_BLURB}</p>

          {subscribed ? (
            <p role="status" className="mt-6 text-[15px] font-medium text-brand">
              Thank you for subscribing!
            </p>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="mt-6">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <div className="flex">
                <input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder={NEWSLETTER_PLACEHOLDER}
                  aria-invalid={error ? true : undefined}
                  aria-describedby={error ? 'newsletter-error' : undefined}
                  className="w-full rounded-tl-[20px] rounded-br-[20px] border border-brand/30 bg-white px-4 py-3 text-[15px] text-ink placeholder:text-gray-400 focus:border-brand focus:outline-none"
                />
                <button
                  type="submit"
                  className="ml-3 shrink-0 rounded-tl-[20px] rounded-br-[20px] bg-[linear-gradient(to_left,#7f00ff_0%,#e100ff_50%,#7f00ff_100%)] px-6 text-[15px] font-bold text-white uppercase transition-opacity hover:opacity-90"
                >
                  {NEWSLETTER_BUTTON}
                </button>
              </div>
              {error && (
                <p
                  id="newsletter-error"
                  role="alert"
                  className="mt-3 text-[14px] font-medium text-red-600"
                >
                  {error}
                </p>
              )}
            </form>
          )}
        </div>
      </div>

      {/* Copyright bar. */}
      <div className="mx-auto mt-14 max-w-6xl border-t border-brand/10 pt-6 text-center">
        <p className="text-[14px] text-gray-500">{COPYRIGHT}</p>
      </div>
    </footer>
  )
}
