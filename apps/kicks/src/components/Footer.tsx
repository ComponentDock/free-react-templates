import { MapPin, Phone, Mail } from 'lucide-react'
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from './social-icons'

const customerCareLinks = ['Contact Us', 'Shipping', 'Returns', 'Size Guide', 'FAQ']
const informationLinks = ['About Us', 'Careers', 'Privacy Policy', 'Terms & Conditions']
const newsLinks = ['Blog', 'Press', 'Affiliates', 'Gift Cards']

export function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="mx-auto max-w-7xl px-5 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          <div>
            <h2 className="text-lg font-heading font-bold mb-3">Kicks</h2>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Quality, well-designed shoes that we wanted ourselves. From casual to performance,
              we&apos;ve got your feet covered.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="p-2 bg-white/10 hover:bg-brand-500 transition-colors rounded-full"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="p-2 bg-white/10 hover:bg-brand-500 transition-colors rounded-full"
              >
                <TwitterIcon className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="p-2 bg-white/10 hover:bg-brand-500 transition-colors rounded-full"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="p-2 bg-white/10 hover:bg-brand-500 transition-colors rounded-full"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider mb-3">Customer Care</h2>
            <ul className="space-y-2 text-sm text-gray-400">
              {customerCareLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider mb-3">Information</h2>
            <ul className="space-y-2 text-sm text-gray-400">
              {informationLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider mb-3">News</h2>
            <ul className="space-y-2 text-sm text-gray-400">
              {newsLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider mb-3">Contact Information</h2>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>123 Shoe Street, Fashion District, NY 10001</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <a href="tel:+1234567890" className="hover:text-white transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <a href="mailto:info@kicks.com" className="hover:text-white transition-colors">
                  info@kicks.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <span>&copy; 2026 Kicks. All rights reserved.</span>
          <a href="https://www.componentdock.com/" className="hover:text-white transition-colors">
            Built by Component Dock
          </a>
        </div>
      </div>
    </footer>
  )
}
