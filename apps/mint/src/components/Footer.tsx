import { useState, type FormEvent } from 'react'
import { Button } from '@free-react-templates/ui'
import { BrandIcon, type BrandName } from './BrandIcon'

const socials: ReadonlyArray<{ label: string; name: BrandName }> = [
  { label: 'Facebook', name: 'facebook' },
  { label: 'X', name: 'x' },
  { label: 'LinkedIn', name: 'linkedin' },
  { label: 'Instagram', name: 'instagram' },
]

const navLinks = ['Home', 'About', 'Services', 'Projects', 'Blog', 'Contact'] as const
const newsLinks = [
  'Architecture trends in 2026',
  'New studio location announced',
  'Sustainable materials guide',
] as const

export function Footer() {
  const [email, setEmail] = useState('')

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setEmail('')
  }

  return (
    <footer id="contact" className="bg-coal py-16 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-display text-lg font-bold uppercase">About</h3>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Magnam iure fugit recusandae nobis a amet, officiis laboriosam repudiandae? Quis
              nostrum numquam ducimus quo ab laboriosam qui expedita.
            </p>
            <div className="mt-6 flex items-center gap-3">
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

          <div>
            <h3 className="font-display text-lg font-bold uppercase">Navigation</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/60">
              {navLinks.map((label) => (
                <li key={label}>
                  <a href="#home" className="transition-colors hover:text-brand">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-bold uppercase">Recent News</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/60">
              {newsLinks.map((label) => (
                <li key={label}>
                  <a href="#blog" className="transition-colors hover:text-brand">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-bold uppercase">Newsletter</h3>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Sign up for our newsletter to get the latest design updates.
            </p>
            <form onSubmit={handleSubscribe} className="mt-6 flex max-w-xs gap-2">
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
                className="w-full rounded-full border border-white/20 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/50 focus:border-brand focus:outline-none"
              />
              <Button
                type="submit"
                className="shrink-0 rounded-full bg-brand px-5 font-sans text-sm font-bold uppercase text-ink hover:bg-brand-dark hover:text-white"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-2 border-t border-white/10 pt-8 text-center text-xs text-white/50 sm:flex-row sm:text-left">
          <p>© 2026 Mint. All rights reserved.</p>
          <p>recreation of ColorLib Interior Design</p>
        </div>
      </div>
    </footer>
  )
}
