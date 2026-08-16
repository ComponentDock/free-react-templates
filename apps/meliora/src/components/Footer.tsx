import { useState, type FormEvent } from 'react'
import { Heart } from 'lucide-react'
import { footerNav, footerServices } from '../data'
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from './social-icons'

const socialLinks = [
  { label: 'Facebook', Icon: FacebookIcon },
  { label: 'Twitter', Icon: TwitterIcon },
  { label: 'LinkedIn', Icon: LinkedinIcon },
  { label: 'Instagram', Icon: InstagramIcon },
]

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function Footer() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'error' | 'success'>('idle')

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus(EMAIL_RE.test(email) ? 'success' : 'error')
  }

  return (
    <footer className="bg-plum text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <a href="#home" className="flex items-center gap-2">
            <Heart aria-label="Meliora logo" className="h-7 w-7 fill-primary text-primary" />
            <span className="font-serif text-2xl font-bold text-white">Meliora</span>
          </a>
          <p className="mt-5 max-w-xs text-sm font-light leading-relaxed text-white/70">
            A nonprofit organization delivering food, medicine, education and shelter to communities
            that need it most.
          </p>
          <div aria-label="Footer social links" className="mt-6 flex gap-3">
            {socialLinks.map(({ label, Icon }) => (
              <a
                key={label}
                href="#contact"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-colors hover:border-primary hover:bg-primary"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <nav aria-label="Footer navigation">
          <h4 className="font-serif text-lg font-semibold text-white">Navigation</h4>
          <ul className="mt-6 space-y-3">
            {footerNav.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm font-light text-white/70 transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h4 className="font-serif text-lg font-semibold text-white">Services</h4>
          <ul className="mt-6 space-y-3">
            {footerServices.map((item) => (
              <li key={item}>
                <a
                  href="#services"
                  className="text-sm font-light text-white/70 transition-colors hover:text-primary"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-serif text-lg font-semibold text-white">Subscribe newsletter</h4>
          <p className="mt-6 text-sm font-light text-white/70">
            Get stories of impact and ways to help, straight to your inbox.
          </p>
          <form onSubmit={handleSubmit} noValidate className="mt-6">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-full rounded-full border border-white/20 bg-transparent px-5 py-3 text-sm text-white placeholder:text-white/40 focus:border-primary focus:outline-none"
            />
            <button
              type="submit"
              className="mt-4 w-full rounded-full bg-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-700"
            >
              Subscribe
            </button>
            {status === 'success' && (
              <p role="status" className="mt-4 text-sm text-white/90">
                Thank you — you have been subscribed to our newsletter.
              </p>
            )}
            {status === 'error' && (
              <p role="alert" className="mt-4 text-sm text-hero">
                Please enter a valid email address.
              </p>
            )}
          </form>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-sm font-light text-white/60 sm:flex-row sm:px-8">
          <p>© 2026 Meliora. All rights reserved.</p>
          <p>
            More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              className="font-medium text-white transition-colors hover:text-primary"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
