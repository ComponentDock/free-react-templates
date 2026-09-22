import { useState, type FormEvent } from 'react'
import { Button, ButtonLink } from '@free-react-templates/ui'
import { navLinks } from './Header'

const footerLinks = navLinks.filter((link) =>
  ['Home', 'About', 'Schedule', 'Trainers'].includes(link.label),
)

export function Footer() {
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubscribed(true)
  }

  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:grid-cols-2 md:grid-cols-4 sm:px-6 lg:px-8">
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest">About Us</h3>
          <p className="mt-4 text-sm leading-relaxed text-gray-400">
            Ironpeak is a modern fitness club dedicated to helping you reach your peak potential.
            Expert trainers, quality equipment, and a supportive community.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest">Contact Info</h3>
          <ul className="mt-4 space-y-2 text-sm text-gray-400">
            <li>
              <span className="block text-white">Address:</span>
              34 Street Name, City Name, United States
            </li>
            <li>
              <span className="block text-white">Telephone:</span>
              +1 242 4942 290
            </li>
            <li>
              <span className="block text-white">Email:</span>
              info@yourdomain.com
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-gray-400 transition-colors hover:text-brand"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest">Newsletter</h3>
          <p className="mt-4 text-sm text-gray-400">
            Get class schedules and offers in your inbox.
          </p>
          {subscribed ? (
            <p role="status" className="mt-4 text-sm font-bold text-brand">
              Thanks for subscribing!
            </p>
          ) : (
            <form onSubmit={handleSubscribe} className="mt-4 flex">
              <label htmlFor="footerEmail" className="sr-only">
                Email
              </label>
              <input
                id="footerEmail"
                name="email"
                type="email"
                required
                placeholder="Email"
                className="h-10 flex-1 border border-gray-600 bg-transparent px-3 text-sm text-white placeholder:text-gray-500 focus:border-brand focus:outline-none"
              />
              <Button
                type="submit"
                className="h-10 shrink-0 bg-brand px-4 text-xs font-semibold uppercase tracking-wider text-ink hover:bg-brand-dark"
              >
                Subscribe
              </Button>
            </form>
          )}
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-center text-xs text-gray-400 sm:flex-row sm:px-6 lg:px-8">
          <p>&copy; 2026 Ironpeak. All rights reserved.</p>
          <p>
            More templates at{' '}
            <ButtonLink
              href="https://www.componentdock.com/"
              variant="outline"
              className="border-0 px-0 text-xs font-bold text-brand hover:bg-transparent hover:text-brand-dark"
            >
              Component Dock
            </ButtonLink>
          </p>
        </div>
      </div>
    </footer>
  )
}
