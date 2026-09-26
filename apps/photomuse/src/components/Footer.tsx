import { MapPin, Phone, Mail } from 'lucide-react'

const recentPhotos = [
  'photomuse-foot-1',
  'photomuse-foot-2',
  'photomuse-foot-3',
  'photomuse-foot-4',
  'photomuse-foot-5',
  'photomuse-foot-6',
]

const archives = [
  { month: 'November 2024', count: 105 },
  { month: 'October 2024', count: 212 },
  { month: 'September 2024', count: 150 },
  { month: 'August 2024', count: 100 },
  { month: 'July 2024', count: 200 },
]

export function Footer() {
  return (
    <footer id="contact" className="bg-dark py-16 text-gray-300 max-lg:ml-0 lg:ml-64">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 grid grid-cols-3 gap-8 max-md:grid-cols-1">
          {/* Recent Photos */}
          <div>
            <h3 className="mb-4 font-display text-lg font-bold text-white">Recent Photos</h3>
            <ul className="grid grid-cols-3 gap-2">
              {recentPhotos.map((seed) => (
                <li key={seed}>
                  <a href="#" className="block aspect-square overflow-hidden rounded">
                    <img
                      src={`https://picsum.photos/seed/${seed}/100/100`}
                      alt="Recent photo"
                      className="h-full w-full object-cover transition-transform hover:scale-110"
                      loading="lazy"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Archives */}
          <div>
            <h3 className="mb-4 font-display text-lg font-bold text-white">Archives</h3>
            <ul className="space-y-2">
              {archives.map((archive) => (
                <li key={archive.month}>
                  <a
                    href="#"
                    className="text-sm text-gray-300 transition-colors hover:text-brand-300"
                  >
                    {archive.month} <span className="text-muted">({archive.count})</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-display text-lg font-bold text-white">Have a Questions?</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />
                <span>203 Fake St. Mountain View, San Francisco, California, USA</span>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 text-sm transition-colors hover:text-brand-300"
                >
                  <Phone className="h-4 w-4 shrink-0 text-brand-300" />
                  <span>+2 392 3929 210</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 text-sm transition-colors hover:text-brand-300"
                >
                  <Mail className="h-4 w-4 shrink-0 text-brand-300" />
                  <span>info@yourdomain.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 text-center text-sm text-muted">
          <p>
            &copy; {new Date().getFullYear()} All rights reserved | Made with{' '}
            <span className="text-red-400">&#9829;</span> by{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-300 transition-colors hover:text-brand-400"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
