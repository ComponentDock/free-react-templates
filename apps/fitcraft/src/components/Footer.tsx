import { useState, type FormEvent } from 'react'
import { Button, ButtonLink } from '@free-react-templates/ui'
import { navLinks } from './Header'

const footerLinks = navLinks.filter((link) =>
  ['Home', 'About', 'Classes', 'Pricing'].includes(link.label),
)

export function Footer() {
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubscribed(true)
  }

  return (
    <footer className="bg-ink-dark text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <h3 className="font-display text-sm font-bold uppercase tracking-widest">
            About FitCraft
          </h3>
          <p className="mt-4 max-w-md leading-relaxed text-gray-400">
            FitCraft is a premium fitness destination combining expert coaching, cutting-edge
            equipment, and a supportive community. Your transformation starts here.
          </p>
        </div>
        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-widest">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-gray-400 transition-colors hover:text-brand">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-widest">Newsletter</h3>
          <p className="mt-4 text-gray-400">Get class schedules and offers in your inbox.</p>
          {subscribed ? (
            <p role="status" className="mt-4 font-bold text-brand">
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
                className="h-12 w-full border-2 border-gray-600 bg-transparent px-4 text-white placeholder:text-gray-500 focus:border-brand focus:outline-none"
              />
              <Button
                type="submit"
                className="h-12 shrink-0 rounded-none bg-brand px-5 font-display text-xs font-bold uppercase tracking-wide text-white hover:bg-brand-dark"
              >
                Subscribe
              </Button>
            </form>
          )}
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-8 text-center text-sm text-gray-400 sm:flex-row sm:px-6 lg:px-8">
          <p>&copy; 2026 FitCraft. All rights reserved.</p>
          <p>
            More templates at{' '}
            <ButtonLink
              href="https://www.componentdock.com/"
              variant="outline"
              className="border-0 px-0 text-sm font-bold text-brand hover:bg-transparent hover:text-brand-dark"
            >
              Component Dock
            </ButtonLink>
          </p>
        </div>
      </div>
    </footer>
  )
}
