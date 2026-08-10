import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { menuCloseLabel, menuOpenLabel, mobileNavLabel } from '../data'
import { SidebarContent } from './SidebarContent'

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-label={open ? menuCloseLabel : menuOpenLabel}
        className="fixed left-4 top-4 z-50 flex h-11 w-11 items-center justify-center rounded bg-brand/80 text-white transition-colors hover:bg-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 lg:hidden"
      >
        {open ? (
          <X className="h-5 w-5" aria-hidden="true" />
        ) : (
          <Menu className="h-5 w-5" aria-hidden="true" />
        )}
      </button>

      <div
        aria-label={mobileNavLabel}
        role="region"
        className={cn(
          'fixed inset-y-0 left-0 z-40 w-80 -translate-x-full transition-transform duration-300 lg:hidden',
          open && 'translate-x-0',
        )}
      >
        <SidebarContent />
      </div>
    </>
  )
}
