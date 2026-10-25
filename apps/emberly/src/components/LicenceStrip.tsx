import { ShieldCheck, Star } from 'lucide-react'
import {
  INSURANCE,
  LICENCE_BODY,
  LICENCE_NUMBER,
  RATING,
  RATING_NOTE,
  REGION,
} from '../content'

/**
 * The 37 px registration strip above the header: the credentials on the left,
 * the rating on the right. The two middle facts are hidden below `sm` so the
 * strip stays one row tall at 390 px.
 */
export function LicenceStrip() {
  return (
    <div data-licence-bar className="border-b border-ink-900 bg-ink-800 text-ink-100">
      <div className="container mx-auto flex h-9 items-center justify-between gap-4 px-4 text-xs lg:px-8">
        <ul className="flex min-w-0 items-center gap-2 sm:gap-5">
          <li className="flex shrink-0 items-center gap-1.5">
            <span className="text-ink-300">{LICENCE_BODY}</span>
            <span className="font-semibold text-white">{LICENCE_NUMBER}</span>
          </li>
          <li className="hidden items-center gap-1.5 sm:flex">
            <ShieldCheck className="h-3.5 w-3.5 text-ink-300" aria-hidden="true" />
            {INSURANCE}
          </li>
          <li className="hidden items-center gap-1.5 sm:flex">
            <span className="text-ink-300">Covering</span>
            <span className="font-semibold text-white">{REGION}</span>
          </li>
        </ul>
        <p className="flex shrink-0 items-center gap-1.5">
          <Star className="h-3.5 w-3.5 fill-current text-amber-400" aria-hidden="true" />
          <span className="font-semibold text-white">{RATING}</span>
          <span className="hidden text-ink-300 sm:inline">{RATING_NOTE}</span>
        </p>
      </div>
    </div>
  )
}
