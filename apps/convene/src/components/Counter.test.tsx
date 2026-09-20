import { render, screen, act } from '@testing-library/react'
import { Counter, computeTimeLeft } from './Counter'

describe('Counter', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the heading', () => {
    render(<Counter />)
    expect(screen.getByText(/Count Every Second/)).toBeInTheDocument()
  })

  it('renders countdown labels', () => {
    render(<Counter />)
    expect(screen.getByText('Days')).toBeInTheDocument()
    expect(screen.getByText('Hours')).toBeInTheDocument()
    expect(screen.getByText('Minutes')).toBeInTheDocument()
    expect(screen.getByText('Seconds')).toBeInTheDocument()
  })

  it('renders Conference Date label', () => {
    render(<Counter />)
    expect(screen.getByText('Conference Date')).toBeInTheDocument()
  })

  it('renders countdown digits', () => {
    render(<Counter />)
    const digits = screen.getAllByText(/\d{2}/)
    expect(digits.length).toBeGreaterThanOrEqual(4)
  })

  it('computeTimeLeft returns valid time left', () => {
    const result = computeTimeLeft()
    expect(result.days).toBeGreaterThanOrEqual(44)
    expect(result.days).toBeLessThanOrEqual(45)
    expect(result.hours).toBeGreaterThanOrEqual(0)
    expect(result.hours).toBeLessThan(24)
  })

  it('updates countdown via setInterval', () => {
    vi.useFakeTimers()
    render(<Counter />)
    act(() => {
      vi.advanceTimersByTime(2000)
    })
    const digits = screen.getAllByText(/\d{2}/)
    expect(digits.length).toBeGreaterThanOrEqual(4)
  })
})
