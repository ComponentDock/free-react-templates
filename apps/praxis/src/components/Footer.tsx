import { InstagramIcon, FacebookIcon, TwitterIcon } from './social-icons'

const navLinks = ['Home', 'About', 'Services', 'News', 'Contact']

const locations = [
  { city: 'Miami', address: '45 Creekside Av, FL 931' },
  { city: 'Los Angeles', address: '1481 Creekside Lane, CA 931' },
]

const hours = [
  { day: 'Monday', time: '8:00am – 9:00pm' },
  { day: 'Tuesday', time: '8:00am – 9:00pm' },
  { day: 'Wednesday', time: '8:00am – 9:00pm' },
  { day: 'Thursday', time: '8:00am – 9:00pm' },
  { day: 'Friday', time: '8:00am – 7:00pm' },
]

const socials = [
  { label: 'Instagram', Icon: InstagramIcon },
  { label: 'Facebook', Icon: FacebookIcon },
  { label: 'Twitter', Icon: TwitterIcon },
]

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <a href="#" className="mb-4 block text-lg font-bold">
              <span className="text-white">Praxis</span>{' '}
              <span className="text-coral-400">Plastic Surgery</span>
            </a>
            <p className="text-sm leading-relaxed text-gray-400">
              A leading plastic surgery clinic dedicated to helping you achieve your aesthetic goals
              with personalized care.
            </p>
            <div className="mt-4 flex gap-3">
              {socials.map(({ label, Icon }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="text-gray-400 transition-colors hover:text-coral-400"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider">Contact Info</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>+34 586 778 8892</li>
              <li>info@praxisclinic.com</li>
              <li>contact@praxisclinic.com</li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider">Our Locations</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {locations.map(({ city, address }) => (
                <li key={city}>
                  <div className="font-medium text-white">{city}</div>
                  <div>{address}</div>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider">Opening Hours</h4>
            <ul className="space-y-1 text-sm text-gray-400">
              {hours.map(({ day, time }) => (
                <li key={day} className="flex justify-between">
                  <span>{day}:</span>
                  <span>{time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-4 sm:flex-row sm:px-6">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Praxis. More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-coral-400 hover:underline"
            >
              Component Dock
            </a>
          </p>
          <nav aria-label="Footer navigation">
            <ul className="flex gap-4">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-xs text-gray-400 transition-colors hover:text-coral-400"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}
