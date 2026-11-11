import { useEffect, useMemo, useState } from 'react'

/**
 * The page's only live data. The reference carries a `data-target` and a 78-line
 * script; here the same arithmetic is a hook with an injectable clock, so tests
 * never assert "142 days" and never wait for a real second.
 */

const SECOND = 1000

export interface CountdownState {
  /** Days are printed without a leading zero; the reference pads to three. */
  readonly days: string
  readonly hours: string
  readonly minutes: string
  readonly seconds: string
  /** True at or past the target: the head changes and the ticking stops. */
  readonly done: boolean
  /** The on-demand `aria-label`; the box is never a live region. */
  readonly label: string
}

export interface CountdownOptions {
  /** A stable clock. Defaults to `Date.now`; tests pass a frozen one. */
  readonly now?: () => number
}

const defaultClock = () => Date.now()

const pad = (value: number) => String(value).padStart(2, '0')

const plural = (value: number, unit: string) => `${value} ${unit}${value === 1 ? '' : 's'}`

/** Floors a millisecond remainder into the four fields, clamped at zero. */
export function splitRemaining(remaining: number) {
  const total = Math.max(0, Math.floor(remaining / SECOND))
  return {
    days: Math.floor(total / 86400),
    hours: Math.floor((total % 86400) / 3600),
    minutes: Math.floor((total % 3600) / 60),
    seconds: total % 60,
  }
}

/**
 * Re-derives the four fields once a second, on the wall-clock second. Ticking
 * stops at the target; returning to the tab re-reads immediately; unmounting
 * clears the pending timeout.
 */
export function useCountdown(target: string, options: CountdownOptions = {}): CountdownState {
  const clock = options.now ?? defaultClock
  const end = useMemo(() => Date.parse(target), [target])
  const [now, setNow] = useState(() => clock())

  const done = now >= end
  const parts = splitRemaining(end - now)
  const label = done
    ? 'Doors are open'
    : `${plural(parts.days, 'day')}, ${plural(parts.hours, 'hour')}, ${plural(
        parts.minutes,
        'minute',
      )} and ${plural(parts.seconds, 'second')} until doors open`

  useEffect(() => {
    if (done) return

    let timer: ReturnType<typeof setTimeout> | undefined

    const clear = () => {
      if (timer === undefined) return
      clearTimeout(timer)
      timer = undefined
    }

    const tick = () => {
      clear()
      const current = clock()
      setNow(current)
      if (current >= end) return
      // +5 ms of slack so the callback never lands a hair before the second.
      timer = setTimeout(tick, SECOND - (current % SECOND) + 5)
    }

    const onVisibility = () => {
      if (document.visibilityState === 'visible') tick()
    }

    tick()
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      clear()
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [clock, done, end])

  return {
    days: String(parts.days),
    hours: pad(parts.hours),
    minutes: pad(parts.minutes),
    seconds: pad(parts.seconds),
    done,
    label,
  }
}
