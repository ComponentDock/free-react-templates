import { Send } from 'lucide-react'
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from './social-icons'

const socials = [
  { label: 'Facebook', href: 'https://facebook.com', Icon: FacebookIcon },
  { label: 'Twitter', href: 'https://twitter.com', Icon: TwitterIcon },
  { label: 'Instagram', href: 'https://instagram.com', Icon: InstagramIcon },
  { label: 'LinkedIn', href: 'https://linkedin.com', Icon: LinkedinIcon },
]

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white" role="contentinfo">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <a href="#home" className="font-display text-2xl text-brand-blue">
              TinyBrights
            </a>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              A nurturing space for children to learn, play, and grow. Building bright futures
              through creative education since 2010.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold">Newsletter</h3>
            <p className="mt-2 text-sm text-gray-400">Get updates on events and new programs.</p>
            <form className="mt-4 flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                required
                className="flex-1 rounded-full border border-gray-600 bg-transparent px-4 py-2 text-sm text-white placeholder-gray-500 focus:border-brand-purple focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="btn-pill flex h-10 w-10 shrink-0 items-center justify-center bg-brand-purple text-white transition-colors hover:bg-brand-purple/80"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>

          <div>
            <h3 className="text-lg font-bold">Follow Us</h3>
            <div className="mt-4 flex gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand-blue"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-xs text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} TinyBrights. Crafted by{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-blue transition-colors hover:underline"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
