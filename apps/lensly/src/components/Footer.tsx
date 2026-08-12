import { useState, type FormEvent } from 'react'
import { Button } from '@free-react-templates/ui'
import { BRAND, FOOTER_LINKS } from '../data'

/* footer.site-footer (bg #000) — About Me blurb (col-span-3), then a
   nested 2-col block (Quick Links + Newsletter form with amber subscribe
   button), bottom bar with border rgba(255,255,255,.1) + repo-standard
   credit. */
export function Footer() {
  const [email, setEmail] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setEmail('')
  }

  return (
    <footer id="contact" className="bg-black py-16 text-white/70 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <h2 className="font-display text-xl font-bold text-white">{BRAND}</h2>
            <p className="mt-4 text-sm leading-relaxed">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts.
            </p>
          </div>
          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-8 lg:ml-auto">
            <div>
              <h2 className="font-display text-lg font-bold text-white">Quick Links</h2>
              <ul className="mt-4 space-y-2.5 text-sm">
                {FOOTER_LINKS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/50 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-lg font-bold text-white">Newsletter</h2>
              <p className="mt-4 text-sm leading-relaxed">
                Far far away, behind the word mountains, far from the countries Vokalia and
                Consonantia.
              </p>
              <form onSubmit={handleSubmit} className="mt-4 flex max-w-xs gap-2">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Email Address"
                  className="w-full min-w-0 rounded border border-white/20 bg-white/10 px-3 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-brand focus:outline-none"
                />
                <Button
                  type="submit"
                  className="shrink-0 rounded bg-brand px-4 text-sm font-semibold text-ink hover:bg-brand/90"
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm">
        <p>© {new Date().getFullYear()} Lensly. All rights reserved.</p>
      </div>
    </footer>
  )
}
