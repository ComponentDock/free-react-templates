import { Phone, Mail, MapPin } from 'lucide-react'

const categories = [
  { label: 'Hot Deals', href: '#' },
  { label: 'Laptops', href: '#' },
  { label: 'Smartphones', href: '#' },
  { label: 'Cameras', href: '#' },
  { label: 'Accessories', href: '#' },
]

const information = [
  { label: 'About Us', href: '#' },
  { label: 'Contact Us', href: '#' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Orders and Returns', href: '#' },
  { label: 'Terms & Conditions', href: '#' },
]

const service = [
  { label: 'My Account', href: '#' },
  { label: 'View Cart', href: '#' },
  { label: 'Wishlist', href: '#' },
  { label: 'Track My Order', href: '#' },
  { label: 'Help', href: '#' },
]

export function Footer() {
  return (
    <footer>
      {/* Main footer */}
      <div className="bg-dark-bg py-12 text-footer-text">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 md:grid-cols-4">
          {/* About Us */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">About Us</h3>
            <div className="mb-2 space-y-2 text-sm">
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-brand" />
                123 Commerce St, New York, NY 10001
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-brand" />
                +1 (234) 567 890
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-brand" />
                shop@joule.com
              </p>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Categories</h3>
            <ul className="space-y-2 text-sm">
              {categories.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="transition-colors hover:text-white">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Information</h3>
            <ul className="space-y-2 text-sm">
              {information.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="transition-colors hover:text-white">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Service</h3>
            <ul className="space-y-2 text-sm">
              {service.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="transition-colors hover:text-white">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="bg-darker-bg py-4 text-center text-sm text-footer-text">
        <div className="mx-auto max-w-7xl px-4">
          <p>
            &copy; {new Date().getFullYear()} Joule. Made with{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-brand transition-colors hover:text-white"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
