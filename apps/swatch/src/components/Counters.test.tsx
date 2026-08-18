import { describe, expect, it, vi, afterEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { act } from 'react'
import { Counters } from './Counters'

afterEach(() => {
  vi.useRealTimers()
})

describe('Counters', () => {
  it('animates the counters from zero to their targets', () => {
    vi.useFakeTimers()
    render(<Counters />)

    expect(screen.getAllByText('0')).toHaveLength(3)

    act(() => {
      vi.advanceTimersByTime(30 * 60)
    })

    expect(screen.getByText('3,000')).toBeInTheDocument()
    expect(screen.getByText('320')).toBeInTheDocument()
    expect(screen.getByText('1,000')).toBeInTheDocument()
    expect(screen.getByText('Happy Customer')).toBeInTheDocument()
    expect(screen.getByText('Project Completed')).toBeInTheDocument()
    expect(screen.getByText('Cups of Coffee')).toBeInTheDocument()
  })

  it('cleans up the interval on unmount mid-animation', () => {
    vi.useFakeTimers()
    const { unmount } = render(<Counters />)

    act(() => {
      vi.advanceTimersByTime(60)
    })
    expect(() => unmount()).not.toThrow()
  })
})
