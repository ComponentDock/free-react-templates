import { MapPin, Phone, Mail } from 'lucide-react'

const quickLinks = ['Home', 'About', 'Causes', 'Events', 'News', 'Contact']

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Our Mission */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Our Mission</h4>
            <p className="mb-4 text-sm text-gray-400">
              We are dedicated to making the world a better place through education, healthcare, and
              sustainable development programs that empower communities worldwide.
            </p>
            <p className="text-sm text-gray-400">
              Every donation and volunteer hour helps us expand our reach and create lasting change
              in underserved communities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-gray-400 transition-colors hover:text-brand">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Gallery */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Gallery</h4>
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <img
                  key={n}
                  src={`https://picsum.photos/seed/shores-gallery-${n}/200/200`}
                  alt={`Gallery ${n}`}
                  className="h-16 w-full rounded object-cover"
                  loading="lazy"
                />
              ))}
            </div>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Contact Us</h4>
            <div className="space-y-4 text-sm text-gray-400">
              <div>
                <p className="mb-1 flex items-center gap-2 font-medium text-white">
                  <MapPin size={14} className="text-brand" />
                  Head Office
                </p>
                <p>123, Main Street, Your City</p>
              </div>
              <div>
                <p className="mb-1 flex items-center gap-2 font-medium text-white">
                  <Phone size={14} className="text-brand" />
                  Phone Number
                </p>
                <p>
                  +123 456 7890
                  <br />
                  +123 456 7890
                </p>
              </div>
              <div>
                <p className="mb-1 flex items-center gap-2 font-medium text-white">
                  <Mail size={14} className="text-brand" />
                  Email
                </p>
                <p>
                  free@infoexample.com
                  <br />
                  www.infoexample.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-4 py-6 text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Shores. More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand hover:underline"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
