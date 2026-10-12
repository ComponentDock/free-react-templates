import { act, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Countdown } from './Countdown'
import { WEDDING_TARGET } from '../lib/countdown'
import { COUNTDOWN_CELLS } from '../lib/site'

afterEach(() => {
  vi.useRealTimers()
})

/** Seven days on the nose, so the first frame is the design's own 07 / 00 / 00 / 00. */
const SEVEN_DAYS_BEFORE = Date.UTC(2027, 8, 19, 15, 0, 0)

const cells = () => screen.getAllByRole('listitem')

describe('Countdown', () => {
  it('pulls the scarlet strip up over the band above it', () => {
    vi.useFakeTimers()
    vi.setSystemTime(SEVEN_DAYS_BEFORE)

    const { container } = render(<Countdown />)

    const band = container.querySelector('section') as HTMLElement

    expect(band).toHaveClass('relative', '-top-[73px]')

    const strip = container.querySelector('ul') as HTMLElement

    expect(strip).toHaveClass('damask-red', 'lg:flex-row')
  })

  it('runs the four cells in the design 3-2-2-3 columns', () => {
    vi.useFakeTimers()
    vi.setSystemTime(SEVEN_DAYS_BEFORE)

    render(<Countdown />)

    expect(cells()).toHaveLength(4)
    expect(cells().map((cell) => cell.className.includes('lg:w-1/4'))).toEqual([
      true,
      false,
      false,
      true,
    ])
    expect(cells().map((cell) => cell.className.includes('lg:w-1/6'))).toEqual([
      false,
      true,
      true,
      false,
    ])
    expect(COUNTDOWN_CELLS.map((cell) => cell.label)).toEqual(['Days', 'Hours', 'Mins', 'Secs'])
  })

  it('counts down once a second without shifting the display', () => {
    vi.useFakeTimers()
    vi.setSystemTime(SEVEN_DAYS_BEFORE)

    render(<Countdown />)

    expect(cells().map((cell) => cell.textContent)).toEqual([
      '07Days7 days',
      '00Hours0 hours',
      '00Mins0 mins',
      '00Secs0 secs',
    ])

    act(() => {
      vi.advanceTimersByTime(1000)
    })

    expect(cells().map((cell) => cell.textContent)).toEqual([
      '06Days6 days',
      '23Hours23 hours',
      '59Mins59 mins',
      '59Secs59 secs',
    ])
  })

  it('exposes readable values and keeps quiet for a screen reader', () => {
    vi.useFakeTimers()
    vi.setSystemTime(SEVEN_DAYS_BEFORE)

    const { unmount } = render(<Countdown />)
    const clearSpy = vi.spyOn(window, 'clearInterval')

    const strip = screen.getByRole('region', { name: 'Countdown to the day' })

    expect(strip).not.toHaveAttribute('aria-live')
    expect(screen.getByText('7 days')).toHaveClass('sr-only')
    expect(screen.getByText('Days')).toHaveAttribute('aria-hidden', 'true')

    unmount()

    expect(clearSpy).toHaveBeenCalledTimes(1)

    clearSpy.mockRestore()
  })

  it('rests at zero once the day has passed', () => {
    vi.useFakeTimers()
    vi.setSystemTime(WEDDING_TARGET + 1000)

    render(<Countdown />)

    expect(cells().map((cell) => cell.textContent)).toEqual([
      '00Days0 days',
      '00Hours0 hours',
      '00Mins0 mins',
      '00Secs0 secs',
    ])
  })
})
