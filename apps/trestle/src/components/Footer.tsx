import { useState, type FormEvent } from 'react'
import { ArrowRight, Phone } from 'lucide-react'
import { BrandIcon, type BrandName } from './BrandIcon'

const columns: ReadonlyArray<{
  heading: string
  links: ReadonlyArray<{ label: string; href: string }>
}> = [
  {
    heading: 'Company',
    links: [
      { label: 'Home', href: '#home' },
      { label: 'About us', href: '#studio' },
      { label: 'Services', href: '#services' },
      { label: 'Portfolio', href: '#projects' },
      { label: 'Contact', href: '#footer' },
    ],
  },
  {
    heading: 'Support',
    links: [
      { label: 'Help Desk', href: '#footer' },
      { label: 'FAQ', href: '#footer' },
      { label: 'Job Applications', href: '#footer' },
      { label: 'Site Map', href: '#footer' },
      { label: 'Privacy', href: '#footer' },
    ],
  },
  {
    heading: 'Site Map',
    links: [
      { label: 'Blog', href: '#footer' },
      { label: 'Terms & Conditions', href: '#footer' },
      { label: 'Clients', href: '#footer' },
      { label: 'Testimonials', href: '#footer' },
      { label: 'Contact us', href: '#footer' },
    ],
  },
] as const

const socials: ReadonlyArray<{ name: BrandName; label: string }> = [
  { name: 'pinterest', label: 'Pinterest' },
  { name: 'linkedin', label: 'LinkedIn' },
  { name: 'instagram', label: 'Instagram' },
  { name: 'facebook', label: 'Facebook' },
  { name: 'twitter', label: 'Twitter' },
]

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function Footer() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'error' | 'success'>('idle')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!EMAIL_RE.test(email)) {
      setStatus('error')
      return
    }
    setStatus('success')
    setEmail('')
  }

  return (
    <footer className="bg-coal text-white dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#home" className="text-2xl font-black tracking-tight">
              Trestle<span className="text-brand">.</span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              A creative architecture studio crafting minimal, functional spaces — from concept
              sketches to landmark towers.
            </p>
            <p className="mt-5 inline-flex items-center gap-2 text-sm text-white/60">
              <Phone aria-hidden="true" className="h-4 w-4 text-brand" />
              +675 334 567 223
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={`https://${social.name}.com`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand hover:text-ink"
                >
                  <BrandIcon name={social.name} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((column) => (
            <div key={column.heading}>
              <h3 className="text-sm font-black uppercase tracking-wider text-white/70">
                {column.heading}
              </h3>
              <ul className="mt-4 space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/60 transition-colors hover:text-brand"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-sm font-black uppercase tracking-wider text-white/70">
              Newsletter
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Subscribe to get the latest studio news and project updates.
            </p>
            <form onSubmit={handleSubmit} className="mt-4 flex items-center" noValidate>
              <label htmlFor="subscribe-email" className="sr-only">
                Email address
              </label>
              <input
                id="subscribe-email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter your email"
                className="w-full rounded-l-sm border border-white/20 bg-white/10 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:border-brand focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="flex h-10 shrink-0 items-center justify-center rounded-r-sm bg-brand px-4 text-ink transition-colors hover:bg-brand-dark"
              >
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </button>
            </form>
            {status === 'error' && (
              <p role="alert" className="mt-2 text-sm text-red-300">
                Please enter a valid email address.
              </p>
            )}
            {status === 'success' && (
              <p role="status" className="mt-2 text-sm text-brand">
                Thanks for subscribing!
              </p>
            )}
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center">
          <p className="text-sm text-white/50">© 2026 Trestle. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
