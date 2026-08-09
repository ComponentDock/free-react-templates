import { useState, type FormEvent } from 'react'
import { Send, Scissors } from 'lucide-react'
import { BrandIcon, type BrandName } from './BrandIcon'

const socials: ReadonlyArray<{ label: string; name: BrandName }> = [
  { label: 'X', name: 'x' },
  { label: 'Facebook', name: 'facebook' },
  { label: 'Instagram', name: 'instagram' },
]

export function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
      setEmail('')
    }
  }

  return (
    <footer className="bg-ink py-16 text-white dark:bg-gray-950 lg:py-[100px]">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-3">
        <div>
          <a href="#home" className="flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-brand to-brand-dark text-white">
              <Scissors className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="font-display text-xl font-black uppercase tracking-tight">
              Crewcut<span className="text-white/70">.</span>
            </span>
          </a>
          <h3 className="font-display text-lg font-bold uppercase tracking-wide">About Us</h3>
          <p className="mt-5 text-sm leading-relaxed text-white/70">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div>
          <h3 className="font-display text-lg font-bold uppercase tracking-wide">Newsletter</h3>
          <p className="mt-4 text-sm text-white/70">Stay update with our latest</p>
          <form onSubmit={handleSubscribe} className="mt-4 flex gap-2">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter Email"
              className="w-full rounded-lg border border-white/20 bg-transparent px-3 py-2.5 text-sm text-white outline-none transition-colors placeholder:text-white/40 focus:border-brand focus:ring-2 focus:ring-brand/40"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brand to-brand-dark text-white transition-opacity hover:opacity-90"
            >
              <Send className="h-4 w-4" aria-hidden="true" />
            </button>
          </form>
          {subscribed && (
            <p className="mt-3 text-sm font-semibold text-green-400">Thanks for subscribing!</p>
          )}
        </div>

        <div>
          <h3 className="font-display text-lg font-bold uppercase tracking-wide">Follow Us</h3>
          <p className="mt-4 text-sm text-white/70">Let us be social</p>
          <div className="mt-5 flex items-center gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href="#home"
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white/75 transition-colors hover:border-transparent hover:bg-gradient-to-br hover:from-brand hover:to-brand-dark hover:text-white"
              >
                <BrandIcon name={social.name} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-14 border-t border-white/10 py-6 text-center text-sm text-white/60">
        Copyright © {new Date().getFullYear()} All rights reserved | This template is made with ♥ by
        Component Dock
      </div>
    </footer>
  )
}
