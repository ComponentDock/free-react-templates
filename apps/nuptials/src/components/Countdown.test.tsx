import { act, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Countdown } from './Countdown'
import { WEDDING_TARGET } from '../lib/countdown'
import { COUNTDOWN_CELLS, COUNTDOWN_LABEL } from '../lib/site'

afterEach(() => {
  vi.useRealTimers()
})

/** A week on the nose before the hour, so the first frame is 07 / 00 / 00 / 00. */
const A_WEEK_BEFORE = WEDDING_TARGET - 7 * 24 * 60 * 60 * 1000

const cells = () => screen.getAllByRole('listitem')

describe('Countdown', () => {
  it('prints the four values in the design gradient over their labels', () => {
    vi.useFakeTimers()
    vi.setSystemTime(A_WEEK_BEFORE)

    render(<Countdown />)

    expect(cells()).toHaveLength(4)
    expect(cells().map((cell) => cell.textContent)).toEqual([
      '07Days7 days',
      '00Hours0 hours',
      '00Minutes0 minutes',
      '00Seconds0 seconds',
    ])
    expect(COUNTDOWN_CELLS.map((cell) => cell.label)).toEqual(['Days', 'Hours', 'Minutes', 'Seconds'])

    const value = screen.getByText('07')

    expect(value).toHaveClass('brand-text')
    expect(screen.getByText('Days')).toHaveAttribute('aria-hidden', 'true')
  })

  it('is a labelled clock, not a live region', () => {
    vi.useFakeTimers()
    vi.setSystemTime(A_WEEK_BEFORE)

    const { unmount } = render(<Countdown />)
    const clearSpy = vi.spyOn(window, 'clearInterval')

    const clock = screen.getByRole('timer', { name: COUNTDOWN_LABEL })

    expect(clock).not.toHaveAttribute('aria-live')
    expect(screen.getByText('7 days')).toHaveClass('sr-only')

    unmount()

    expect(clearSpy).toHaveBeenCalledTimes(1)

    clearSpy.mockRestore()
  })

  it('counts down once a second without shifting the display', () => {
    vi.useFakeTimers()
    vi.setSystemTime(A_WEEK_BEFORE)

    render(<Countdown />)

    act(() => {
      vi.advanceTimersByTime(1000)
    })

    expect(cells().map((cell) => cell.textContent)).toEqual([
      '06Days6 days',
      '23Hours23 hours',
      '59Minutes59 minutes',
      '59Seconds59 seconds',
    ])
  })

  it('rests at zero once the hour has passed', () => {
    vi.useFakeTimers()
    vi.setSystemTime(WEDDING_TARGET + 1000)

    render(<Countdown />)

    expect(cells().map((cell) => cell.textContent)).toEqual([
      '00Days0 days',
      '00Hours0 hours',
      '00Minutes0 minutes',
      '00Seconds0 seconds',
    ])
  })
})
