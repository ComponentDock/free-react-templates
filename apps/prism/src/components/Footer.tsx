import { useState } from 'react'
import type { FormEvent } from 'react'
const aboutLinks = [
  { label: 'Managed Website', href: '#' },
  { label: 'Manage Reputation', href: '#' },
  { label: 'Power Tools', href: '#' },
  { label: 'Marketing Service', href: '#' },
] as const

const navLinks1 = [
  { label: 'Home', href: '#home' },
  { label: 'Main Features', href: '#studio' },
  { label: 'Offered Services', href: '#skills' },
  { label: 'Latest Portfolio', href: '#achievements' },
] as const

const navLinks2 = [
  { label: 'Works & Builders', href: '#' },
  { label: 'Works & WordPress', href: '#' },
  { label: 'Works & Templates', href: '#' },
] as const

const instaImages = Array.from({ length: 8 }, (_, i) => ({
  src: `https://picsum.photos/seed/prism-insta-${i + 1}/80/80`,
  alt: `Instagram post ${i + 1}`,
}))

export function Footer() {
  const [email, setEmail] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setEmail('')
  }

  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="mb-12 flex justify-center">
          <form onSubmit={handleSubmit} className="relative w-full max-w-lg">
            <label htmlFor="footer-email" className="sr-only">
              Email address
            </label>
            <input
              id="footer-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="w-full rounded-full border-none bg-mist py-3 pl-6 pr-36 text-sm text-ink placeholder:text-smoke focus:outline-none focus:ring-2 focus:ring-primary-400/30"
            />
            <button
              type="submit"
              className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-primary-400 px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-500"
            >
              Subscribe now
            </button>
          </form>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h6 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              About Agency
            </h6>
            <ul className="space-y-2 text-sm">
              {aboutLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition-colors hover:text-primary-400">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h6 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Navigation Links
            </h6>
            <ul className="space-y-2 text-sm">
              {navLinks1.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition-colors hover:text-primary-400">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h6 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Navigation Links
            </h6>
            <ul className="space-y-2 text-sm">
              {navLinks2.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition-colors hover:text-primary-400">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h6 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Instafeed
            </h6>
            <div className="grid grid-cols-4 gap-2">
              {instaImages.map((img) => (
                <img
                  key={img.alt}
                  src={img.src}
                  alt={img.alt}
                  className="h-16 w-16 rounded object-cover"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 py-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
          <p className="text-sm">
            © {new Date().getFullYear()} Prism. All rights reserved | Made with{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-400 transition-colors hover:text-primary-300"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
