import { Mail, MapPin, Phone, Clock } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from './social-icons'

const socials = [
  { label: 'Facebook', href: 'https://facebook.com', Icon: FacebookIcon },
  { label: 'Twitter', href: 'https://twitter.com', Icon: TwitterIcon },
  { label: 'Instagram', href: 'https://instagram.com', Icon: InstagramIcon },
  { label: 'LinkedIn', href: 'https://linkedin.com', Icon: LinkedinIcon },
]

const inspirationLinks = [
  { label: 'Yoga Basics', href: '#' },
  { label: 'Meditation Guide', href: '#' },
  { label: 'Breathing Exercises', href: '#' },
  { label: 'Yoga Poses', href: '#' },
  { label: 'Wellness Tips', href: '#' },
]

const aboutLinks = [
  { label: 'About Fitnest', href: '#about' },
  { label: 'Our Instructors', href: '#instructors' },
  { label: 'Schedule', href: '#' },
  { label: 'Pricing', href: '#' },
  { label: 'Contact Us', href: '#contact' },
]

interface FooterProps {
  className?: string
}

export function Footer({ className }: FooterProps) {
  return (
    <footer className={cn('bg-dark-bg text-white', className)}>
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* Column 1: About */}
        <div>
          <a href="#home" className="text-2xl font-bold text-white">
            Fitnest
          </a>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            A modern yoga and fitness studio dedicated to transforming lives through the ancient art
            of yoga. Join our community and discover your inner strength.
          </p>
          <div className="mt-4 space-y-2 text-sm text-white/70">
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" aria-hidden="true" />
              Mon - Fri: 6.00 — 22.00
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" aria-hidden="true" />
              Sat - Sun: 8.00 — 18.00
            </span>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="mt-4 flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 rounded bg-white/10 px-3 py-2 text-xs text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-brand"
            />
            <button
              type="submit"
              className="rounded bg-brand px-4 py-2 text-xs font-semibold uppercase text-white transition-colors hover:bg-brand-dark"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Column 2: Inspiration */}
        <div>
          <h3 className="font-semibold uppercase tracking-wide">Inspiration</h3>
          <ul className="mt-4 space-y-2">
            {inspirationLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-white/70 transition-colors hover:text-brand"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: About Us */}
        <div>
          <h3 className="font-semibold uppercase tracking-wide">About Us</h3>
          <ul className="mt-4 space-y-2">
            {aboutLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-white/70 transition-colors hover:text-brand"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div>
          <h3 className="font-semibold uppercase tracking-wide">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              123 Yoga Lane, Wellness City, YC 12345
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4" aria-hidden="true" />
              (+123) 456 789 10
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4" aria-hidden="true" />
              info@fitnest.com
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6">
          <p className="text-xs text-white/50">
            Made with ❤️ by{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline transition-colors hover:text-brand"
            >
              Component Dock
            </a>
          </p>
          <ul className="flex items-center gap-3">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand"
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
