import { Phone, MapPin, Mail, Send } from 'lucide-react'
import { useState, type FormEvent } from 'react'

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '(123) 118 9999' },
  { icon: MapPin, label: 'Address', value: '72 Kangnam, 45 Opal Point Suite 391' },
  { icon: Mail, label: 'Email', value: 'contact@gymcore.com' },
]

const brandPaths = {
  facebook:
    'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
  x: 'M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z',
  instagram:
    'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z',
} as const

function BrandIcon({
  name,
  className = 'h-5 w-5',
}: {
  name: keyof typeof brandPaths
  className?: string
}) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d={brandPaths[name]} />
    </svg>
  )
}

export function Footer() {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault()
  }

  return (
    <footer className="bg-slate pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4">
        {/* Contact row */}
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {contactInfo.map((c) => (
            <div key={c.label} className="text-center">
              <c.icon className="mx-auto mb-2 h-6 w-6 text-brand" />
              <h5 className="mb-1 text-sm font-semibold text-white">{c.label}</h5>
              <p className="text-sm text-gray-400">{c.value}</p>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div
          className="mb-10 overflow-hidden rounded-lg p-8"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://picsum.photos/seed/gymcore-newsletter/1200/300)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <h4 className="mb-1 text-lg font-semibold text-white">
                Subscribe To Our Mailing List
              </h4>
              <p className="text-sm text-gray-300">
                Sign up to receive the latest information and offers.
              </p>
            </div>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-full bg-white/10 px-5 py-2 text-sm text-white placeholder-gray-400 backdrop-blur-sm focus:outline-none focus:ring-1 focus:ring-brand"
              />
              <button
                type="submit"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-white transition-colors hover:bg-brand-dark"
                aria-label="Subscribe"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 md:flex-row">
          <div className="flex gap-4 text-sm text-gray-400">
            <a href="#" className="transition-colors hover:text-white">
              Terms &amp; Use
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Privacy Policy
            </a>
          </div>
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} All rights reserved. Made with{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand transition-colors hover:text-brand-dark"
            >
              Component Dock
            </a>
          </p>
          <div className="flex gap-3">
            <a
              href="#"
              aria-label="Facebook"
              className="text-gray-400 transition-colors hover:text-white"
            >
              <BrandIcon name="facebook" />
            </a>
            <a href="#" aria-label="X" className="text-gray-400 transition-colors hover:text-white">
              <BrandIcon name="x" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-gray-400 transition-colors hover:text-white"
            >
              <BrandIcon name="instagram" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
