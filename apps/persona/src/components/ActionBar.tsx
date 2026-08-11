import { Download, Home, Plus, Share2, Tag, type LucideIcon } from 'lucide-react'
import { actionBarItems, type ActionBarItem } from '../data'

const iconMap: Record<ActionBarItem['icon'], LucideIcon> = {
  tag: Tag,
  home: Home,
  share: Share2,
  download: Download,
  plus: Plus,
}

/** Fixed vertical dark action bar on the left edge (desktop only), mirroring
 *  the reference screenshot's floating toolbar: white icon buttons with
 *  accessible names. Decorative but interactive. */
export function ActionBar() {
  return (
    <aside
      aria-label="Quick actions"
      className="fixed left-0 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-1 bg-navy px-2 py-4 shadow-lg lg:flex"
    >
      {actionBarItems.map((item) => {
        const Icon = iconMap[item.icon]
        return (
          <button
            key={item.label}
            type="button"
            aria-label={item.label}
            title={item.label}
            className="flex h-10 w-10 items-center justify-center text-white transition-colors hover:bg-accent"
          >
            <Icon className="h-5 w-5" aria-hidden="true" />
          </button>
        )
      })}
    </aside>
  )
}
