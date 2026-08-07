import { useState, type FormEvent } from 'react'
import { ArrowRight } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'
import { BrandIcon, type BrandName } from './BrandIcon'

const navColumns = [
  [
    { label: 'Overview', href: '#home' },
    { label: 'About Us', href: '#mission' },
    { label: 'Find Buyers', href: '#services' },
    { label: 'Find Us', href: '#footer' },
    { label: 'Webinars', href: '#news' },
    { label: 'Privacy Policy', href: '#footer' },
  ],
  [
    { label: 'Overview', href: '#home' },
    { label: 'About Us', href: '#mission' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#news' },
    { label: 'Gallery', href: '#testimonials' },
    { label: 'Contact Us', href: '#footer' },
  ],
] as const

const socials: ReadonlyArray<{ name: BrandName; label: string }> = [
  { name: 'facebook', label: 'Facebook' },
  { name: 'twitter', label: 'Twitter' },
  { name: 'linkedin', label: 'LinkedIn' },
  { name: 'google', label: 'Google' },
  { name: 'youtube', label: 'YouTube' },
]

const recentPosts = [
  { date: 'May 3, 2020', title: 'Designing for the Human Scale' },
  { date: 'May 3, 2020', title: 'Lessons from the Bauhaus' },
  { date: 'May 3, 2020', title: 'The Return of Craft' },
  { date: 'May 3, 2020', title: 'Cities of Tomorrow' },
] as const

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
            <a href="#home" className="text-2xl font-bold tracking-tight">
              Archon<span className="text-brand">.</span>
            </a>
            <h3 className="mt-5 text-sm font-bold uppercase tracking-wider text-white/70">
              About Us
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              There live the blind texts. Separated they live in Bookmarksgrove right at the coast
              of the Semantics, a large language ocean.
            </p>
            <div className="mt-4">
              <ButtonLink
                href="#services"
                className="rounded-full bg-brand px-6 py-2 text-sm font-semibold text-white hover:bg-brand-dark"
              >
                Learn more
              </ButtonLink>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/70">Navigation</h3>
            <div className="mt-4 flex gap-8">
              {navColumns.map((column, columnIndex) => (
                <ul key={columnIndex} className="space-y-2">
                  {column.map((link) => (
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
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/70">
              We are on social
            </h3>
            <ul className="mt-4 flex gap-3">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={`https://${social.name}.com`}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand"
                  >
                    <BrandIcon name={social.name} className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>

            <h3 className="mt-8 text-sm font-bold uppercase tracking-wider text-white/70">
              Subscribe
            </h3>
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
                className="w-full rounded-l-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:border-brand focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="flex h-10 shrink-0 items-center justify-center rounded-r-full bg-brand px-4 text-white transition-colors hover:bg-brand-dark"
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

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/70">
              Recent Posts
            </h3>
            <ul className="mt-4 space-y-3">
              {recentPosts.map((post) => (
                <li key={post.title}>
                  <span className="block text-xs text-white/40">{post.date}</span>
                  <a
                    href="#news"
                    className="text-sm text-white/60 transition-colors hover:text-brand"
                  >
                    {post.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center">
          <p className="text-sm text-white/50">© 2026 Archon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
