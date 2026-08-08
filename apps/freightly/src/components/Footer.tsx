import { Clock, Mail, MapPin, Phone, Truck } from 'lucide-react'

const serviceLinks = [
  'Air Freight',
  'Ocean Freight',
  'Ground Transport',
  'Warehousing',
  'Customs Brokerage',
  'Express Delivery',
]

const quickLinks = [
  { label: 'Get a Quote', href: '#calculator' },
  { label: 'Track Shipment', href: '#home' },
  { label: 'Why Choose Us', href: '#why-us' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact Us', href: '#contact' },
]

const contactDetails = [
  { label: 'Phone', value: '1-800-SWIFT-GO', icon: Phone },
  { label: 'Email', value: 'hello@freightly.com', icon: Mail },
  { label: 'Address', value: '1250 Logistics Way, Chicago, IL', icon: MapPin },
  { label: 'Hours', value: 'Mon–Fri 8 AM – 6 PM', icon: Clock },
]

export function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2.5" aria-label="Freightly home">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-600 text-white">
                <Truck className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="text-xl font-extrabold tracking-tight text-white">
                Freight<span className="text-primary-500">ly</span>
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-400">
              Global freight forwarding, warehousing, and express delivery — reliable shipping
              solutions for businesses of every size.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Services</h3>
            <ul className="mt-4 space-y-3">
              {serviceLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#services"
                    className="text-sm text-gray-400 transition-colors hover:text-primary-400"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Quick Links</h3>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-primary-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Contact</h3>
            <ul className="mt-4 space-y-3">
              {contactDetails.map((detail) => (
                <li key={detail.label} className="flex items-center gap-2 text-sm text-gray-400">
                  <detail.icon className="h-4 w-4 text-primary-500" aria-hidden="true" />
                  {detail.value}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-8 sm:flex-row">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Freightly. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#home"
              className="text-xs text-gray-500 transition-colors hover:text-primary-400"
            >
              Privacy Policy
            </a>
            <a
              href="#home"
              className="text-xs text-gray-500 transition-colors hover:text-primary-400"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
