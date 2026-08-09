import { useState, type FormEvent } from 'react'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { BrandIcon, type BrandName } from './BrandIcon'

const socials: ReadonlyArray<{ label: string; name: BrandName }> = [
  { label: 'GitHub', name: 'github' },
  { label: 'X', name: 'x' },
  { label: 'LinkedIn', name: 'linkedin' },
]

const company = ['About Us', 'Departments', 'Find a Doctor', 'FAQ', 'News'] as const
const quickLinks = [
  'Facial Fillers',
  'Breast Surgery',
  'Body Lifts',
  'Face & Neck',
  'Fat Reduction',
] as const

export function Footer() {
  const [subscribed, setSubscribed] = useState(false)

  function handleSubscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubscribed(true)
  }

  return (
    <footer id="contact" className="bg-ink text-white transition-colors dark:bg-ink-dark">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <a
              href="#home"
              className="text-2xl font-bold leading-none tracking-tight hover:text-brand"
            >
              Vitalis<span className="text-brand">.</span>
            </a>
            <h3 className="mt-6 text-lg font-semibold text-brand">Subscribe</h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              Subscribe to our newsletter and get the latest skin care tips straight to your inbox.
            </p>
            {subscribed ? (
              <p role="status" className="mt-4 rounded bg-brand/10 px-4 py-3 text-sm text-brand">
                Thank you for subscribing!
              </p>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className="mt-4 flex overflow-hidden rounded border border-gray-600"
              >
                <label htmlFor="subscribe-email" className="sr-only">
                  Email
                </label>
                <input
                  id="subscribe-email"
                  type="email"
                  required
                  placeholder="Email"
                  className="w-full bg-transparent px-4 py-3 text-sm text-white placeholder-gray-500 outline-none"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="flex items-center bg-brand px-4 text-white transition-colors hover:bg-brand-dark"
                >
                  <Send className="h-4 w-4" aria-hidden="true" />
                </button>
              </form>
            )}
          </div>

          <div>
            <h3 className="text-lg font-semibold text-brand">Company</h3>
            <ul className="mt-5 space-y-3 text-sm text-gray-400">
              {company.map((item) => (
                <li key={item}>
                  <a href="#home" className="transition-colors hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-brand">Quick links</h3>
            <ul className="mt-5 space-y-3 text-sm text-gray-400">
              {quickLinks.map((item) => (
                <li key={item}>
                  <a href="#services" className="transition-colors hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-brand">Contact Us</h3>
            <ul className="mt-5 space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                <span>Los Angeles Gournadi, 1230 Bariasl</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                1-677-124-44227
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                Support@gmail.com
              </li>
            </ul>
            <div className="mt-6 flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href="#home"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-600 text-gray-400 transition-colors hover:border-brand hover:bg-brand hover:text-white"
                >
                  <BrandIcon name={social.name} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 py-5 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Vitalis Clinic. All rights reserved.
      </div>
    </footer>
  )
}
