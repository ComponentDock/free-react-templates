import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const services = [
  'Free Wifi',
  'Easy Booking',
  'Restaurant',
  'Swimming Pool',
  'Beauty & Health',
  '60" Flatscreen TV',
]
const quickLinks = ['About Us', 'Rooms', 'Restaurant & Bar', 'Blog', 'Contact']

export function Footer() {
  return (
    <footer id="contact" className="bg-ink pt-16 pb-8">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* About */}
        <div>
          <h3 className="font-heading text-xl font-bold text-white">Solace Hotel Booking</h3>
          <p className="mt-4 text-sm leading-relaxed text-white/60">
            A small river named Duden flows by their place and supplies it with the necessary
            regelialia. It is a paradisematic country.
          </p>
          <div className="mt-6 flex gap-3">
            {['facebook', 'twitter', 'instagram'].map((social) => (
              <a
                key={social}
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/60 transition-colors hover:bg-brand hover:text-white"
                aria-label={social}
              >
                <span className="text-xs uppercase">{social[0]}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-heading text-xl font-bold text-white">Services</h3>
          <ul className="mt-4 space-y-2">
            {services.map((s) => (
              <li key={s}>
                <a href="#" className="text-sm text-white/60 transition-colors hover:text-brand">
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-heading text-xl font-bold text-white">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            {quickLinks.map((l) => (
              <li key={l}>
                <a href="#" className="text-sm text-white/60 transition-colors hover:text-brand">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-heading text-xl font-bold text-white">Have a Question?</h3>
          <ul className="mt-4 space-y-3">
            <li className="flex items-start gap-3 text-sm text-white/60">
              <MapPin size={16} className="mt-0.5 shrink-0 text-brand" />
              203 Fake St. Mountain View, San Francisco, California, USA
            </li>
            <li className="flex items-center gap-3 text-sm text-white/60">
              <Phone size={16} className="shrink-0 text-brand" />
              +1 234 567 8901
            </li>
            <li className="flex items-center gap-3 text-sm text-white/60">
              <Mail size={16} className="shrink-0 text-brand" />
              info@solace.com
            </li>
            <li className="flex items-center gap-3 text-sm text-white/60">
              <Clock size={16} className="shrink-0 text-brand" />
              24/7 Reception
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright + Component Dock */}
      <div className="mx-auto mt-12 max-w-6xl border-t border-white/10 px-4 pt-8 text-center text-sm text-white/40">
        <p>© {new Date().getFullYear()} Solace. All rights reserved.</p>
        <p className="mt-1">
          More templates at{' '}
          <a
            href="https://www.componentdock.com/"
            className="text-brand underline transition-colors hover:text-white"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
