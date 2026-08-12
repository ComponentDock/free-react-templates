import { useState, type FormEvent } from 'react'
import { Mail, Phone, Send } from 'lucide-react'
import { BrandIcon } from './BrandIcon'
import {
  brandName,
  componentDockUrl,
  footerEmail,
  footerImage,
  footerPhone,
  socialLinks,
} from '../data'

// Footer over a dark background image: address / brand + social / newsletter
// columns and a copyright bar crediting Component Dock.
export function Footer() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <footer
      id="contact"
      className="relative bg-cover bg-center"
      style={{ backgroundImage: `url(${footerImage})` }}
    >
      <div aria-hidden="true" className="absolute inset-0 bg-brand-dark/85" />
      <div className="relative z-10 mx-auto grid max-w-7xl gap-14 px-4 pb-16 pt-[100px] md:grid-cols-3">
        <div>
          <ul className="space-y-[30px]">
            <li className="flex items-start gap-6">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/25 text-white">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm uppercase tracking-widest text-white">Phone</p>
                <h6 className="mt-1 text-lg font-semibold text-white">{footerPhone}</h6>
              </div>
            </li>
            <li className="flex items-start gap-6">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/25 text-white">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm uppercase tracking-widest text-white">Email</p>
                <a
                  href={`mailto:${footerEmail}`}
                  className="mt-1 block text-lg font-semibold text-white hover:text-brand-alt"
                >
                  {footerEmail}
                </a>
              </div>
            </li>
          </ul>
        </div>

        <div className="text-center">
          <h2 className="font-display text-[28px] font-bold uppercase tracking-wide text-white">
            {brandName}
          </h2>
          <div className="mt-8 flex justify-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition hover:border-brand-alt hover:text-brand-alt"
              >
                <BrandIcon
                  name={
                    social.label.toLowerCase() as 'facebook' | 'twitter' | 'instagram' | 'dribbble'
                  }
                />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-[26px] font-bold text-white">Stay With me</h4>
          {submitted ? (
            <p role="status" className="mt-8 text-[15px] text-white/90">
              Thanks for subscribing — see you at the next show!
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-8 flex items-center gap-3 border-b-2 border-white/40 pb-2"
            >
              <input
                type="email"
                required
                aria-label="Email address"
                placeholder="Enter your email"
                className="w-full bg-transparent text-[15px] text-white placeholder:text-white/60 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Send email"
                className="shrink-0 text-white transition hover:text-brand-alt"
              >
                <Send className="h-5 w-5" />
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="relative z-10 border-t border-white/15 py-6">
        <p className="px-4 text-center text-sm text-white/80">
          Copyright © {new Date().getFullYear()} All rights reserved | This template is made with{' '}
          <span aria-hidden="true">♥</span>
          <span className="sr-only">love</span> by{' '}
          <a
            href={componentDockUrl}
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-white underline underline-offset-4 hover:text-brand-alt"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
