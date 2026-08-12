import { useState } from 'react'
import { CheckCircle2, Mail, MapPin, Phone } from 'lucide-react'
import { z } from 'zod'

const emailSchema = z.string().email('Please enter a valid email address.')

const locationLinks = ['Advanced', 'Management', 'Corporate', 'Customer', 'Information'] as const
const exploreLinks = ['Cookies', 'About', 'Privacy Policy', 'Proparties', 'Licenses'] as const

function FooterSocials() {
  return (
    <div className="flex items-center gap-4 text-gray-400">
      <a href="#twitter" aria-label="Twitter" className="transition-colors hover:text-white">
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
          <path d="M18.9 3h3.1l-6.8 7.8L23 21h-6.3l-4.9-6.4L6.2 21H3.1l7.3-8.3L2.5 3h6.4l4.4 5.9L18.9 3Zm-1.1 16.1h1.7L7.9 4.8H6.1l11.7 14.3Z" />
        </svg>
      </a>
      <a href="#facebook" aria-label="Facebook" className="transition-colors hover:text-white">
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
          <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.3-1.5 1.6-1.5h1.3V4.9c-.3 0-1.1-.1-2.1-.1-2.1 0-3.6 1.3-3.6 3.7V11H8v3h2.7v7h2.8Z" />
        </svg>
      </a>
      <a href="#website" aria-label="Website" className="transition-colors hover:text-white">
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
          <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm7.9 9h-3.1a16 16 0 0 0-1.3-5.7A8 8 0 0 1 19.9 11ZM12 4c.9 1.2 1.8 3.1 2.2 5H9.8c.4-1.9 1.3-3.8 2.2-5ZM4.1 13a8 8 0 0 1 4.5-5.7A16 16 0 0 0 7.2 13H4.1Zm0 2h3.1a16 16 0 0 0 1.3 5.7A8 8 0 0 1 4.1 15Zm3.1 0h4.8v5.9A18 18 0 0 1 8.5 15a14 14 0 0 1-1.3 0Zm6.8 5.9V15h4.8a18 18 0 0 1-3.4 5.9c-.4.1-.9.1-1.4.1Zm1.6-7.9c-.4 1.9-1.3 3.8-2.2 5-.9-1.2-1.8-3.1-2.2-5h4.4Zm2.4-5.7A16 16 0 0 1 19.1 13h-3.1a16 16 0 0 0-1.3-5.7 8 8 0 0 1 4.4 0Z" />
        </svg>
      </a>
      <a href="#instagram" aria-label="Instagram" className="transition-colors hover:text-white">
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
          <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.8-.4 2.2a3.8 3.8 0 0 1-.9 1.4c-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.2-2.2-.4a3.8 3.8 0 0 1-1.4-.9 3.8 3.8 0 0 1-.9-1.4c-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2Zm0 1.8c-3.1 0-3.5 0-4.8.1-1.1.1-1.5.2-1.8.3-.5.2-.8.4-1.1.7-.3.3-.5.6-.7 1.1-.1.3-.3.7-.3 1.8-.1 1.3-.1 1.7-.1 4.8s0 3.5.1 4.8c.1 1.1.2 1.5.3 1.8.2.5.4.8.7 1.1.3.3.6.5 1.1.7.3.1.7.3 1.8.3 1.3.1 1.7.1 4.8.1s3.5 0 4.8-.1c1.1-.1 1.5-.2 1.8-.3.5-.2.8-.4 1.1-.7.3-.3.5-.6.7-1.1.1-.3.3-.7.3-1.8.1-1.3.1-1.7.1-4.8s0-3.5-.1-4.8c-.1-1.1-.2-1.5-.3-1.8a2.9 2.9 0 0 0-.7-1.1 2.9 2.9 0 0 0-1.1-.7c-.3-.1-.7-.3-1.8-.3-1.3-.1-1.7-.1-4.8-.1Zm0 3.1a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 8.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Zm6.4-8.4a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Z" />
        </svg>
      </a>
    </div>
  )
}

export function Footer() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const result = emailSchema.safeParse(email)
    if (!result.success) {
      setError(result.error.issues[0]!.message)
      return
    }
    setError(null)
    setSubscribed(true)
  }

  return (
    <footer className="border-t border-footer-border bg-footer text-gray-400">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <a href="#home" className="font-display text-2xl font-bold tracking-tight text-white">
            Consilio<span className="text-accent">.</span>
          </a>
          <p className="mt-4 text-sm leading-relaxed">
            Receive updates and latest news direct from Simply enter.
          </p>
          <form onSubmit={handleSubmit} noValidate className="mt-6">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <div className="flex">
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter your email"
                aria-invalid={error ? true : undefined}
                aria-describedby={error ? 'newsletter-error' : undefined}
                className="w-full rounded-l bg-white/10 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button
                type="submit"
                className="shrink-0 rounded-r bg-accent px-5 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-accent/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Sign Up
              </button>
            </div>
            {error && (
              <p id="newsletter-error" role="alert" className="mt-2 text-xs text-red-400">
                {error}
              </p>
            )}
            {subscribed && (
              <p role="status" className="mt-2 flex items-center gap-1.5 text-xs text-emerald-400">
                <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                Thanks for subscribing!
              </p>
            )}
          </form>
        </div>

        <div>
          <h3 className="mb-5 font-display text-lg font-bold text-white">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              +564 7885 3222
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              youremail@gmail.com
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              500 Terry Francois Street, San Francisco, CA 94158
            </li>
          </ul>
        </div>

        <nav aria-label="Location links">
          <h3 className="mb-5 font-display text-lg font-bold text-white">Location</h3>
          <ul className="space-y-3 text-sm">
            {locationLinks.map((link) => (
              <li key={link}>
                <a href="#location" className="transition-colors hover:text-white">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Explore links">
          <h3 className="mb-5 font-display text-lg font-bold text-white">Explore</h3>
          <ul className="space-y-3 text-sm">
            {exploreLinks.map((link) => (
              <li key={link}>
                <a href="#explore" className="transition-colors hover:text-white">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-footer-border">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-6 text-xs sm:px-6">
          <p>
            © {new Date().getFullYear()} Consilio. Made with <span aria-hidden="true">♥</span> by
            the Consilio team.
          </p>
          <p>
            More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              className="font-semibold text-white underline-offset-2 transition-colors hover:text-accent hover:underline"
            >
              Component Dock
            </a>
          </p>
          <FooterSocials />
        </div>
      </div>
    </footer>
  )
}
