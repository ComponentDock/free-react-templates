import { Scale } from 'lucide-react'
import { brand } from '../data'

/** Top info bar with phone, location, and logo. */
export function TopBar() {
  return (
    <div className="bg-ink py-3 text-sm text-white/80">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4">
        <div className="flex items-center gap-2">
          <span className="text-brand">Free Call</span>
          <span>+1 234 456 78910</span>
        </div>

        <a href="#top" className="flex items-center gap-2 text-white">
          <Scale className="h-6 w-6 text-brand" />
          <span className="font-heading text-xl font-semibold">
            {brand.name} <span className="text-xs font-normal text-white/60">{brand.tagline}</span>
          </span>
        </a>

        <div className="flex items-center gap-2">
          <span className="text-brand">Our Location</span>
          <span>198 West 21th Street, Suite 721 New York NY 10016</span>
        </div>
      </div>
    </div>
  )
}
