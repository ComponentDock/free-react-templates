import { ChevronRight } from 'lucide-react'
import { brand, footerColumns, serviceHours } from '../data'
import { BrandIcon } from './BrandIcon'

const socials = ['twitter', 'facebook', 'instagram']

export function Footer() {
  return (
    <footer id="contact" className="bg-footer-bg py-20 text-footer-text md:py-24">
      <div className="mx-auto max-w-[1250px] px-4">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <h2 className="mb-4 font-heading text-xl font-semibold text-white">
              {brand.name}{' '}
              <span className="text-sm font-normal text-brand normal-case">{brand.tagline}</span>
            </h2>
            <p className="mb-6 max-w-sm text-base leading-[1.8]">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.
            </p>
            <ul className="flex gap-3">
              {socials.map((name) => (
                <li key={name}>
                  <a
                    href="#"
                    aria-label={`${name} page`}
                    className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white/5 text-white transition-colors hover:text-brand"
                  >
                    <BrandIcon name={name} className="h-6 w-6" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {footerColumns.map((column) => (
            <div key={column.heading} className="md:col-span-2">
              <h2 className="mb-6 font-heading text-lg text-white">{column.heading}</h2>
              <ul>
                {column.links.map((link) => (
                  <li key={link} className="mb-3 flex items-center gap-1">
                    <ChevronRight className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                    <a href="#" className="transition-colors hover:text-brand">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="md:col-span-3">
            <h2 className="mb-6 font-heading text-lg text-white">Service Hours</h2>
            <h4 className="mb-4 text-sm text-white">Services Hours</h4>
            <ul className="space-y-3">
              {serviceHours.map((hours) => (
                <li key={hours.day} className="text-sm">
                  <span className="block text-white">{hours.day}</span>
                  {hours.time}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-6 text-center">
          <p className="text-sm">
            © 2026 Parish. All rights reserved. | Made with ❤ by{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-brand transition-colors hover:text-white"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
