import { Phone } from 'lucide-react'
import { topBar } from '../data'

export function TopBar() {
  return (
    <div className="bg-ink text-white/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2 text-sm">
        <span className="hidden items-center gap-2 sm:flex">
          <Phone className="h-4 w-4 text-brand" aria-hidden="true" />
          {topBar.phone}
        </span>
        <a
          href={topBar.bookHref}
          className="ml-auto bg-brand px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-white transition-colors hover:bg-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
        >
          Book Now
        </a>
      </div>
    </div>
  )
}
