import { render, screen, act } from '@testing-library/react'
import { Events, Countdown } from './Events'
import { it, expect, vi, beforeEach, afterEach, describe } from 'vitest'

beforeEach(() => {
  vi.useFakeTimers()
})
afterEach(() => {
  vi.useRealTimers()
})

describe('Events', () => {
  it('renders first event with title and countdown', () => {
    render(<Events />)
    expect(screen.getByText('Christmas Special Dinner')).toBeInTheDocument()
    expect(screen.getByText('Days')).toBeInTheDocument()
    expect(screen.getByText('Hours')).toBeInTheDocument()
    expect(screen.getByText('Minutes')).toBeInTheDocument()
    expect(screen.getByText('Seconds')).toBeInTheDocument()
  })

  it('renders View Details link', () => {
    render(<Events />)
    expect(screen.getByRole('link', { name: 'View Details' })).toBeInTheDocument()
  })

  it('renders date badge', () => {
    render(<Events />)
    expect(screen.getByText('Dec 25, 2026')).toBeInTheDocument()
  })

  it('auto-advances to next event', () => {
    render(<Events />)
    expect(screen.getByText('Christmas Special Dinner')).toBeInTheDocument()
    act(() => {
      vi.advanceTimersByTime(8000)
    })
    expect(screen.getByText('New Year Celebration')).toBeInTheDocument()
    expect(screen.getByText('Jan 1, 2027')).toBeInTheDocument()
  })

  it('renders event images', () => {
    const { container } = render(<Events />)
    const images = container.querySelectorAll('img')
    expect(images.length).toBeGreaterThanOrEqual(2)
  })
})

describe('Countdown', () => {
  it('renders countdown with initial values', () => {
    const { container } = render(
      <Countdown initialDays={1} initialHours={2} initialMinutes={3} initialSeconds={4} />,
    )
    const values = container.querySelectorAll('.text-2xl.font-bold')
    expect(values[0]).toHaveTextContent('01')
    expect(values[1]).toHaveTextContent('02')
    expect(values[2]).toHaveTextContent('03')
    expect(values[3]).toHaveTextContent('04')
  })

  it('decrements seconds', () => {
    const { container } = render(
      <Countdown initialDays={0} initialHours={0} initialMinutes={0} initialSeconds={5} />,
    )
    act(() => {
      vi.advanceTimersByTime(1000)
    })
    const values = container.querySelectorAll('.text-2xl.font-bold')
    expect(values[3]).toHaveTextContent('04')
  })

  it('decrements minutes when seconds reach zero', () => {
    const { container } = render(
      <Countdown initialDays={0} initialHours={0} initialMinutes={1} initialSeconds={0} />,
    )
    act(() => {
      vi.advanceTimersByTime(1000)
    })
    const values = container.querySelectorAll('.text-2xl.font-bold')
    expect(values[2]).toHaveTextContent('00')
    expect(values[3]).toHaveTextContent('59')
  })

  it('decrements hours when minutes reach zero', () => {
    const { container } = render(
      <Countdown initialDays={0} initialHours={1} initialMinutes={0} initialSeconds={0} />,
    )
    act(() => {
      vi.advanceTimersByTime(1000)
    })
    const values = container.querySelectorAll('.text-2xl.font-bold')
    expect(values[1]).toHaveTextContent('00')
    expect(values[2]).toHaveTextContent('59')
  })

  it('decrements days when hours reach zero', () => {
    const { container } = render(
      <Countdown initialDays={1} initialHours={0} initialMinutes={0} initialSeconds={0} />,
    )
    act(() => {
      vi.advanceTimersByTime(1000)
    })
    const values = container.querySelectorAll('.text-2xl.font-bold')
    expect(values[0]).toHaveTextContent('00')
    expect(values[1]).toHaveTextContent('23')
  })

  it('stops when total reaches zero', () => {
    const { container } = render(
      <Countdown initialDays={0} initialHours={0} initialMinutes={0} initialSeconds={0} />,
    )
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    const values = container.querySelectorAll('.text-2xl.font-bold')
    expect(values[0]).toHaveTextContent('00')
    expect(values[1]).toHaveTextContent('00')
    expect(values[2]).toHaveTextContent('00')
    expect(values[3]).toHaveTextContent('00')
  })

  it('handles days already at zero when cascading', () => {
    // Start with 0 days, 0 hours, 0 minutes, 1 second
    // After 2 ticks: seconds reach 0, cascade calls setD with prevD=0
    const { container } = render(
      <Countdown initialDays={0} initialHours={0} initialMinutes={0} initialSeconds={1} />,
    )
    act(() => {
      vi.advanceTimersByTime(2000)
    })
    const values = container.querySelectorAll('.text-2xl.font-bold')
    // Days should remain 00, hours should become 23, minutes 59, seconds 59
    expect(values[0]).toHaveTextContent('00')
    expect(values[1]).toHaveTextContent('23')
    expect(values[2]).toHaveTextContent('59')
    expect(values[3]).toHaveTextContent('59')
  })
})
