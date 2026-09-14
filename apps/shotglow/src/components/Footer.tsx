import { FacebookIcon, TwitterIcon, InstagramIcon, SkypeIcon } from './social-icons'

const serviceLinks = [
  'Car Accident',
  'Personal Injury',
  'Family Law',
  'Bank and Financial',
  'Capital Market',
  'Employment Law',
]

const socials = [
  { label: 'Facebook', href: 'https://facebook.com', Icon: FacebookIcon },
  { label: 'Twitter', href: 'https://twitter.com', Icon: TwitterIcon },
  { label: 'Instagram', href: 'https://instagram.com', Icon: InstagramIcon },
  { label: 'Skype', href: 'https://skype.com', Icon: SkypeIcon },
]

const instagramImages = Array.from({ length: 6 }, (_, i) => ({
  seed: `shotglow-inst${i + 1}`,
  alt: `Instagram photo ${i + 1}`,
}))

export function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Service links */}
          <div>
            <h4 className="mb-6 font-heading text-lg font-semibold uppercase">Our Service</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-gray-400 transition-colors hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="mb-6 font-heading text-lg font-semibold uppercase">Contact Info</h4>
            <p className="mb-4 text-sm leading-relaxed text-gray-400">
              4361 Morningview Lane, Artland, Pall Street, Latimer, IA 50452
            </p>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="tel:+02323652654" className="transition-colors hover:text-white">
                  +02 - 32 365 2654
                </a>
              </li>
              <li>
                <a href="mailto:studio@shotglow.com" className="transition-colors hover:text-white">
                  studio@shotglow.com
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  shotglow.com
                </a>
              </li>
            </ul>
          </div>

          {/* Instagram grid */}
          <div>
            <h4 className="mb-6 font-heading text-lg font-semibold uppercase">Instagram</h4>
            <div className="grid grid-cols-3 gap-2">
              {instagramImages.map(({ seed, alt }) => (
                <a key={seed} href="#" className="block overflow-hidden">
                  <img
                    src={`https://picsum.photos/seed/${seed}/200/200`}
                    alt={alt}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="mb-6 font-heading text-lg font-semibold uppercase">Newsletter</h4>
            <p className="mb-4 text-sm text-gray-400">Stay updated with our latest trends.</p>
            <form onSubmit={(e) => e.preventDefault()} className="flex">
              <input
                type="email"
                placeholder="Your Email Address"
                className="flex-1 border border-gray-700 bg-transparent px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-white"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="border border-l-0 border-gray-700 px-4 text-gray-400 transition-colors hover:text-white"
              >
                →
              </button>
            </form>

            <div className="mt-6 flex gap-4">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center text-gray-400 transition-colors hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-4 py-6 text-center sm:px-6">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Shotglow. More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline transition-colors hover:text-white"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
