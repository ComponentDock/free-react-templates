import { Dumbbell } from 'lucide-react'
import { BrandIcon, type BrandName } from './BrandIcon'

const navLinks = ['Home', 'About', 'Programs', 'Pricing', 'Contact'] as const

const socials: ReadonlyArray<{ label: string; name: BrandName }> = [
  { label: 'Facebook', name: 'facebook' },
  { label: 'Twitter', name: 'twitter' },
  { label: 'Instagram', name: 'instagram' },
  { label: 'Youtube', name: 'youtube' },
]

export function Footer() {
  return (
    <footer className="bg-navy text-white transition-colors dark:bg-navy-dark">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <a href="#home" className="flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand">
                <Dumbbell className="h-5 w-5 text-white" aria-hidden="true" />
              </span>
              <span className="text-xl font-bold uppercase tracking-[0.2em]">Prowess</span>
            </a>
            <p className="mt-6 text-sm leading-relaxed text-gray-400">
              Push beyond your limits. Prowess is your partner in fitness, offering world-class
              facilities and expert trainers to help you achieve your goals.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-600 text-gray-400 transition-colors hover:border-brand hover:bg-brand hover:text-white"
                >
                  <BrandIcon name={social.name} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold uppercase tracking-wide text-brand">Navigation</h3>
            <ul className="mt-5 space-y-3 text-sm text-gray-400">
              {navLinks.map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="transition-colors hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold uppercase tracking-wide text-brand">Working Hours</h3>
            <ul className="mt-5 space-y-3 text-sm text-gray-400">
              <li className="flex items-center justify-between">
                <span>Mon - Fri</span>
                <span className="font-semibold text-white">6.00 AM - 10.00 PM</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Saturday</span>
                <span className="font-semibold text-white">8.00 AM - 6.00 PM</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Sunday</span>
                <span className="font-semibold text-white">8.00 AM - 2.00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 py-5 text-center text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()} Prowess Fitness. All rights reserved.{' '}
          <a
            href="https://www.componentdock.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline transition-colors hover:text-white"
          >
            More templates at Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
