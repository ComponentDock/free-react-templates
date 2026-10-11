import { useState, type FormEvent } from 'react'
import { Heart, Plane } from 'lucide-react'
import { Button, cn } from '@free-react-templates/ui'
import { BehanceMark, DribbbleMark, FacebookMark, TwitterMark } from './BrandIcons'
import { BUTTON_BASE, BUTTON_ON_DARK } from '../lib/buttonStyles'

const NAVIGATION_ONE = ['Home', 'Feature', 'Services', 'Portfolio'] as const
const NAVIGATION_TWO = ['Team', 'Pricing', 'Blog', 'Contact'] as const

const SOCIALS = [
  { label: 'Facebook', Mark: FacebookMark },
  { label: 'Twitter', Mark: TwitterMark },
  { label: 'Dribbble', Mark: DribbbleMark },
  { label: 'Behance', Mark: BehanceMark },
] as const

const FOOTER_LINK = 'text-[14px] text-white/70 transition-colors duration-300 hover:text-brand'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/* Newsletter block: the reference posts a single field ending in the square
   yellow submit; here it reports back whether the address looks usable. */
function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'ok' | 'error'>('idle')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus(EMAIL_PATTERN.test(email.trim()) ? 'ok' : 'error')
  }

  /* noValidate: the pattern check below owns the messaging, so the browser
     stub does not swallow the submit event first. */
  return (
    <form className="mt-[20px] flex" noValidate onSubmit={handleSubmit}>
      <label className="sr-only" htmlFor="newsletter-email">
        Email address
      </label>
      <input
        id="newsletter-email"
        name="email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Email address"
        className="h-[42px] w-full border border-white/20 bg-white/5 px-[15px] text-[13px] font-light text-white placeholder:text-white/50 focus:border-brand focus:outline-none"
      />
      <Button type="submit" className={cn(BUTTON_BASE, BUTTON_ON_DARK, 'shrink-0 px-[20px]')}>
        Subscribe
      </Button>
      {status === 'idle' ? null : (
        <span role="status" className="sr-only">
          {status === 'ok'
            ? 'Thanks — trip ideas are on the way to your inbox.'
            : 'Enter a valid email address to subscribe.'}
        </span>
      )}
    </form>
  )
}

/* Deep navy footer: about blurb, two navigation columns, newsletter and the
   insta feed grid, closing on a bottom bar that credits Component Dock. */
export function Footer() {
  return (
    <footer id="contact" className="bg-navy pt-[100px] pb-[30px]">
      <div className="mx-auto max-w-[1140px] px-4">
        <div className="grid gap-[40px] pb-[60px] md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-brand">
                <Plane className="h-[18px] w-[18px]" aria-hidden="true" />
              </span>
              <span className="font-display text-[22px] font-semibold lowercase text-white">
                tripquest
              </span>
            </div>
            <h4 className="mt-[24px] text-[17px] font-semibold text-white">About Agency</h4>
            <p className="mt-[14px] text-[14px] leading-[1.8] text-white/60">
              We plan and book the whole journey — stays, transfers, cover and the days in between —
              so a trip reads as one itinerary instead of six bookings.
            </p>
          </div>

          <div>
            <h4 className="text-[17px] font-semibold text-white">Navigation Links</h4>
            <div className="mt-[20px] grid grid-cols-2 gap-[12px]">
              <ul className="space-y-[10px]">
                {NAVIGATION_ONE.map((link) => (
                  <li key={link}>
                    <a href="#home" className={FOOTER_LINK}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
              <ul className="space-y-[10px]">
                {NAVIGATION_TWO.map((link) => (
                  <li key={link}>
                    <a href="#home" className={FOOTER_LINK}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h4 className="text-[17px] font-semibold text-white">Newsletter</h4>
            <p className="mt-[14px] text-[14px] leading-[1.8] text-white/60">
              Deals on hotels and packages, sent when a route gets cheaper — not every week.
            </p>
            <NewsletterForm />
          </div>

          <div>
            <h4 className="text-[17px] font-semibold text-white">InstaFeed</h4>
            <ul className="mt-[20px] grid grid-cols-2 gap-[10px]">
              {[1, 2, 3, 4].map((index) => (
                <li key={index}>
                  <a href="#blog" aria-label={`Instagram photo ${index}`} className="block">
                    <img
                      src={`https://picsum.photos/seed/tripquest-insta-${index}/200/200`}
                      alt=""
                      className="h-[80px] w-full object-cover transition-opacity duration-300 hover:opacity-80"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-[18px] border-t border-white/10 pt-[26px] lg:flex-row">
          <p className="text-[14px] text-white/60">
            Copyright © {new Date().getFullYear()} All rights reserved | This template is made with{' '}
            <Heart className="inline h-4 w-4 text-brand" aria-hidden="true" /> by{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand transition-colors duration-300 hover:text-white"
            >
              Component Dock
            </a>
          </p>
          <ul className="flex items-center gap-[16px]">
            {SOCIALS.map(({ label, Mark }) => (
              <li key={label}>
                <a
                  href="#contact"
                  aria-label={label}
                  className="inline-flex text-white transition-colors duration-300 hover:text-brand"
                >
                  <Mark className="h-[15px] w-[15px]" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
