import { Flower2, Mail, MapPin, Phone } from 'lucide-react'
import { FacebookIcon, InstagramIcon, TwitterIcon } from './social-icons'

const quickLinks = [
  'Wellness',
  'Vintge stores',
  'Trekking',
  'Tour',
  'Sightseeing',
  'Many more..',
] as const

const sectionLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Groom & Bride', href: '#groom-bride' },
  { label: 'Story', href: '#lovestory' },
  { label: 'Greetings', href: '#greetings' },
  { label: 'People', href: '#people' },
  { label: 'Where & When', href: '#when-where' },
  { label: 'RSVP', href: '#rsvp' },
  { label: 'Gallery', href: '#gallery' },
] as const

const services = ['Organizer', 'Venue', 'Wedding Ceremony', 'Accommodation'] as const

const socials = [
  { label: 'Facebook', Icon: FacebookIcon },
  { label: 'Twitter', Icon: TwitterIcon },
  { label: 'Instagram', Icon: InstagramIcon },
] as const

export function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-white transition-colors dark:border-stone-800 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-3" aria-label="Nuptial home">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-500 text-white">
                <Flower2 className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="font-script text-2xl text-pink-500">Nuptial</span>
            </a>
            <p className="mt-5 text-sm leading-relaxed text-ink-700 dark:text-stone-400">
              A love story written in golden light — join Francisco and Laura as they celebrate the
              beginning of forever.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map(({ label, Icon }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-500 text-white transition-colors hover:bg-pink-600"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Quick links">
            <h3 className="text-sm font-semibold tracking-widest text-ink-900 uppercase dark:text-white">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#home"
                    className="text-sm text-ink-700 transition-colors hover:text-pink-500 dark:text-stone-400"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Section links">
            <h3 className="text-sm font-semibold tracking-widest text-ink-900 uppercase dark:text-white">
              Links
            </h3>
            <ul className="mt-5 space-y-3">
              {sectionLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-ink-700 transition-colors hover:text-pink-500 dark:text-stone-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Services">
            <h3 className="text-sm font-semibold tracking-widest text-ink-900 uppercase dark:text-white">
              Services
            </h3>
            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#home"
                    className="text-sm text-ink-700 transition-colors hover:text-pink-500 dark:text-stone-400"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-sm font-semibold tracking-widest text-ink-900 uppercase dark:text-white">
              Have a Questions?
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-ink-700 dark:text-stone-400">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-pink-500" aria-hidden="true" />
                <span>203 Fake St. Mountain View, San Francisco, California, USA</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-pink-500" aria-hidden="true" />
                <a href="tel:+23923929210" className="transition-colors hover:text-pink-500">
                  +2 392 3929 210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-pink-500" aria-hidden="true" />
                <a
                  href="mailto:info@yourdomain.com"
                  className="transition-colors hover:text-pink-500"
                >
                  info@yourdomain.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-stone-200 pt-8 text-sm text-stone-500 sm:flex-row dark:border-stone-800 dark:text-stone-500">
          <p>© {new Date().getFullYear()} Nuptial. All rights reserved.</p>
          <a
            href="https://www.componentdock.com/"
            className="transition-colors hover:text-pink-500"
          >
            More templates at Component Dock
          </a>
        </div>
      </div>
    </footer>
  )
}
