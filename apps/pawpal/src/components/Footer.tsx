import { Mail, MapPin, Phone } from 'lucide-react'
import { SocialLinks } from './SocialLinks'

const columns = [
  {
    title: 'Services',
    links: ['Grooming', 'Daycare', 'Boarding', 'Pricing'],
  },
  {
    title: 'Company',
    links: ['About Us', 'Our Team', 'Gallery', 'Contact'],
  },
  {
    title: 'Support',
    links: ['FAQs', 'New Client Info', 'Vaccination Policy', 'Cancellation Policy'],
  },
] as const

const hours = [
  'Mon-Fri: 7:00 AM - 7:00 PM',
  'Saturday: 8:00 AM - 6:00 PM',
  'Sunday: 9:00 AM - 5:00 PM',
] as const

export function Footer() {
  return (
    <footer id="contact" className="bg-gray-950 py-16 text-gray-300">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <h3 className="font-serif text-2xl font-bold text-white">Pawpal</h3>
          <p className="mt-5 text-sm leading-relaxed text-gray-400">
            Austin&rsquo;s premier pet care facility, offering grooming, daycare, and boarding.
            Loving care for your furry family members since 2015.
          </p>
          <div className="mt-6 space-y-3 text-sm text-gray-400">
            <p className="flex items-center gap-3">
              <MapPin className="h-4 w-4 shrink-0 text-primary-400" aria-hidden="true" />
              Austin, TX 78701
            </p>
            <p className="flex items-center gap-3">
              <Phone className="h-4 w-4 shrink-0 text-primary-400" aria-hidden="true" />
              (512) 555-0147
            </p>
            <p className="flex items-center gap-3">
              <Mail className="h-4 w-4 shrink-0 text-primary-400" aria-hidden="true" />
              <a href="mailto:hello@pawpal.com" className="transition-colors hover:text-white">
                hello@pawpal.com
              </a>
            </p>
          </div>
        </div>

        {columns.map((column) => (
          <div key={column.title}>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white">
              {column.title}
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              {column.links.map((link) => (
                <li key={link}>
                  <a
                    href="#home"
                    className="text-gray-400 transition-colors hover:text-primary-400"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white">Hours</h4>
          <ul className="mt-5 space-y-3 text-sm text-gray-400">
            {hours.map((hour) => (
              <li key={hour}>{hour}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-14 flex max-w-6xl flex-col items-center justify-between gap-6 border-t border-white/10 px-4 pt-8 sm:flex-row sm:px-6">
        <p className="text-sm text-gray-400">
          Copyright © {new Date().getFullYear()} Pawpal. All rights reserved.
        </p>
        <SocialLinks />
      </div>
    </footer>
  )
}
