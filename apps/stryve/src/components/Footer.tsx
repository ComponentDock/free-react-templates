import { useState, type FormEvent } from 'react'
import { Dumbbell, Heart, Timer } from 'lucide-react'
import { Wordmark } from './Wordmark'
import { SocialIcon } from './SocialIcon'
import {
  copyrightLead,
  creditHref,
  creditLabel,
  creditLead,
  footerMenu,
  image,
  socials,
  subscribeCta,
  subscribeError,
  subscribeLabel,
  subscribeNote,
  subscribePlaceholder,
  subscribeSuccess,
} from '../data'

const footerBand = image('footer-band', 1920, 900)
const emailPattern = /^\S+@\S+\.\S+$/

export function Footer() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const valid = emailPattern.test(email.trim())
    setError(valid ? '' : subscribeError)
    setSubscribed(valid)
  }

  return (
    <footer
      id="contact"
      className="relative bg-cover bg-center pt-[109px]"
      style={{ backgroundImage: `url(${footerBand})` }}
    >
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative mx-auto max-w-[1170px] px-4 text-center">
        <Wordmark className="mx-auto mb-[33px]" />

        <nav aria-label="Footer">
          <ul className="mb-[86px] flex flex-wrap items-center justify-center gap-x-[37px] gap-y-[10px]">
            {footerMenu.map((link) => (
              <li key={`footer-${link.label}`}>
                <a
                  href={link.href}
                  className="text-[13px] font-medium uppercase text-white transition-colors hover:text-brand"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <form noValidate onSubmit={handleSubmit} className="mx-auto w-full max-w-[542px] text-left">
          <label htmlFor="footer-email" className="sr-only">
            {subscribeLabel}
          </label>
          <div className="relative">
            <input
              id="footer-email"
              name="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder={subscribePlaceholder}
              aria-invalid={Boolean(error)}
              aria-describedby={error ? 'footer-email-error' : undefined}
              className="h-[73px] w-full border-2 border-white bg-transparent pl-[28px] pr-[110px] text-[13px] uppercase italic tracking-[1px] text-white placeholder:text-white/60 focus:outline-none sm:pr-[205px]"
            />
            <button
              type="submit"
              className="absolute bottom-0 right-0 h-[73px] w-[100px] bg-brand text-[13px] font-bold uppercase tracking-[1.5px] text-white transition-colors hover:bg-brand-deep sm:w-[192px]"
            >
              {subscribeCta}
            </button>
          </div>
          {error && (
            <p id="footer-email-error" role="alert" className="mt-3 text-[13px] text-white">
              {error}
            </p>
          )}
          {subscribed && (
            <p role="status" className="mt-3 text-[13px] font-semibold text-white">
              {subscribeSuccess}
            </p>
          )}
          <p className="mt-3 text-[13px] italic text-white/60">{subscribeNote}</p>
        </form>

        <ul
          aria-label="Footer social links"
          className="mb-[45px] mt-[52px] flex justify-center gap-[60px]"
        >
          {socials.map((social) => (
            <li key={`footer-social-${social.label}`}>
              <a
                href={social.href}
                aria-label={social.label}
                className="text-white transition-colors hover:text-brand"
              >
                <SocialIcon label={social.label} />
              </a>
            </li>
          ))}
        </ul>

        <div aria-hidden="true" className="mb-[32px] flex items-center justify-center gap-[18px] text-white/50">
          <Dumbbell className="h-4 w-4" />
          <Heart className="h-4 w-4" />
          <Timer className="h-4 w-4" />
        </div>

        <p className="pb-[60px] text-[13px] text-white/50">
          {copyrightLead} {creditLead}{' '}
          <a href={creditHref} className="underline transition-colors hover:text-white">
            {creditLabel}
          </a>
        </p>
      </div>
    </footer>
  )
}
