import { Play } from 'lucide-react'
import { addBannerLabel, siteName } from '../data'

/* Pink top header bar (reference `.top-header-area`): logo (play mark in a
   circle + wordmark) on the left, dark ADD BANNER placeholder on the right. */
export function Header() {
  return (
    <header className="bg-brand">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a
          href="#"
          aria-label={`${siteName} — home`}
          className="flex items-center gap-2 text-white"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white">
            <Play className="h-4 w-4 fill-current" aria-hidden="true" />
          </span>
          <span className="font-display text-2xl font-bold uppercase tracking-wide">
            {siteName}
          </span>
        </a>
        <div
          aria-hidden="true"
          className="hidden bg-coal px-6 py-2 font-display text-xs font-bold uppercase tracking-[0.25em] text-white sm:block"
        >
          {addBannerLabel}
        </div>
      </div>
    </header>
  )
}
