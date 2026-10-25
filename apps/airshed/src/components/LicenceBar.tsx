import { LICENCE } from '../content'
import { Container, Stars } from './ui'

/**
 * The 36 px licence strip above the header: four statements on the left, the
 * review score on the right. It scrolls away; the header below it is what
 * sticks.
 */
export function LicenceBar() {
  return (
    <div data-licence-bar className="h-9 border-b border-ink-100 bg-ink-800">
      <Container className="flex h-full items-center justify-between gap-4 text-xs text-ink-100">
        <div className="flex min-w-0 items-center gap-4">
          <span className="shrink-0">
            <span className="text-ink-300">{LICENCE.label}</span>{' '}
            <span className="font-semibold text-white">{LICENCE.number}</span>
          </span>
          <span className="hidden truncate italic text-ink-200 sm:inline">
            {LICENCE.statement}
          </span>
          <span className="hidden shrink-0 lg:inline">
            <span className="text-ink-300">{LICENCE.servingLabel}</span>{' '}
            <span className="font-semibold text-white">{LICENCE.serving}</span>
          </span>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <Stars count={1} />
          <span className="font-medium text-white">{LICENCE.score}</span>
          <span className="hidden italic text-ink-300 md:inline">{LICENCE.reviews}</span>
        </div>
      </Container>
    </div>
  )
}
