import { useState, type FormEvent } from 'react'
import { footerAbout, freeTemplates, quickMenu, socialLinks } from '../data'
import { BrandIcon } from './BrandIcon'

/** Near-black footer: About widget, Quick Menu + Free Templates +
 *  newsletter column, Social Icons widget, and a Component Dock brand
 *  line. The newsletter form shows a success state on submit. */
export function Footer() {
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubscribed(true)
  }

  return (
    <footer className="bg-ink py-16 text-white/50">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h3 className="font-heading mb-4 text-base font-semibold uppercase tracking-wider text-white">
              About
            </h3>
            <p className="text-sm leading-relaxed">{footerAbout}</p>
            <a href="#read-more" className="mt-4 inline-block text-sm font-semibold text-primary">
              Read More
            </a>
          </div>

          <div className="lg:col-span-5 lg:ml-auto">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="font-heading mb-4 text-base font-semibold uppercase tracking-wider text-white">
                  Quick Menu
                </h3>
                <ul className="space-y-2 text-sm">
                  {quickMenu.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="transition-colors hover:text-white">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-heading mb-4 text-base font-semibold uppercase tracking-wider text-white">
                  Free Templates
                </h3>
                <ul className="space-y-2 text-sm">
                  {freeTemplates.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="transition-colors hover:text-white">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-heading mb-4 text-base font-semibold uppercase tracking-wider text-white">
                Stay up to date
              </h3>
              {subscribed ? (
                <p className="text-sm text-primary">
                  Thanks for subscribing! Check your inbox for the latest templates.
                </p>
              ) : (
                <form onSubmit={handleSubmit} className="flex">
                  <label htmlFor="footer-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="footer-email"
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="w-full border border-white/70 bg-transparent px-4 py-2.5 text-sm text-white placeholder:text-white/50 focus:border-primary focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="bg-primary px-5 py-2.5 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-primary-700"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>

          <div className="lg:col-span-2 lg:ml-auto">
            <h3 className="font-heading mb-4 text-base font-semibold uppercase tracking-wider text-white">
              Social Icons
            </h3>
            <ul className="flex gap-3">
              {socialLinks.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center border border-white/20 text-white/60 transition-colors hover:border-primary hover:text-primary"
                  >
                    <BrandIcon name={social.name} className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm">
          <p>
            © {new Date().getFullYear()} Verdant — All rights reserved | Free website template.{' '}
            <a
              href="https://www.componentdock.com/"
              className="font-semibold text-white/80 transition-colors hover:text-primary"
            >
              More templates at Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
