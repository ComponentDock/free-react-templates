import { useState, type FormEvent } from 'react'
import { Dumbbell } from 'lucide-react'
import { InstagramIcon, TwitterIcon, YouTubeIcon } from './social-icons'

const columns = [
  {
    heading: 'Programs',
    links: ['Programs', 'Schedule', 'Personal Training', 'Group Classes'],
  },
  {
    heading: 'Company',
    links: ['About', 'Trainers', 'Blog', 'Careers'],
  },
  {
    heading: 'Support',
    links: ['FAQ', 'Contact', 'Membership', 'Terms'],
  },
] as const

const socials = [
  { label: 'Twitter', Icon: TwitterIcon },
  { label: 'Instagram', Icon: InstagramIcon },
  { label: 'YouTube', Icon: YouTubeIcon },
] as const

export function Footer() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <footer id="contact" className="bg-gray-950 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-3" aria-label="Forgefit home">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-600 text-white">
                <Dumbbell className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="font-display text-xl font-bold tracking-tight text-white">
                Forgefit
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              Transform your body, transform your life. Premium fitness training with world-class
              facilities.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map(({ label, Icon }) => (
                <a
                  key={label}
                  href="#home"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-gray-400 transition-colors hover:bg-primary-600 hover:text-white"
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
              Get the latest fitness tips, class updates, and exclusive offers.
            </p>
            {submitted ? (
              <p className="mt-4 rounded-xl bg-primary-600/20 px-4 py-3 text-sm font-semibold text-primary-400">
                Thanks for subscribing — see you in the gym!
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
                  className="w-full rounded-full border border-gray-800 bg-gray-900 px-5 py-3 text-sm text-white placeholder:text-gray-500 focus:border-primary-500 focus:outline-none"
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

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-900 pt-8 sm:flex-row">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Forgefit. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#home"
              className="text-xs text-gray-500 transition-colors hover:text-primary-400"
            >
              Privacy Policy
            </a>
            <a
              href="#home"
              className="text-xs text-gray-500 transition-colors hover:text-primary-400"
            >
              Terms of Service
            </a>
            <a
              href="#home"
              className="text-xs text-gray-500 transition-colors hover:text-primary-400"
            >
              Style Guide
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
