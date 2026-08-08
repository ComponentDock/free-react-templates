import { useState, type FormEvent } from 'react'
import { Button } from '@free-react-templates/ui'
import { BrandIcon, type BrandName } from './BrandIcon'

const socials: ReadonlyArray<{ label: string; name: BrandName }> = [
  { label: 'Facebook', name: 'facebook' },
  { label: 'X', name: 'x' },
  { label: 'LinkedIn', name: 'linkedin' },
  { label: 'Instagram', name: 'instagram' },
]

const quickLinks = ['Home', 'About', 'Services', 'Projects', 'Blog', 'Contact'] as const

export function Footer() {
  const [email, setEmail] = useState('')

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setEmail('')
  }

  return (
    <footer id="contact" className="bg-coal py-16 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="font-display text-lg font-bold uppercase">About Us</h3>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              If you own an Iphone, you’ve probably already worked out how much fun it is to use it
              to watch movies-it has that.
            </p>
          </div>

          <div>
            <h3 className="font-display text-lg font-bold uppercase">Newsletter</h3>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Stay update with our latest
            </p>
            <form onSubmit={handleSubscribe} className="mt-6 flex max-w-xs gap-2">
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
                className="w-full rounded-[5px] border border-white/20 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/50 focus:border-brand focus:outline-none"
              />
              <Button
                type="submit"
                className="shrink-0 rounded-[5px] bg-brand px-5 font-sans text-sm font-semibold uppercase text-white hover:bg-brand-dark"
              >
                Subscribe
              </Button>
            </form>
          </div>

          <div>
            <h3 className="font-display text-lg font-bold uppercase">Follow Us</h3>
            <p className="mt-4 text-sm leading-relaxed text-white/60">Let us be social</p>
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
            <ul className="mt-6 space-y-2 text-sm text-white/60">
              {quickLinks.map((label) => (
                <li key={label}>
                  <a
                    href={`#${label.toLowerCase()}`}
                    className="transition-colors hover:text-brand"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-2 border-t border-white/10 pt-8 text-center text-xs text-white/50 sm:flex-row sm:text-left">
          <p>Copyright © 2026 Foyer. All rights reserved.</p>
          <p>recreation of ColorLib Interior</p>
        </div>
      </div>
    </footer>
  )
}
