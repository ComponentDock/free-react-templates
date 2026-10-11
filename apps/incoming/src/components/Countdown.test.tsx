import { afterEach, describe, expect, it, vi } from 'vitest'
import { act, render, screen } from '@testing-library/react'
import { Countdown } from './Countdown'

describe('Countdown', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders four dark rounded tiles with their unit labels', () => {
    render(<Countdown />)

    expect(screen.getByText('Days')).toBeInTheDocument()
    expect(screen.getByText('Hours')).toBeInTheDocument()
    expect(screen.getByText('Minutes')).toBeInTheDocument()
    expect(screen.getByText('Seconds')).toBeInTheDocument()

    const tile = screen.getByText('Days').parentElement
    expect(tile).toHaveClass('h-[100px]', 'w-[90px]', 'rounded-tile', 'bg-ink', 'mx-[18px]')
  })

  it('starts 35 days and 18 hours out with padded sub-units', () => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2026-06-01T00:00:00.000Z'))

    render(<Countdown />)

    expect(screen.getByText('35')).toBeInTheDocument()
    expect(screen.getByText('18')).toBeInTheDocument()
    expect(screen.getAllByText('00')).toHaveLength(2)
  })

  it('ticks once per second', () => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2026-06-01T00:00:00.000Z'))

    render(<Countdown />)

    act(() => {
      vi.advanceTimersByTime(1000)
    })

    expect(screen.getByText('17')).toBeInTheDocument()
    expect(screen.getAllByText('59')).toHaveLength(2)
  })

  it('lays the tiles out in one wrapping centred row', () => {
    const { container } = render(<Countdown />)

    expect(container.firstElementChild).toHaveClass(
      'min-h-[230px]',
      'flex-wrap',
      'items-center',
      'justify-center',
    )
  })

  it('accepts a className override', () => {
    const { container } = render(<Countdown className="opacity-50" />)

    expect(container.firstElementChild).toHaveClass('opacity-50')
  })
})
