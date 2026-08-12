import { ArrowRight, Heart } from 'lucide-react'
import {
  ABOUT_TEXT,
  ABOUT_TITLE,
  COMPONENT_DOCK_URL,
  FOLLOW_TEXT,
  FOLLOW_TITLE,
  NEWSLETTER_TEXT,
  NEWSLETTER_TITLE,
  SOCIAL_LINKS,
} from '../data'
import { BehanceIcon, DribbbleIcon, FacebookIcon, TwitterIcon } from './social-icons'

const SOCIAL_ICONS = {
  Facebook: FacebookIcon,
  Twitter: TwitterIcon,
  Dribbble: DribbbleIcon,
  Behance: BehanceIcon,
} as const

/**
 * Footer — black footer with three widget columns: About Me (with the
 * Component Dock credit line), Newsletter (email input + red arrow
 * submit) and Follow Me (four brand social links).
 */
export function Footer() {
  return (
    <footer id="contact" className="bg-night pb-[120px] pt-[230px]">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h3 className="mb-9 font-serif text-lg font-bold text-white">{ABOUT_TITLE}</h3>
            <p className="mb-8 text-sm">{ABOUT_TEXT}</p>
            <p className="text-sm">
              Copyright © {new Date().getFullYear()} All rights reserved | Made with{' '}
              <Heart className="inline h-3.5 w-3.5 text-brand" aria-hidden="true" /> by{' '}
              <a
                href={COMPONENT_DOCK_URL}
                className="text-brand transition-colors hover:text-white"
              >
                Component Dock
              </a>
            </p>
          </div>

          <div className="lg:col-span-5">
            <h3 className="mb-9 font-serif text-lg font-bold text-white">{NEWSLETTER_TITLE}</h3>
            <p className="mb-6 text-sm">{NEWSLETTER_TEXT}</p>
            <form
              aria-label="Newsletter subscription"
              onSubmit={(event) => event.preventDefault()}
              className="flex"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="Enter email address"
                className="h-10 min-w-0 flex-1 border border-navy bg-transparent px-4 text-sm text-muted placeholder:text-muted focus:border-brand focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="grid h-10 w-11 shrink-0 place-items-center bg-brand text-white transition-colors hover:bg-brand/90"
              >
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </form>
          </div>

          <div className="lg:col-span-2">
            <h3 className="mb-9 font-serif text-lg font-bold text-white">{FOLLOW_TITLE}</h3>
            <p className="mb-6 text-sm">{FOLLOW_TEXT}</p>
            <ul className="flex gap-[17px]">
              {SOCIAL_LINKS.map((social) => {
                const Icon = SOCIAL_ICONS[social.label]
                return (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      aria-label={social.label}
                      className="text-muted transition-colors hover:text-brand"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
