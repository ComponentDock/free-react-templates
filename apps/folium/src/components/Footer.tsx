import { footerColumns, socials } from '../data'
import { BrandIcon, type SocialName } from './BrandIcon'

/** White footer with a top border, three link columns, right-aligned social
 *  icon circles and a centered copyright line that links to Component Dock. */
export function Footer() {
  return (
    <footer id="contact" className="border-t border-[#eeeeee] bg-white py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="grid flex-1 gap-10 sm:grid-cols-3">
            {footerColumns.map((column) => (
              <nav key={column.heading} aria-label={`Footer ${column.heading}`}>
                <h2 className="text-lg font-light text-black">{column.heading}</h2>
                <ul className="mt-4 space-y-1">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="block py-2 text-base text-gray-600 transition-colors hover:text-primary"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
          <ul className="flex gap-3 lg:pt-10">
            {socials.map((social) => (
              <li key={social.name}>
                <a
                  href="#home"
                  aria-label={social.label}
                  className="flex h-[60px] w-[60px] items-center justify-center rounded-full border border-gray-200 text-gray-700 transition-colors hover:border-primary hover:text-primary"
                >
                  <BrandIcon name={social.name as SocialName} className="h-[26px] w-[26px]" />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-16 text-center text-base text-gray-600">
          Copyright © {new Date().getFullYear()} All rights reserved | Made with ♥ by Folium · More
          templates at{' '}
          <a
            href="https://www.componentdock.com/"
            className="font-medium text-primary transition-colors hover:text-primary-700"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
