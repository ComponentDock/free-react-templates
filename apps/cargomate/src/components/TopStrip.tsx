import { Mail, Phone } from 'lucide-react'
import { topStrip } from '../data'
import { BrandIcon } from './BrandIcon'

/** Top strip (reference `.top_menu`): 40px-tall dark navy bar with four
 *  uppercase social icon links on the left and the phone + email links on
 *  the right, hidden below 992px. */
export function TopStrip() {
  return (
    <div className="hidden bg-navy text-white lg:block">
      <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 lg:px-8">
        <ul className="flex items-center gap-6">
          {topStrip.socials.map((name) => (
            <li key={name}>
              <a
                href="#contact"
                aria-label={name}
                className="block transition-colors hover:text-brand"
              >
                <BrandIcon name={name} className="h-3.5 w-3.5" />
              </a>
            </li>
          ))}
        </ul>
        <ul className="flex items-center gap-8">
          <li>
            <a
              href="tel:01265325689746"
              className="flex items-center gap-2 text-xs font-normal tracking-wide text-white uppercase transition-colors hover:text-brand"
            >
              <Phone className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
              {topStrip.phone}
            </a>
          </li>
          <li>
            <a
              href="mailto:emergency@cargomate.io"
              className="flex items-center gap-2 text-xs font-normal tracking-wide text-white uppercase transition-colors hover:text-brand"
            >
              <Mail className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
              {topStrip.email}
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
