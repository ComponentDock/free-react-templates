import { useState, type FormEvent } from 'react'
import { brand, footerFeatures } from '../data'
import { socialLinks } from './social-icons'

/** Dark #333333 footer: About Us text column, Features link list,
 *  Subscribe to Newsletter form + Follow Us social row, and a bottom
 *  copyright bar crediting Component Dock. */
export function Footer() {
  const [email, setEmail] = useState('')

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setEmail('')
  }

  return (
    <footer data-testid="footer" className="bg-footer py-16 text-[#999999]">
      <div className="mx-auto max-w-[1140px] px-4">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="max-w-sm">
            <h2 className="mb-4 text-base font-bold text-white">About Us</h2>
            <p>
              {brand.name} is a mining company built on engineering excellence, transparent
              reporting and long-term partnerships with the communities around our sites.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <h2 className="mb-4 text-base font-bold text-white">Features</h2>
              <ul className="space-y-2.5">
                {footerFeatures.map((label) => (
                  <li key={label}>
                    <a href="#home-section" className="transition-colors hover:text-white">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="mb-4 text-base font-bold text-white">Subscribe to Newsletter</h2>
              <form onSubmit={handleSubscribe} className="mb-6 flex">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  placeholder="Email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="h-[52px] min-w-0 flex-1 rounded-l border border-gray-600 bg-transparent px-4 text-white outline-none transition-colors focus:border-brand"
                />
                <button
                  type="submit"
                  className="rounded-r bg-brand px-4 font-bold text-white transition-colors hover:bg-primary-600"
                >
                  Subscribe
                </button>
              </form>

              <h2 className="mb-4 text-base font-bold text-white">Follow Us</h2>
              <div className="flex gap-3">
                {socialLinks.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-[#999999] transition-colors hover:bg-brand hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-5 text-center">
          <p>
            Copyright © {new Date().getFullYear()} {brand.name}. All rights reserved. Made with{' '}
            <span aria-hidden="true">♥</span> by{' '}
            <a
              href="https://www.componentdock.com/"
              className="font-bold text-brand transition-colors hover:text-white"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
