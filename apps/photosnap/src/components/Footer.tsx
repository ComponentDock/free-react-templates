import { MapPin, Phone, Mail } from 'lucide-react'

const RECENT_PHOTOS = [1, 2, 3, 4, 5, 6]
const ARCHIVES = [
  { month: 'November 2018', count: 105 },
  { month: 'October 2018', count: 212 },
  { month: 'September 2018', count: 150 },
  { month: 'August 2018', count: 100 },
  { month: 'July 2018', count: 200 },
]

export function Footer() {
  return (
    <footer role="contentinfo" className="bg-dark text-white/50 py-20 px-8 md:px-16 lg:ml-[22%]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Recent Photos */}
          <div>
            <h2 className="text-sm uppercase tracking-[3px] font-semibold text-white mb-8">
              Recent Photos
            </h2>
            <div className="grid grid-cols-3 gap-1">
              {RECENT_PHOTOS.map((n) => (
                <a key={n} href="#" className="block h-[100px] overflow-hidden">
                  <img
                    src={`https://picsum.photos/seed/photosnap-footer-${n}/200/200`}
                    alt={`Recent photo ${n}`}
                    className="w-full h-full object-cover"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Archives */}
          <div>
            <h2 className="text-sm uppercase tracking-[3px] font-semibold text-white mb-8">
              Archives
            </h2>
            <ul className="space-y-2">
              {ARCHIVES.map(({ month, count }) => (
                <li key={month} className="border-b border-white/10 pb-2">
                  <a href="#" className="hover:text-white transition-colors">
                    {month} <span className="text-white/80">({count})</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-sm uppercase tracking-[3px] font-semibold text-white mb-8">
              Have a Questions?
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0" />
                <span>203 Fake St. Mountain View, San Francisco, California, USA</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="shrink-0" />
                <a href="tel:+123923929210" className="hover:text-white transition-colors">
                  +2 392 3929 210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="shrink-0" />
                <a href="mailto:info@photosnap.com" className="hover:text-white transition-colors">
                  info@photosnap.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-6 text-center text-sm">
          <p>
            © {new Date().getFullYear()} All rights reserved | Made with{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-white/70 hover:text-white transition-colors"
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
