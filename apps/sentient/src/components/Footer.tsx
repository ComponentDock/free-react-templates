import { useState, type FormEvent } from 'react'
import { Sparkles } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

const socials = [
  {
    name: 'X',
    href: 'https://x.com/',
    path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/',
    path: 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/',
    path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z',
  },
  {
    name: 'Discord',
    href: 'https://discord.com/',
    path: 'M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z',
  },
] as const

const columns = [
  { title: 'Product', links: ['Capabilities', 'Pricing', 'Documentation', 'API'] },
  { title: 'Resources', links: ['Blog', 'Tutorials', 'Community', 'Status'] },
  { title: 'Company', links: ['About', 'Careers', 'Press', 'Contact'] },
] as const

const legalLinks = ['Privacy Policy', 'Terms of Service', 'Style Guide'] as const

const EMAIL_PATTERN = /^\S+@\S+\.\S+$/

export function Footer() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!EMAIL_PATTERN.test(email.trim())) {
      setError('Please enter a valid email address.')
      return
    }
    setError(null)
    setSubscribed(true)
  }

  return (
    <footer id="contact" className="border-t border-gray-800 bg-gray-950">
      <div
        className="h-1 bg-gradient-to-r from-primary-600 via-accent-500 to-primary-600"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2" aria-label="Sentient home">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 text-white">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
              </span>
              <span className="font-display text-xl font-bold tracking-tight text-white">
                Sentient
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-400">
              The AI platform for building intelligent applications — from prototype to production
              in minutes.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={`Sentient on ${social.name}`}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-800 text-gray-400 transition-colors hover:bg-primary-600 hover:text-white"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
                {column.title}
              </h2>
              <ul className="mt-4 flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-500 transition-colors hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <section aria-labelledby="newsletter-heading">
              <h2
                id="newsletter-heading"
                className="text-sm font-semibold uppercase tracking-wider text-gray-300"
              >
                Stay Updated
              </h2>
              <p className="mt-4 text-sm text-gray-500">
                Product updates, research notes and engineering deep dives. No spam.
              </p>
              {subscribed ? (
                <p className="mt-4 rounded-lg border border-accent-500/30 bg-accent-500/10 px-4 py-3 text-sm text-accent-300">
                  Thanks for subscribing! Watch your inbox.
                </p>
              ) : (
                <form onSubmit={handleSubmit} className="mt-4" noValidate>
                  <label htmlFor="newsletter-email" className="sr-only">
                    Email address
                  </label>
                  <div className="flex gap-2">
                    <input
                      id="newsletter-email"
                      type="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      placeholder="you@example.com"
                      className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-2.5 text-sm text-white placeholder:text-gray-500 focus:border-primary-500 focus:outline-none"
                    />
                    <Button type="submit" size="sm" className="shrink-0">
                      Subscribe
                    </Button>
                  </div>
                  {error && (
                    <p role="alert" className="mt-2 text-sm text-red-400">
                      {error}
                    </p>
                  )}
                </form>
              )}
            </section>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-8 sm:flex-row">
          <p className="text-sm text-gray-500">© 2026 Sentient. All rights reserved.</p>
          <div className="flex gap-6">
            {legalLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm text-gray-500 transition-colors hover:text-white"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
