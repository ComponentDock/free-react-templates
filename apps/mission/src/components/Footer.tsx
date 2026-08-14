import { type FormEvent, useState } from 'react'
import { footerInfo, socialLabels, socials } from '../data'
import { BrandIcon } from './BrandIcon'

/** Dark-maroon footer: address/social column, Navigation links, Newsletter
 *  form with inline validation, and a copyright bar with the Component
 *  Dock credit. */
export function Footer() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email address.')
      return
    }
    setError('')
    setSubscribed(true)
  }

  return (
    <footer className="bg-maroon text-white">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-6 py-24 lg:grid-cols-[1.2fr_0.8fr_1fr] lg:py-[145px]">
        <div>
          <h2 className="font-serif text-2xl text-white">Address</h2>
          <p className="mt-5 leading-7 text-[#bababa]">
            {footerInfo.address}
            <br />
            {footerInfo.phone}
            <br />
            <a href={`mailto:${footerInfo.email}`} className="text-white hover:text-brand">
              {footerInfo.email}
            </a>
          </p>
          <ul className="mt-6 flex gap-4">
            {socials.map((name) => (
              <li key={name}>
                <a
                  href="#"
                  aria-label={socialLabels[name]}
                  onClick={(event) => event.preventDefault()}
                  className="text-[#bababa] transition-colors hover:text-brand"
                >
                  <BrandIcon name={name} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Footer navigation">
          <h2 className="font-serif text-2xl text-white">Navigation</h2>
          <ul className="mt-5">
            {footerInfo.navigation.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  onClick={(event) => event.preventDefault()}
                  className="inline-block py-[9px] text-base text-[#bababa] transition-colors hover:text-brand"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-serif text-2xl text-white">{footerInfo.newsletterTitle}</h2>
          <p className="mt-5 text-[#bababa]">{footerInfo.newsletterText}</p>
          <form onSubmit={onSubmit} noValidate className="mt-5">
            <label htmlFor="mission-newsletter-email" className="sr-only">
              Email address
            </label>
            <div className="flex">
              <input
                id="mission-newsletter-email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder={footerInfo.newsletterPlaceholder}
                aria-invalid={error ? true : undefined}
                aria-describedby={error ? 'mission-newsletter-error' : undefined}
                className="w-full border border-white/40 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/50 focus:border-brand focus:outline-none"
              />
              <button
                type="submit"
                className="bg-brand px-6 text-sm uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-brand"
              >
                {footerInfo.signUp}
              </button>
            </div>
            {error ? (
              <p id="mission-newsletter-error" role="alert" className="mt-2 text-sm text-red-300">
                {error}
              </p>
            ) : null}
            {subscribed ? (
              <p role="status" className="mt-2 text-sm text-green-300">
                Thanks for subscribing!
              </p>
            ) : null}
          </form>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-[#b2b2b2]">
        Copyright ©{new Date().getFullYear()} All rights reserved · Made with ♥ by{' '}
        <a href="https://www.componentdock.com/" className="text-white hover:text-brand">
          Component Dock
        </a>
      </div>
    </footer>
  )
}
