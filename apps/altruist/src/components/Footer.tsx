import { useState, type FormEvent } from 'react'
import { Button } from '@free-react-templates/ui'
import { BRAND } from '../data'
import { fieldErrors, initialNewsletter, newsletterSchema } from '../lib/forms'
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from './icons'

/* footer.footer-area (bg #04091e) — three columns: About Us (lorem +
   copyright credit line), Newsletter ("Stay update with our latest" +
   #14192c email input with a teal click-btn, validated), Follow Us
   ("Let us be social" + social icons that turn teal on hover). */

const SOCIALS = [
  { label: 'Facebook', href: 'https://facebook.com', Icon: FacebookIcon },
  { label: 'Twitter', href: 'https://twitter.com', Icon: TwitterIcon },
  { label: 'Instagram', href: 'https://instagram.com', Icon: InstagramIcon },
  { label: 'LinkedIn', href: 'https://linkedin.com', Icon: LinkedinIcon },
] as const

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
    <footer id="contact" className="bg-footer text-white">
      <div className="mx-auto max-w-6xl px-4 py-[100px]">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="font-display text-[20px] font-semibold text-white">About Us</h3>
            <p className="mt-4 text-[14px] leading-relaxed text-white/50">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation.
            </p>
            <p className="mt-6 text-[13px] leading-relaxed text-white/50">
              Copyright &copy;{new Date().getFullYear()} All rights reserved | {BRAND} — a free
              React recreation of the ColorLib Cause template, made with ❤ in the
              free-react-templates monorepo.
            </p>
          </div>

          <div>
            <h3 className="font-display text-[20px] font-semibold text-white">Newsletter</h3>
            <p className="mt-4 text-[14px] text-white/50">Stay update with our latest</p>
            <form onSubmit={handleSubmit} noValidate className="mt-5 flex">
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
                className="h-[46px] w-full bg-footer-input px-[18px] text-white outline-none transition-colors placeholder:text-white/40 focus:border focus:border-teal"
              />
              <Button
                type="submit"
                className="h-[46px] shrink-0 rounded-none bg-teal px-[14px] text-[14px] font-medium uppercase tracking-wide text-white transition-colors hover:bg-teal/80"
              >
                Go
              </Button>
            </form>
            {error && <p className="mt-2 text-[12px] text-red-300">{error}</p>}
            {confirmation && (
              <p role="status" className="mt-2 text-[12px] text-white/80">
                {confirmation}
              </p>
            )}
          </div>

          <div>
            <h3 className="font-display text-[20px] font-semibold text-white">Follow Us</h3>
            <p className="mt-4 text-[14px] text-white/50">Let us be social</p>
            <div className="mt-5 flex items-center gap-3">
              {SOCIALS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="inline-flex h-9 w-9 items-center justify-center bg-white/10 text-white/50 transition-colors hover:bg-teal hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
