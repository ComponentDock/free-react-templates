import { MapPin, Phone, Send } from 'lucide-react'

const quickLinks = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Sermons', href: '#sermons' },
  { label: 'Events', href: '#events' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#footer' },
]

const latestNews = [
  {
    title: 'Even the all-powerful Pointing has no control about',
    date: 'Aug. 10, 2029',
    author: 'Admin',
    comments: 19,
    image: 'https://picsum.photos/seed/ministry-footer1/80/80',
  },
  {
    title: 'Even the all-powerful Pointing has no control about',
    date: 'Aug. 10, 2029',
    author: 'Admin',
    comments: 19,
    image: 'https://picsum.photos/seed/ministry-footer2/80/80',
  },
]

const footerSocials = [
  {
    label: 'Twitter',
    path: 'M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z',
  },
  { label: 'Facebook', path: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' },
  {
    label: 'Instagram',
    path: 'M16 8a6 6 0 0 1 6 6v7a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V10a6 6 0 0 1 6-6zm-5.5 3.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM12 17.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11z',
  },
]

export function Footer() {
  return (
    <footer id="footer" className="bg-footer-bg text-white pt-12 pb-6">
      <div className="max-w-[1300px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div>
            <h2 className="text-lg font-bold mb-3">Ministry</h2>
            <p className="text-sm text-white/60 leading-relaxed mb-4">
              A small river named Duden flows by their place and supplies it with the necessary
              regelialia.
            </p>
            <div className="flex gap-2">
              {footerSocials.map((social) => (
                <a
                  key={social.label}
                  href="#"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-brand transition-colors"
                  aria-label={social.label}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                    aria-hidden="true"
                  >
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Latest News */}
          <div>
            <h2 className="text-lg font-bold mb-3">Latest News</h2>
            <div className="space-y-4">
              {latestNews.map((news, i) => (
                <div key={i} className="flex gap-3">
                  <img
                    src={news.image}
                    alt=""
                    className="w-16 h-16 rounded object-cover shrink-0"
                  />
                  <div>
                    <h3 className="text-sm font-medium leading-snug">
                      <a href="#" className="text-white hover:text-brand transition-colors">
                        {news.title}
                      </a>
                    </h3>
                    <div className="text-xs text-white/50 mt-1 flex gap-2">
                      <span>{news.date}</span>
                      <span>{news.author}</span>
                      <span>{news.comments}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-bold mb-3">Quick Links</h2>
            <ul className="space-y-1 list-none p-0 m-0">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-brand transition-colors py-1 block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-lg font-bold mb-3">Have a Questions?</h2>
            <ul className="space-y-3 list-none p-0 m-0">
              <li className="flex items-start gap-2 text-sm text-white/60">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" aria-hidden="true" />
                <span>203 Fake St. Mountain View, San Francisco, California, USA</span>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 text-sm text-white/60 hover:text-brand transition-colors"
                >
                  <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>+2 392 3929 210</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 text-sm text-white/60 hover:text-brand transition-colors"
                >
                  <Send className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>info@yourdomain.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-5 text-center">
          <p className="text-xs text-white/50">
            Copyright &copy; {new Date().getFullYear()} All rights reserved | Made with{' '}
            <span className="text-brand" aria-label="love">
              ♥
            </span>{' '}
            by{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-brand transition-colors"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
