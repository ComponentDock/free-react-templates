import { Phone, MapPin, Mail } from 'lucide-react'
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedinIcon,
  DribbbleIcon,
} from './social-icons'

const usefulLinks = ['Home', 'About', 'Listings', 'News', 'Contact']
const propertyTypes = ['House', 'Apartment', 'Villa', 'Office', 'Building']

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1 - About */}
          <div>
            <a href="#" className="text-2xl font-bold tracking-wide mb-4 block">
              roof<span className="text-brand-green">mark</span>
            </a>
            <p className="text-brand-light-muted text-sm leading-relaxed mb-6">
              We are the best real estate agency in the country. Find your dream home with us and
              experience world-class service.
            </p>
            <div className="flex gap-3 mb-6">
              {[FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon, DribbbleIcon].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-green transition-colors"
                  >
                    <Icon size={14} />
                  </a>
                ),
              )}
            </div>
            <a
              href="#"
              className="inline-block bg-brand-green hover:bg-brand-green/90 text-white text-sm font-semibold uppercase tracking-wide px-5 py-2.5 rounded transition-colors"
            >
              Submit Listing
            </a>
          </div>

          {/* Col 2 - Information */}
          <div>
            <h4 className="text-lg font-bold mb-6">Information</h4>
            <ul className="space-y-4 text-brand-light-muted text-sm">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-brand-green shrink-0" />
                (123) 456 789
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-brand-green shrink-0" />
                123 Some Address, Country
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-brand-green shrink-0" />
                info@roofmark.com
              </li>
            </ul>
          </div>

          {/* Col 3 - Useful Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Useful Links</h4>
            <ul className="space-y-3">
              {usefulLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-brand-light-muted text-sm hover:text-brand-green transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 - Property Types */}
          <div>
            <h4 className="text-lg font-bold mb-6">Property Types</h4>
            <ul className="space-y-3 mb-8">
              {propertyTypes.map((type) => (
                <li key={type}>
                  <a
                    href="#"
                    className="text-brand-light-muted text-sm hover:text-brand-green transition-colors"
                  >
                    {type}
                  </a>
                </li>
              ))}
            </ul>

            {/* Mini featured card */}
            <div className="relative rounded overflow-hidden">
              <img
                src="https://picsum.photos/seed/roofmark-9/400/200"
                alt="Featured property"
                className="w-full h-32 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                <span className="bg-brand-green text-white text-xs font-semibold px-3 py-1 rounded">
                  $1,200
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom link */}
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-brand-light-muted text-sm">
            Built by{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-green hover:underline"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
