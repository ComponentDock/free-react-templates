import { Star } from 'lucide-react'
import { site } from '../content'
import { containerClass } from './ui'

/**
 * The fine-print rule above the header: a licence number, two facts and a rating.
 * The reference clips this row mid-word below 430 px; here the facts wrap instead
 * and the two secondary facts drop out below `sm`.
 */
export function LicenceBar() {
  return (
    <div data-licence-bar className="border-b border-ink-700 bg-ink-800 text-ink-100">
      <div
        className={`${containerClass} flex min-h-9 flex-wrap items-center justify-between gap-x-4 gap-y-1 py-1 text-xs leading-4`}
      >
        <ul className="flex min-w-0 flex-wrap items-center gap-x-4">
          <li className="whitespace-nowrap">
            <span className="text-ink-100/70">Licence</span>{' '}
            <span className="font-semibold">{site.licence}</span>
          </li>
          <li className="hidden whitespace-nowrap sm:block">Liner manufacturer certified</li>
          <li className="hidden whitespace-nowrap sm:block">
            <span className="text-ink-100/70">Serving</span>{' '}
            <span className="font-semibold">{site.area}</span>
          </li>
        </ul>
        <p className="flex shrink-0 items-center gap-1.5 font-medium">
          <Star aria-hidden="true" className="h-3 w-3 fill-amber-400 text-amber-400" />
          <span className="font-semibold">{site.rating}</span>
          <span className="text-ink-100/70">{site.reviews}</span>
        </p>
      </div>
    </div>
  )
}
