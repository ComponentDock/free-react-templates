import { Send } from 'lucide-react'
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from './social-icons'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'News', href: '#blog' },
  { label: 'Team', href: '#team' },
]

const moreLinks = [
  { label: 'Interior Design', href: '#about' },
  { label: 'Architecture', href: '#services' },
  { label: 'Privacy', href: '#' },
  { label: 'Membership', href: '#' },
]

const recentNews = [
  { date: 'Jan 16, 2018', title: 'Lorem ipsum dolor sit amet consectetur elit' },
  { date: 'Jan 16, 2018', title: 'Lorem ipsum dolor sit amet consectetur elit' },
  { date: 'Jan 16, 2018', title: 'Lorem ipsum dolor sit amet consectetur elit' },
]

const socials = [
  { Icon: FacebookIcon, label: 'Facebook' },
  { Icon: TwitterIcon, label: 'Twitter' },
  { Icon: InstagramIcon, label: 'Instagram' },
  { Icon: LinkedinIcon, label: 'LinkedIn' },
]

export function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">About Us</h3>
            <p className="text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non rem iusto nisi, eum
              vitae quas culpa fuga.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Navigation</h3>
            <ul className="space-y-2 text-sm">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">More Links</h3>
            <ul className="space-y-2 text-sm">
              {moreLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent News */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Recent News</h3>
            <ul className="space-y-3">
              {recentNews.map((n, i) => (
                <li key={i} className="text-sm">
                  <span className="block text-xs text-gray-500">{n.date}</span>
                  <a href="#blog" className="hover:text-white">
                    {n.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-10 border-t border-gray-700 pt-8">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <div>
              <h4 className="mb-1 font-bold text-white">Subscribe Newsletter</h4>
              <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <form className="flex w-full max-w-sm" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter email"
                className="flex-1 rounded-l border border-gray-600 bg-gray-700 px-4 py-2 text-sm text-white placeholder-gray-500 focus:border-accent focus:outline-none"
              />
              <button
                type="submit"
                className="flex items-center gap-1 rounded-r bg-accent px-4 py-2 text-sm font-semibold text-white hover:bg-accent-dark"
              >
                <Send className="h-3.5 w-3.5" />
                Send
              </button>
            </form>
          </div>
        </div>

        {/* Social + Copyright */}
        <div className="mt-8 border-t border-gray-700 pt-8">
          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-3">
              {socials.map(({ Icon, label }) => (
                <a
                  key={label}
                  href={`#${label.toLowerCase()}`}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-700 text-gray-400 transition-colors hover:bg-accent hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <p className="text-center text-xs text-gray-500">
              Copyright &copy; {new Date().getFullYear()} All rights reserved | Made with{' '}
              <a
                href="https://www.componentdock.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-white"
              >
                Component Dock
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
