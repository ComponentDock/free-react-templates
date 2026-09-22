import { useState, type FormEvent } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const socialLinks: ReadonlyArray<{ label: string; href: string }> = [
  { label: 'Facebook', href: 'https://facebook.com' },
  { label: 'Twitter', href: 'https://twitter.com' },
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'YouTube', href: 'https://youtube.com' },
]

function SocialIcon({ name }: { name: string }) {
  if (name === 'Facebook') {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
        <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.23.2 2.23.2v2.47H15.2c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.45 2.91h-2.33V22c4.78-.76 8.43-4.92 8.43-9.94z" />
      </svg>
    )
  }
  if (name === 'Twitter') {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
        <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.58-.7-.02-1.36-.21-1.94-.53v.05c0 2.08 1.48 3.82 3.44 4.21-.36.1-.74.15-1.13.15-.27 0-.54-.03-.8-.08.54 1.69 2.12 2.93 3.99 2.97-1.46 1.15-3.31 1.83-5.31 1.83-.34 0-.69-.02-1.02-.06 1.9 1.22 4.16 1.93 6.58 1.93 7.89 0 12.21-6.54 12.21-12.21 0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
      </svg>
    )
  }
  if (name === 'Instagram') {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
}

export function Footer() {
  const [email, setEmail] = useState('')

  function handleSubscribe(e: FormEvent) {
    e.preventDefault()
    setEmail('')
  }

  return (
    <footer
      id="contact"
      className="relative bg-cover bg-center"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/stallion-footer/1600/700)' }}
    >
      <div className="absolute inset-0 bg-black/75" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 text-white md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-bold">About Us</h3>
            <p className="mt-4 leading-relaxed text-[#b5babc]">
              Stallion is a premium fitness center dedicated to helping you achieve your health and
              wellness goals with expert guidance and state-of-the-art facilities.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold">Contact Us</h3>
            <p className="mt-4 flex items-start gap-2 leading-relaxed text-[#b5babc]">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
              1525 Fitness Lane, Los Angeles, CA 90001
            </p>
            <p className="mt-2 flex items-start gap-2 leading-relaxed text-[#b5babc]">
              <Phone className="mt-1 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
              +1 (603) 535-4592
            </p>
            <p className="mt-2 flex items-start gap-2 leading-relaxed text-[#b5babc]">
              <Phone className="mt-1 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
              +1 (603) 535-4556
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold">Newsletter</h3>
            <p className="mt-4 leading-relaxed text-[#b5babc]">
              You can trust us. We only send offers, not a single spam.
            </p>
            <form onSubmit={handleSubscribe} className="mt-4 flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 rounded-l bg-white/10 px-4 py-2 text-sm text-white placeholder-gray-400 focus:outline-none"
                aria-label="Email for newsletter"
                required
              />
              <button
                type="submit"
                className="rounded-r bg-brand px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
              >
                Subscribe
              </button>
            </form>
          </div>
          <div>
            <h3 className="text-lg font-bold">E-mail</h3>
            <p className="mt-4 flex items-start gap-2 leading-relaxed text-[#b5babc]">
              <Mail className="mt-1 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
              info@stallion.com
            </p>
            <div className="mt-4 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center text-[#d1d1d1] transition-colors hover:text-brand"
                >
                  <SocialIcon name={social.label} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/15">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-8 text-center text-sm text-[#b5babc] sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Stallion. All rights reserved.</p>
          <p>
            More templates at{' '}
            <ButtonLink
              href="https://www.componentdock.com/"
              className="border-0 px-0 text-sm font-bold text-brand hover:bg-transparent hover:text-primary-400"
            >
              Component Dock
            </ButtonLink>
          </p>
        </div>
      </div>
    </footer>
  )
}
