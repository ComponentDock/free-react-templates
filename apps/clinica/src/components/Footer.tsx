import { useState, type FormEvent } from 'react'
import { Heart, Plus } from 'lucide-react'
import { brand, footer } from '../data'
import { validateNewsletter } from '../lib/newsletter'
import { footerSocial } from './social-icons'

/** Dark navy footer: logo, "About Us" paragraphs, phone + email column
 *  with a validating newsletter form, and a bottom strip with a
 *  re-branded copyright line (linking Component Dock) and social icons. */
export function Footer() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [subscribed, setSubscribed] = useState(false)
  const year = new Date().getFullYear()

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextError = validateNewsletter(email)
    setError(nextError)
    setSubscribed(nextError === null)
  }

  return (
    <footer className="relative overflow-hidden bg-[#11141b]">
      <img
        src="https://picsum.photos/seed/clinica-footer-bg/1600/800"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-10"
      />
      <div className="relative z-10 mx-auto max-w-[1320px] px-4 lg:px-8">
        <div className="flex flex-col gap-10 border-b border-[#233148] py-16 md:py-24 lg:grid lg:grid-cols-4">
          <div>
            <a href="#home-section" className="flex items-center gap-2">
              <Plus className="h-7 w-7 text-brand" strokeWidth={3} aria-hidden="true" />
              <span className="font-sans text-2xl font-bold text-white">{brand.name}.</span>
            </a>
          </div>

          <div>
            <h4 className="mb-8 text-[18px] font-medium uppercase text-white">About Us</h4>
            {footer.aboutParagraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 24)}
                className="mb-4 text-[16px] leading-[1.8] text-[#bdbdbd]"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="lg:col-span-2">
            <h4 className="mb-8 text-[30px] font-medium text-[#3957ff]">
              {footer.phone.split(' ')[0]}{' '}
              <span className="text-white">{footer.phone.split(' ').slice(1).join(' ')}</span>
            </h4>
            <p className="mb-10 text-[16px] text-[#bdbdbd]">{footer.email}</p>

            <form onSubmit={handleSubmit} noValidate className="flex max-w-md">
              <label htmlFor="newsletter-email" className="sr-only">
                Newsletter email
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder={footer.placeholder}
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                aria-invalid={error !== null}
                className="h-[43px] w-full bg-[#1c242f] px-5 text-white placeholder:text-[#9fa6bd] focus:outline-none"
              />
              <button
                type="submit"
                className="bg-[#0a0f17] px-[22px] py-[15px] text-[16px] font-semibold text-[#3957ff]"
              >
                Send
              </button>
            </form>
            {error && (
              <p role="alert" className="mt-3 text-sm text-red-400">
                {error}
              </p>
            )}
            {subscribed && (
              <p role="status" className="mt-3 text-sm text-[#3957ff]">
                Thanks — you are subscribed!
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 py-[30px] md:flex-row">
          <p className="text-[16px] font-light text-[#bdbdbd]">
            Copyright © {year} All rights reserved | This template is made with{' '}
            <Heart className="inline h-4 w-4 fill-[#3957ff] text-[#3957ff]" aria-hidden="true" /> by{' '}
            <a
              href="https://www.componentdock.com/"
              className="font-normal text-[#3957ff] hover:underline"
            >
              Component Dock
            </a>
          </p>
          <ul className="flex items-center">
            {footerSocial.map(({ label, href, Icon }) => (
              <li key={label} className="pl-[25px]">
                <a
                  href={href}
                  aria-label={label}
                  className="text-white transition-colors hover:text-brand"
                >
                  <Icon className="h-[14px] w-[14px]" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
