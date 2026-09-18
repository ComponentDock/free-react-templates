import { MapPin, Phone, Mail } from 'lucide-react'

const quickLinks = ['Home', 'About', 'Services', 'Works', 'Blog', 'Contact']

const latestNews = [
  {
    title: "How Regular Pressure Washing Extends Your Home's Lifespan",
    date: 'Jun 14, 2024',
    author: 'Admin',
    comments: 19,
    img: 'https://picsum.photos/seed/pw-blog-1/100/100',
  },
  {
    title: '5 Signs Your Driveway Needs Professional Cleaning',
    date: 'May 28, 2024',
    author: 'Admin',
    comments: 19,
    img: 'https://picsum.photos/seed/pw-blog-2/100/100',
  },
]

export function Footer() {
  return (
    <footer className="bg-dark-900 text-white pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand + social */}
          <div>
            <h3 className="text-xl font-bold mb-4">PowerWash</h3>
            <p className="text-dark-400 text-sm leading-relaxed mb-4">
              Professional pressure washing services for residential and commercial properties.
              Making surfaces shine since 1974.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-500 transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-500 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-500 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="5"
                    ry="5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Latest News */}
          <div>
            <h3 className="text-xl font-bold mb-4">Latest News</h3>
            {latestNews.map((n) => (
              <div key={n.title} className="flex gap-3 mb-4">
                <img src={n.img} alt="" className="w-16 h-16 rounded object-cover shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold leading-snug mb-1 hover:text-brand-400 cursor-pointer transition-colors">
                    {n.title}
                  </h4>
                  <div className="text-xs text-dark-400 flex gap-2">
                    <span>{n.date}</span>
                    <span>{n.author}</span>
                    <span>{n.comments}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-dark-400 text-sm hover:text-brand-400 transition-colors block py-1"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Have a Questions?</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-dark-400">
                <MapPin size={16} className="shrink-0 mt-0.5" />
                <span>203 Fake St. Mountain View, San Francisco, California, USA</span>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 text-sm text-dark-400 hover:text-brand-400 transition-colors"
                >
                  <Phone size={16} className="shrink-0" />
                  <span>+2 392 3929 210</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 text-sm text-dark-400 hover:text-brand-400 transition-colors"
                >
                  <Mail size={16} className="shrink-0" />
                  <span>info@yourdomain.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright bar */}
        <div className="border-t border-dark-700 pt-6 text-center">
          <p className="text-dark-400 text-sm">
            &copy; {new Date().getFullYear()} PowerWash. All rights reserved. More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-400 hover:text-brand-300 transition-colors"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
