import { useState, type FormEvent } from 'react'
import { Send } from 'lucide-react'
import { Button } from '@free-react-templates/ui'
import { BrandIcon, type BrandName } from './BrandIcon'

const socials: ReadonlyArray<{ label: string; name: BrandName }> = [
  { label: 'Facebook', name: 'facebook' },
  { label: 'X', name: 'x' },
  { label: 'Instagram', name: 'instagram' },
  { label: 'LinkedIn', name: 'linkedin' },
]

export function Footer() {
  const [email, setEmail] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setEmail('')
  }

  return (
    <footer id="contact" className="bg-charcoal py-16 text-white dark:bg-gray-900">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
        <div>
          <h3 className="font-display text-lg font-bold uppercase">About Me</h3>
          <p className="mt-4 text-sm leading-relaxed text-white/60">
            Cantilever is an architecture and interior design studio crafting precise, stylish
            living spaces — from first concept to final detail.
          </p>
        </div>

        <div>
          <h3 className="font-display text-lg font-bold uppercase">Newsletter</h3>
          <p className="mt-4 text-sm leading-relaxed text-white/60">
            Stay updated with our latest trends.
          </p>
          <form onSubmit={handleSubmit} className="mt-5 flex">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter email address"
              className="w-full rounded-l border border-white/20 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-brand focus:outline-none"
            />
            <Button
              type="submit"
              aria-label="Subscribe to newsletter"
              className="rounded-l-none rounded-r bg-brand px-5 text-white transition-colors hover:bg-brand-dark"
            >
              <Send className="h-4 w-4" aria-hidden="true" />
            </Button>
          </form>
        </div>

        <div>
          <h3 className="font-display text-lg font-bold uppercase">Follow Me</h3>
          <p className="mt-4 text-sm leading-relaxed text-white/60">Let us be social.</p>
          <div className="mt-5 flex items-center gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href="#home"
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:bg-brand hover:text-white"
              >
                <BrandIcon name={social.name} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-6xl flex-col items-center justify-between gap-2 border-t border-white/10 px-4 pt-8 text-center text-xs text-white/50 sm:flex-row sm:px-6 sm:text-left">
        <p>© 2026 Cantilever. All rights reserved.</p>
        <p>recreation of ColorLib Maxitechture</p>
      </div>
    </footer>
  )
}
