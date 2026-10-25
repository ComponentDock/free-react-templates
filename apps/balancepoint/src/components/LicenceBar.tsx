import { Star } from 'lucide-react'
import { LICENCE_ITEMS, LICENCE_RATING } from '../content'
import { Container } from './ui'

/**
 * 37 px ink strip above the sticky header — licence number, paperwork, service
 * county, and the review score on the right. In flow, so it scrolls away.
 */
export function LicenceBar() {
  return (
    <div data-licence-bar className="border-b border-ink-700 bg-ink-800">
      <Container className="flex h-9 items-center justify-between gap-3 text-xs text-ink-100">
        <dl className="flex min-w-0 items-center gap-4 whitespace-nowrap">
          {LICENCE_ITEMS.map((item) => (
            <div
              key={item.label}
              className={
                item.wide
                  ? 'hidden min-w-0 items-center gap-1.5 sm:flex'
                  : 'flex min-w-0 items-center gap-1.5'
              }
            >
              <dt className="shrink-0 opacity-70">{item.label}</dt>
              <dd className="truncate font-semibold">{item.value}</dd>
            </div>
          ))}
        </dl>

        <p className="flex shrink-0 items-center gap-1.5 whitespace-nowrap">
          <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" aria-hidden="true" />
          <span className="font-semibold">{LICENCE_RATING.score}</span>
          <span className="hidden opacity-70 sm:inline">{LICENCE_RATING.caption}</span>
        </p>
      </Container>
    </div>
  )
}
