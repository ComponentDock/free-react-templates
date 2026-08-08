import { useState, type ChangeEvent, type FormEvent } from 'react'
import { Clock, Mail, MapPin, Phone, Send, UtensilsCrossed } from 'lucide-react'
import { Button } from '@free-react-templates/ui'
import { FacebookIcon, InstagramIcon, YouTubeIcon } from './social-icons'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Menu', href: '#menu' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reservations', href: '#reservations' },
] as const

const hours = [
  { day: 'Monday', time: '5:00 PM – 10:00 PM' },
  { day: 'Tuesday', time: '5:00 PM – 10:00 PM' },
  { day: 'Wednesday', time: '5:00 PM – 10:00 PM' },
  { day: 'Thursday', time: '5:00 PM – 10:00 PM' },
  { day: 'Friday', time: '5:00 PM – 11:00 PM' },
  { day: 'Saturday', time: '12:00 PM – 11:00 PM' },
  { day: 'Sunday', time: '12:00 PM – 9:00 PM' },
] as const

const socials = [
  { label: 'Facebook', icon: FacebookIcon },
  { label: 'Instagram', icon: InstagramIcon },
  { label: 'YouTube', icon: YouTubeIcon },
] as const

export function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (email.trim().length > 0) {
      setSubscribed(true)
      setEmail('')
    }
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          <div>
            <a href="#home" className="flex items-center gap-3" aria-label="Sapor home">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-600 text-white">
                <UtensilsCrossed className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="font-serif text-xl font-bold">Sapor</span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Authentic Italian cuisine crafted with love and served with passion since 1985.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-gray-400">
              <li>
                <a
                  href="tel:+15551234567"
                  className="flex items-center gap-3 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4 text-primary-500" aria-hidden="true" />
                  (555) 123-4567
                </a>
              </li>
              <li>
                <a
                  href="mailto:reservations@sapor.com"
                  className="flex items-center gap-3 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 text-primary-500" aria-hidden="true" />
                  reservations@sapor.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary-500" aria-hidden="true" />
                123 Main Street, San Francisco, CA 94102
              </li>
            </ul>
            <div className="mt-6 flex gap-3">
              {socials.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href="#home"
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-colors hover:bg-primary-600 hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                )
              })}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-400 transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-gray-300">
              <Clock className="h-4 w-4 text-primary-500" aria-hidden="true" />
              Hours
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {hours.map((entry) => (
                <li key={entry.day} className="flex justify-between gap-4">
                  <span className="text-gray-400">{entry.day}</span>
                  <span className="text-white">{entry.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
              Newsletter
            </h3>
            <p className="mt-4 text-sm text-gray-400">
              Subscribe for seasonal menus, wine dinners and private event invitations.
            </p>
            {subscribed ? (
              <p role="status" className="mt-4 text-sm text-primary-400">
                Thanks for subscribing!
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="mt-4 flex gap-2">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
                  className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                />
                <Button type="submit" aria-label="Subscribe" className="h-auto px-4 py-2.5">
                  <Send className="h-4 w-4" aria-hidden="true" />
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-sm text-gray-400 sm:flex-row lg:px-8">
          <p>© 2026 Sapor. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#home" className="transition-colors hover:text-white">
              Privacy Policy
            </a>
            <a href="#home" className="transition-colors hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
