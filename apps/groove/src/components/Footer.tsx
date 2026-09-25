import { useState } from 'react'
import type { FormEvent } from 'react'
import { MapPin, Phone, Send } from 'lucide-react'

function FacebookIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function TwitterIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function YoutubeIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  )
}

export function Footer() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <footer id="contact" className="bg-deep">
      {/* Contact form + image */}
      <div className="mx-auto grid max-w-6xl gap-0 lg:grid-cols-5">
        <div className="px-6 py-14 sm:px-12 lg:col-span-3">
          <span className="font-script text-xl text-accent-400">Contact us</span>
          <h2 className="mt-2 text-3xl font-bold text-white">Got a Question?</h2>
          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <label htmlFor="footer-name" className="sr-only">
                Name
              </label>
              <input
                id="footer-name"
                type="text"
                required
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="rounded-md border border-white/10 bg-surface px-4 py-3 text-sm text-white placeholder:text-muted focus:border-accent-400 focus:outline-none focus:ring-2 focus:ring-accent-400/30"
              />
              <label htmlFor="footer-email" className="sr-only">
                Email
              </label>
              <input
                id="footer-email"
                type="email"
                required
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-md border border-white/10 bg-surface px-4 py-3 text-sm text-white placeholder:text-muted focus:border-accent-400 focus:outline-none focus:ring-2 focus:ring-accent-400/30"
              />
            </div>
            <label htmlFor="footer-message" className="sr-only">
              Message
            </label>
            <textarea
              id="footer-message"
              required
              rows={4}
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full rounded-md border border-white/10 bg-surface px-4 py-3 text-sm text-white placeholder:text-muted focus:border-accent-400 focus:outline-none focus:ring-2 focus:ring-accent-400/30"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-primary-400 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-accent-400"
            >
              <Send className="h-4 w-4" aria-hidden="true" />
              Send Email
            </button>
          </form>
        </div>
        <div className="hidden lg:block lg:col-span-2">
          <img
            src="https://picsum.photos/seed/groove-footer/600/500"
            alt="Concert venue atmosphere"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>

      {/* Info row */}
      <div className="border-t border-white/10">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
          <div className="flex items-start gap-3">
            <MapPin className="mt-1 h-5 w-5 shrink-0 text-accent-400" aria-hidden="true" />
            <p className="text-sm leading-relaxed text-white/70">
              333 Middle Winchendon Rd,
              <br />
              Rindge, NH 03461
            </p>
          </div>
          <div className="flex items-start gap-3">
            <Phone className="mt-1 h-5 w-5 shrink-0 text-accent-400" aria-hidden="true" />
            <div className="text-sm text-white/70">
              <a href="tel:+125711811" className="transition-colors hover:text-accent-400">
                125-711-811
              </a>
              {' | '}
              <a href="tel:+125668886" className="transition-colors hover:text-accent-400">
                125-668-886
              </a>
              <br />
              <a
                href="mailto:support@groove.music"
                className="transition-colors hover:text-accent-400"
              >
                support@groove.music
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="#"
              aria-label="Facebook"
              className="text-white/60 transition-colors hover:text-accent-400"
            >
              <FacebookIcon />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-white/60 transition-colors hover:text-accent-400"
            >
              <TwitterIcon />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="text-white/60 transition-colors hover:text-accent-400"
            >
              <YoutubeIcon />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-white/60 transition-colors hover:text-accent-400"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright + Component Dock */}
      <div className="border-t border-white/10 py-6 text-center text-sm text-muted">
        <p>
          &copy; {new Date().getFullYear()} Groove. All rights reserved. More templates at{' '}
          <a
            href="https://www.componentdock.com/"
            className="text-accent-400 transition-colors hover:text-accent-300"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
