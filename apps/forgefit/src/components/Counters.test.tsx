import { act, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { Counters } from './Counters'

describe('Counters', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('shows all four counter labels', () => {
    render(<Counters />)

    expect(screen.getByText('Active Members')).toBeInTheDocument()
    expect(screen.getByText('Weekly Classes')).toBeInTheDocument()
    expect(screen.getByText('Expert Trainers')).toBeInTheDocument()
    expect(screen.getByText('Years Open')).toBeInTheDocument()
  })

  it('animates the counters from zero to their targets', () => {
    render(<Counters />)

    expect(screen.getAllByText(/^0\+?$/).length).toBe(4)
    expect(screen.queryByText('5,000+')).not.toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(2000)
    })

    expect(screen.getByText('5,000+')).toBeInTheDocument()
    expect(screen.getByText('50+')).toBeInTheDocument()
    expect(screen.getByText('15+')).toBeInTheDocument()
    expect(screen.getByText('12')).toBeInTheDocument()
  })
})
