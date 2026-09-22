import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from './social-icons'

const socials = [
  { label: 'Facebook', href: 'https://facebook.com', Icon: FacebookIcon },
  { label: 'Twitter', href: 'https://twitter.com', Icon: TwitterIcon },
  { label: 'Instagram', href: 'https://instagram.com', Icon: InstagramIcon },
  { label: 'LinkedIn', href: 'https://linkedin.com', Icon: LinkedinIcon },
]

export function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          {/* About */}
          <div>
            <h4 className="mb-4 font-heading text-lg font-bold">About Us</h4>
            <p className="text-sm leading-relaxed text-gray-400">
              Providing world-class healthcare services with compassion, integrity, and excellence.
              Your health is our priority.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-heading text-lg font-bold">Contact Us</h4>
            <p className="mb-3 text-sm leading-relaxed text-gray-400">
              We are here to help. Reach out to us for appointments, inquiries, or emergency
              assistance.
            </p>
            <p className="text-sm font-medium text-white">
              012-6532-568-9746
              <br />
              012-6532-569-9748
            </p>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="mb-4 font-heading text-lg font-bold">Newsletter</h4>
            <p className="mb-4 text-sm text-gray-400">
              Subscribe to receive health tips, news, and special offers. No spam, we promise.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email address"
                required
                className="flex-1 rounded-full bg-white/10 px-4 py-2 text-sm text-white placeholder-gray-500 focus:bg-white/20 focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-full bg-gradient-to-r from-sky-400 to-sky-500 px-6 py-2 text-xs font-medium uppercase text-white transition-all hover:brightness-110"
              >
                Get Started
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-5 sm:flex-row sm:px-6">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Vitala Medical Center. All rights reserved. Made with{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400 transition-colors hover:text-sky-300"
            >
              Component Dock
            </a>
          </p>
          <div className="flex items-center gap-3">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-sky-400"
              >
                <Icon className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
