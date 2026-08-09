import { Building2, Mail, MapPin, Phone } from 'lucide-react'

const columns = [
  {
    title: 'Spaces',
    links: ['Hot Desk', 'Dedicated Desk', 'Private Office', 'Meeting Rooms', 'Day Pass'],
  },
  {
    title: 'Company',
    links: ['About Us', 'Locations', 'Careers', 'Partners', 'Blog'],
  },
  {
    title: 'Support',
    links: ['Contact', 'Member App', 'FAQs', 'Terms of Service', 'Privacy Policy'],
  },
] as const

export function Footer() {
  return (
    <footer className="bg-gray-900 py-16 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2" aria-label="Deskly home">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-600">
                <Building2 className="h-6 w-6 text-white" aria-hidden="true" />
              </span>
              <span className="font-display text-xl font-bold text-white">Deskly</span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-gray-400">
              Premium coworking spaces designed for productivity, creativity, and community. Visit
              one of our three Austin locations today.
            </p>
            <address className="mt-6 space-y-3 text-sm not-italic">
              <p className="flex items-center gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-primary-500" aria-hidden="true" />
                500 Congress Ave, Austin, TX 78701
              </p>
              <p className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-primary-500" aria-hidden="true" />
                <a href="tel:+15125550147" className="transition-colors hover:text-white">
                  (512) 555-0147
                </a>
              </p>
              <p className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-primary-500" aria-hidden="true" />
                <a
                  href="mailto:hello@deskly.example"
                  className="transition-colors hover:text-white"
                >
                  hello@deskly.example
                </a>
              </p>
            </address>
          </div>

          {columns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
                {column.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#home"
                      className="text-sm text-gray-400 transition-colors hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 border-t border-gray-800 pt-8">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Deskly. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
