import { useState, type FormEvent } from 'react'
import { Button } from '@free-react-templates/ui'
import { BrandIcon, type BrandName } from './BrandIcon'

const socials: ReadonlyArray<{ label: string; name: BrandName }> = [
  { label: 'Facebook', name: 'facebook' },
  { label: 'X', name: 'x' },
  { label: 'LinkedIn', name: 'linkedin' },
  { label: 'Instagram', name: 'instagram' },
]

export function Footer() {
  const [email, setEmail] = useState('')

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setEmail('')
  }

  return (
    <footer id="contact" className="bg-coal py-16 text-white">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h3 className="font-display text-sm font-bold uppercase tracking-wider text-brand">
          Newsletter
        </h3>
        <p className="mt-3 text-white/70">Stay updated with our latest trends</p>

        <form onSubmit={handleSubscribe} className="mx-auto mt-6 flex max-w-md gap-2">
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
            className="w-full rounded-none border border-gray-700 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/50 focus:border-brand focus:outline-none"
          />
          <Button
            type="submit"
            className="shrink-0 rounded-[5px] bg-brand px-6 font-sans text-sm font-semibold uppercase text-white hover:bg-brand-dark"
          >
            Subscribe
          </Button>
        </form>

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
            <p>© 2026 Elevation. All rights reserved.</p>
            <span aria-hidden="true">·</span>
            <p>recreation of ColorLib Buildarch</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
