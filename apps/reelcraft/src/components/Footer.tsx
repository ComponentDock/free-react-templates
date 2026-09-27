import { useState, type FormEvent } from 'react'
import { Heart } from 'lucide-react'
import { BrandIcon, type BrandName } from './BrandIcon'

const EMAIL_PATTERN = /^\S+@\S+\.\S+$/

const socials: ReadonlyArray<{ label: string; name: BrandName }> = [
  { label: 'Facebook', name: 'facebook' },
  { label: 'Twitter', name: 'twitter' },
  { label: 'Dribbble', name: 'dribbble' },
  { label: 'Instagram', name: 'instagram' },
  { label: 'YouTube', name: 'youtube' },
]

const whoWeAre = ['Team', 'Careers', 'Contact us', 'Locations'] as const
const ourWork = ['Feature', 'Latest', 'Browse Archive', 'Video for web'] as const

export function Footer() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!EMAIL_PATTERN.test(email.trim())) {
      setError('A valid email address is required.')
      return
    }
    setError('')
    setSubscribed(true)
  }

  return (
    <footer className="bg-surface-dark text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Logo + social */}
          <div className="md:col-span-3">
            <a href="#home" className="font-display text-xl font-bold uppercase tracking-widest">
              Reel<span className="text-brand">Craft</span>
            </a>
            <div className="mt-6 flex flex-wrap gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href="#footer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded border border-white/20 text-white/50 transition-colors hover:border-brand hover:text-brand"
                >
                  <BrandIcon name={social.name} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* About us */}
          <div className="md:col-span-3">
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-brand">
              About us
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-white/50">
              We are a creative video production studio passionate about visual storytelling. Our
              team delivers high-quality content that inspires.
            </p>
            <a
              href="#about"
              className="mt-4 inline-flex text-sm font-semibold text-brand transition-colors hover:text-brand-dark"
            >
              Read more
            </a>
          </div>

          {/* Who we are */}
          <div className="md:col-span-3">
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-brand">
              Who we are
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/50">
              {whoWeAre.map((item) => (
                <li key={item}>
                  <a href="#team" className="transition-colors hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our work + Newsletter */}
          <div className="md:col-span-3">
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-brand">
              Our work
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/50">
              {ourWork.map((item) => (
                <li key={item}>
                  <a href="#portfolio" className="transition-colors hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            <h3 className="mt-6 font-display text-sm font-bold uppercase tracking-wider text-brand">
              Newsletter
            </h3>
            <p className="mt-2 text-sm text-white/50">Get latest updates</p>
            {subscribed ? (
              <p className="mt-3 rounded border border-brand/40 bg-brand/10 px-3 py-2 text-xs text-brand">
                Thanks for subscribing!
              </p>
            ) : (
              <form onSubmit={handleSubscribe} noValidate className="mt-3">
                <label htmlFor="footer-email" className="sr-only">
                  Email address
                </label>
                <div className="flex gap-2">
                  <input
                    id="footer-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email address"
                    aria-invalid={Boolean(error)}
                    className="w-full rounded border border-white/20 bg-white/5 px-3 py-2 text-xs text-white placeholder:text-white/30 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                  />
                  <button
                    type="submit"
                    className="shrink-0 rounded bg-brand px-4 py-2 text-xs font-bold uppercase text-white transition-colors hover:bg-brand-dark"
                  >
                    Send
                  </button>
                </div>
                {error ? (
                  <p role="alert" className="mt-2 text-xs text-red-400">
                    {error}
                  </p>
                ) : null}
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/40">
        © {new Date().getFullYear()} All rights reserved. Made with{' '}
        <Heart className="inline h-3 w-3 text-brand" aria-hidden="true" /> by{' '}
        <a
          href="https://www.componentdock.com/"
          className="font-semibold text-brand transition-colors hover:text-brand-dark"
        >
          Component Dock
        </a>
      </div>
    </footer>
  )
}
