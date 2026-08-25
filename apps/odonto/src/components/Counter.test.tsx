import { render, screen, act } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { Counter } from './Counter'

describe('Counter', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })
  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders all stat labels', () => {
    render(<Counter />)
    expect(screen.getByText('Happy Patients')).toBeInTheDocument()
    expect(screen.getByText('Performed Treatments')).toBeInTheDocument()
    expect(screen.getByText('Years of Experience')).toBeInTheDocument()
  })

  it('counts up to final values', () => {
    render(<Counter />)
    act(() => {
      vi.advanceTimersByTime(2500)
    })
    expect(screen.getByText('3,000+')).toBeInTheDocument()
    expect(screen.getByText('2,200+')).toBeInTheDocument()
    expect(screen.getByText('24')).toBeInTheDocument()
  })

  it('cleans up interval on unmount', () => {
    const { unmount } = render(<Counter />)
    act(() => {
      vi.advanceTimersByTime(500)
    })
    unmount()
    // Ensure no pending timers after unmount
    act(() => {
      vi.advanceTimersByTime(2500)
    })
  })
})
