import { useState, type FormEvent } from 'react'
import { footerColumns } from '../data'
import { BrandIcon } from './BrandIcon'

export function Footer() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'error' | 'success'>('idle')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error')
      return
    }
    setStatus('success')
  }

  return (
    <footer id="register" className="bg-ink text-white" aria-label="Footer">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h2 className="mb-5 font-display text-lg font-bold text-white">{column.title}</h2>
              <ul className="space-y-2.5 text-sm text-white/70">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#register" className="transition-colors hover:text-brand">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h2 className="mb-5 font-display text-lg font-bold text-white">Newsletter</h2>
            <p className="text-sm text-white/70">You can trust us. we only send promo offers,</p>
            <form onSubmit={handleSubmit} className="mt-4" noValidate>
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Email address"
                aria-invalid={status === 'error'}
                className="w-full border border-white/30 bg-transparent px-3 py-2.5 text-sm text-white placeholder:text-white/50 focus:border-brand focus:outline-none"
              />
              <button
                type="submit"
                className="mt-3 w-full bg-brand px-4 py-2.5 text-xs font-bold tracking-widest text-white uppercase transition-colors hover:bg-brand-dark"
              >
                subscribe
              </button>
              {status === 'error' && (
                <p role="alert" className="mt-2 text-xs text-red-400">
                  Please enter a valid email address.
                </p>
              )}
              {status === 'success' && (
                <p role="status" className="mt-2 text-xs text-brand">
                  Thanks for subscribing!
                </p>
              )}
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/60 md:flex-row">
          <p>© 2026 Swish — Basketball school template</p>
          <ul className="flex items-center gap-3">
            <li>
              <a
                href="#social"
                aria-label="Swish on Facebook"
                className="text-white/60 transition-colors hover:text-brand"
              >
                <BrandIcon name="facebook" ariaLabel="" className="h-5 w-5" />
              </a>
            </li>
            <li>
              <a
                href="#social"
                aria-label="Swish on Twitter"
                className="text-white/60 transition-colors hover:text-brand"
              >
                <BrandIcon name="twitter" ariaLabel="" className="h-5 w-5" />
              </a>
            </li>
            <li>
              <a
                href="#social"
                aria-label="Swish on Instagram"
                className="text-white/60 transition-colors hover:text-brand"
              >
                <BrandIcon name="instagram" ariaLabel="" className="h-5 w-5" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
