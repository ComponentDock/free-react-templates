import { FileText, Mail, MapPin, Phone } from 'lucide-react'
import {
  brandName,
  contactAddress,
  contactEmail,
  contactPhone,
  dockHref,
  footerAbout,
  footerColumns,
  socialLinks,
} from '../data'

function telHref(display: string): string {
  return 'tel:' + display.replace(/[^\d+]/g, '')
}

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-deep pt-28 text-white/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 pb-16 md:grid-cols-2 lg:grid-cols-6">
          {/* Brand + About */}
          <div className="lg:col-span-2">
            <p className="flex items-center gap-2 text-white">
              <FileText aria-hidden="true" className="h-10 w-10 text-brand" />
              <span className="flex flex-col leading-none">
                <span className="font-script text-2xl">Town</span>
                <span className="text-[11px] font-bold uppercase tracking-[3px] text-white/70">
                  Hub
                </span>
              </span>
            </p>
            <p className="mt-7 max-w-sm leading-relaxed">{footerAbout}</p>
            <ul className="mt-7 flex gap-2.5">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-white transition-colors hover:bg-white hover:text-brand"
                  >
                    <span className="text-xs font-bold">{social.label.charAt(0)}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Link columns */}
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-[18px] font-bold text-white">{column.title}</h3>
              <ul className="mt-6 space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#contact" className="transition-colors hover:text-brand">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h3 className="text-[18px] font-bold text-white">Have a Question?</h3>
            <ul className="mt-6 space-y-4 text-[14px]">
              <li className="flex items-start gap-3">
                <MapPin aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                {contactAddress}
              </li>
              <li className="flex items-center gap-3">
                <Phone aria-hidden="true" className="h-5 w-5 shrink-0 text-brand" />
                <a href={telHref(contactPhone)} className="transition-colors hover:text-brand">
                  {contactPhone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail aria-hidden="true" className="h-5 w-5 shrink-0 text-brand" />
                <a href={`mailto:${contactEmail}`} className="transition-colors hover:text-brand">
                  {contactEmail}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 py-6 text-center text-[13px] text-white/50">
          <p>
            Copyright © {year} {brandName}. All rights reserved. · Made with{' '}
            <a
              href={dockHref}
              className="font-semibold text-white/70 transition-colors hover:text-brand"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
