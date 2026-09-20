import { Phone, Mail, MapPin } from 'lucide-react'

const quickLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Courses', href: '#courses' },
  { label: 'Instructors', href: '#instructors' },
  { label: 'Events', href: '#events' },
  { label: 'Contact', href: '#contact' },
]

const categories = [
  { label: 'Web Development', href: '#categories' },
  { label: 'Mobile Development', href: '#categories' },
  { label: 'Data Science', href: '#categories' },
  { label: 'Business', href: '#categories' },
  { label: 'Design', href: '#categories' },
]

export function Footer() {
  return (
    <footer className="bg-navy text-white" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="mb-4 text-2xl font-bold font-display">
              Uni<span className="text-primary-400">well</span>
            </h3>
            <p className="mb-6 text-sm leading-relaxed text-gray-400">
              Empowering learners worldwide with high-quality online education and expert-led
              courses.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-lg font-bold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="mb-4 text-lg font-bold">Categories</h4>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat.label}>
                  <a
                    href={cat.href}
                    className="text-sm text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {cat.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-lg font-bold">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>123 Education Ave, Learning City, LC 10001</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <Phone size={16} className="shrink-0" />
                <span>001-1234-88888</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <Mail size={16} className="shrink-0" />
                <span>info@uniwell.edu</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Uniwell. All rights reserved.
          </p>
          <p className="text-sm text-gray-400">
            More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-primary-400 hover:text-primary-300 transition-colors"
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
