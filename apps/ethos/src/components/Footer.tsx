import { MapPin, Phone, Mail } from 'lucide-react'
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from './social-icons'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Courses', href: '#courses' },
  { label: 'News', href: '#news' },
  { label: 'Contact', href: '#contact' },
]

const recentPosts = [
  { title: 'Why Online Learning is the Future', date: 'Sep 15, 2026' },
  { title: 'Tips for Effective Study Habits', date: 'Sep 10, 2026' },
  { title: 'Building a Career in Tech', date: 'Sep 5, 2026' },
]

const socials = [
  { Icon: FacebookIcon, href: '#', label: 'Facebook' },
  { Icon: TwitterIcon, href: '#', label: 'Twitter' },
  { Icon: InstagramIcon, href: '#', label: 'Instagram' },
  { Icon: LinkedinIcon, href: '#', label: 'LinkedIn' },
]

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Column 1: Logo & About */}
          <div>
            <a href="#home" className="text-xl font-bold text-brand-400">
              Ethos
            </a>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            <ul className="mt-4 flex items-center gap-3">
              {socials.map(({ Icon, href, label }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand-400"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="text-lg font-semibold">Navigation</h3>
            <ul className="mt-3 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Recent Posts */}
          <div>
            <h3 className="text-lg font-semibold">Recent Posts</h3>
            <ul className="mt-3 space-y-3">
              {recentPosts.map((post) => (
                <li key={post.title}>
                  <a
                    href="#news"
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {post.title}
                  </a>
                  <p className="text-xs text-gray-500">{post.date}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-lg font-semibold">Contact</h3>
            <ul className="mt-3 space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-400" />
                <span>123 Education Street, Learning City, LC 12345</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0 text-brand-400" />
                <span>+1 (234) 567-890</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0 text-brand-400" />
                <span>info@ethos.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-4 sm:flex-row sm:px-6">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Ethos. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-400 hover:underline"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
