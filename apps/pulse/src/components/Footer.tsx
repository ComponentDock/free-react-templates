import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from './social-icons'
import { Mail, MapPin, Phone } from 'lucide-react'

const socials = [
  { label: 'Facebook', href: 'https://facebook.com', Icon: FacebookIcon },
  { label: 'Twitter', href: 'https://twitter.com', Icon: TwitterIcon },
  { label: 'Instagram', href: 'https://instagram.com', Icon: InstagramIcon },
  { label: 'LinkedIn', href: 'https://linkedin.com', Icon: LinkedinIcon },
]

const recentPosts = [
  'Digital Marketing Trends',
  'Web Design Best Practices',
  'Brand Strategy Guide',
]

const serviceLinks = ['Creative Design', 'Digital Marketing', 'Web Development', 'Branding']

export function Footer() {
  return (
    <footer id="contact" className="bg-navy-800 text-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <a href="#home" className="text-xl font-bold text-pulse-400">
              Pulse.
            </a>
            <p className="mt-3 text-sm text-gray-400">
              We are a digital agency dedicated to helping businesses grow through creative design
              and strategic marketing.
            </p>
            <ul className="mt-4 flex gap-3">
              {socials.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-pulse-400"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Posts */}
          <div>
            <h4 className="text-lg font-semibold">Recent Posts</h4>
            <ul className="mt-3 space-y-2">
              {recentPosts.map((post) => (
                <li key={post}>
                  <a
                    href="#blog"
                    className="text-sm text-gray-400 transition-colors hover:text-pulse-400"
                  >
                    {post}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="mt-3 space-y-2">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-sm text-gray-400 transition-colors hover:text-pulse-400"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold">Contact</h4>
            <ul className="mt-3 space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-pulse-400" />
                123 Business Ave, Suite 100, New York, NY 10001
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <Phone className="h-4 w-4 shrink-0 text-pulse-400" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <Mail className="h-4 w-4 shrink-0 text-pulse-400" />
                hello@pulse.agency
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-gray-500">
          <p>
            Powered by{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pulse-400 transition-colors hover:text-pulse-300"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
