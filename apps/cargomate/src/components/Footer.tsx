import { useState, type FormEvent } from 'react'
import { ArrowRight, Heart } from 'lucide-react'
import { footer } from '../data'
import { fieldErrors, newsletterSchema } from '../lib/forms'
import { BrandIcon } from './BrandIcon'

/** Footer (reference `.footer-area`): dark navy block with About Us,
 *  Newsletter (validated email + red arrow submit with success state),
 *  Follow Us social icons, and a copyright bar crediting Component Dock. */
export function Footer() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | undefined>(undefined)
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const result = newsletterSchema.safeParse({ email })
    if (!result.success) {
      setError(fieldErrors(result).email)
      setSubscribed(false)
      return
    }
    setError(undefined)
    setSubscribed(true)
    setEmail('')
  }

  return (
    <footer id={footer.id} className="bg-navy pt-[100px] text-white lg:pt-[150px]">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-5">
          <h2 className="font-heading text-lg font-normal text-white uppercase">About Us</h2>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/70">{footer.about}</p>
        </div>

        <div className="lg:col-span-5">
          <h2 className="font-heading text-lg font-normal text-white uppercase">
            {footer.newsletter.heading}
          </h2>
          <p className="mt-6 text-sm text-white/70">{footer.newsletter.line}</p>
          <form onSubmit={handleSubmit} noValidate className="mt-5 flex max-w-md">
            <label htmlFor="newsletter-email" className="sr-only">
              Email Address
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder={footer.newsletter.placeholder}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              aria-invalid={error ? true : undefined}
              className="h-[50px] w-4/5 border border-footline bg-transparent px-[18px] text-[13px] font-light text-white placeholder:text-muted focus:outline-none"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="bg-brand px-5 text-white transition-colors hover:bg-white hover:text-brand"
            >
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </form>
          {error ? (
            <p role="alert" className="mt-3 text-xs text-brand">
              {error}
            </p>
          ) : null}
          {subscribed ? (
            <p role="status" className="mt-3 text-xs text-white">
              Thanks for subscribing!
            </p>
          ) : null}
        </div>

        <div className="lg:col-span-2">
          <h2 className="font-heading text-lg font-normal text-white uppercase">
            {footer.follow.heading}
          </h2>
          <p className="mt-6 text-sm text-white/70">{footer.follow.line}</p>
          <ul className="mt-5 flex items-center gap-6">
            {footer.follow.socials.map((name) => (
              <li key={name}>
                <a
                  href="#contact"
                  aria-label={name}
                  className="text-silver transition-colors hover:text-brand"
                >
                  <BrandIcon name={name} className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-14 border-t border-white/10 px-4 py-8">
        <p className="text-center text-sm text-white/70">
          Copyright &copy; 2026 All rights reserved | Made with{' '}
          <Heart className="inline h-4 w-4 text-brand" aria-hidden="true" /> at{' '}
          <a
            href="https://www.componentdock.com/"
            className="text-brand underline transition-colors hover:text-white"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
