import type { FormEvent } from 'react'
import {
  BRAND,
  COMPONENT_DOCK,
  COPYRIGHT,
  FOLLOW_TITLE,
  FOOTER_ABOUT,
  FOOTER_FEATURES,
  FOOTER_FEATURES_TITLE,
  NEWSLETTER_BUTTON,
  NEWSLETTER_PLACEHOLDER,
  NEWSLETTER_TEXT,
  NEWSLETTER_TITLE,
  SOCIAL_LINKS,
} from '../data'
import { BrandIcon } from './BrandIcon'

/* footer.site-footer — light background with a dot-grid pattern (the
   source's images/dot-grid.png; recreated with a radial-gradient), then
   About Us blurb + Features links + "Subscribe to Newsletter" form (55px
   email input + green Subscribe button) + "Follow Us" social icons, and a
   copyright bar whose attribution is the Component Dock link. */
export function Footer() {
  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <footer
      id="contact"
      aria-label="Footer"
      className="bg-white bg-[radial-gradient(circle_at_1px_1px,#e6e6e6_1px,transparent_0)] bg-[length:26px_26px] pt-16 pb-8 md:pt-24"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1.5fr]">
          <div>
            <a
              href="#home"
              className="font-sans text-[1.7rem] text-brand lowercase transition-colors hover:text-brand-dark"
            >
              {BRAND}
            </a>
            <p className="mt-4 max-w-xs leading-relaxed text-ink/70">{FOOTER_ABOUT}</p>
          </div>

          <div>
            <h2 className="text-[16px] font-bold text-ink">{FOOTER_FEATURES_TITLE}</h2>
            <ul className="mt-4 space-y-2">
              {FOOTER_FEATURES.map((link) => (
                <li key={link}>
                  <a
                    href="#home"
                    className="text-[15px] text-ink/60 transition-colors hover:text-brand"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[16px] font-bold text-ink">{NEWSLETTER_TITLE}</h2>
            <p className="mt-3 text-[14px] text-ink/60">{NEWSLETTER_TEXT}</p>
            <form onSubmit={handleSubscribe} className="mt-4 flex max-w-sm">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder={NEWSLETTER_PLACEHOLDER}
                className="h-[55px] w-full rounded-none border border-line bg-white px-4 text-[15px] text-ink outline-none focus:border-brand"
              />
              <button
                type="submit"
                className="h-[55px] cursor-pointer bg-brand px-5 text-[15px] font-bold text-white transition-colors hover:bg-brand-dark"
              >
                {NEWSLETTER_BUTTON}
              </button>
            </form>

            <h3 className="mt-8 text-[16px] font-bold text-ink">{FOLLOW_TITLE}</h3>
            <div className="mt-4 flex gap-4">
              {SOCIAL_LINKS.map(({ name, label }) => (
                <a
                  key={name}
                  href="#home"
                  aria-label={label}
                  className="text-ink/60 transition-colors hover:text-brand"
                >
                  <BrandIcon name={name} className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-black/10 pt-6 md:flex-row">
          <p className="text-[15px] text-ink/60">{COPYRIGHT}</p>
          <a
            href={COMPONENT_DOCK.href}
            className="text-[15px] text-ink/60 transition-colors hover:text-brand"
          >
            {COMPONENT_DOCK.label}
          </a>
        </div>
      </div>
    </footer>
  )
}
