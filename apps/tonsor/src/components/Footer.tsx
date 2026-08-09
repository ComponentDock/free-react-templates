import { useState, type FormEvent } from 'react'
import { BehanceIcon, DribbbleIcon, FacebookIcon, TwitterIcon } from './social-icons'

const socials = [
  { label: 'Facebook', Icon: FacebookIcon },
  { label: 'Twitter', Icon: TwitterIcon },
  { label: 'Dribbble', Icon: DribbbleIcon },
  { label: 'Behance', Icon: BehanceIcon },
] as const

export function Footer() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!email) {
      setMessage('Please enter your email address')
      return
    }
    setMessage('Thanks for subscribing!')
    setEmail('')
  }

  return (
    <footer id="contact" className="bg-night text-white">
      <div className="mx-auto max-w-6xl px-4 pt-16 sm:px-6">
        <div className="grid gap-10 pb-12 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="font-display text-2xl font-bold">
              Tonsor<span className="text-brand">.</span>
            </p>
            <p className="mt-5 text-sm font-light leading-relaxed text-white/60">
              A neighborhood barbershop with old-school craft and modern style. Walk-ins welcome,
              regulars treasured.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Newsletter
            </h2>
            <p className="mt-4 text-sm font-light text-white/60">
              Stay updated with our latest trends
            </p>
            <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Enter email address"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="h-10 min-w-0 flex-1 rounded-full border border-white/20 bg-transparent px-4 text-sm text-white placeholder:text-white/40 focus:border-gold focus:outline-none"
              />
              <button
                type="submit"
                className="h-10 shrink-0 rounded-full bg-gradient-to-r from-brand to-gold px-5 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:from-gold hover:to-brand"
              >
                Subscribe
              </button>
            </form>
            <p aria-live="polite" className="mt-3 text-xs text-gold">
              {message}
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Follow Me
            </h2>
            <p className="mt-4 text-sm font-light text-white/60">Let us be social</p>
            <div className="mt-5 flex items-center gap-3">
              {socials.map(({ label, Icon }) => (
                <a
                  key={label}
                  href="#contact"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-brand hover:text-brand"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 text-center text-xs text-white/40">
          © {new Date().getFullYear()} Tonsor — Free React Template
        </div>
      </div>
    </footer>
  )
}
