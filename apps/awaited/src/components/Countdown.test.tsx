import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { act, render, screen, within } from '@testing-library/react'
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

  it('runs four units side by side, separated by nothing at all', () => {
    render(<Countdown />)

    const row = screen.getByTestId('countdown')

    expect(row).toHaveClass('flex', 'flex-wrap', 'items-center', 'justify-center')
    expect(Array.from(row.children).map((child) => child.getAttribute('data-testid'))).toEqual([
      'countdown-unit-days',
      'countdown-unit-hours',
      'countdown-unit-minutes',
      'countdown-unit-seconds',
    ])
    expect(screen.getByText('Days')).toBeInTheDocument()
    expect(screen.getByText('Hours')).toBeInTheDocument()
    expect(screen.getByText('Minutes')).toBeInTheDocument()
    expect(screen.getByText('Seconds')).toBeInTheDocument()
    expect(screen.queryByText(':')).toBeNull()
  })

  it('counts down 35 days and 19 hours from the first paint, one tick a second', () => {
    render(<Countdown />)

    expect(screen.getByTestId('countdown-unit-days-value')).toHaveTextContent('35')
    expect(screen.getByTestId('countdown-unit-hours-value')).toHaveTextContent('19')
    expect(screen.getByTestId('countdown-unit-minutes-value')).toHaveTextContent('00')
    expect(screen.getByTestId('countdown-unit-seconds-value')).toHaveTextContent('00')

    act(() => {
      vi.advanceTimersByTime(SECOND)
    })

    expect(screen.getByTestId('countdown-unit-days-value')).toHaveTextContent('35')
    expect(screen.getByTestId('countdown-unit-hours-value')).toHaveTextContent('18')
    expect(screen.getByTestId('countdown-unit-minutes-value')).toHaveTextContent('59')
    expect(screen.getByTestId('countdown-unit-seconds-value')).toHaveTextContent('59')
  })

  it('restarts the offset from its own first paint, never from a fixed date', () => {
    const first = render(<Countdown />)

    expect(within(first.container).getByTestId('countdown-unit-days-value')).toHaveTextContent('35')

    vi.setSystemTime(new Date('2026-06-01T00:00:00Z'))

    const second = render(<Countdown />)

    // a later mount still starts its own 35/19 offset, so nothing is date-pinned
    expect(within(second.container).getByTestId('countdown-unit-days-value')).toHaveTextContent(
      '35',
    )
    expect(within(second.container).getByTestId('countdown-unit-hours-value')).toHaveTextContent(
      '19',
    )
  })

  it('accepts layout overrides', () => {
    render(<Countdown className="mb-[10px]" />)

    expect(screen.getByTestId('countdown')).toHaveClass('mb-[10px]')
  })
})
