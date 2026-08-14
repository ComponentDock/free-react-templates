import { useState } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
import { Button } from '@free-react-templates/ui'
import { brand, footer, phoneHref, socials, topBar } from '../data'
import { BrandIcon } from './BrandIcon'

/** Footer (source: .ftco-footer ftco-bg-dark — black, 4 widgets): "Have a
 *  Questions?" contact block with social icons, "Links", "Recent Blog" mini
 *  entries and the "Subscribe Us!" newsletter form; copyright bar with the
 *  Component Dock credit. */
export function Footer() {
  const [subscribed, setSubscribed] = useState(false)

  const contactRows = [
    { icon: MapPin, text: topBar.address, href: undefined },
    { icon: Phone, text: topBar.phone, href: phoneHref },
    { icon: Mail, text: topBar.email, href: `mailto:${topBar.email}` },
  ] as const

  return (
    <footer id="contact" className="bg-black pb-10 pt-16 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h2 className="text-lg font-semibold">{footer.questionsHeading}</h2>
          <ul className="mt-6 space-y-4 text-sm">
            {contactRows.map(({ icon: Icon, text, href }) => (
              <li key={text}>
                <a
                  href={href ?? undefined}
                  className="flex items-start gap-3 text-gray-300 transition-colors hover:text-brand"
                >
                  <Icon className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                  <span>{text}</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex gap-3">
            {socials.map((social) => (
              <a
                key={social}
                href="#contact"
                aria-label={social}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand"
              >
                <BrandIcon name={social} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold">{footer.linksHeading}</h2>
          <ul className="mt-6 space-y-3 text-sm">
            {footer.links.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="text-gray-300 transition-colors hover:text-brand"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold">{footer.recentBlogHeading}</h2>
          <ul className="mt-6 space-y-5 text-sm">
            {footer.recentBlog.map((entry) => (
              <li key={entry.meta}>
                <a href="#blog" className="text-gray-300 transition-colors hover:text-brand">
                  {entry.title}
                </a>
                <p className="mt-1 text-xs text-gray-500">{entry.meta}</p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold">{footer.newsletterHeading}</h2>
          {subscribed ? (
            <p className="mt-6 rounded-lg bg-brand/15 p-4 text-sm text-white">
              {footer.newsletterSuccess}
            </p>
          ) : (
            <form
              className="mt-6"
              onSubmit={(event) => {
                event.preventDefault()
                setSubscribed(true)
              }}
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder={footer.newsletterPlaceholder}
                required
                className="w-full rounded border border-gray-700 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-gray-500 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
              />
              <Button
                type="submit"
                className="mt-3 w-full rounded-full bg-brand px-6 py-2.5 font-semibold text-white hover:bg-brand-hover"
              >
                {footer.newsletterButton}
              </Button>
            </form>
          )}
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-white/10 px-4 pt-6 text-sm text-gray-400 sm:flex-row">
        <p>
          © {new Date().getFullYear()} {brand.name} — All rights reserved | Free consulting template
        </p>
        <a
          href="https://www.componentdock.com/"
          target="_blank"
          rel="noreferrer"
          className="transition-colors hover:text-white"
        >
          More templates at Component Dock
        </a>
      </div>
    </footer>
  )
}
