import { type FormEvent, useState } from 'react'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { FOOTER, SOCIALS } from '../data'
import { BrandIcon } from './BrandIcon'

/* Footer (source: footer.footer_part — dark #1b212e with four columns:
   About Us + social icons, Contact Info, Important Link, and a Newsletter
   pill input with a gold icon button; the attribution line links to
   Component Dock). */
export function Footer() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (email.trim() !== '') {
      setSent(true)
    }
  }

  return (
    <footer id="contact" className="bg-navy pb-[25px] pt-[130px] text-white">
      <div className="mx-auto max-w-[1140px] px-[15px]">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="mb-6 text-[18px] font-semibold">{FOOTER.aboutTitle}</h2>
            <p className="text-[14px] leading-relaxed text-white/70">{FOOTER.aboutBlurb}</p>
            <ul className="mt-6 flex items-center gap-3">
              {SOCIALS.map((name) => (
                <li key={name}>
                  <a
                    href="#contact"
                    aria-label={name}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-brand hover:text-brand"
                  >
                    <BrandIcon name={name} className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-6 text-[18px] font-semibold">{FOOTER.contactTitle}</h2>
            <ul className="space-y-4 text-[14px] text-white/70">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                <span>Address: {FOOTER.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                <span>Phone: {FOOTER.phone}</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                <span>Email: {FOOTER.email}</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-6 text-[18px] font-semibold">{FOOTER.linksTitle}</h2>
            <ul className="space-y-3">
              {FOOTER.links.map((label) => (
                <li key={label}>
                  <a
                    href="#contact"
                    className="text-[14px] capitalize text-white/70 transition-colors hover:text-brand"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-6 text-[18px] font-semibold">{FOOTER.newsletterTitle}</h2>
            <p className="text-[14px] leading-relaxed text-white/70">{FOOTER.newsletterBlurb}</p>
            {sent ? (
              <p role="status" className="mt-5 text-[14px] text-brand">
                Thanks for subscribing!
              </p>
            ) : (
              <form onSubmit={onSubmit} className="mt-5">
                <label htmlFor="rentora-email" className="sr-only">
                  {FOOTER.newsletterLabel}
                </label>
                <div className="flex items-center">
                  <input
                    id="rentora-email"
                    type="email"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder={FOOTER.newsletterPlaceholder}
                    className="h-[39px] w-full rounded-full border-2 border-white bg-transparent px-[22px] py-2 text-[13px] text-white outline-none placeholder:text-white/40"
                  />
                  <button
                    type="submit"
                    aria-label={FOOTER.sendLabel}
                    className="-ml-11 flex h-[39px] w-[60px] items-center justify-center rounded-full bg-brand text-white transition-colors hover:bg-brand-hover"
                  >
                    <Send className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center">
          <p className="text-[14px] text-white/60">
            Copyright © {new Date().getFullYear()} All rights reserved ·{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noreferrer"
              className="text-white transition-colors hover:text-brand"
            >
              {FOOTER.credit}
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
