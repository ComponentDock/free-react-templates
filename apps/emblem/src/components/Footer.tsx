import { useState, type FormEvent } from 'react'
import { Send } from 'lucide-react'
import { Button } from '@free-react-templates/ui'
import { footerNav } from '../data'
import { BrandIcon } from './social-icons'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const socials = [
  { label: 'Facebook', name: 'facebook' as const },
  { label: 'Twitter', name: 'twitter' as const },
  { label: 'LinkedIn', name: 'linkedin' as const },
]

/** Emblem footer: black footer with About Us blurb, newsletter form
 *  (presentational validation), two navigation link columns, social icons
 *  and the copyright bar. The footer links out to Component Dock per the
 *  repo convention. */
export function Footer() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!emailPattern.test(email)) {
      setError('Please enter a valid email address.')
      return
    }
    setError('')
    setSubscribed(true)
    setEmail('')
  }

  return (
    <footer id="contact" className="bg-footer text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-3 lg:px-10 lg:py-20">
        <div>
          <h2 className="text-xl font-bold">
            Emblem<span className="text-brand">.</span>
          </h2>
          <p className="mt-4 max-w-sm leading-relaxed text-white/50">
            A digital agency crafting brands, websites and products for ambitious teams. Strategy,
            design and engineering under one roof.
          </p>
          <div className="mt-6 flex items-center">
            {socials.map((social) => (
              <a
                key={social.label}
                href="#home"
                aria-label={social.label}
                className="p-3 pl-0 text-white/50 transition-colors hover:text-brand"
              >
                <BrandIcon name={social.name} className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-bold">Newsletter</h2>
          <p className="mt-4 text-white/50">Subscribe to get updates on new work and ideas.</p>
          {subscribed ? (
            <p role="status" className="mt-6 text-sm text-white/80">
              Thanks for subscribing — see you in your inbox!
            </p>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="mt-6">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <div className="flex">
                <input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value)
                    if (error) {
                      setError('')
                    }
                  }}
                  placeholder="Email address"
                  className="h-[55px] w-full border border-white/20 bg-white/10 px-4 text-sm text-white placeholder:text-white/40 focus:border-brand focus:outline-none"
                />
                <Button
                  type="submit"
                  aria-label="Send newsletter signup"
                  className="h-[55px] rounded-none rounded-r-sm px-6"
                >
                  <Send className="h-4 w-4" aria-hidden="true" />
                </Button>
              </div>
              {error && (
                <p role="alert" className="mt-3 text-sm text-brand">
                  {error}
                </p>
              )}
            </form>
          )}
        </div>

        <div className="grid grid-cols-2 gap-8">
          {footerNav.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h2 className="text-lg font-bold">{column.title}</h2>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/50 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-sm text-white/50 sm:flex-row lg:px-10">
          <p>© 2026 Emblem. All rights reserved.</p>
          <p>
            More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-white transition-colors hover:text-brand"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
