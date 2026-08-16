import { useState, type FormEvent } from 'react'
import { Send } from 'lucide-react'
import { footerQuickLinks, footerServices } from '../data'
import { SocialIcons } from './SocialIcons'

/** Yellow three-part footer (logo + social, Quick Links, Services) plus a
 *  newsletter form and the Component Dock credit bar. */
export function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    setSubscribed(true)
  }

  return (
    <footer id="contact" className="bg-brand">
      <div className="mx-auto max-w-7xl px-6 pb-12 pt-[100px] lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.4fr_1.8fr]">
          <div>
            <p className="font-serif text-3xl font-bold text-ink">Statecraft</p>
            <p className="mt-4 max-w-xs leading-relaxed text-olive">
              Strategy, growth and digitalisation advisory for organisations that advance the world.
            </p>
            <SocialIcons className="mt-8" />
          </div>
          <div>
            <h4 className="text-xl font-semibold text-ink">Quick Links</h4>
            <ul className="mt-6 space-y-3">
              {footerQuickLinks.map((link) => (
                <li key={link}>
                  <a href="#home" className="text-olive transition-colors hover:text-ink">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-ink">Services</h4>
            <ul className="mt-6 space-y-3">
              {footerServices.map((service) => (
                <li key={service}>
                  <a href="#services" className="text-olive transition-colors hover:text-ink">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-ink">Newsletter</h4>
            <p className="mt-6 text-olive">Subscribe newsletter to get updates.</p>
            {subscribed ? (
              <p role="status" className="mt-6 font-semibold text-ink">
                Thanks for subscribing!
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 flex">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Enter your email"
                  className="h-[60px] w-full border border-ink bg-transparent px-5 text-ink placeholder:text-ink"
                />
                <button
                  type="submit"
                  aria-label="Subscribe to newsletter"
                  className="flex h-[60px] w-[60px] shrink-0 items-center justify-center bg-ink text-brand transition-colors hover:bg-accent hover:text-white"
                >
                  <Send className="h-5 w-5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      <div className="border-t border-ink/20">
        <div className="mx-auto max-w-7xl px-6 py-6 text-center">
          <p className="text-sm text-olive">
            Copyright &copy; 2026 All rights reserved | Made with{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-ink underline"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
