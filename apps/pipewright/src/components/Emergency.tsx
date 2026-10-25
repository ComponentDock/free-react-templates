import { EMERGENCY } from '../content'
import { Container, PhonePill } from './ui'

/**
 * A thin ruled strip, not a padded band: it reuses the hero's ground with no
 * `section` rhythm, so on a warm page it reads as a footnote rather than a
 * promo. The ping rides inside the label so it inherits the strip's colour —
 * both halves are `bg-current`.
 */
export function Emergency() {
  return (
    <section id="emergency" className="bg-ink-50 text-ink-800" data-emergency>
      <Container className="py-6 lg:py-8">
        <div className="flex flex-col items-start gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="min-w-0">
            <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide opacity-90">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-current opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-current" />
              </span>
              {EMERGENCY.label}
            </p>
            <p className="mt-1 text-lg font-bold lg:text-xl">{EMERGENCY.line}</p>
            <p className="mt-2 max-w-2xl text-sm opacity-90">{EMERGENCY.note}</p>
          </div>
          <PhonePill label={EMERGENCY.cta} scale="lg" className="shrink-0" />
        </div>
      </Container>
    </section>
  )
}
