import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Departments', href: '#departments' },
  { label: 'Blog', href: '#blog' },
]

const services = ['Primary Care', 'Lab Tests', 'Emergency Care', 'Outdoor Checkup', 'Dental Care']

const hours = [
  { day: 'Monday – Friday', time: '8:00 AM – 6:00 PM' },
  { day: 'Saturday', time: '9:00 AM – 4:00 PM' },
  { day: 'Sunday', time: 'Closed' },
]

export function Footer() {
  return (
    <footer id="contact" className="bg-footer-bg py-16 text-white" data-testid="footer">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Logo + Description + Contact */}
          <div>
            <h3 className="mb-4 text-2xl font-bold text-white">Healwise</h3>
            <p className="mb-6 text-sm leading-relaxed text-white/60">
              Healwise is a leading healthcare provider dedicated to comprehensive medical services
              and personalized patient care.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-white/60">
                <MapPin size={16} className="shrink-0 text-brand" />
                123 Medical Ave, Health City, HC 12345
              </li>
              <li className="flex items-center gap-3 text-sm text-white/60">
                <Phone size={16} className="shrink-0 text-brand" />
                +1 (234) 567-8900
              </li>
              <li className="flex items-center gap-3 text-sm text-white/60">
                <Mail size={16} className="shrink-0 text-brand" />
                info@healwise.com
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-brand"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Services</h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-sm text-white/60 transition-colors hover:text-brand"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Opening Hours</h3>
            <ul className="space-y-3">
              {hours.map((h) => (
                <li key={h.day} className="flex items-start gap-3 text-sm text-white/60">
                  <Clock size={16} className="mt-0.5 shrink-0 text-brand" />
                  <div>
                    <p className="font-medium text-white/80">{h.day}</p>
                    <p>{h.time}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/40">
          <p>
            More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-brand hover:underline"
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
