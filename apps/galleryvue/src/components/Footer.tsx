import { Heart } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const CATEGORIES = [
  { name: 'Photography', count: 6 },
  { name: 'Fashion', count: 8 },
  { name: 'Technology', count: 2 },
  { name: 'Travel', count: 2 },
]

const ARCHIVES = [
  { month: 'November 2018', count: 105 },
  { month: 'October 2018', count: 212 },
  { month: 'September 2018', count: 150 },
  { month: 'August 2018', count: 100 },
  { month: 'July 2018', count: 200 },
]

interface FooterProps {
  className?: string
}

export function Footer({ className }: FooterProps) {
  return (
    <footer
      className={cn('bg-footer-bg py-24 px-6 md:px-12 lg:px-20', className)}
      data-testid="footer"
    >
      <div className="mx-auto max-w-6xl">
        {/* Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          {/* Categories */}
          <div>
            <h2 className="text-white text-base font-bold uppercase tracking-wider mb-8">
              Category
            </h2>
            <ul className="space-y-0">
              {CATEGORIES.map(({ name, count }) => (
                <li key={name} className="border-b border-white/10 py-2">
                  <a
                    href="#"
                    className="text-footer-text hover:text-white transition-colors duration-300 no-underline"
                  >
                    {name} <span className="text-footer-heading ml-1">({count})</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Archives */}
          <div>
            <h2 className="text-white text-base font-bold uppercase tracking-wider mb-8">
              Archives
            </h2>
            <ul className="space-y-0">
              {ARCHIVES.map(({ month, count }) => (
                <li key={month} className="border-b border-white/10 py-2">
                  <a
                    href="#"
                    className="text-footer-text hover:text-white transition-colors duration-300 no-underline"
                  >
                    {month} <span className="text-footer-heading ml-1">({count})</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-white text-base font-bold uppercase tracking-wider mb-8">
              Have a Questions?
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <svg
                  className="w-4 h-4 mt-1 text-footer-text shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <span className="text-footer-text text-sm">
                  203 Fake St. Mountain View, San Francisco, California, USA
                </span>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  className="w-4 h-4 text-footer-text shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                <a
                  href="#"
                  className="text-footer-text hover:text-white transition-colors duration-300 text-sm no-underline"
                >
                  +2 392 3929 210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  className="w-4 h-4 text-footer-text shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <a
                  href="#"
                  className="text-footer-text hover:text-white transition-colors duration-300 text-sm no-underline"
                >
                  info@yourdomain.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-footer-text text-sm">
            &copy; {new Date().getFullYear()} All rights reserved | Made with{' '}
            <Heart size={12} className="inline text-white/50" /> by{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-footer-text hover:text-white transition-colors duration-300 no-underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
