import { useState } from 'react'
import type { FormEvent } from 'react'
import { Mail } from 'lucide-react'

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Feature', href: '#features' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#pages' },
  { label: 'Blog', href: '#blog' },
] as const

const footerLinks2 = [
  { label: 'About', href: '#about' },
  { label: 'Portfolio', href: '#pages' },
  { label: 'Elements', href: '#elements' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
] as const

const instaImages = [
  'https://picsum.photos/seed/domicile-insta1/150/150',
  'https://picsum.photos/seed/domicile-insta2/150/150',
  'https://picsum.photos/seed/domicile-insta3/150/150',
  'https://picsum.photos/seed/domicile-insta4/150/150',
] as const

export function Footer() {
  const [email, setEmail] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setEmail('')
  }

  return (
    <footer id="contact" className="bg-footer-bg">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        <div>
          <h6 className="font-display text-sm font-bold uppercase tracking-wider text-ink">
            About Domicile
          </h6>
          <p className="mt-4 text-sm leading-relaxed text-footer-text">
            The world has become so fast paced that people don&apos;t want to stand by reading a
            page of information, they would much rather look at a presentation and understand the
            message. It has come to a point where images and videos are
          </p>
        </div>

        <div>
          <h6 className="font-display text-sm font-bold uppercase tracking-wider text-ink">
            Navigation Links
          </h6>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <ul className="space-y-2 text-sm text-footer-text">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition-colors hover:text-primary-400">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="space-y-2 text-sm text-footer-text">
              {footerLinks2.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition-colors hover:text-primary-400">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <h6 className="font-display text-sm font-bold uppercase tracking-wider text-ink">
            Newsletter
          </h6>
          <p className="mt-4 text-sm leading-relaxed text-footer-text">
            For business professionals caught between high OEM price and mediocre print and graphic
            output,
          </p>
          <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3">
            <label htmlFor="footer-email" className="sr-only">
              Email Address
            </label>
            <input
              id="footer-email"
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email Address"
              className="w-full border border-border bg-white px-4 py-3 text-sm text-ink placeholder:text-gray-400 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400/30"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-primary-400 px-6 py-3 text-sm font-bold uppercase text-white transition-colors hover:bg-primary-500"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Subscribe
            </button>
          </form>
        </div>

        <div>
          <h6 className="font-display text-sm font-bold uppercase tracking-wider text-ink">
            InstaFeed
          </h6>
          <div className="mt-4 grid grid-cols-2 gap-2">
            {instaImages.map((img, i) => (
              <a key={i} href="#" aria-label={`Instagram post ${i + 1}`}>
                <img
                  src={img}
                  alt={`Instagram post ${i + 1}`}
                  className="h-20 w-full object-cover transition-opacity hover:opacity-80"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-border px-4 py-6 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-footer-text">
            &copy; {new Date().getFullYear()} Domicile. All rights reserved. Made with{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary-400 hover:underline"
            >
              Component Dock
            </a>
          </p>
          <div className="flex gap-3">
            {['Facebook', 'Twitter', 'Dribbble', 'Behance'].map((label) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="text-footer-text transition-colors hover:text-primary-400"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="4" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
