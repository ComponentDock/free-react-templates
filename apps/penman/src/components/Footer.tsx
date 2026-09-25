import { MapPin, Phone, Mail } from 'lucide-react'
import { TwitterIcon, FacebookIcon, InstagramIcon } from './social-icons'

const navLinks = ['Home', 'About', 'Chapter', 'Reviews', 'Contact']
const services = ['Experience', 'Marketing Goals', 'Targetting Vission']

export function Footer() {
  return (
    <footer className="bg-gray-900 py-12 text-gray-400">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-8 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">About</h3>
            <p className="mb-4 text-sm leading-relaxed">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Twitter"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <TwitterIcon className="h-[18px] w-[18px]" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <FacebookIcon className="h-[18px] w-[18px]" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <InstagramIcon className="h-[18px] w-[18px]" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Links</h3>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="transition-colors hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Services</h3>
            <ul className="space-y-2 text-sm">
              {services.map((s) => (
                <li key={s}>
                  <a href="#" className="transition-colors hover:text-white">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Have a Questions?</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>203 Fake St. Mountain View, San Francisco, California, USA</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0" />
                <span>+2 392 3929 210</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0" />
                <span>info@yourdomain.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} All rights reserved | Made with{' '}
            <span className="text-red-500">&hearts;</span> by{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-400 transition-colors hover:text-primary-300"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
