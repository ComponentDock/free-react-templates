import { Activity, Mail, MapPin, Phone } from 'lucide-react'
import { BrandIcon } from './BrandIcon'
import { contact, footerDepartments, footerLinks } from '../data'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-32 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <a href="#home" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-white">
              <Activity className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="text-2xl font-semibold text-white">Salus</span>
          </a>
          <p className="mt-5 text-base leading-7 text-fade">
            Firmament morning sixth subdue darkness creeping gathered divide.
          </p>
          <ul className="mt-7 flex items-center gap-4" aria-label="Social links">
            {(['facebook', 'instagram', 'linkedin', 'x'] as const).map((name) => (
              <li key={name}>
                <a
                  href="#social"
                  aria-label={name}
                  className="text-fade transition-colors hover:text-brand"
                >
                  <BrandIcon name={name} className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-9 text-[22px] font-normal text-white capitalize">Departments</h4>
          <ul>
            {footerDepartments.map((item) => (
              <li key={item}>
                <a
                  href="#departments"
                  className="text-base leading-[42px] text-fade transition-colors hover:text-sky"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-9 text-[22px] font-normal text-white capitalize">Useful Links</h4>
          <ul>
            {footerLinks.map((item, i) => (
              <li key={`${item}-${i}`}>
                <a
                  href="#contact"
                  className="text-base leading-[42px] text-fade transition-colors hover:text-sky"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-9 text-[22px] font-normal text-white capitalize">Address</h4>
          <ul className="space-y-5 text-base text-fade">
            <li className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-sky" aria-hidden="true" />
              <span>{contact.address}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 shrink-0 text-sky" aria-hidden="true" />
              <span>{contact.phoneFooter}</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 shrink-0 text-sky" aria-hidden="true" />
              <span>{contact.email}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-black py-6">
        <p className="text-center text-sm text-white">
          Copyright © {year} All rights reserved | This template is made with ♥ by{' '}
          <a
            href="https://www.componentdock.com/"
            className="font-medium text-white underline underline-offset-2 hover:text-sky"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
