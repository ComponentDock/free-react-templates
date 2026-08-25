import { useState, type FormEvent } from 'react'

const navLinks = [
  { label: 'Home', href: '#home-section' },
  { label: 'About Us', href: '#about-section' },
  { label: 'Privacy', href: '#home-section' },
  { label: 'Terms', href: '#home-section' },
  { label: 'Contact', href: '#contact-section' },
] as const

const EMAIL_PATTERN = /^\S+@\S+\.\S+$/

export function Footer() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault()
    if (!EMAIL_PATTERN.test(email.trim())) {
      setError('A valid email address is required.')
      return
    }
    setError('')
    setSubscribed(true)
  }

  return (
    <footer className="pt-[17rem]" style={{ backgroundColor: '#333333' }}>
      <div className="mx-auto max-w-7xl px-6 pb-8">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h2 className="mb-4 text-2xl font-bold text-white">
              Websmith<span className="text-brand">.</span>
            </h2>
            <p className="leading-relaxed text-muted-dark">
              We are a creative digital agency dedicated to building exceptional web experiences
              that drive business growth and inspire audiences.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-6 text-lg font-bold uppercase tracking-wide text-white">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="mb-6 text-lg font-bold uppercase tracking-wide text-white">
              Subscribe Newsletter
            </h3>
            {subscribed ? (
              <p className="text-sm text-brand">Thanks for subscribing!</p>
            ) : (
              <form onSubmit={handleSubscribe} noValidate>
                <div className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email"
                    className="flex-1 rounded-lg border border-white bg-transparent px-4 py-3 text-sm text-white placeholder:text-muted focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                  />
                  <button
                    type="submit"
                    className="shrink-0 rounded-[30px] border-2 border-brand bg-brand px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-all hover:border-black hover:bg-black"
                  >
                    Subscribe
                  </button>
                </div>
                {error && (
                  <p role="alert" className="mt-2 text-sm text-red-400">
                    {error}
                  </p>
                )}
              </form>
            )}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-gray-600 pt-8 text-center text-sm text-muted-dark">
          © {new Date().getFullYear()} Websmith. Powered by{' '}
          <a
            href="https://www.componentdock.com/"
            className="text-muted transition-colors hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            Component Dock
          </a>
        </div>
      </div>
    </footer>
  )
}
