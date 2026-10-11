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

  it('renders the four units and three colons in alternating order', () => {
    const { container } = render(<Countdown />)

    const box = container.firstElementChild as HTMLElement

    expect(box).toHaveClass(
      'flex',
      'flex-wrap',
      'items-center',
      'justify-around',
      'border-2',
      'border-box-border',
      'px-[50px]',
      'pt-[42px]',
      'pb-[22px]',
      'max-[768px]:mx-auto',
      'max-[768px]:max-w-[340px]',
      'max-[768px]:px-[15px]',
    )

    expect(Array.from(box.children).map((child) => child.getAttribute('data-testid'))).toEqual([
      'countdown-unit-days',
      'countdown-colon',
      'countdown-unit-hours',
      'countdown-colon',
      'countdown-unit-minutes',
      'countdown-colon',
      'countdown-unit-seconds',
    ])
    expect(screen.getAllByTestId('countdown-colon')).toHaveLength(3)
  })

  it('hides only the second colon on narrow screens', () => {
    render(<Countdown />)

    const colons = screen.getAllByTestId('countdown-colon')

    expect(colons[0]).not.toHaveClass('max-[768px]:hidden')
    expect(colons[1]).toHaveClass('max-[768px]:hidden')
    expect(colons[2]).not.toHaveClass('max-[768px]:hidden')
  })

  it('writes the day value raw and zero-pads the other three each second', () => {
    render(<Countdown />)

    expect(screen.getByTestId('countdown-unit-days')).toHaveTextContent('35Days')

    act(() => {
      vi.advanceTimersByTime(SECOND)
    })

    expect(screen.getByTestId('countdown-unit-days')).toHaveTextContent('35Days')
    expect(screen.getByTestId('countdown-unit-hours')).toHaveTextContent('17Hours')
    expect(screen.getByTestId('countdown-unit-minutes')).toHaveTextContent('59Minutes')
    expect(screen.getByTestId('countdown-unit-seconds')).toHaveTextContent('59Seconds')
  })

  it('accepts a className override', () => {
    const { container } = render(<Countdown className="px-0" />)

    expect(container.firstElementChild).toHaveClass('px-0')
  })
})
