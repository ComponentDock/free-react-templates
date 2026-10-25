import { Star } from 'lucide-react'
import { BRAND, RATING } from '../data'

/**
 * The dark credibility strip above the header. It is the page's only dark
 * chrome above the fold, and it sits directly on a white header — that
 * adjacency is what gives the header its edge. The two middle facts drop below
 * `sm` so the strip never wraps.
 */
export function LicenceBar() {
  return (
    <div className="border-b border-ink-700 bg-ink-800 text-ink-100">
      <div className="container mx-auto flex h-9 items-center justify-between gap-4 px-4 lg:px-8">
        <ul className="flex items-center gap-x-4 text-xs">
          <li className="flex items-center gap-1.5">
            <span className="opacity-70">Licence</span>
            <span className="font-semibold">{BRAND.licence}</span>
          </li>
          <li className="hidden sm:flex">{BRAND.certification}</li>
          <li className="hidden sm:flex">
            <span className="mr-1.5 opacity-70">Serving</span>
            <span className="font-semibold">{BRAND.region}</span>
          </li>
        </ul>
        <p className="flex shrink-0 items-center gap-1.5 text-xs">
          <Star aria-hidden="true" className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
          <span className="font-semibold">{RATING.score}</span>
          <span className="hidden opacity-70 sm:inline">{RATING.stripSuffix}</span>
        </p>
      </div>
    </div>
  )
}
