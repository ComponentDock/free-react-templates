import { useState, type FormEvent } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { Button } from '@free-react-templates/ui'
import { INSTAGRAM_SEEDS, OPEN_HOURS, SOCIAL_LINKS } from '../data'

/**
 * Brand icon paths (simple-icons, 24×24) — lucide-react removed brand icons
 * (Facebook/Instagram/Twitter/Google resolve to undefined), so the footer
 * social glyphs are inline SVGs.
 */
const SOCIAL_PATHS = {
  Facebook:
    'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
  Twitter:
    'M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z',
  Google:
    'M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z',
  Instagram:
    'M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z',
} as const

const FOOTER_TAGLINE =
  'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'

/**
 * Footer — dark #141313 footer (source `.ftco-footer`) with four widgets:
 * the Hearth brand blurb with circular social icon links, the Open Hours
 * list, a Newsletter subscribe form and an Instagram thumbnail grid, plus a
 * copyright bar linking to Component Dock.
 */
export function Footer() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError('Enter a valid email address')
      return
    }
    setError('')
    setSubscribed(true)
  }

  return (
    <footer id="contact" className="bg-footer text-white">
      <div className="mx-auto max-w-6xl px-4 py-24">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="text-lg font-bold text-white">Hearth</h2>
            <p className="mt-4 text-sm leading-relaxed text-white/70">{FOOTER_TAGLINE}</p>
            <ul className="mt-6 flex gap-3">
              {SOCIAL_LINKS.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[#f1f1f1] text-white transition-colors hover:border-brand hover:bg-brand"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                      aria-hidden="true"
                    >
                      <path d={SOCIAL_PATHS[social.label]} />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold text-white">Open Hours</h2>
            <ul className="mt-4 space-y-2.5 text-sm text-foot">
              {OPEN_HOURS.map((entry) => (
                <li key={entry.day} className="flex justify-between gap-4">
                  <span>{entry.day}</span>
                  <span>{entry.hours}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold text-white">Newsletter</h2>
            {subscribed ? (
              <p role="status" className="mt-4 flex items-center gap-2 text-sm text-white/70">
                <CheckCircle2 className="h-4 w-4 text-brand" aria-hidden="true" />
                Thanks for subscribing!
              </p>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="mt-4">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="Enter email address"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value)
                    if (error) setError('')
                  }}
                  aria-invalid={error ? true : undefined}
                  aria-describedby={error ? 'newsletter-email-error' : undefined}
                  className="w-full rounded-sm bg-white/10 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/50 focus:bg-white/15"
                />
                {error && (
                  <p id="newsletter-email-error" role="alert" className="mt-2 text-sm text-brand">
                    {error}
                  </p>
                )}
                <Button type="submit" className="mt-3 rounded-sm px-6 py-3">
                  Subscribe
                </Button>
              </form>
            )}
          </div>
          <div>
            <h2 className="text-lg font-bold text-white">Instagram</h2>
            <ul className="mt-4 grid grid-cols-3 gap-2">
              {INSTAGRAM_SEEDS.map((seed) => (
                <li key={seed}>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram photo"
                  >
                    <img
                      src={`https://picsum.photos/seed/${seed}/150/150`}
                      alt=""
                      loading="lazy"
                      className="h-[100px] w-full object-cover transition-opacity hover:opacity-80"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-white/60">
          <p>
            Copyright © {new Date().getFullYear()} All rights reserved |{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noreferrer"
              className="text-white underline-offset-2 transition-colors hover:text-brand hover:underline"
            >
              More templates at Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
