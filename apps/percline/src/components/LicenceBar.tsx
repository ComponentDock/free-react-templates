import { Star } from 'lucide-react'
import { LICENCE_BODY, LICENCE_NUMBER, LICENCE_REGION, RATING, RATING_NOTE } from '../content'

/**
 * The 37 px licence strip above the header: who is licensed, where they work,
 * and the rating — with the two middle facts hidden below `sm` so the number
 * and the rating stay on one line.
 */
export function LicenceBar() {
  return (
    <div data-licence-bar className="border-b border-ink-700 bg-ink-800 text-ink-100">
      <div className="container mx-auto flex h-9 items-center justify-between gap-4 px-4 text-xs lg:px-8">
        <ul className="flex min-w-0 items-center gap-3">
          <li className="shrink-0">
            <span className="opacity-70">Licence</span>{' '}
            <span className="font-semibold">{LICENCE_NUMBER}</span>
          </li>
          <li className="hidden shrink-0 sm:block">{LICENCE_BODY}</li>
          <li className="hidden shrink-0 sm:block">
            <span className="opacity-70">Serving</span>{' '}
            <span className="font-semibold">{LICENCE_REGION}</span>
          </li>
        </ul>
        <p className="flex shrink-0 items-center gap-1.5">
          <Star className="h-3.5 w-3.5 fill-current text-amber-400" aria-hidden="true" />
          <span className="font-medium">{RATING}</span>
          <span className="opacity-80">{RATING_NOTE}</span>
        </p>
      </div>
    </div>
  )
}
