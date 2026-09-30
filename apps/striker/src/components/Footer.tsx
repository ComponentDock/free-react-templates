import { Heart } from 'lucide-react'
import { footerColumns, socials } from '../data'
import { BrandIcon } from './BrandIcon'

/** Footer (reference `.footer-section`): #1a1e25 band with News / Tickets /
 *  Matches link columns, a Social column with inline-SVG brand icons, and a
 *  bottom copyright line linking Component Dock. */
export function Footer() {
  return (
    <footer id="contact" className="bg-footer pt-20 pb-8 text-sm text-white/50">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {footerColumns.map((column) => (
          <div key={column.title}>
            <h2 className="text-lg font-bold text-white">{column.title}</h2>
            <ul className="mt-5 space-y-3">
              {column.links.map((link) => (
                <li key={link}>
                  <a href="#home" className="transition-colors hover:text-brand">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h2 className="text-lg font-bold text-white">Social</h2>
          <ul className="mt-5 flex items-center gap-4">
            {socials.map(({ label, name }) => (
              <li key={label}>
                <a
                  href="#contact"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand"
                >
                  <BrandIcon name={name} className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-7xl border-t border-white/10 px-4 pt-8">
        <p className="text-center">
          Copyright &copy; 2026 All rights reserved | More templates at{' '}
          <Heart className="inline h-4 w-4 text-brand" aria-hidden="true" />{' '}
          <a
            href="https://www.componentdock.com/"
            className="text-white underline transition-colors hover:text-brand"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
