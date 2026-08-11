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
import { Rail } from './Rail'

interface SidebarProps {
  open: boolean
  onToggle: () => void
}

/* Slide-in navigation shell mirroring the reference `#sidebar`: a 420px
   dark element (85vw on mobile) holding the 320px `.menu-left-part` panel
   (search, site info, Home/About/Scroll/Contact nav, footer line) with the
   `.menu-right-part` rail as its right 100px. Closed, the shell is
   translated so only the rail is visible at the screen's left edge; open, it
   slides fully in and the rail sits to the right of the panel. */
export function Sidebar({ open, onToggle }: SidebarProps) {
  return (
    <div
      className={cn(
        'sidebar fixed inset-y-0 left-0 z-30 flex w-[85vw] max-w-[420px] bg-charcoal transition-transform duration-300 ease-out',
        open ? 'translate-x-0' : '-translate-x-[calc(100%_-_4rem)] md:-translate-x-[320px]',
      )}
    >
      <div className="flex h-full min-w-0 flex-1 flex-col bg-coal md:w-[320px] md:flex-none">
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
      <Rail open={open} onToggle={onToggle} />
    </div>
  )
}
