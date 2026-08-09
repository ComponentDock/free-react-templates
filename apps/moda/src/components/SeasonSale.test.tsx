import { act, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Countdown, SeasonSale } from './SeasonSale'

afterEach(() => {
  vi.useRealTimers()
})

describe('SeasonSale', () => {
  it('renders the sale heading, subtext, and Shop All Sale CTA on the brand gradient', () => {
    const { container } = render(<SeasonSale />)
    expect(screen.getByText('Limited Time Offer')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Season Sale' })).toBeInTheDocument()
    expect(screen.getByText('Up to 50% off on selected items')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Shop All Sale' })).toBeInTheDocument()
    expect(container.firstElementChild).toHaveClass('from-primary-600', 'to-primary-800')
  })

  it('renders four sale product cards with discount badges and strikethrough prices', () => {
    render(<SeasonSale />)
    expect(screen.getByText('-25%')).toBeInTheDocument()
    expect(screen.getByText('-18%')).toBeInTheDocument()
    expect(screen.getByText('-17%')).toBeInTheDocument()
    expect(screen.getByText('-19%')).toBeInTheDocument()
    expect(screen.getAllByText('$225')).toHaveLength(1)
    expect(screen.getByText('$275')).toHaveClass('line-through')
  })
})

describe('Countdown', () => {
  it('renders Days, Hours, Minutes, and Seconds boxes that tick down', () => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2032-03-10T00:00:00Z'))
    const deadline = new Date('2032-03-12T14:36:48Z').getTime()
    render(<Countdown deadline={deadline} />)
    expect(screen.getByText('Days')).toBeInTheDocument()
    expect(screen.getByText('Hours')).toBeInTheDocument()
    expect(screen.getByText('Minutes')).toBeInTheDocument()
    expect(screen.getByText('Seconds')).toBeInTheDocument()
    expect(screen.getByText('02')).toBeInTheDocument()
    expect(screen.getByText('14')).toBeInTheDocument()
    expect(screen.getByText('36')).toBeInTheDocument()
    expect(screen.getByText('48')).toBeInTheDocument()
    act(() => {
      vi.advanceTimersByTime(1000)
    })
    expect(screen.getByText('47')).toBeInTheDocument()
    act(() => {
      vi.advanceTimersByTime(60_000)
    })
    expect(screen.getByText('35')).toBeInTheDocument()
  })

  it('shows zeros once the deadline has passed', () => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2032-03-10T00:00:00Z'))
    render(<Countdown deadline={new Date('2032-03-01T00:00:00Z').getTime()} />)
    expect(screen.getAllByText('00')).toHaveLength(4)
  })

  it('clears its interval on unmount', () => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2032-03-10T00:00:00Z'))
    const deadline = new Date('2032-03-12T14:36:48Z').getTime()
    const { unmount } = render(<Countdown deadline={deadline} />)
    unmount()
    expect(vi.getTimerCount()).toBe(0)
  })
})
