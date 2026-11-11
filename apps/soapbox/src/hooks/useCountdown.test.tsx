import { act, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { splitRemaining, useCountdown } from './useCountdown'

const TARGET = '2027-03-18T09:00:00+00:00'
const AT_TARGET = Date.parse(TARGET)
const MINUTE = 60_000
const HOUR = 60 * MINUTE
const DAY = 24 * HOUR

interface ClockProps {
  readonly target: string
  readonly now?: () => number
}

function Clock({ target, now }: ClockProps) {
  const state = useCountdown(target, now ? { now } : {})
  return (
    <p data-testid="clock">
      {`${state.days}|${state.hours}|${state.minutes}|${state.seconds}|${String(state.done)}|${state.label}`}
    </p>
  )
}

const text = () => screen.getByTestId('clock').textContent

const renderAt = (at: number, now?: () => number) => {
  vi.setSystemTime(at)
  return render(<Clock target={TARGET} now={now} />)
}

const setVisibility = (value: 'visible' | 'hidden') => {
  Object.defineProperty(document, 'visibilityState', { value, configurable: true })
}

describe('splitRemaining', () => {
  it('floors a remainder into the four fields', () => {
    expect(splitRemaining(DAY + HOUR + MINUTE + 1000)).toEqual({
      days: 1,
      hours: 1,
      minutes: 1,
      seconds: 1,
    })
  })

  it('clamps a past remainder to zero rather than going negative', () => {
    expect(splitRemaining(-5000)).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  })
})

describe('useCountdown', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    setVisibility('visible')
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('reads the target with the wall clock by default', () => {
    renderAt(AT_TARGET - 8 * DAY - HOUR)
    expect(text()).toBe('8|01|00|00|false|8 days, 1 hour, 0 minutes and 0 seconds until doors open')
  })

  it('prints days without a leading zero', () => {
    renderAt(AT_TARGET - 99 * DAY)
    expect(text()).toBe('99|00|00|00|false|99 days, 0 hours, 0 minutes and 0 seconds until doors open')
  })

  it('keeps three digits when there are more than 99 days', () => {
    renderAt(AT_TARGET - 142 * DAY)
    expect(text()?.startsWith('142|')).toBe(true)
  })

  it('singularises a unit of one', () => {
    renderAt(AT_TARGET - (DAY + HOUR + MINUTE + 1000))
    expect(text()).toBe('1|01|01|01|false|1 day, 1 hour, 1 minute and 1 second until doors open')
  })

  it('does not tick before the aligned second lands', () => {
    renderAt(AT_TARGET - 8 * DAY - HOUR)
    act(() => {
      vi.advanceTimersByTime(1004)
    })
    expect(text()).toContain('8|01|00|00')
  })

  it('takes exactly one second off the tiles on the next aligned tick', () => {
    renderAt(AT_TARGET - 8 * DAY - HOUR)
    act(() => {
      vi.advanceTimersByTime(1005)
    })
    expect(text()).toContain('8|00|59|58')
  })

  it('re-reads the clock immediately when the tab becomes visible', () => {
    let now = AT_TARGET - 8 * DAY - HOUR
    const clock = vi.fn(() => now)
    renderAt(now, clock)

    const before = clock.mock.calls.length
    now += MINUTE
    act(() => {
      document.dispatchEvent(new Event('visibilitychange'))
    })
    expect(clock.mock.calls.length).toBe(before + 1)
    expect(text()).toContain('8|00|59|00')
  })

  it('stops scheduling once a visible re-read passes the target', () => {
    let now = AT_TARGET - 8 * DAY - HOUR
    const clock = vi.fn(() => now)
    renderAt(now, clock)

    now = AT_TARGET + 1
    act(() => {
      document.dispatchEvent(new Event('visibilitychange'))
    })
    const read = clock.mock.calls.length
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(text()).toContain('|true|Doors are open')
    expect(clock.mock.calls.length).toBe(read)
  })

  it('ignores a visibility change while the tab is hidden', () => {
    const clock = vi.fn(() => AT_TARGET - 8 * DAY - HOUR)
    renderAt(clock(), clock)

    const before = clock.mock.calls.length
    setVisibility('hidden')
    act(() => {
      document.dispatchEvent(new Event('visibilitychange'))
    })
    expect(clock.mock.calls.length).toBe(before)
  })

  it('reads "Doors are open" and stops ticking at zero', () => {
    const clock = vi.fn(() => AT_TARGET + 1000)
    renderAt(AT_TARGET + 1000, clock)

    const before = clock.mock.calls.length
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(text()).toBe('0|00|00|00|true|Doors are open')
    expect(clock.mock.calls.length).toBe(before)
  })

  it('clears the pending timeout on unmount', () => {
    const clock = vi.fn(() => AT_TARGET - 8 * DAY - HOUR)
    const { unmount } = renderAt(clock(), clock)
    const before = clock.mock.calls.length

    unmount()
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(clock.mock.calls.length).toBe(before)
  })
})
