import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from './social-icons'

const socials = [
  { label: 'Facebook', href: 'https://facebook.com', Icon: FacebookIcon },
  { label: 'Twitter', href: 'https://twitter.com', Icon: TwitterIcon },
  { label: 'Instagram', href: 'https://instagram.com', Icon: InstagramIcon },
  { label: 'LinkedIn', href: 'https://linkedin.com', Icon: LinkedinIcon },
]

export function Footer() {
  return (
    <footer role="contentinfo" className="bg-dark text-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand column */}
          <div>
            <a href="#home" className="mb-4 block text-xl font-bold">
              Bright<span className="text-gold-400">mind</span>
            </a>
            <p className="mb-6 text-sm leading-relaxed text-gray-400">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts.
            </p>
            <ul className="flex items-center gap-3">
              {socials.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand-500"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent blog */}
          <div>
            <h3 className="mb-4 text-base font-semibold">Recent Blog</h3>
            <ul className="space-y-3">
              <li className="text-sm text-gray-400">
                <a href="#" className="hover:text-white">
                  How to Stand Out at Your First Job
                </a>
              </li>
              <li className="text-sm text-gray-400">
                <a href="#" className="hover:text-white">
                  The Future of Online Learning
                </a>
              </li>
              <li className="text-sm text-gray-400">
                <a href="#" className="hover:text-white">
                  Tips for Effective Study Habits
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-base font-semibold">Contact Info</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>123 University Ave, Education City</li>
              <li>
                <a href="tel:+1234567890" className="hover:text-white">
                  +1 (234) 567-890
                </a>
              </li>
              <li>
                <a href="mailto:info@brightmind.com" className="hover:text-white">
                  info@brightmind.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-gray-500">
          Made with{' '}
          <a
            href="https://www.componentdock.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-400 hover:underline"
          >
            Component Dock
          </a>
        </div>
      </div>
    </footer>
  )
}
