import { Phone } from 'lucide-react'

const navLinks = ['Home', 'About us', 'Properties', 'News', 'Contact']

const latestProperties = [
  {
    id: 1,
    image: 'https://picsum.photos/seed/bluecoast-f1/80/60',
    location: 'New York, NY',
    name: 'Skyline Apartment',
    price: '$2,500/mo',
  },
  {
    id: 2,
    image: 'https://picsum.photos/seed/bluecoast-f2/80/60',
    location: 'Los Angeles, CA',
    name: 'Sunset Villa',
    price: '$3,800/mo',
  },
  {
    id: 3,
    image: 'https://picsum.photos/seed/bluecoast-f3/80/60',
    location: 'Chicago, IL',
    name: 'Lakeview Condo',
    price: '$1,900/mo',
  },
]

export function Footer() {
  return (
    <footer className="bg-footer-dark pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Top row: logo + Latest Properties */}
        <div className="mb-10 flex items-baseline justify-between">
          <span className="text-3xl font-bold text-white">BlueCoast</span>
          <h3 className="text-lg font-bold text-white">Latest Properties</h3>
        </div>

        {/* Middle row: about + 3 property listings */}
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <p className="text-sm leading-relaxed text-white/60">
              BlueCoast helps you find your perfect property. Browse our listings for homes,
              apartments, and villas in top cities across the country.
            </p>
          </div>

          {/* Property listings */}
          {latestProperties.map((prop) => (
            <div key={prop.id} className="flex gap-4">
              <img
                src={prop.image}
                alt={prop.name}
                className="h-14 w-16 flex-shrink-0 rounded object-cover"
              />
              <div>
                <p className="text-xs text-white/40">{prop.location}</p>
                <a href="#" className="text-sm font-medium text-white hover:text-accent-green">
                  {prop.name}
                </a>
                <p className="mt-1 text-sm font-semibold text-accent-green">{prop.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 pt-6 sm:flex-row">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} BlueCoast. All rights reserved.
          </p>
          <nav className="flex gap-4">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s/g, '-')}`}
                className="text-xs text-white/40 transition-colors hover:text-white"
              >
                {link}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2 text-xs text-white/40">
            <Phone size={14} />
            +1 (555) 123-4567
          </div>
        </div>

        {/* Component Dock attribution */}
        <div className="mt-6 text-center">
          <p className="text-xs text-white/40">
            More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-accent-green transition-colors hover:text-white"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
