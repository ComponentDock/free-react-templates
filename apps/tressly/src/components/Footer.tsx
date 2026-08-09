import { useState, type FormEvent } from 'react'
import { Scissors, Send } from 'lucide-react'
import { Button } from '@free-react-templates/ui'
import { BrandIcon } from './BrandIcon'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
] as const

const socials = [
  { label: 'GitHub', href: 'https://github.com', name: 'github' },
  { label: 'X', href: 'https://x.com', name: 'x' },
  { label: 'LinkedIn', href: 'https://linkedin.com', name: 'linkedin' },
] as const

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
    <footer id="contact" className="bg-ink-900 text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <a href="#home" className="flex items-center gap-2" aria-label="Tressly">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-leaf-500 text-white">
                <Scissors className="h-4 w-4" aria-hidden="true" />
              </span>
              <span className="font-display text-xl font-bold">Tressly</span>
            </a>
            <p className="mt-4 text-sm text-gray-400">
              A modern hair salon crafting fresh looks for the whole family — cuts, colours and
              classic barbering.
            </p>
            <ul className="mt-6 flex items-center gap-3">
              {socials.map(({ label, href, name }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-gray-300 transition-colors hover:bg-leaf-500 hover:text-white"
                  >
                    <BrandIcon name={name} className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-300">
              Quick Menu
            </h3>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-leaf-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-300">
              Subscribe Newsletter
            </h3>
            <p className="mt-4 text-sm text-gray-400">
              Get the latest offers and hair care tips in your inbox.
            </p>
            {subscribed ? (
              <p
                role="status"
                className="mt-6 rounded-lg bg-leaf-500 px-4 py-3 text-sm font-medium text-white"
              >
                Thanks for subscribing — see you in your inbox!
              </p>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="mt-6">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <div className="flex gap-2">
                  <input
                    id="newsletter-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email address"
                    className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-gray-400 focus:border-leaf-400 focus:outline-none"
                  />
                  <Button
                    type="submit"
                    className="shrink-0 rounded-lg bg-leaf-500 px-4 text-white hover:bg-leaf-600"
                  >
                    Subscribe <Send className="h-4 w-4" aria-hidden="true" />
                  </Button>
                </div>
                {error && (
                  <p role="alert" className="mt-3 text-sm font-medium text-leaf-300">
                    {error}
                  </p>
                )}
              </form>
            )}
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Tressly. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
