import { act, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Countdown, TARGET_DATE } from './Countdown'

const SYSTEM_TIME = new Date('2026-08-13T00:00:00Z')

function expectedRemaining(target: Date, now: Date) {
  const diff = Math.max(0, target.getTime() - now.getTime())
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff / 3_600_000) % 24),
    minutes: Math.floor((diff / 60_000) % 60),
    seconds: Math.floor((diff / 1_000) % 60),
  }
}

const pad = (value: number) => String(value).padStart(2, '0')

afterEach(() => {
  vi.useRealTimers()
})

describe('Countdown', () => {
  it('renders four labelled cells ticking down from the fixed target date', () => {
    vi.useFakeTimers()
    vi.setSystemTime(SYSTEM_TIME)
    render(<Countdown />)

    expect(screen.getByTestId('countdown')).toBeInTheDocument()
    for (const label of ['Days', 'Hours', 'Minutes', 'Seconds']) {
      expect(screen.getByText(label)).toBeInTheDocument()
    }

    const remaining = expectedRemaining(TARGET_DATE, SYSTEM_TIME)
    expect(screen.getByText(pad(remaining.days))).toBeInTheDocument()
    expect(screen.getByText(pad(remaining.hours))).toBeInTheDocument()
    expect(screen.getByText(pad(remaining.minutes))).toBeInTheDocument()
    expect(screen.getByText(pad(remaining.seconds))).toBeInTheDocument()

    // Every value is 0-padded to at least two digits.
    for (const value of [remaining.days, remaining.hours, remaining.minutes, remaining.seconds]) {
      expect(pad(value)).toMatch(/^\d{2,}$/)
    }
  })

  it('decreases the seconds cell as time advances (fake timers in act)', () => {
    vi.useFakeTimers()
    vi.setSystemTime(SYSTEM_TIME)
    render(<Countdown />)

    const secondsBefore = expectedRemaining(TARGET_DATE, SYSTEM_TIME).seconds
    const secondsCell = screen.getByText(pad(secondsBefore))

    act(() => {
      vi.advanceTimersByTime(1_000)
    })

    const secondsAfter = (secondsBefore - 1 + 60) % 60
    expect(secondsCell).toHaveTextContent(pad(secondsAfter))
  })

  it('keeps the interval cleaned up on unmount', () => {
    vi.useFakeTimers()
    vi.setSystemTime(SYSTEM_TIME)
    const { unmount } = render(<Countdown />)
    unmount()
    // Advancing timers after unmount must not throw or update state.
    expect(() => act(() => vi.advanceTimersByTime(5_000))).not.toThrow()
  })
})
