import { MapPin, Phone, Mail } from 'lucide-react'
import { BrandIcon } from './BrandIcon'

export function Footer() {
  return (
    <footer className="bg-dark-600 text-gray-300 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-white font-bold mb-4">About Us</h4>
            <p className="text-sm leading-relaxed text-gray-400">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about-section" className="hover:text-primary-300 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#services-section" className="hover:text-primary-300 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#team-section" className="hover:text-primary-300 transition-colors">
                  Team
                </a>
              </li>
              <li>
                <a href="#blog-section" className="hover:text-primary-300 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact-section" className="hover:text-primary-300 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Follow Us</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="text-gray-400 hover:text-primary-300 transition-colors"
                aria-label="Facebook"
              >
                <BrandIcon name="facebook" size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary-300 transition-colors"
                aria-label="Twitter"
              >
                <BrandIcon name="twitter" size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary-300 transition-colors"
                aria-label="Instagram"
              >
                <BrandIcon name="instagram" size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary-300 transition-colors"
                aria-label="LinkedIn"
              >
                <BrandIcon name="linkedin" size={20} />
              </a>
            </div>
            <div className="mt-6 space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <MapPin size={14} />
                <span>233 Salonica, FL 32807</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} />
                <span>+1 (123) 456-7890</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} />
                <span>info@dictum.com</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Subscribe Newsletter</h4>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-4 py-2 bg-transparent border border-gray-500 rounded-l text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary-300"
                aria-label="Email address for newsletter"
              />
              <button
                type="submit"
                className="bg-primary-300 text-white px-4 py-2 rounded-r text-sm font-semibold hover:bg-primary-400 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-600 mt-12 pt-8 text-center text-sm text-gray-500">
          <p>
            &copy; 2026 Dictum. All rights reserved. Made with{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-primary-300 hover:underline"
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
