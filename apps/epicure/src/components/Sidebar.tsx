import { cn } from '@free-react-templates/ui'
import { navLinks, openingHours, phoneDisplay } from '../data'

/** Fixed white sidebar rail (280px) with the wordmark, five uppercase
 *  nav links with an animated 2px underline, and a quick-contact block. */
export function Sidebar() {
  return (
    <aside
      id="top"
      className="fixed inset-y-0 left-0 z-40 hidden w-[280px] border-r border-border bg-white xl:flex xl:flex-col"
      aria-label="Sidebar"
    >
      <div className="px-6 pb-8 pt-5 text-center">
        <a
          href="#top"
          className="font-display text-3xl font-bold uppercase tracking-wide text-primary"
        >
          Epicure
        </a>
      </div>

      <nav
        className="flex flex-1 flex-col items-center justify-center"
        aria-label="Primary navigation"
      >
        <ul className="flex flex-col items-center gap-6 p-0">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={cn(
                  'group relative inline-block pb-1 font-display text-lg font-bold uppercase tracking-wide text-body transition-colors hover:text-primary',
                )}
              >
                {link.label}
                <span
                  className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100"
                  aria-hidden="true"
                />
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="px-6 pb-5 pt-4 text-center">
        <span className="mb-2 block text-xs font-bold uppercase tracking-[0.1em] text-primary">
          Book A Table
        </span>
        <a
          href={'tel:' + phoneDisplay.replace(/[^\d+]/g, '')}
          className="block font-display text-2xl font-bold text-body transition-colors hover:text-primary"
        >
          {phoneDisplay}
        </a>
        <span className="mt-2 block text-sm text-muted">{openingHours}</span>
      </div>
    </aside>
  )
}
