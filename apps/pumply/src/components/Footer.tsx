import { useState, type FormEvent } from 'react'

const footerLinks = [
  { label: 'Home', href: '#home-section' },
  { label: 'Meditation', href: '#schedule-section' },
  { label: 'Gym', href: '#classes-section' },
  { label: 'Aerobatics', href: '#services-section' },
] as const

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function Footer() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!emailPattern.test(email)) {
      setError('Enter a valid email address')
      return
    }
    setError('')
    setSubscribed(true)
    setEmail('')
  }

  return (
    <footer className="py-16 lg:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="text-[0.9rem] font-black uppercase tracking-[0.1rem] text-white">
              About Pumply
            </h3>
            <p className="mt-5 text-gray-400">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right
              at the coast of the Semantics.
            </p>
          </div>
          <div className="lg:ml-auto">
            <h3 className="text-[0.9rem] font-black uppercase tracking-[0.1rem] text-white">
              Links
            </h3>
            <ul className="mt-5 space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-[0.9rem] font-black uppercase tracking-[0.1rem] text-white">
              Subscribe
            </h3>
            <p className="mt-5 text-gray-400">
              Far far away, behind the word mountains, far from the countries.
            </p>
            {subscribed && (
              <p role="status" className="mt-4 text-primary">
                Thanks for subscribing!
              </p>
            )}
            <form onSubmit={handleSubscribe} noValidate className="mt-5 flex">
              <label htmlFor="subscribe-email" className="sr-only">
                Email address
              </label>
              <input
                id="subscribe-email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  if (error) setError('')
                }}
                aria-invalid={Boolean(error)}
                className="w-full min-w-0 flex-1 rounded-none border border-white/20 bg-white px-4 py-3 text-black placeholder:text-gray-500 focus:border-primary focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-none bg-primary px-5 py-3 font-bold text-btn-text transition-colors hover:bg-primary-hover hover:text-white"
              >
                Subscribe
              </button>
            </form>
            {error && <p className="mt-2 text-sm text-red-400">{error}</p>}
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-white/60">
            Copyright © {new Date().getFullYear()} All rights reserved | More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              className="font-semibold text-primary transition-colors hover:text-primary-hover"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
