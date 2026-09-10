import { Calendar, Phone, MapPin } from 'lucide-react'

const quickLinks = ['Purchase', 'Payment', 'Shipping', 'Return', 'Detailing'] as const

const newsItems = [
  { title: 'Professional Auto Care Guide', date: 'November 11, 2024' },
  { title: 'Best Practices for Car Maintenance', date: 'November 5, 2024' },
  { title: 'Understanding Engine Diagnostics', date: 'October 28, 2024' },
] as const

export function Footer() {
  return (
    <footer role="contentinfo" className="bg-dark-bg text-gray-400">
      {/* Top CTA tiles */}
      <div className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl md:grid-cols-3">
          <div className="flex items-center gap-4 border-r border-white/10 px-8 py-8">
            <Calendar className="h-10 w-10 shrink-0 text-primary-400" aria-hidden="true" />
            <div>
              <p className="text-sm text-gray-400">Booking Repair</p>
              <h3 className="font-display text-lg font-bold text-white">Appointment</h3>
            </div>
          </div>
          <div className="flex items-center gap-4 border-r border-white/10 px-8 py-8">
            <Phone className="h-10 w-10 shrink-0 text-primary-400" aria-hidden="true" />
            <div>
              <p className="text-sm text-gray-400">Contact Us Now!</p>
              <h3 className="font-display text-lg font-bold text-white">123-4567-7890</h3>
            </div>
          </div>
          <div className="flex items-center gap-4 px-8 py-8">
            <MapPin className="h-10 w-10 shrink-0 text-primary-400" aria-hidden="true" />
            <div>
              <p className="text-sm text-gray-400">Location</p>
              <h3 className="font-display text-lg font-bold text-white">Find us on map</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom columns */}
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <a
            href="#home"
            className="font-display text-2xl font-bold tracking-wide text-primary-400"
          >
            Veloce
          </a>
          <p className="mt-4 text-sm leading-relaxed">
            Professional automotive services delivered with precision. Engine overhauls,
            diagnostics, upgrades, and more.
          </p>
          <a
            href="#contact"
            className="mt-6 inline-block rounded-sm bg-primary-400 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-primary-500"
          >
            Contact Us
          </a>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {quickLinks.map((link) => (
              <li key={link}>
                <a href="#links" className="transition-colors hover:text-primary-400">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">News</h4>
          <ul className="mt-4 space-y-4">
            {newsItems.map((item) => (
              <li key={item.title}>
                <a href="#news" className="text-sm transition-colors hover:text-primary-400">
                  {item.title}
                </a>
                <span className="mt-1 block text-xs text-gray-500">{item.date}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">My Office</h4>
          <p className="mt-4 text-sm">Address: 7986 Pennsylvania St. Rockville Centre, NY</p>
          <ul className="mt-3 space-y-1 text-sm">
            <li>Fax: (+123) 4567-7890-123</li>
            <li>Mobile: (+123) 4567-7890-123</li>
            <li>Email: Hello@veloce.dev</li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 py-5 text-center text-sm">
        © {new Date().getFullYear()} Veloce. All rights reserved. More templates at{' '}
        <a
          href="https://www.componentdock.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-400 transition-colors hover:text-primary-300"
        >
          Component Dock
        </a>
      </div>
    </footer>
  )
}
