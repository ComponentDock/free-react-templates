import { useState, type FormEvent } from 'react'
import { Button } from '@free-react-templates/ui'
import { footerAbout, quickLinks } from '../data'
import { BrandIcon, type SocialName } from './BrandIcon'

const socials: { label: string; name: SocialName }[] = [
  { label: 'Facebook', name: 'facebook' },
  { label: 'Twitter', name: 'twitter' },
  { label: 'Instagram', name: 'instagram' },
  { label: 'Linkedin', name: 'linkedin' },
]

/** Dark `#333333` footer (`.site-footer`): About Us, Quick Links, Follow Us
 *  social icons and a Subscribe Newsletter form, plus a copyright bar with
 *  the Component Dock attribution. */
export function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
    }
  }

  return (
    <footer className="bg-footer text-footertext">
      <div className="mx-auto max-w-6xl px-4 py-[4em] md:py-[8em]">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <h4 className="text-base font-bold text-white">About Us</h4>
            <p className="mt-4 text-sm leading-relaxed">{footerAbout}</p>
          </div>

          <nav aria-label="Footer Quick Links">
            <h4 className="text-base font-bold text-white">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-footerlink transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer Follow Us">
            <h4 className="text-base font-bold text-white">Follow Us</h4>
            <ul className="mt-4 flex gap-3">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href="#home-section"
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-footerlink transition-colors hover:bg-brand hover:text-white"
                  >
                    <BrandIcon name={social.name} className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h4 className="text-base font-bold text-white">Subscribe Newsletter</h4>
            {subscribed ? (
              <p role="status" className="mt-4 text-sm text-check">
                Subscribed — thank you!
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="mt-4 flex">
                <label htmlFor="unison-newsletter-email" className="sr-only">
                  Email
                </label>
                <input
                  id="unison-newsletter-email"
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="h-[43px] w-full rounded-l-full border border-white/20 bg-transparent px-4 text-sm text-white outline-none placeholder:text-footerlink focus:border-brand"
                />
                <Button
                  type="submit"
                  variant="primary"
                  className="h-[43px] rounded-l-none rounded-r-full bg-white px-5 text-black hover:bg-gray-100"
                >
                  Send
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-6 text-center text-sm">
          <p>
            Copyright © {new Date().getFullYear()} All rights reserved | This template is made with
            ♥ by Unison · More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-white underline transition-colors hover:text-brand"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
