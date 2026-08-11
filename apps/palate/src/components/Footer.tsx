import { useState, type FormEvent } from 'react'
import {
  COPYRIGHT,
  FOOTER_TAGLINE,
  INSTAGRAM_SEEDS,
  NEWSLETTER_BLURB,
  NEWSLETTER_BUTTON,
  NEWSLETTER_PLACEHOLDER,
  NEWSLETTER_SUCCESS,
  NEWSLETTER_TITLE,
  OPEN_HOURS,
} from '../data'
import { BrandIcon, type BrandIconName } from './BrandIcon'

const FOOTER_SOCIALS: BrandIconName[] = ['twitter', 'facebook', 'instagram']

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/* footer.ftco-footer — dark #141313 (padding 6em 0): brand + blurb +
   3 circular socials, "Open Hours" list (Mon–Thu 9:00-24:00, Fri–Sun
   9:00-02:00), newsletter form (orange Subscribe, confirmation state),
   Instagram 2×3 thumbnails; centered copyright bar. */
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
    <footer id="contact" className="bg-footer px-4 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 lg:grid-cols-4">
        {/* Column 1 — brand + blurb + socials. */}
        <div>
          <h2 className="text-[17px] font-bold text-white">Palate</h2>
          <p className="mt-4 text-[14px] leading-6 text-white/70">{FOOTER_TAGLINE}</p>
          <ul className="mt-6 flex gap-3">
            {FOOTER_SOCIALS.map((social) => (
              <li key={social}>
                <a
                  href={`#${social}`}
                  aria-label={social}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand"
                >
                  <BrandIcon name={social} className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 2 — Open Hours. */}
        <div>
          <h2 className="text-[17px] font-bold text-white">Open Hours</h2>
          <ul className="mt-4">
            {OPEN_HOURS.map((row) => (
              <li
                key={row.days}
                className="flex justify-between gap-4 border-b border-white/10 py-2.5 text-[14px] text-white/70"
              >
                <span>{row.days}</span>
                <span>{row.hours}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 — Newsletter. */}
        <div>
          <h2 className="text-[17px] font-bold text-white">{NEWSLETTER_TITLE}</h2>
          <p className="mt-4 text-[14px] leading-6 text-white/70">{NEWSLETTER_BLURB}</p>

          {subscribed ? (
            <p role="status" className="mt-6 text-[14px] font-medium text-brand">
              {NEWSLETTER_SUCCESS}
            </p>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="mt-6">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder={NEWSLETTER_PLACEHOLDER}
                aria-invalid={error ? true : undefined}
                aria-describedby={error ? 'newsletter-error' : undefined}
                className="w-full rounded-[2px] border border-white/40 bg-white/10 px-4 py-3 text-[14px] text-white placeholder:text-white/50 focus:border-brand focus:outline-none"
              />
              <input
                type="submit"
                value={NEWSLETTER_BUTTON}
                className="mt-3 w-full cursor-pointer rounded-[2px] border border-brand bg-brand px-3 py-3 text-[14px] font-medium text-white transition-colors hover:bg-[#f5960a]"
              />
              {error && (
                <p
                  id="newsletter-error"
                  role="alert"
                  className="mt-3 text-[13px] font-medium text-red-400"
                >
                  {error}
                </p>
              )}
            </form>
          )}
        </div>

        {/* Column 4 — Instagram thumbnails (2 rows × 3). */}
        <div>
          <h2 className="text-[17px] font-bold text-white">Instagram</h2>
          <ul className="mt-4 grid grid-cols-3 gap-2">
            {INSTAGRAM_SEEDS.map((seed) => (
              <li key={seed}>
                <a href="#instagram" aria-label="Instagram post">
                  <img
                    src={`https://picsum.photos/seed/${seed}/300/300`}
                    alt=""
                    className="h-[100px] w-full object-cover"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright bar. */}
      <div className="mx-auto mt-16 max-w-6xl border-t border-white/10 pt-6 text-center">
        <p className="text-[14px] text-white/70">{COPYRIGHT}</p>
      </div>
    </footer>
  )
}
