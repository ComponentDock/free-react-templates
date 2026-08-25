import { useState, type FormEvent } from 'react'
import { MapPin, Phone, Mail } from 'lucide-react'
import { FacebookIcon, TwitterIcon, InstagramIcon } from './BrandIcons'

const EXPLORE_LINKS = ['About Us', 'Services', 'Works', 'Blog', 'Contact us']
const QUICK_LINKS = ['Contact Us', 'Pricing', 'Terms & Conditions', 'Privacy', 'Feedbacks']
const RECENT_POSTS = [
  { date: 'DEC. 12, 2024', title: 'Creativity and Inspiration' },
  { date: 'DEC. 10, 2024', title: 'Creativity and Inspiration' },
  { date: 'DEC. 08, 2024', title: 'Creativity and Inspiration' },
]

export function Footer() {
  const [email, setEmail] = useState('')
  const year = new Date().getFullYear()

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setEmail('')
  }

  return (
    <footer className="bg-text-dark">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-[88px]">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div>
            <h2 className="mb-4 text-2xl font-bold text-white">Pulsewave.</h2>
            <p className="mb-6 text-sm leading-relaxed text-white/70">
              A small river named Duden flows by their place and supplies it with the necessary
              regelialia.
            </p>
            <ul className="flex gap-3">
              {[
                { Icon: FacebookIcon, label: 'Facebook' },
                { Icon: TwitterIcon, label: 'Twitter' },
                { Icon: InstagramIcon, label: 'Instagram' },
              ].map(({ Icon, label }) => (
                <li key={label}>
                  <a
                    href="#"
                    aria-label={label}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-accent-blue"
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore column */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Explore</h3>
            <ul className="space-y-3">
              {EXPLORE_LINKS.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-white/70 transition-colors hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links column */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Quick Links</h3>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-white/70 transition-colors hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Posts column */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Recent Posts</h3>
            <ul className="space-y-4">
              {RECENT_POSTS.map(({ date, title }, i) => (
                <li key={i}>
                  <div className="mb-1 flex gap-3 text-xs text-white/50">
                    <span>{date}</span>
                    <span>ADMIN</span>
                  </div>
                  <a
                    href="#"
                    className="text-sm font-medium text-white transition-colors hover:text-accent-blue"
                  >
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact + Form row */}
        <div className="mt-12 grid grid-cols-1 gap-8 border-t border-white/10 pt-12 sm:grid-cols-2">
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Have a Questions?</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-white/70">
                <MapPin size={16} className="text-accent-blue" />
                203 Fake St. Mountain View, San Francisco, California, USA
              </li>
              <li className="flex items-center gap-3 text-sm text-white/70">
                <Phone size={16} className="text-accent-blue" />
                +2 392 3929 210
              </li>
              <li className="flex items-center gap-3 text-sm text-white/70">
                <Mail size={16} className="text-accent-blue" />
                info@yourdomain.com
              </li>
            </ul>
          </div>
          <form onSubmit={handleSubmit} className="flex gap-3">
            <input
              type="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 rounded-full bg-white/10 px-5 py-3 text-sm text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-accent-blue"
              aria-label="Email for questions"
            />
            <button
              type="submit"
              className="rounded-full bg-accent-blue px-6 text-sm font-semibold text-white transition-colors hover:bg-accent-blue/90"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 px-4 py-5 text-center lg:px-[88px]">
        <p className="text-sm text-white/70">
          Copyright &copy; {year} All rights reserved | This template is made with &#9829; by{' '}
          <a
            href="https://www.componentdock.com/"
            className="font-semibold text-white underline transition-colors hover:text-accent-blue"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
