import { Phone } from 'lucide-react'
import { ButtonLink, cn } from '@free-react-templates/ui'
import {
  ARRIVAL_WINDOWS,
  FALLBACK_CLOCK,
  PHONE_HREF,
  PHONE_LABEL,
  type ArrivalWindow,
} from '../content'
import { resolveWindow, useArrivalWindow } from '../lib/useArrivalWindow'
import { Reveal } from './Reveal'

interface ResponseBandProps {
  /**
   * Test seam: a number pins the visitor's hour, `null` renders the pre-hydration
   * pair the static markup carries. Omitted, the card reads the real clock.
   */
  readonly hour?: number | null
}

/** One row of the three-shift table, with the active treatment when it is now. */
function WindowRow({ window, active }: { window: ArrivalWindow; active: boolean }) {
  return (
    <li
      data-window-row={window.key}
      data-active={active ? 'true' : undefined}
      className={cn(
        'group flex min-w-0 items-baseline justify-between gap-4 border-l-2 border-white/15 py-2 pl-4 transition-colors',
        active && 'border-primary-500',
      )}
    >
      <span className="min-w-0">
        <span
          className={cn(
            'block font-semibold text-white/55 transition-colors',
            active && 'text-white',
          )}
        >
          {window.label}
        </span>
        <span
          className={cn(
            'mt-0.5 block text-xs text-white/30 transition-colors',
            active && 'text-white/55',
          )}
        >
          {window.note}
        </span>
      </span>
      <span
        className={cn(
          'shrink-0 font-mono text-sm text-white/45 transition-colors',
          active && 'text-primary-300',
        )}
      >
        {window.promise}
      </span>
    </li>
  )
}

export function ResponseBand({ hour }: ResponseBandProps) {
  const live = useArrivalWindow()
  const current = hour === null ? null : hour === undefined ? live : resolveWindow(hour)
  const overnight = current?.overnight === true

  return (
    <section id="response" className="section bg-ink-900 text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="min-w-0 lg:col-span-5">
            <p className="text-sm font-bold uppercase tracking-wide text-primary-400">Response</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              The window, by the hour
            </h2>
            <p className="mt-4 text-lg text-white/70">
              Our crews are not the same size at nine in the morning and three in the morning, so
              the promise should not be either. Here is what each shift can actually hold.
            </p>
            <ol className="mt-10 space-y-3">
              {ARRIVAL_WINDOWS.map((window) => (
                <WindowRow
                  key={window.key}
                  window={window}
                  active={current?.key === window.key}
                />
              ))}
            </ol>
          </Reveal>

          <Reveal className="min-w-0 lg:col-span-7">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-wide text-white/40">Right now</p>
              <p
                aria-live="polite"
                data-clock-promise
                className={cn(
                  'mt-2 font-mono text-4xl font-bold tabular-nums transition-colors sm:text-5xl',
                  overnight ? 'text-ice-300' : 'text-primary-400',
                )}
              >
                {current?.promise ?? FALLBACK_CLOCK.promise}
              </p>
              <p className="mt-3 text-lg text-white/80" data-clock-label>
                {current?.label ?? FALLBACK_CLOCK.label}
              </p>
              <p className="mt-2 min-h-[1.5rem] text-sm text-white/45" data-clock-note>
                {current?.note ?? FALLBACK_CLOCK.note}
              </p>
              <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
                <ButtonLink href={PHONE_HREF} className="text-base shadow-brand">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Call {PHONE_LABEL}
                </ButtonLink>
                <p className="min-w-0 text-sm text-white/40">
                  Answered by a technician, not an answering service.
                </p>
              </div>
            </div>
            <p className="mt-6 text-sm text-white/35">Sample windows, shown for the demo.</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
