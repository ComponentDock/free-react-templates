import { BRAND, NAV_LINKS, SOCIAL_LINKS } from '../data'
import { SOCIAL_ICONS } from './icons'
import { cn } from '@free-react-templates/ui'

/* header.header-bar — fixed black right sidebar (250px, full height,
   text-right): uppercase logo, vertical uppercase nav (Home active in
   coral), faint social icons pinned to the bottom. Hidden on mobile
   (≤767px) in favor of the top bar + slide-in panel (MobileMenu). */
export function Sidebar() {
  return (
    <header className="fixed right-0 top-0 z-40 hidden h-screen w-[250px] flex-col bg-ink p-[30px] text-right md:flex">
      <a href="#" className="mb-[30px] text-[20px] font-bold uppercase tracking-wide text-white">
        {BRAND}
      </a>

      <nav aria-label="Main navigation" className="flex-1">
        <ul>
          {NAV_LINKS.map((link) => (
            <li key={link.label} className="mb-[5px]">
              <a
                href={link.href}
                aria-current={link.active ? 'true' : undefined}
                className={cn(
                  'block py-[4px] text-[0.8rem] uppercase transition-colors',
                  link.active ? 'text-brand' : 'text-white hover:text-brand',
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <ul className="flex justify-end gap-1">
        {SOCIAL_LINKS.map(({ key, label, href }) => {
          const Icon = SOCIAL_ICONS[key]
          return (
            <li key={key}>
              <a
                href={href}
                aria-label={label}
                className="inline-flex h-9 w-9 items-center justify-center text-white/40 transition-colors hover:text-brand"
              >
                <Icon className="h-4 w-4" />
              </a>
            </li>
          )
        })}
      </ul>
    </header>
  )
}
