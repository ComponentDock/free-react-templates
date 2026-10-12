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

  it('stacks four units down the right edge, separated by nothing at all', () => {
    render(<Countdown />)

    const column = screen.getByTestId('countdown')

    expect(column).toHaveClass(
      'flex',
      'flex-col',
      'flex-wrap',
      'pt-[34px]',
      'max-[992px]:flex-row',
      'max-[992px]:justify-center',
      'max-[992px]:pt-[80px]',
    )
    expect(Array.from(column.children).map((child) => child.getAttribute('data-testid'))).toEqual([
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

  it('accepts layout overrides', () => {
    render(<Countdown className="pt-0" />)

    expect(screen.getByTestId('countdown')).toHaveClass('pt-0')
  })
})
