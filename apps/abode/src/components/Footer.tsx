import { useState, type FormEvent } from 'react'
import { Button } from '@free-react-templates/ui'
import { BrandIcon, type BrandName } from './BrandIcon'

const columns = [
  {
    title: 'Quick Links',
    links: ['About Us', 'Our Projects', 'Careers', 'Press'],
  },
  {
    title: 'Services',
    links: ['Commercial Design', 'Residential Design', 'Interior Design', 'Consulting'],
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
    <footer id="contact" className="bg-coal py-16 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#home" className="font-display text-xl font-bold uppercase tracking-wider">
              Abode<span className="text-brand">.</span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              A free architecture landing template — an original React recreation of the ColorLib
              Belara design, built with React, Tailwind CSS, and TypeScript.
            </p>
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

          <nav aria-label="Newsletter">
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-brand">
              Newsletter
            </h3>
            <form onSubmit={handleSubscribe} className="mt-4 flex gap-2">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="Email Address"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="w-full rounded-none border border-white/20 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/50 focus:border-brand focus:outline-none"
              />
              <Button
                type="submit"
                className="shrink-0 rounded-none bg-brand px-5 py-3 font-display text-sm font-semibold uppercase tracking-wider text-white hover:bg-brand-dark"
              >
                Subscribe
              </Button>
            </form>
          </nav>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 lg:flex-row">
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

          <div className="flex flex-col items-center gap-2 text-center text-xs text-white/50 sm:flex-row sm:text-left">
            <p>© 2026 Abode. All rights reserved.</p>
            <span aria-hidden="true">·</span>
            <p>recreation of ColorLib Belara</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
