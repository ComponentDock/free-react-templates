import { cn } from '@free-react-templates/ui'
import {
  footerCopyright,
  navItems,
  navLabel,
  searchLabel,
  searchPlaceholder,
  siteDescription,
  siteName,
} from '../data'

interface SidebarProps {
  open: boolean
}

/* Slide-in navigation panel mirroring the reference `#sidebar`
   (`.menu-left-part` 320px #333333 on the dark 420px shell): search field,
   site title + description, Home/About/Scroll/Contact nav, footer line.
   Translated off-canvas when closed; the fixed rail (z-40) sits above its
   right edge, matching the reference's 100px always-visible strip. */
export function Sidebar({ open }: SidebarProps) {
  return (
    <div
      className={cn(
        'sidebar fixed inset-y-0 left-0 z-30 w-[85vw] max-w-[420px] bg-charcoal transition-transform duration-300 ease-out',
        open ? 'translate-x-0' : '-translate-x-full',
      )}
    >
      <div className="flex h-full w-full flex-col bg-coal md:w-[320px]">
        <label htmlFor="site-search" className="sr-only">
          {searchLabel}
        </label>
        <input
          id="site-search"
          type="search"
          name="s"
          placeholder={searchPlaceholder}
          className="h-[100px] w-full border-0 bg-charcoal pl-[50px] font-display text-[18px] text-body outline-none placeholder:text-body"
        />
        <div className="px-[50px] py-5">
          <h1 className="font-display text-[30px] font-bold leading-[38px] text-white">
            {siteName}
          </h1>
          <p className="mt-2 max-w-[200px] text-[14px] leading-[23px] text-ash">
            {siteDescription}
          </p>
        </div>
        <nav aria-label={navLabel} className="px-[50px] pt-10">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-display text-[16px] font-bold uppercase tracking-wide text-white transition-colors hover:text-brand"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <footer className="mt-auto px-[50px] py-8 text-[13px] leading-[23px] text-ash">
          <p>{footerCopyright}</p>
        </footer>
      </div>
    </div>
  )
}
