import { topBarLinks, socials } from '../data'
import { BrandIcon } from './BrandIcon'

/** Dark charcoal utility bar above the header: light-grey links on the
    left, five brand social icons on the right (reference: .bg-191). */
export function TopBar() {
  return (
    <div className="bg-dark text-ash">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-6 gap-y-1 px-4 py-[15px] text-[0.9em]">
        <ul className="flex flex-wrap items-center gap-x-5 gap-y-1">
          {topBarLinks.map((link) => (
            <li key={link}>
              <a href="#top" className="transition-colors hover:text-white">
                {link}
              </a>
            </li>
          ))}
        </ul>
        <ul className="flex items-center gap-x-4">
          {socials.map((social) => (
            <li key={social.name}>
              <a
                href="#social"
                aria-label={social.label}
                className="transition-colors hover:text-white"
              >
                <BrandIcon name={social.name} className="h-4 w-4" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
