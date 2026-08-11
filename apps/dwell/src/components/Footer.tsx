import { useState, type FormEvent } from 'react'
import { Play } from 'lucide-react'
import { Button } from '@free-react-templates/ui'
import {
  BRAND_NAME,
  COPYRIGHT,
  FOLLOW_LINKS,
  FOOTER_ABOUT,
  NAVIGATION_GROUPS,
  SUBSCRIBE_CTA,
  SUBSCRIBE_ERROR,
  SUBSCRIBE_PLACEHOLDER,
  SUBSCRIBE_SUCCESS,
  WATCH_LIVE_HEADING,
  WATCH_LIVE_IMAGE,
  WATCH_LIVE_LABEL,
} from '../data'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const footerHeadingClass =
  'mb-6 font-heading text-[1.3rem] font-bold uppercase tracking-[0.1em] text-black'

/* footer.site-footer — white, 3 columns (About + Subscribe form /
   Navigations + Follow Us / Watch Live Streaming video card) with a
   copyright bar. */
export function Footer() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!EMAIL_PATTERN.test(email.trim())) {
      setError(SUBSCRIBE_ERROR)
      return
    }
    setError('')
    setSubscribed(true)
  }

  return (
    <footer className="bg-white pb-10 pt-[7em]">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Column 1 — About + Subscribe form. */}
        <div>
          <h3 className={footerHeadingClass}>
            <span className="relative inline-block">
              About {BRAND_NAME}
              <span
                aria-hidden="true"
                className="absolute -bottom-2 left-0 h-[2px] w-10 bg-brand"
              />
            </span>
          </h3>
          <p className="leading-relaxed text-faint">{FOOTER_ABOUT}</p>

          <h4 className="mt-8 mb-4 font-heading text-[1.1rem] font-bold uppercase tracking-[0.1em] text-black">
            Subscribe
          </h4>
          {subscribed ? (
            <p role="status" className="font-medium text-black">
              {SUBSCRIBE_SUCCESS}
            </p>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="flex">
              <label htmlFor="subscribe-email" className="sr-only">
                Email address
              </label>
              <input
                id="subscribe-email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder={SUBSCRIBE_PLACEHOLDER}
                aria-invalid={error ? true : undefined}
                className="h-[60px] w-full border border-gray-300 bg-transparent px-4 font-light text-ink placeholder:text-gray-400 focus:border-brand focus:outline-none"
              />
              <Button
                type="submit"
                className="h-[60px] rounded-none bg-brand px-6 text-base font-normal uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
              >
                {SUBSCRIBE_CTA}
              </Button>
            </form>
          )}
          {error && (
            <p role="alert" className="mt-2 text-sm text-red-600">
              {error}
            </p>
          )}
        </div>

        {/* Column 2 — Navigations + Follow Us. */}
        <div>
          <h3 className={footerHeadingClass}>
            <span className="relative inline-block">
              Navigations
              <span
                aria-hidden="true"
                className="absolute -bottom-2 left-0 h-[2px] w-10 bg-brand"
              />
            </span>
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {NAVIGATION_GROUPS.map((group, groupIndex) => (
              <ul key={groupIndex} className="space-y-2">
                {group.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[15px] text-[#999999] transition-colors hover:text-black"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>

          <h4 className="mt-8 mb-4 font-heading text-[1.1rem] font-bold uppercase tracking-[0.1em] text-black">
            Follow Us
          </h4>
          <ul className="flex gap-3">
            {FOLLOW_LINKS.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="block p-1 text-black transition-colors hover:text-brand"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d={social.path} />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 — Watch Live Streaming. */}
        <div>
          <h3 className={footerHeadingClass}>
            <span className="relative inline-block">
              {WATCH_LIVE_HEADING}
              <span
                aria-hidden="true"
                className="absolute -bottom-2 left-0 h-[2px] w-10 bg-brand"
              />
            </span>
          </h3>
          <figure className="relative">
            <img
              src={WATCH_LIVE_IMAGE}
              alt=""
              loading="lazy"
              className="h-auto w-full rounded object-cover"
            />
            <a
              href="#home"
              aria-label={WATCH_LIVE_LABEL}
              className="absolute left-1/2 top-1/2 flex h-[70px] w-[70px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black transition-colors hover:bg-brand hover:text-white"
            >
              <Play aria-hidden="true" className="ml-1 h-6 w-6 fill-current" />
            </a>
          </figure>
        </div>
      </div>

      {/* Bottom bar. */}
      <div className="mx-auto mt-16 max-w-7xl border-t border-gray-200 px-4 pt-6 text-center">
        <p className="text-[15px] text-faint">{COPYRIGHT}</p>
      </div>
    </footer>
  )
}
