import { ChevronsRight } from 'lucide-react'
import { BRAND, FOOTER, SOCIALS } from '../data'
import { NewsletterForm } from './NewsletterForm'
import {
  FacebookIcon,
  GooglePlusIcon,
  InstagramIcon,
  PinterestIcon,
  TwitterIcon,
} from './social-icons'

const SOCIAL_ICONS = {
  Facebook: FacebookIcon,
  Twitter: TwitterIcon,
  'Google Plus': GooglePlusIcon,
  Instagram: InstagramIcon,
  Pinterest: PinterestIcon,
} as const

/* Footer — the dark navy footer: Our Newsletter (with the validated email
   form + social icons), Twitter Feed, Link Categories and Contact Us
   widgets, plus the #04081d copyright bar with the footer nav and the
   Component Dock credit link. */
export function Footer() {
  return (
    <footer aria-label="Site footer" className="bg-footer">
      <div className="mx-auto grid max-w-[1170px] gap-[50px] px-6 py-[80px] sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="mb-[30px] text-base font-semibold text-white">Our Newsletter</h3>
          <p className="text-sm font-light leading-[1.8] text-muted">{FOOTER.newsletterText}</p>
          <div className="mt-[30px]">
            <NewsletterForm />
          </div>
          <ul className="mt-[30px] flex items-center">
            {SOCIALS.map((social) => {
              const Icon = SOCIAL_ICONS[social]
              return (
                <li key={social} className="flex-1">
                  <a
                    href="#"
                    aria-label={social}
                    className="inline-block text-accent transition-colors hover:text-brand-purple"
                  >
                    <Icon className="h-[14px] w-[14px]" />
                  </a>
                </li>
              )
            })}
          </ul>
        </div>

        <div>
          <h3 className="mb-[30px] text-base font-semibold text-white">Twitter Feed</h3>
          <p className="flex items-start gap-[10px] text-sm leading-[1.9] text-muted">
            <TwitterIcon className="mt-[5px] h-[14px] w-[14px] shrink-0 text-accent" />
            <span>
              {FOOTER.tweet} <span className="block text-xs">{FOOTER.tweetTime}</span>
            </span>
          </p>
        </div>

        <div>
          <h3 className="mb-[30px] text-base font-semibold text-white">Link Categories</h3>
          <ul className="columns-2">
            {FOOTER.linkCategories.map((label) => (
              <li key={label} className="mb-[10px] flex items-center gap-[6px]">
                <ChevronsRight aria-hidden="true" className="h-3 w-3 shrink-0 text-muted" />
                <a
                  href="#"
                  className="text-sm text-muted transition-all hover:ml-[5px] hover:text-accent"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-[30px] text-base font-semibold text-white">Contact Us</h3>
          {FOOTER.contact.map((line) => (
            <p key={line} className="mb-[10px] text-sm font-light leading-[1.8] text-muted">
              {line}
            </p>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-[10px] border-t border-white/10 bg-copyright px-6 py-[15px] md:flex-row">
        <p className="text-sm text-muted">
          © 2026 {BRAND}. All rights reserved. · Made with ❤ at{' '}
          <a
            href="https://www.componentdock.com/"
            target="_blank"
            rel="noreferrer"
            className="text-accent hover:underline"
          >
            Component Dock
          </a>
        </p>
        <ul className="flex flex-wrap items-center">
          {FOOTER.nav.map((label) => (
            <li key={label}>
              <a
                href="#"
                className="px-[20px] text-sm text-muted transition-colors hover:text-accent"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
