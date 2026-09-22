import { MapPin, Phone, Mail, ChevronRight } from 'lucide-react'
import { FacebookIcon, TwitterIcon, InstagramIcon } from './social-icons'

const socialLinks = [
  { label: 'Twitter', href: '#', Icon: TwitterIcon },
  { label: 'Facebook', href: '#', Icon: FacebookIcon },
  { label: 'Instagram', href: '#', Icon: InstagramIcon },
]

const exploreLinks = ['About', 'Contact', 'Classes', 'Schedule', 'Blog']

const recentBlogs = [
  { title: 'Yoga practices to boost happiness', date: 'Oct. 06, 2020', seed: 'zenbloom-footer1' },
  { title: 'Beginner guide to meditation', date: 'Oct. 03, 2020', seed: 'zenbloom-footer2' },
]

export function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <a href="#home" className="text-xl font-bold text-white">
              Zenbloom
            </a>
            <p className="mt-3 text-sm text-gray-400">
              Discover inner peace and physical strength through expert-led yoga classes. Transform
              your body and mind.
            </p>
            <div className="mt-4 flex gap-3">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-gray-400 transition-colors hover:bg-sage-400 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Recent Blog */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Recent Blog</h3>
            <div className="space-y-4">
              {recentBlogs.map(({ title, date, seed }) => (
                <div key={title} className="flex gap-3">
                  <div
                    className="h-16 w-16 flex-shrink-0 rounded bg-cover bg-center"
                    style={{ backgroundImage: `url('https://picsum.photos/seed/${seed}/80/80')` }}
                  />
                  <div>
                    <a href="#" className="text-sm font-medium text-white hover:text-sage-400">
                      {title}
                    </a>
                    <p className="text-xs text-gray-500">{date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Explore</h3>
            <ul className="space-y-2">
              {exploreLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-sage-400"
                  >
                    <ChevronRight className="h-3 w-3" /> {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Have a Questions?</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-sage-400" />
                <span>203 Fake St. Mountain View, San Francisco, California, USA</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-sage-400" />
                <a href="tel:+23923929210" className="hover:text-white">
                  +2 392 3929 210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-sage-400" />
                <a href="mailto:info@yourdomain.com" className="hover:text-white">
                  info@yourdomain.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-gray-800">
        <div className="mx-auto max-w-6xl px-4 py-5 sm:px-6">
          <p className="text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} All rights reserved. Made with{' '}
            <span className="text-red-500">&hearts;</span> by{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sage-400 hover:underline"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
