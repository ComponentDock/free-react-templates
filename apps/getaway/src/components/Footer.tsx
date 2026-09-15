import { MapPin, Phone, Mail } from 'lucide-react'

const infoLinks = [
  'Online Enquiry',
  'General Enquiries',
  'Booking Conditions',
  'Privacy and Policy',
  'Refund Policy',
  'Call Us',
]
const experienceLinks = ['Adventure', 'Hotel and Restaurant', 'Beach', 'Nature', 'Camping', 'Party']

export function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-12 grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="mb-4 text-xl font-bold text-white">Getaway</h3>
            <p className="mb-4 text-sm text-gray-400">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts.
            </p>
            <div className="flex gap-3">
              {['Twitter', 'Facebook', 'Instagram'].map((social) => (
                <a
                  key={social}
                  href="#"
                  aria-label={social}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-sm text-gray-400 transition hover:bg-sunset-700 hover:text-white"
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Information */}
          <div>
            <h3 className="mb-4 text-xl font-bold text-white">Information</h3>
            <ul className="space-y-2">
              {infoLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-gray-400 transition hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Experience */}
          <div>
            <h3 className="mb-4 text-xl font-bold text-white">Experience</h3>
            <ul className="space-y-2">
              {experienceLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-gray-400 transition hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-xl font-bold text-white">Have a Questions?</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                203 Fake St. Mountain View, San Francisco, California, USA
              </li>
              <li>
                <a
                  href="tel:+23923929210"
                  className="flex items-center gap-2 text-sm text-gray-400 transition hover:text-white"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  +2 392 3929 210
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@yourdomain.com"
                  className="flex items-center gap-2 text-sm text-gray-400 transition hover:text-white"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  info@yourdomain.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} All rights reserved | Made with{' '}
            <span className="text-red-400">&hearts;</span> by{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sunset-400 transition hover:text-sunset-300"
            >
              Component Dock
            </a>
          </p>
          <p className="mt-2 text-xs text-gray-600">
            More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sunset-400 transition hover:text-sunset-300"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
