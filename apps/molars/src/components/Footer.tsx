import { useState } from 'react'
import type { FormEvent } from 'react'

const navLinks = [
  'Home',
  'Services',
  'News',
  'Team',
  'About Us',
  'Privacy Policy',
  'Contact Us',
  'Membership',
] as const

const news = [
  {
    date: 'Sep 16, 2024',
    title: 'New advanced teeth whitening treatments now available',
    image: 'https://picsum.photos/seed/molars-news1/80/80',
  },
  {
    date: 'Sep 12, 2024',
    title: 'Tips for maintaining healthy gums this autumn',
    image: 'https://picsum.photos/seed/molars-news2/80/80',
  },
  {
    date: 'Sep 8, 2024',
    title: 'Meet our newest orthodontic specialist on the team',
    image: 'https://picsum.photos/seed/molars-news3/80/80',
  },
] as const

export function Footer() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setEmail('')
  }

  return (
    <footer className="bg-footer py-16 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
        {/* Navigation */}
        <div>
          <h3 className="mb-5 text-lg font-semibold">Navigation</h3>
          <ul className="grid grid-cols-2 gap-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link}>
                <a href="#" className="text-footer-link transition-colors hover:text-white">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Recent News */}
        <div>
          <h3 className="mb-5 text-lg font-semibold">Recent News</h3>
          <ul className="space-y-4">
            {news.map((item) => (
              <li key={item.title}>
                <a href="#" className="flex gap-3">
                  <img
                    src={item.image}
                    alt=""
                    className="h-14 w-14 shrink-0 object-cover"
                    loading="lazy"
                  />
                  <div>
                    <span className="block text-xs uppercase text-footer-link">{item.date}</span>
                    <span className="text-sm font-light leading-snug text-white/90">
                      {item.title}
                    </span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter + Social */}
        <div>
          <h3 className="mb-3 text-lg font-semibold">Subscribe Newsletter</h3>
          <p className="mb-4 text-sm text-footer-muted">
            Stay updated with our latest news and dental care tips.
          </p>
          <form onSubmit={handleSubmit} className="mb-6">
            <label htmlFor="footer-email" className="sr-only">
              Enter Email
            </label>
            <div className="flex">
              <input
                id="footer-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email"
                className="flex-1 border border-white bg-transparent px-4 py-2.5 text-sm text-white placeholder:text-white/60 focus:border-white focus:outline-none"
              />
              <button
                type="submit"
                className="bg-primary-400 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-500"
              >
                Send
              </button>
            </div>
          </form>
          <h4 className="mb-3 text-base font-semibold">Follow Us</h4>
          <div className="flex gap-4">
            {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((name) => (
              <a
                key={name}
                href="#"
                aria-label={name}
                className="text-footer-link transition-colors hover:text-white"
              >
                {name.charAt(0)}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright + Component Dock */}
      <div className="mx-auto mt-12 max-w-6xl border-t border-white/20 px-4 pt-6 text-center text-xs text-footer-muted">
        © {new Date().getFullYear()} All rights reserved · Made with{' '}
        <a
          href="https://www.componentdock.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-primary-400 transition-colors hover:text-primary-300"
        >
          Component Dock
        </a>
      </div>
    </footer>
  )
}
