import { useState, type FormEvent } from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'
import { footer } from '../data'
import { BrandIcon } from './BrandIcon'

/** Dark navy footer (reference `.footer-area`): about + socials, newsletter
 *  widget with a pink subscribe button, Instagram thumbnail grid, and a
 *  copyright bar crediting Component Dock. */
export function Footer() {
  const [email, setEmail] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setEmail('')
  }

  return (
    <footer>
      <div className="bg-navy">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-24 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
          <div>
            <a href="#home" className="flex items-center gap-1 text-white">
              <Sparkles className="h-7 w-7 text-primary-600" aria-hidden="true" />
              <span className="font-heading text-2xl font-semibold uppercase tracking-wide">
                Maven
              </span>
            </a>
            <p className="mt-6 text-sm leading-relaxed text-dark-muted">{footer.about}</p>
            <div className="mt-8 flex gap-6">
              {footer.socials.map((social) => (
                <a
                  key={social}
                  href="#home"
                  aria-label={social}
                  className="text-[#cccccc] transition-colors hover:text-primary-600"
                >
                  <BrandIcon name={social} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-heading text-2xl font-bold text-white">
              {footer.newsletter.title}
            </h3>
            <p className="mt-6 text-sm leading-relaxed text-dark-muted">{footer.newsletter.text}</p>
            <form onSubmit={handleSubmit} className="mt-6 flex border border-team-border p-[5px]">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder={footer.newsletter.placeholder}
                className="h-10 w-full bg-transparent pl-5 pr-2 text-sm text-gray-200 placeholder:text-[#999999] focus:outline-none"
              />
              <button
                type="submit"
                aria-label={footer.newsletter.button}
                className="flex h-10 w-[49px] shrink-0 items-center justify-center bg-primary-600 text-white transition-colors hover:bg-primary-700"
              >
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </form>
          </div>

          <div>
            <h3 className="font-heading text-2xl font-bold text-white">{footer.instagram.title}</h3>
            <ul className="mt-6 grid grid-cols-3 gap-2">
              {footer.instagram.images.map((image) => (
                <li key={image}>
                  <img
                    src={image}
                    alt=""
                    width={100}
                    height={100}
                    className="h-[90px] w-full object-cover"
                    loading="lazy"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-[#101f33]">
        <div className="mx-auto max-w-7xl px-4 py-8 text-center lg:px-8">
          <p className="text-sm text-dark-muted">
            Copyright © 2026 All rights reserved ·{' '}
            <a
              href="https://www.componentdock.com/"
              className="font-semibold text-white transition-colors hover:text-primary-600"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
