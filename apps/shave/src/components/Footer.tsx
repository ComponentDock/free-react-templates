import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from './social-icons'

const socials = [
  { label: 'Facebook', href: 'https://facebook.com', Icon: FacebookIcon },
  { label: 'Twitter', href: 'https://twitter.com', Icon: TwitterIcon },
  { label: 'Instagram', href: 'https://instagram.com', Icon: InstagramIcon },
  { label: 'LinkedIn', href: 'https://linkedin.com', Icon: LinkedinIcon },
]

export function Footer() {
  return (
    <footer className="bg-footer-dark text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        {/* About */}
        <div>
          <h3 className="text-lg font-semibold">About Us</h3>
          <p className="mt-3 text-sm leading-relaxed text-gray-400">
            Expert barbershop services with a passion for quality grooming and style. We deliver an
            exceptional experience for every client.
          </p>
          <p className="mt-4 text-xs text-gray-500">
            More templates at{' '}
            <a href="https://www.componentdock.com/" className="text-pink-400 hover:underline">
              Component Dock
            </a>
          </p>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold">Newsletter</h3>
          <p className="mt-3 text-sm text-gray-400">Stay updated with our latest</p>
          <form className="mt-4 flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter Email"
              className="flex-1 rounded bg-white/10 px-4 py-2 text-sm text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-pink-400"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="rounded bg-gradient-to-r from-pink-400 to-purple-400 px-4 py-2 text-white transition-colors hover:opacity-90"
            >
              →
            </button>
          </form>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <p className="mt-3 text-sm text-gray-400">Let us be social</p>
          <ul className="mt-4 flex gap-3">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-pink-400"
                >
                  <Icon className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
