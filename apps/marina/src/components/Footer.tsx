import { Mail, MapPin, Phone } from 'lucide-react'
import { contactInfo, footerColumns } from '../data'

export function Footer() {
  return (
    <footer className="bg-light">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-4 py-16 sm:grid-cols-2 lg:grid-cols-4">
        {footerColumns.map((column) => (
          <div key={column.title}>
            <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-ink">
              {column.title}
            </h3>
            <ul className="mt-6 space-y-3">
              {column.links.map((link) => (
                <li key={link}>
                  <a
                    href="#contact"
                    className="font-body text-base font-light text-foot transition-colors hover:text-brand"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-ink">
            Get In Touch
          </h3>
          <ul className="mt-6 space-y-3 font-body text-base font-light text-foot">
            <li className="flex items-start gap-2">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              {contactInfo.address}
            </li>
            <li className="flex items-start gap-2">
              <Phone className="mt-1 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              {contactInfo.phone}
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-1 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              {contactInfo.email}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-200">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-3 px-4 py-6 text-center sm:flex-row">
          <p className="font-body text-sm font-light text-foot">
            Copyright © {new Date().getFullYear()} All rights reserved
          </p>
          <p className="font-body text-sm font-light text-foot">
            More templates at{' '}
            <a href="https://www.componentdock.com/" className="text-brand hover:underline">
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
