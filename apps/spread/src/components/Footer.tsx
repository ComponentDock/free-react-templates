import { Mail } from 'lucide-react'
import { FacebookIcon, TwitterIcon, InstagramIcon, YoutubeIcon, RssIcon } from './social-icons'
import { useState } from 'react'

const quickLinks1 = ['Sitemaps', 'Categories', 'Archives', 'Advertise', 'Ad Choice']
const quickLinks2 = ['Privacy Policy', 'Terms of Use', 'Help Center', 'Newsletters', 'Feedback']
const categories = ['Travel', 'Fashionista', 'Music', 'Design', 'News', 'Trending', 'Video', 'Game']

const socialIcons = [
  { icon: FacebookIcon, label: 'Facebook' },
  { icon: TwitterIcon, label: 'Twitter' },
  { icon: InstagramIcon, label: 'Instagram' },
  { icon: YoutubeIcon, label: 'YouTube' },
  { icon: RssIcon, label: 'RSS' },
]

export function Footer() {
  const [email, setEmail] = useState('')

  return (
    <footer className="bg-footer-bg pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12">
          {/* About */}
          <div>
            <div className="text-2xl font-bold text-white mb-4">Spread</div>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex gap-3">
              {socialIcons.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-gray-700 flex items-center justify-center text-gray-400 hover:bg-brand hover:text-white transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="border-l-4 border-brand pl-4 mb-6">
              <h3 className="text-base font-medium text-white">Quick Links</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <ul className="space-y-2">
                {quickLinks1.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-brand transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
              <ul className="space-y-2">
                {quickLinks2.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-brand transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Categories */}
          <div>
            <div className="border-l-4 border-brand pl-4 mb-6">
              <h3 className="text-base font-medium text-white">Categories</h3>
            </div>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat}>
                  <a href="#" className="text-sm text-gray-400 hover:text-brand transition-colors">
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <div className="border-l-4 border-brand pl-4 mb-6">
              <h3 className="text-base font-medium text-white">Newsletter</h3>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Subscribe to our newsletter and never miss an update.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                setEmail('')
              }}
              className="flex"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                aria-label="Email for newsletter"
                className="flex-1 px-3 py-2 text-sm bg-gray-800 text-white border border-gray-700 rounded-l focus:outline-none focus:border-brand"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="px-4 py-2 bg-brand text-white rounded-r hover:bg-brand-hover transition-colors"
              >
                <Mail className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            Copyright &copy; {new Date().getFullYear()} All rights reserved | Made with{' '}
            <span className="text-brand">&#9829;</span> by{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand hover:underline"
            >
              Component Dock
            </a>
          </p>
          <div className="flex gap-4">
            {socialIcons.map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="text-gray-500 hover:text-brand transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
