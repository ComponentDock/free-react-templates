import { useState, type FormEvent } from 'react'
import { HandHeart } from 'lucide-react'
import { FacebookIcon, InstagramIcon, TwitterIcon } from './social-icons'

const columns = [
  {
    heading: 'Programs',
    links: ['Education', 'Healthcare', 'Economic Empowerment', 'Environment'],
  },
  {
    heading: 'Organization',
    links: ['About Us', 'Our Team', 'Annual Report', 'Press'],
  },
  {
    heading: 'Support',
    links: ['Donate', 'Volunteer', 'Contact Us', 'FAQ'],
  },
] as const

const socials = [
  { label: 'Facebook', Icon: FacebookIcon },
  { label: 'Instagram', Icon: InstagramIcon },
  { label: 'Twitter', Icon: TwitterIcon },
] as const

export function Footer() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <footer id="contact" className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-4">
          <div>
            <a href="#home" className="flex items-center gap-3" aria-label="Uplift home">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-600 text-white">
                <HandHeart className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="text-xl font-extrabold tracking-tight text-white">Uplift</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              Empowering communities through education, healthcare and sustainable development
              worldwide.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map(({ label, Icon }) => (
                <a
                  key={label}
                  href="#home"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-300 transition-colors hover:bg-primary-600 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((column) => (
            <div key={column.heading}>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                {column.heading}
              </h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#home"
                      className="text-sm text-gray-400 transition-colors hover:text-primary-400"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Stay Updated</h3>
            <p className="mt-4 text-sm text-gray-400">
              Get stories of impact in your inbox, once a month.
            </p>
            {submitted ? (
              <p className="mt-4 rounded-xl bg-primary-600/20 px-4 py-3 text-sm font-semibold text-primary-300">
                Thanks for subscribing — talk soon!
              </p>
            ) : (
              <form className="mt-4" onSubmit={handleSubscribe}>
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-full border border-gray-700 bg-gray-800 px-5 py-3 text-sm text-white placeholder:text-gray-500 focus:border-primary-500 focus:outline-none"
                />
                <button
                  type="submit"
                  className="mt-3 w-full rounded-full bg-primary-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-primary-600/25 transition-colors hover:bg-primary-700"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Uplift Foundation. All rights reserved.
          </p>
          <p className="mt-2 text-xs text-gray-500">
            We use cookies to improve your experience on our site.
          </p>
        </div>
      </div>
    </footer>
  )
}
