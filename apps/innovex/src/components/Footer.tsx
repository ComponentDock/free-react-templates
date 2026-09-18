import { Phone, Mail, MapPin, Send } from 'lucide-react'

const companyLinks = ['About', 'Pricing', 'Blog', 'Contact']
const serviceLinks = ['Web Development', 'App Development', 'UX/UI Design', 'Graphic Design']

export function Footer() {
  return (
    <footer className="bg-dark pt-16 pb-8 text-gray-300">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <a href="#" className="mb-4 block font-script text-3xl text-white">
              Innovex
            </a>
            <p className="mb-4 text-sm text-gray-400">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts.
            </p>
            <div className="flex gap-3">
              {['Facebook', 'Twitter', 'Instagram', 'Dribbble'].map((name) => (
                <a
                  key={name}
                  href="#"
                  aria-label={name}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-dark-lighter text-gray-400 transition-colors hover:bg-primary-300 hover:text-dark"
                >
                  {name[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-gray-400 transition-colors hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-gray-400 transition-colors hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <MapPin size={16} className="shrink-0 text-primary-300" />
                <span>123 Street, City, Country</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <Phone size={16} className="shrink-0 text-primary-300" />
                <a href="tel:+001234567" className="hover:text-white">
                  +00 1234 567
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <Mail size={16} className="shrink-0 text-primary-300" />
                <a href="mailto:email@example.com" className="hover:text-white">
                  email@example.com
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter email"
                  className="w-full rounded-l bg-dark-lighter px-3 py-2 text-sm text-white placeholder-gray-500 outline-none"
                  aria-label="Email for newsletter"
                />
                <button
                  className="rounded-r bg-primary-300 px-3 py-2 text-dark transition-colors hover:bg-primary-400"
                  aria-label="Subscribe"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-dark-lighter pt-8 text-center text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} All rights reserved | Made with{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-primary-300 hover:text-primary-400"
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
