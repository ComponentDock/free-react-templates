import { act, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Countdown } from './Countdown'
import { WEDDING_TARGET } from '../lib/countdown'
import { COUNTDOWN_CELLS, COUNTDOWN_LABEL, COUNTDOWN_PHOTO, COUNTDOWN_TITLE, SECTION_IDS } from '../lib/site'

afterEach(() => {
  vi.useRealTimers()
})

/** A week on the nose before the hour, so the first frame reads 07 / 00 / 00 / 00. */
const A_WEEK_BEFORE = WEDDING_TARGET - 7 * 24 * 60 * 60 * 1000

const cells = () => screen.getAllByRole('listitem')

describe('Countdown', () => {
  it('counts to the app own future date inside four outlined circles', () => {
    vi.useFakeTimers()
    vi.setSystemTime(A_WEEK_BEFORE)

    const { container } = render(<Countdown />)

    const band = container.querySelector(`section#${SECTION_IDS.countdown}`) as HTMLElement

    expect(band.style.backgroundImage).toContain(COUNTDOWN_PHOTO)
    expect(band).toHaveClass('bg-cover', 'bg-center', 'text-white')
    expect(screen.getByRole('heading', { level: 2, name: COUNTDOWN_TITLE })).toHaveClass('text-white')

    expect(cells()).toHaveLength(4)
    expect(cells().map((cell) => cell.textContent)).toEqual([
      '07days7 days',
      '00hours0 hours',
      '00minutes0 minutes',
      '00seconds0 seconds',
    ])
    expect(cells()[0]).toHaveClass('h-[120px]', 'w-[120px]', 'rounded-full', 'border-white')
    expect(COUNTDOWN_CELLS.map((cell) => cell.word)).toEqual(['days', 'hours', 'minutes', 'seconds'])
  })

  it('is a labelled clock rather than a live region, and lets the clock go on unmount', () => {
    vi.useFakeTimers()
    vi.setSystemTime(A_WEEK_BEFORE)

    const { unmount } = render(<Countdown />)
    const clearSpy = vi.spyOn(window, 'clearInterval')

    const clock = screen.getByRole('timer', { name: COUNTDOWN_LABEL })

    expect(clock).not.toHaveAttribute('aria-live')
    expect(screen.getByText('days', { exact: true })).toHaveAttribute('aria-hidden', 'true')
    expect(screen.getByText('7 days')).toHaveClass('sr-only')

    unmount()

    expect(clearSpy).toHaveBeenCalledTimes(1)

    clearSpy.mockRestore()
  })

  it('ticks once a second', () => {
    vi.useFakeTimers()
    vi.setSystemTime(A_WEEK_BEFORE)

    render(<Countdown />)

    act(() => {
      vi.advanceTimersByTime(1000)
    })

    expect(cells().map((cell) => cell.textContent)).toEqual([
      '06days6 days',
      '23hours23 hours',
      '59minutes59 minutes',
      '59seconds59 seconds',
    ])
  })

  it('rests at zero once the hour has passed instead of running backwards', () => {
    vi.useFakeTimers()
    vi.setSystemTime(WEDDING_TARGET + 1000)

    render(<Countdown />)

    expect(cells().map((cell) => cell.textContent)).toEqual([
      '00days0 days',
      '00hours0 hours',
      '00minutes0 minutes',
      '00seconds0 seconds',
    ])
  })
})
