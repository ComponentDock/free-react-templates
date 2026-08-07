import { useState, type FormEvent } from 'react'
import { Button } from '@free-react-templates/ui'
import { BrandIcon, type BrandName } from './BrandIcon'

const posts = [
  { title: 'Concrete in the City', date: 'Jan 12, 2026' },
  { title: 'Timber Frames Revisited', date: 'Jan 05, 2026' },
  { title: 'Daylight-First Design', date: 'Dec 28, 2025' },
] as const

const columns = [
  {
    title: 'Company',
    links: ['About Us', 'Our Team', 'Careers', 'Press'],
  },
  {
    title: 'Support',
    links: ['Help Center', 'Contact', 'FAQ', 'Status'],
  },
  {
    title: 'Legal',
    links: ['Privacy Policy', 'Terms of Service', 'Cookies'],
  },
] as const

const socials: ReadonlyArray<{ label: string; name: BrandName }> = [
  { label: 'Facebook', name: 'facebook' },
  { label: 'X', name: 'x' },
  { label: 'LinkedIn', name: 'linkedin' },
]

export function Footer() {
  const [email, setEmail] = useState('')

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setEmail('')
  }

  return (
    <footer className="bg-coal py-16 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <a href="#home" className="font-display text-xl font-bold uppercase tracking-wider">
              Masonry<span className="text-brand">.</span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              A free architecture landing template — an original React recreation of the ColorLib
              Astral design, built with React, Tailwind CSS, and TypeScript.
            </p>
            <h3 className="mt-8 font-display text-sm font-bold uppercase tracking-wider text-brand">
              Recent Blog Posts
            </h3>
            <ul className="mt-4 space-y-3">
              {posts.map((post) => (
                <li key={post.title}>
                  <a
                    href="#home"
                    className="block text-sm text-white/70 transition-colors hover:text-brand"
                  >
                    {post.title}
                    <span className="block text-xs text-white/40">{post.date}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {columns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-brand">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#home"
                      className="text-sm text-white/60 transition-colors hover:text-brand"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 lg:flex-row">
          <form onSubmit={handleSubscribe} className="flex w-full max-w-md gap-2">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="Your Email Address"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-none border border-white/20 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/50 focus:border-brand focus:outline-none"
            />
            <Button
              type="submit"
              className="shrink-0 rounded-none bg-brand px-6 py-3 font-display text-sm font-semibold uppercase tracking-wider text-white hover:bg-brand-dark"
            >
              Subscribe
            </Button>
          </form>

          <div className="flex items-center gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href="#home"
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-brand hover:text-brand"
              >
                <BrandIcon name={social.name} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-2 text-center text-xs text-white/50 sm:flex-row sm:text-left">
          <p>© 2026 Masonry. All rights reserved.</p>
          <p>recreation of ColorLib Astral</p>
        </div>
      </div>
    </footer>
  )
}
