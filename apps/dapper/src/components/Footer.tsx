import { Scissors } from 'lucide-react'
import { BrandIcon, type BrandName } from './BrandIcon'

const socials: ReadonlyArray<{ label: string; name: BrandName }> = [
  { label: 'GitHub', name: 'github' },
  { label: 'X', name: 'x' },
  { label: 'LinkedIn', name: 'linkedin' },
]

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Barbers', href: '#barbers' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Blog', href: '#blog' },
] as const

export function Footer() {
  return (
    <footer id="contact" className="bg-black text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-4">
        <div>
          <a href="#home" className="flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-brand to-brand-light">
              <Scissors className="h-5 w-5 text-white" aria-hidden="true" />
            </span>
            <span className="font-display text-xl font-bold uppercase tracking-widest">
              Dapper<span className="text-brand-light">.</span>
            </span>
          </a>
          <h3 className="mt-6 font-display text-lg font-bold uppercase tracking-wide text-brand-light">
            About Me
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-gray-400">
            Do you want to be even more successful? Learn to love learning and growth. The more
            effort you put into improving your skills, the more you grow.
          </p>
        </div>

        <div>
          <h3 className="font-display text-lg font-bold uppercase tracking-wide text-brand-light">
            Quick Links
          </h3>
          <ul className="mt-5 space-y-2 text-sm text-gray-400">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition-colors hover:text-brand-light">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg font-bold uppercase tracking-wide text-brand-light">
            Newsletter
          </h3>
          <p className="mt-5 text-sm text-gray-400">Stay updated with our latest trends</p>
          <form
            className="mt-5 flex"
            onSubmit={(event) => {
              event.preventDefault()
            }}
          >
            <input
              type="email"
              required
              placeholder="Enter email address"
              aria-label="Enter email address"
              className="h-10 w-full flex-1 rounded-l-full border border-gray-700 bg-gray-900 px-4 text-sm text-white outline-none transition-colors focus:border-brand-light"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="h-10 shrink-0 rounded-r-full bg-gradient-to-r from-brand to-brand-light px-5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Send
            </button>
          </form>
        </div>

        <div>
          <h3 className="font-display text-lg font-bold uppercase tracking-wide text-brand-light">
            Follow Me
          </h3>
          <p className="mt-5 text-sm text-gray-400">Let us be social</p>
          <div className="mt-5 flex items-center gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href="#contact"
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 text-gray-400 transition-colors hover:border-brand-light hover:bg-brand-light hover:text-black"
              >
                <BrandIcon name={social.name} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 py-5 text-center text-sm text-gray-500">
        Copyright © {new Date().getFullYear()} All rights reserved | Dapper
      </div>
    </footer>
  )
}
