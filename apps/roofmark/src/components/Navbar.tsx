import { Phone, MapPin, Mail } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedinIcon,
  DribbbleIcon,
} from './social-icons'

const navLinks = ['Home', 'About us', 'Listings', 'News', 'Contact']

export function Navbar() {
  return (
    <header>
      {/* Top bar */}
      <div className="bg-brand-purple text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-12">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5">
              <Phone size={14} /> (123) 456 789
            </span>
            <span className="hidden sm:flex items-center gap-1.5">
              <MapPin size={14} /> 123 Some Address, Country
            </span>
            <span className="hidden md:flex items-center gap-1.5">
              <Mail size={14} /> info@roofmark.com
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-3">
              {[FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon, DribbbleIcon].map(
                (Icon, i) => (
                  <a key={i} href="#" className="hover:text-brand-green transition-colors">
                    <Icon size={14} />
                  </a>
                ),
              )}
            </div>
            <span className="text-white/60">|</span>
            <a href="#" className="hover:text-brand-green transition-colors">
              Login
            </a>
            <a href="#" className="hover:text-brand-green transition-colors">
              Register
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <a href="#" className="text-2xl font-bold tracking-wide text-brand-body">
            roof<span className="text-brand-green">mark</span>
          </a>
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className={cn(
                    'text-sm font-medium uppercase tracking-wide hover:text-brand-green transition-colors',
                    link === 'Home' ? 'text-brand-green' : 'text-brand-body',
                  )}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#"
            className="bg-brand-green hover:bg-brand-green/90 text-white text-sm font-semibold uppercase tracking-wide px-5 py-2.5 rounded transition-colors"
          >
            Submit Listing
          </a>
        </div>
      </nav>
    </header>
  )
}
