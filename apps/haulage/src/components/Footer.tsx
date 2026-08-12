import { useState, type FormEvent } from 'react'
import { Button } from '@free-react-templates/ui'
import { BRAND, FOOTER_ABOUT_LINKS, FOOTER_FEATURE_LINKS } from '../data'
import { fieldErrors, initialNewsletter, newsletterSchema } from '../lib/forms'
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from './icons'

/* footer.site-footer — dark #333333 four-column footer: About Us (blurb +
   links), Features (link list), Subscribe to Newsletter (email input +
   button, validated), Follow Us (social icons); bottom bar with copyright
   + credit on a rgba(255,255,255,0.1) top border. */
export function Footer() {
  const [email, setEmail] = useState(initialNewsletter.email)
  const [error, setError] = useState<string | undefined>(undefined)
  const [confirmation, setConfirmation] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const result = newsletterSchema.safeParse({ email })
    if (!result.success) {
      setError(fieldErrors(result).email)
      setConfirmation('')
      return
    }
    setConfirmation('Thanks! You are now subscribed to our newsletter.')
    setEmail('')
    setError(undefined)
  }

  return (
    <footer className="bg-footer text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 lg:py-24">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-display text-lg font-medium uppercase text-white">About {BRAND}</h3>
            <p className="mt-4 text-sm leading-relaxed text-white/50">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts.
            </p>
            <ul className="mt-4 space-y-2">
              {FOOTER_ABOUT_LINKS.map((link) => (
                <li key={link}>
                  <a
                    href="#home"
                    className="text-sm text-white/50 transition-colors hover:text-white"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-medium uppercase text-white">Features</h3>
            <ul className="mt-4 space-y-2">
              {FOOTER_FEATURE_LINKS.map((link) => (
                <li key={link}>
                  <a
                    href="#services"
                    className="text-sm text-white/50 transition-colors hover:text-white"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-medium uppercase text-white">
              Subscribe to Newsletter
            </h3>
            <p className="mt-4 text-sm text-white/50">
              Far far away, behind the word mountains, far from the countries.
            </p>
            <form onSubmit={handleSubmit} noValidate className="mt-4 flex gap-2">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value)
                  if (error) {
                    setError(undefined)
                  }
                }}
                aria-invalid={error ? true : undefined}
                className="h-11 w-full rounded border border-white/20 bg-white/10 px-3 text-sm text-white outline-none transition-colors placeholder:text-white/40 focus:border-brand"
              />
              <Button
                type="submit"
                className="h-11 shrink-0 rounded bg-white px-4 text-sm font-medium uppercase tracking-wide text-ink transition-colors hover:bg-brand hover:text-white"
              >
                Subscribe
              </Button>
            </form>
            {error && <p className="mt-2 text-xs text-red-300">{error}</p>}
            {confirmation && (
              <p role="status" className="mt-2 text-xs text-white/80">
                {confirmation}
              </p>
            )}
          </div>

          <div>
            <h3 className="font-display text-lg font-medium uppercase text-white">Follow Us</h3>
            <div className="mt-4 flex items-center gap-3">
              {[
                { label: 'Twitter', Icon: TwitterIcon },
                { label: 'Facebook', Icon: FacebookIcon },
                { label: 'Instagram', Icon: InstagramIcon },
                { label: 'LinkedIn', Icon: LinkedinIcon },
              ].map(({ label, Icon }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded bg-white/10 text-white/50 transition-colors hover:bg-brand hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-5 text-sm text-white/50 sm:flex-row">
          <p>
            Copyright &copy;{new Date().getFullYear()} All rights reserved | {BRAND}
          </p>
          <p>Made with love in the free-react-templates monorepo</p>
        </div>
      </div>
    </footer>
  )
}
