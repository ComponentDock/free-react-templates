import { Mail, MapPin, Phone } from 'lucide-react'

const serviceLinks = [
  'Tooth Protection',
  'Dental Implants',
  'Teeth Whitening',
  'Dental Care',
  'Tooth Removal',
  'Removal of Tartar',
]

const quickLinks = ['About', 'Services', 'Doctors', 'Blog', 'Contact']

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Odonto</h3>
            <p className="text-sm leading-relaxed">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a href="#services" className="hover:text-teal-400 transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="hover:text-teal-400 transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Have a Questions?</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-teal-400" />
                <span>203 Fake St. Mountain View, San Francisco, CA, USA</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0 text-teal-400" />
                <span>(+1) 123 456 7890</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0 text-teal-400" />
                <span>info@odonto.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 flex flex-wrap items-center justify-between text-sm">
          <p>
            &copy; {new Date().getFullYear()} All rights reserved. Made with{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-teal-400 hover:underline"
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
