import { useState, type FormEvent } from 'react'
import { Gamepad2, Mail } from 'lucide-react'
import { footerColumns } from '../data'

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
    <footer id="contact" aria-label="Footer" className="border-t border-white/10 bg-navy-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2" aria-label="Arena home">
              <Gamepad2 className="h-8 w-8 text-magenta-500" aria-hidden="true" />
              <span className="font-display text-2xl uppercase tracking-wider text-white">
                Arena
              </span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              Heaven fruitful doesn&apos;t over lesser days appear creeping seasons so behold
              bearing days open — the home of the fiercest fights and the best players.
            </p>
          </div>

          {footerColumns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h3 className="font-display text-sm font-medium uppercase tracking-wider text-white">
                {column.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#home"
                      className="text-sm text-white/60 transition-colors hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h3 className="font-display text-sm font-medium uppercase tracking-wider text-white">
              Newsletter
            </h3>
            <p className="mt-5 text-sm text-white/60">
              You can trust us — we only send promo offers.
            </p>
            {status === 'success' ? (
              <p role="status" className="mt-4 flex items-center gap-2 text-sm text-ember-400">
                <Mail className="h-4 w-4" aria-hidden="true" />
                Thanks for subscribing!
              </p>
            ) : (
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
                  className="w-full border border-white/20 bg-transparent px-3 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-magenta-500 focus:outline-none"
                />
                <button
                  type="submit"
                  className="mt-3 w-full bg-gradient-to-l from-ember-500 via-magenta-500 to-ember-500 px-4 py-2.5 text-xs font-medium tracking-widest text-white uppercase transition-opacity hover:opacity-90"
                >
                  subscribe
                </button>
                {status === 'error' && (
                  <p role="alert" className="mt-2 text-xs text-ember-400">
                    Please enter a valid email address.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} Arena. All rights reserved | This template is made with
            React &amp; Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  )
}
