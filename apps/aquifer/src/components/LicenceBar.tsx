import { Star } from 'lucide-react'
import { LICENCE } from '../data'

/**
 * The credibility strip above the header: licence number, certification,
 * service county and the sample rating. It is a normal-flow block, so it
 * scrolls away while the header stays sticky. The two middle facts collapse
 * below `sm` so the strip never wraps.
 */
export function LicenceBar() {
  return (
    <div
      data-testid="licence-bar"
      className="w-full border-b border-transparent bg-ink-800 text-ink-100"
    >
      <div className="container mx-auto flex h-9 items-center justify-between gap-4 px-4 text-xs lg:px-8">
        <ul className="flex min-w-0 items-center gap-x-4 gap-y-1 overflow-hidden">
          <li className="flex shrink-0 items-center gap-1.5 whitespace-nowrap">
            <span className="hidden opacity-70 sm:inline">Licence</span>
            <span className="font-semibold">{LICENCE.registration}</span>
          </li>
          <li className="hidden shrink-0 items-center gap-1.5 whitespace-nowrap sm:flex">
            <span className="opacity-70">{LICENCE.certification}</span>
          </li>
          <li className="hidden shrink-0 items-center gap-1.5 whitespace-nowrap sm:flex">
            <span className="opacity-70">Serving</span>
            <span className="font-semibold">{LICENCE.county}</span>
          </li>
        </ul>
        <p className="flex shrink-0 items-center gap-1.5 font-medium whitespace-nowrap">
          <Star aria-hidden="true" className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
          <span>{LICENCE.rating}</span>
          <span className="opacity-70">{LICENCE.reviews} (sample)</span>
        </p>
      </div>
    </div>
  )
}
