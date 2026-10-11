import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { act, render, screen } from '@testing-library/react'
import { Countdown } from './Countdown'

const SECOND = 1000

describe('Countdown', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2026-01-01T00:00:00Z'))
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders four rings in day-to-second order with the live values', () => {
    const { container } = render(<Countdown />)

    const row = container.firstElementChild

    expect(row).toHaveClass(
      'mx-auto',
      'flex',
      'w-full',
      'max-w-[700px]',
      'flex-wrap',
      'justify-center',
      'pt-[116px]',
    )

    const rings = screen.getAllByTestId(/^countdown-ring-/)

    expect(rings).toHaveLength(4)
    expect(rings.map((ring) => ring.getAttribute('data-testid'))).toEqual([
      'countdown-ring-days',
      'countdown-ring-hours',
      'countdown-ring-minutes',
      'countdown-ring-seconds',
    ])
    expect(rings.map((ring) => ring.textContent)).toEqual([
      '35Days',
      '18Hours',
      '00Minutes',
      '00Seconds',
    ])
  })

  it('writes the day value raw and zero-pads the other three each second', () => {
    render(<Countdown />)

    act(() => {
      vi.advanceTimersByTime(SECOND)
    })

    expect(screen.getByTestId('countdown-ring-days')).toHaveTextContent('35Days')
    expect(screen.getByTestId('countdown-ring-hours')).toHaveTextContent('17Hours')
    expect(screen.getByTestId('countdown-ring-minutes')).toHaveTextContent('59Minutes')
    expect(screen.getByTestId('countdown-ring-seconds')).toHaveTextContent('59Seconds')
  })

  it('accepts a className override', () => {
    const { container } = render(<Countdown className="pt-0" />)

    expect(container.firstElementChild).toHaveClass('pt-0')
  })
})
