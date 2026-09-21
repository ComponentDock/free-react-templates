import { Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-[#333] text-[#8c8c8c] py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Asana Studio</h3>
            <p className="text-sm leading-relaxed">
              A welcoming space for yoga practitioners of all levels. Discover balance, strength,
              and serenity through our classes and community.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#classes" className="hover:text-white transition-colors">
                  Classes
                </a>
              </li>
              <li>
                <a href="#schedule" className="hover:text-white transition-colors">
                  Schedule
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  Gallery
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#events" className="hover:text-white transition-colors">
                  Events
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <MapPin size={14} />
                <span>123 Yoga Lane, Wellness City</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} />
                <span>+1 234 567 8910</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} />
                <span>info@asana.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-10 pt-8 text-center text-sm">
          <p>
            Made with{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-white hover:text-brand-400 transition-colors"
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
