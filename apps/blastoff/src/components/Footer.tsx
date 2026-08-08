import { useState, type FormEvent } from 'react'
import { Rocket } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from './social-icons'

const columns = [
  {
    heading: 'Product',
    links: ['Features', 'Pricing', 'Changelog', 'Roadmap'],
  },
  {
    heading: 'Resources',
    links: ['Documentation', 'API Reference', 'Blog', 'Tutorials'],
  },
  {
    heading: 'Company',
    links: ['About', 'Careers', 'Press', 'Contact'],
  },
] as const

const socials = [
  { label: 'GitHub', Icon: GitHubIcon },
  { label: 'LinkedIn', Icon: LinkedInIcon },
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
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2.5" aria-label="Blastoff home">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-600 text-white">
                <Rocket className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="text-xl font-extrabold tracking-tight text-white">Blastoff</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              The modern development platform that helps startups go from idea to production in
              minutes.
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
              Product updates and launch news, once a month.
            </p>
            {submitted ? (
              <p className="mt-4 rounded-xl bg-primary-600/20 px-4 py-3 text-sm font-semibold text-primary-300">
                Thanks for subscribing — see you at launch!
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
                  className="w-full rounded-lg border border-gray-700 bg-gray-800 px-5 py-3 text-sm text-white placeholder:text-gray-500 focus:border-primary-500 focus:outline-none"
                />
                <button
                  type="submit"
                  className="mt-3 w-full rounded-lg bg-primary-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-primary-600/25 transition-colors hover:bg-primary-700"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Blastoff. All rights reserved.
          </p>
          <div className="mt-3 flex items-center justify-center gap-6">
            {['Privacy Policy', 'Terms of Service', 'Style Guide'].map((link) => (
              <a
                key={link}
                href="#home"
                className="text-xs text-gray-500 transition-colors hover:text-primary-400"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
