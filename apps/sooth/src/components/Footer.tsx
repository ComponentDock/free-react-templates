import { useState, type FormEvent, type SVGProps } from 'react'
import { Sparkles } from 'lucide-react'

const serviceLinks = ['Facials', 'Massage', 'Body Treatments', 'Hair Salon'] as const
const connectLinks = ['Instagram', 'Facebook', 'Pinterest', 'Newsletter'] as const

/* Brand icons were removed from lucide-react — inline SVGs (currentColor). */
function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function PinterestIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M8 20l4-9" />
      <path d="M10.7 14c.4 1.1 1.6 2 2.8 2 2 0 3.5-1.8 3.5-4.2C17 9.1 15 7 12.2 7 9.5 7 8 9.3 8 11.4c0 1.2.6 2.1 1.4 2.5" />
    </svg>
  )
}

export function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    if (!email.trim()) return
    setSubscribed(true)
  }

  return (
    <footer className="bg-gray-900 pt-16 pb-8 text-gray-300 lg:pt-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <a href="#home" className="flex items-center gap-2" aria-label="Sooth home">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-600 text-white">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
              </span>
              <span className="font-heading text-xl font-bold text-white">Sooth</span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-400">
              A serene sanctuary for body, mind, and spirit — premium spa and beauty treatments
              crafted by dedicated specialists in the heart of Beverly Hills.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="#home"
                aria-label="Sooth on Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 text-gray-300 transition-colors hover:bg-primary-600 hover:text-white"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href="#home"
                aria-label="Sooth on Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 text-gray-300 transition-colors hover:bg-primary-600 hover:text-white"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a
                href="#home"
                aria-label="Sooth on Pinterest"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 text-gray-300 transition-colors hover:bg-primary-600 hover:text-white"
              >
                <PinterestIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          <div className="grid gap-8 sm:grid-cols-3 lg:col-span-5">
            <div>
              <h3 className="text-sm font-semibold tracking-wider text-white uppercase">
                Services
              </h3>
              <ul className="mt-4 space-y-3">
                {serviceLinks.map((link) => (
                  <li key={link}>
                    <a
                      href="#services"
                      className="text-sm text-gray-400 transition-colors hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold tracking-wider text-white uppercase">
                Visit Us
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-400">
                <li>Mon–Fri: 9am–8pm</li>
                <li>Sat–Sun: 10am–6pm</li>
                <li>Beverly Hills, CA 90210</li>
                <li>Free Parking Available</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold tracking-wider text-white uppercase">Connect</h3>
              <ul className="mt-4 space-y-3">
                {connectLinks.map((link) => (
                  <li key={link}>
                    <a
                      href="#home"
                      className="text-sm text-gray-400 transition-colors hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold tracking-wider text-white uppercase">
              Stay Updated
            </h3>
            <p className="mt-4 text-sm text-gray-400">
              Seasonal offers, new treatments, and self-care tips — straight to your inbox.
            </p>
            {subscribed ? (
              <p className="mt-4 rounded-full bg-primary-600/20 px-4 py-2.5 text-sm font-medium text-primary-300">
                Thank you for subscribing!
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Your email"
                  className="h-11 w-full min-w-0 rounded-full border border-gray-700 bg-gray-800 px-5 text-sm text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none"
                />
                <button
                  type="submit"
                  className="h-11 shrink-0 rounded-full bg-primary-600 px-5 text-sm font-medium text-white transition-colors hover:bg-primary-700"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-8 sm:flex-row">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Sooth Spa. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#home" className="text-sm text-gray-500 transition-colors hover:text-white">
              Privacy Policy
            </a>
            <a href="#home" className="text-sm text-gray-500 transition-colors hover:text-white">
              Terms of Service
            </a>
            <a href="#home" className="text-sm text-gray-500 transition-colors hover:text-white">
              Style Guide
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
