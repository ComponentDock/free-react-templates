import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { Counter } from './Counter'

beforeEach(() => {
  vi.useFakeTimers()
})

afterEach(() => {
  vi.useRealTimers()
})

describe('Counter', () => {
  it('renders all counter labels', () => {
    render(<Counter />)
    expect(screen.getByText('Projects')).toBeInTheDocument()
    expect(screen.getByText('Employees')).toBeInTheDocument()
    expect(screen.getByText('Clients')).toBeInTheDocument()
    expect(screen.getByText('Tickets')).toBeInTheDocument()
  })

  it('starts with zero counts', () => {
    render(<Counter />)
    const zeros = screen.getAllByText(/^0$/)
    expect(zeros.length).toBeGreaterThanOrEqual(2)
  })

  it('counts up and reaches target', () => {
    render(<Counter />)

    // Advance timers past the full animation duration (2000ms at 16ms intervals)
    act(() => {
      vi.advanceTimersByTime(2100)
    })

    // After full animation, counter should show final values
    expect(screen.getByText('2000+')).toBeInTheDocument()
    expect(screen.getByText('5500+')).toBeInTheDocument()
    expect(screen.getByText('959')).toBeInTheDocument()
    expect(screen.getByText('367')).toBeInTheDocument()
  })

  it('cleans up interval on unmount before completion', () => {
    const clearIntervalSpy = vi.spyOn(global, 'clearInterval')
    const { unmount } = render(<Counter />)

    // Unmount before the animation completes so cleanup path is hit
    unmount()
    expect(clearIntervalSpy).toHaveBeenCalled()
    clearIntervalSpy.mockRestore()
  })
})
