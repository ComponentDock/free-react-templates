import { useState, type FormEvent } from 'react'
import { attribution, footer, siteBlurb, siteName } from '../data'
import { SocialIcon } from './SocialIcon'

/** Dark four-column footer: brand, feature links, the newsletter group and the social row. */
export function Footer() {
  const year = new Date().getFullYear()
  const [email, setEmail] = useState('')
  const [notice, setNotice] = useState('')

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (email.trim() === '') {
      setNotice('Add an e-mail address to subscribe.')
      return
    }
    setNotice('Thanks — the sailing digest lands on the first Monday of the month.')
    setEmail('')
  }

  return (
    <footer className="bg-footer px-4 pt-16 pb-8">
      <div className="mx-auto max-w-[1140px]">
        <div className="grid gap-[30px] md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="text-[16px] font-medium text-white uppercase">{footer.aboutHeading}</h2>
            <p className="mt-4 max-w-[280px] text-[15px] text-white/50">{siteBlurb}</p>
          </div>

          <div>
            <h2 className="text-[16px] font-medium text-white uppercase">
              {footer.featuresHeading}
            </h2>
            <ul className="mt-4 space-y-2">
              {footer.features.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[15px] text-white/50 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[16px] font-medium text-white uppercase">
              {footer.newsletterHeading}
            </h2>
            <form onSubmit={handleSubscribe} noValidate className="mt-4 flex">
              <label htmlFor="newsletter-email" className="sr-only">
                E-mail address
              </label>
              <input
                id="newsletter-email"
                name="newsletter-email"
                type="email"
                value={email}
                placeholder="Email"
                onChange={(event) => {
                  setEmail(event.target.value)
                }}
                className="h-[42px] w-full min-w-0 border border-white/20 bg-transparent px-4 text-[15px] text-white placeholder:text-white/40 focus:border-white/60 focus:outline-none"
              />
              <button
                type="submit"
                className="h-[42px] shrink-0 bg-brand px-4 text-[15px] text-white transition-colors hover:bg-brand-dark"
              >
                Subscribe
              </button>
            </form>
            <p role="status" aria-live="polite" className="mt-2 text-[13px] text-white/50">
              {notice}
            </p>
          </div>

          <div>
            <h2 className="text-[16px] font-medium text-white uppercase">{footer.followHeading}</h2>
            <ul className="mt-4 flex items-center gap-4">
              {footer.socials.map((social) => (
                <li key={social.network}>
                  <a
                    href={social.href}
                    aria-label={social.label}
                    className="block text-white/50 transition-colors hover:text-white"
                  >
                    <SocialIcon network={social.network} className="size-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center">
          <p className="text-[14px] text-white/50">
            © {year} {siteName}. All rights reserved. More templates at{' '}
            <a href={attribution.href} className="text-white hover:underline">
              {attribution.label}
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  )
}
