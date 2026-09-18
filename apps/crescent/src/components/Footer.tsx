import { ChevronRight, MapPin, Phone, Mail, Clock } from 'lucide-react'

const QUICK_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Events', href: '#events' },
  { label: 'About Us', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Sermons', href: '#sermons' },
  { label: 'Contact', href: '#contact' },
  { label: 'Blog', href: '#blog' },
  { label: 'Donate', href: '#donate' },
]

const LATEST_NEWS = [
  { title: 'Community outreach programs expand', date: 'November 11, 2024' },
  { title: 'New youth ministry launches', date: 'November 11, 2024' },
]

const CONTACT_INFO = [
  { icon: MapPin, text: '40 Baria Street, NewYork City, US' },
  { icon: Phone, text: '001-1234-88888', href: 'tel:001-1234-88888' },
  { icon: Mail, text: 'info@componentdock.com', href: 'mailto:info@componentdock.com' },
  { icon: Clock, text: 'Mon - Fri: 08.00am - 18.00pm' },
]

export function Footer() {
  return (
    <footer className="bg-brand-dark pt-16 pb-8" role="contentinfo" data-testid="footer">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <h5 className="mb-4 text-base font-bold text-white">About Crescent</h5>
            <p className="text-sm leading-relaxed text-muted-text">
              A welcoming community of believers united in faith. Join us as we grow together and
              serve our neighbors with love and compassion.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="mb-4 text-base font-bold text-white">Quick Links</h5>
            <ul className="space-y-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="flex items-center gap-1 text-sm text-muted-text transition-colors hover:text-white"
                  >
                    <ChevronRight className="h-3 w-3 text-brand" /> {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Latest News */}
          <div>
            <h5 className="mb-4 text-base font-bold text-white">Latest News</h5>
            <div className="space-y-4">
              {LATEST_NEWS.map((news) => (
                <div key={news.title}>
                  <a
                    href="#"
                    className="text-sm text-muted-text transition-colors hover:text-white"
                  >
                    {news.title}
                  </a>
                  <p className="mt-1 text-xs text-muted-text/70">
                    <Calendar className="mr-1 inline h-3 w-3" />
                    {news.date}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h5 className="mb-4 text-base font-bold text-white">Contact Us</h5>
            <ul className="space-y-3">
              {CONTACT_INFO.map((info) => (
                <li key={info.text}>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="flex items-start gap-2 text-sm text-muted-text transition-colors hover:text-white"
                    >
                      <info.icon className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                      {info.text}
                    </a>
                  ) : (
                    <span className="flex items-start gap-2 text-sm text-muted-text">
                      <info.icon className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                      {info.text}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-text">
              &copy; {new Date().getFullYear()} All rights reserved | Made with{' '}
              <span className="text-brand">&hearts;</span> by{' '}
              <a
                href="https://www.componentdock.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand transition-opacity hover:opacity-80"
              >
                Component Dock
              </a>
            </p>
            <div className="flex gap-3">
              {['Facebook', 'Twitter', 'LinkedIn', 'Instagram'].map((name) => (
                <a
                  key={name}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-xs text-white/50 transition-colors hover:border-brand hover:text-brand"
                  aria-label={name}
                >
                  {name[0]}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

function Calendar(props: React.SVGProps<SVGSVGElement> & { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  )
}
