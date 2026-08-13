import { useState, type ChangeEvent, type FormEvent } from 'react'
import { Send } from 'lucide-react'
import { z } from 'zod'
import { brand, footer } from '../data'
import { socialLinks } from './social-icons'

const newsletterSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
})

/** Light footer: about + contact column, Navigation and Services link
 *  columns, a newsletter form with a brand-red bordered input, and a bottom
 *  bar with the copyright line, social icons and the Component Dock credit. */
export function Footer() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
    if (error) setError('')
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const result = newsletterSchema.safeParse({ email })
    if (!result.success) {
      setError(result.error.issues[0]!.message)
      return
    }
    setSubscribed(true)
  }

  return (
    <footer id="contact" className="bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <a href="#home" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand font-semibold text-white">
              {brand.name.charAt(0)}
            </span>
            <span className="text-xl font-semibold text-ink">{brand.name}</span>
          </a>
          <p className="mt-5 leading-relaxed text-body">{footer.blurb}</p>
          <ul className="mt-6 space-y-3 text-body">
            <li>{footer.phone}</li>
            <li>{footer.email}</li>
          </ul>
        </div>

        <nav aria-label="Footer navigation">
          <h4 className="mb-10 text-xl font-semibold text-ink">Navigation</h4>
          <ul className="space-y-4 text-body">
            {footer.navigation.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition-colors hover:text-brand">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Footer services">
          <h4 className="mb-10 text-xl font-semibold text-ink">Services</h4>
          <ul className="space-y-4 text-body">
            {footer.servicesLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition-colors hover:text-brand">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h4 className="mb-10 text-xl font-semibold text-ink">{footer.newsletter.heading}</h4>
          {subscribed ? (
            <p role="status" className="text-body">
              Thanks for subscribing — we will be in touch.
            </p>
          ) : (
            <>
              <form onSubmit={handleSubmit} noValidate>
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <div className="flex">
                  <input
                    id="newsletter-email"
                    type="email"
                    value={email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="h-[43px] w-full border border-brand bg-white px-4 text-sm text-ink outline-none placeholder:text-gray-400"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="flex h-[43px] w-[52px] shrink-0 items-center justify-center bg-brand text-white transition-colors hover:bg-[#c41212]"
                  >
                    <Send className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </form>
              {error && (
                <p role="alert" className="mt-3 text-sm text-brand">
                  {error}
                </p>
              )}
              <p className="mt-4 text-body">{footer.newsletter.prompt}</p>
            </>
          )}
        </div>
      </div>

      <div className="border-t border-gray-200">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 text-sm text-body sm:flex-row">
          <p>
            © {new Date().getFullYear()} {brand.name}. More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              className="font-medium text-ink underline transition-colors hover:text-brand"
            >
              Component Dock
            </a>
            .
          </p>
          <ul className="flex items-center gap-4">
            {socialLinks.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  className="text-body transition-colors hover:text-brand"
                >
                  <Icon className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
