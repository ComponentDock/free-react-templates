import { CalendarDays, MapPin, Presentation } from 'lucide-react'
import { GitHubIcon, LinkedinIcon, XIcon, YouTubeIcon } from './social-icons'

const socials = [
  { label: 'X', href: 'https://x.com', Icon: XIcon },
  { label: 'LinkedIn', href: 'https://linkedin.com', Icon: LinkedinIcon },
  { label: 'GitHub', href: 'https://github.com', Icon: GitHubIcon },
  { label: 'YouTube', href: 'https://youtube.com', Icon: YouTubeIcon },
]

const eventLinks = ['Speakers', 'Schedule', 'Tickets', 'Sponsors', 'Venue']
const resourceLinks = [
  'Code of Conduct',
  'Press Kit',
  'Become a Sponsor',
  'Call for Speakers',
  'FAQ',
]

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-900 dark:border-gray-800">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#home" className="inline-flex items-center gap-2" aria-label="Podium home">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white">
                <Presentation className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="text-xl font-bold tracking-tight text-white">Podium</span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Three days of inspiring talks, hands-on workshops, and networking with industry
              leaders. March 15-17, 2032 at Moscone Center.
            </p>
            <ul className="mt-6 flex items-center gap-3">
              {socials.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-800 text-gray-400 transition-colors hover:bg-primary-600 hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Event">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Event</h4>
            <ul className="mt-4 space-y-3">
              {eventLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Resources">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Resources</h4>
            <ul className="mt-4 space-y-3">
              {resourceLinks.map((link) => (
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
          </nav>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Contact</h4>
            <address className="mt-4 space-y-3 text-sm not-italic text-gray-400">
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary-400" aria-hidden="true" />
                Moscone Center
                <br />
                747 Howard Street
                <br />
                San Francisco, CA 94103
              </p>
              <p className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-primary-400" aria-hidden="true" />
                info@podium.example
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-8 sm:flex-row">
          <p className="text-sm text-gray-400">© 2026 Podium. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#home" className="text-sm text-gray-400 transition-colors hover:text-white">
              Privacy Policy
            </a>
            <a href="#home" className="text-sm text-gray-400 transition-colors hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
