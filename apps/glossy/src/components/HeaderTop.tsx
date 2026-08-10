import { Search } from 'lucide-react'
import { headerSocials, siteName, socialLabels } from '../data'
import { BrandIcon } from './BrandIcon'

/** Tall header-top bar: social icons left, centered logo, utility cluster right. */
export function HeaderTop() {
  return (
    <div className="border-b border-borderline">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-4 px-4 py-5 md:grid-cols-3 md:py-0 md:[line-height:100px]">
        <ul className="flex items-center gap-4">
          {headerSocials.map((name) => (
            <li key={name}>
              <a
                href="#"
                aria-label={socialLabels[name]}
                className="text-heading transition-colors hover:text-brand"
              >
                <BrandIcon name={name} className="h-[18px] w-[18px]" />
              </a>
            </li>
          ))}
        </ul>
        <a href="#" className="justify-self-center font-display text-3xl font-bold text-heading">
          {siteName}
        </a>
        <div className="flex items-center gap-5 justify-self-start md:justify-self-end">
          <a
            href="#"
            aria-label="Search"
            className="text-heading transition-colors hover:text-brand"
          >
            <Search className="h-5 w-5" aria-hidden="true" />
          </a>
          <a
            href="#"
            className="font-sans text-sm font-semibold text-heading transition-colors hover:text-brand"
          >
            About
          </a>
          <a
            href="#"
            className="font-sans text-sm font-semibold text-heading transition-colors hover:text-brand"
          >
            Subscribe
          </a>
        </div>
      </div>
    </div>
  )
}
