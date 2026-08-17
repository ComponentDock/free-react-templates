import { useState } from 'react'
import type { FormEvent } from 'react'
import { ArrowRight } from 'lucide-react'
import { BRAND, FOOTER, SOCIALS } from '../data'
import { SOCIAL_ICONS } from './icons'

const currentYear = new Date().getFullYear()

/* Footer — white four-column footer with brand/socials, Navigation,
   Services, a newsletter form, and the Component Dock attribution. */
export function Footer() {
  const [email, setEmail] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setEmail('')
  }

  return (
    <footer id="contact" className="bg-paper px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#home" className="font-display text-3xl font-semibold text-ink">
              {BRAND}
            </a>
            <p className="mt-5 text-base leading-relaxed text-foottext">{FOOTER.about}</p>
            <ul role="list" className="mt-6 flex gap-3">
              {SOCIALS.map((key) => {
                const Icon = SOCIAL_ICONS[key]
                return (
                  <li key={key}>
                    <a
                      href="#home"
                      aria-label={key}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-soft text-foottext transition-colors hover:bg-brand hover:text-white"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xl font-semibold text-ink">Navigation</h4>
            <ul role="list" className="mt-5 space-y-2.5">
              {FOOTER.navigation.map((item) => (
                <li key={item}>
                  <a href="#home" className="text-foottext transition-colors hover:text-brand">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xl font-semibold text-ink">Services</h4>
            <ul role="list" className="mt-5 space-y-2.5">
              {FOOTER.services.map((item) => (
                <li key={item}>
                  <a href="#services" className="text-foottext transition-colors hover:text-brand">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xl font-semibold text-ink">Subscribe newsletter</h4>
            <form onSubmit={handleSubmit} className="mt-5" aria-label="Newsletter form">
              <div className="flex max-w-xs items-center overflow-hidden rounded-[30px] border border-brand bg-white pr-2">
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="h-14 w-full bg-transparent px-5 text-base text-foottext outline-none placeholder:text-subtext"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand text-white transition-colors hover:brightness-110"
                >
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-black/10 pt-8 text-center">
          <p className="text-sm text-foottext">
            Copyright © {currentYear} All rights reserved | This template is made with love by{' '}
            <a
              href="https://www.componentdock.com/"
              className="font-semibold text-brand hover:underline"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
