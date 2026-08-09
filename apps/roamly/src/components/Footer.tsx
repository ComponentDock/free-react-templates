import { useState, type FormEvent } from 'react'
import { Mail, MapPin, Mountain, Phone } from 'lucide-react'
import { z } from 'zod'

const destinationLinks = ['Bali', 'Greece', 'Japan', 'Peru'] as const
const companyLinks = ['About Us', 'Our Team', 'Careers', 'Contact'] as const

const newsletterSchema = z.object({
  email: z.string().email('Please enter a valid email address.'),
})

export function Footer() {
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState<string | undefined>(undefined)
  const [subscribed, setSubscribed] = useState(false)

  const handleChange = (value: string) => {
    setEmail(value)
    if (emailError) {
      setEmailError(undefined)
    }
  }

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const result = newsletterSchema.safeParse({ email })
    if (!result.success) {
      setEmailError(result.error.flatten().fieldErrors.email?.[0])
      return
    }
    setSubscribed(true)
  }

  return (
    <footer className="bg-gray-900 pt-16 text-gray-300 lg:pt-24 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div>
            <a href="#home" className="flex items-center gap-2.5" aria-label="Roamly home">
              <Mountain className="h-8 w-8 text-primary-400" aria-hidden="true" />
              <span className="text-xl font-bold tracking-tight text-white">Roamly</span>
            </a>
            <p className="mt-4 text-sm leading-relaxed">
              Discover extraordinary destinations and create unforgettable memories with our curated
              travel experiences.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Destinations</h3>
            <ul className="mt-4 space-y-2.5">
              {destinationLinks.map((label) => (
                <li key={label}>
                  <a
                    href="#destinations"
                    className="text-sm transition-colors hover:text-primary-400"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Company</h3>
            <ul className="mt-4 space-y-2.5">
              {companyLinks.map((label) => (
                <li key={label}>
                  <a
                    href={label === 'About Us' ? '#about' : label === 'Contact' ? '#contact' : '#'}
                    className="text-sm transition-colors hover:text-primary-400"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Support</h3>
            <p className="mt-4 text-sm leading-relaxed">
              Our travel experts are always just a call away, wherever you are in the world.
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-primary-400" aria-hidden="true" />
                <a href="tel:+15551234567" className="transition-colors hover:text-primary-400">
                  (555) 123-4567
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-primary-400" aria-hidden="true" />
                <a
                  href="mailto:hello@roamly.example"
                  className="transition-colors hover:text-primary-400"
                >
                  hello@roamly.example
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 shrink-0 text-primary-400" aria-hidden="true" />
                123 Explorer Avenue, Springfield
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Travel Inspiration
            </h3>
            <p className="mt-4 text-sm leading-relaxed">
              Subscribe for exclusive deals, travel tips, and destination guides.
            </p>
            {subscribed ? (
              <p
                role="status"
                className="mt-4 rounded-lg bg-primary-900/40 px-4 py-3 text-sm font-medium text-primary-200"
              >
                Thanks for subscribing! Your first travel guide is on its way.
              </p>
            ) : (
              <form onSubmit={handleSubscribe} noValidate className="mt-4">
                <label htmlFor="roamly-newsletter-email" className="sr-only">
                  Email address
                </label>
                <div className="flex gap-2">
                  <input
                    id="roamly-newsletter-email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(event) => handleChange(event.target.value)}
                    aria-invalid={Boolean(emailError)}
                    aria-describedby={emailError ? 'roamly-newsletter-error' : undefined}
                    className="w-full rounded-lg border border-gray-700 bg-gray-800 px-3 py-2.5 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                  <button
                    type="submit"
                    className="shrink-0 rounded-lg bg-primary-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-700"
                  >
                    Subscribe
                  </button>
                </div>
                {emailError && (
                  <p
                    id="roamly-newsletter-error"
                    className="mt-1.5 text-xs font-medium text-red-400"
                  >
                    {emailError}
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
      <div className="mt-14 border-t border-gray-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs sm:flex-row lg:px-8">
          <p>© 2026 Roamly. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="transition-colors hover:text-primary-400">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-primary-400">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
