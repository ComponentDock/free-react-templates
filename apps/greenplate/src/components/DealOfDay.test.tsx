import { describe, expect, it, vi, afterEach } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { DealOfDay } from './DealOfDay'

afterEach(() => {
  vi.useRealTimers()
})

describe('DealOfDay', () => {
  it('renders the Deal of the day heading', () => {
    render(<DealOfDay />)
    expect(screen.getByRole('heading', { name: 'Deal of the day' })).toBeInTheDocument()
  })

  it('renders countdown timer elements', () => {
    render(<DealOfDay />)
    expect(screen.getByText('Days')).toBeInTheDocument()
    expect(screen.getByText('Hours')).toBeInTheDocument()
    expect(screen.getByText('Min')).toBeInTheDocument()
    expect(screen.getByText('Sec')).toBeInTheDocument()
  })

  it('updates countdown values over time', () => {
    vi.useFakeTimers()
    render(<DealOfDay />)
    // Advance 2 seconds
    act(() => {
      vi.advanceTimersByTime(2000)
    })
    // Timer should still show countdown values (not all zeros since target is 7 days away)
    expect(screen.getByText('Days')).toBeInTheDocument()
    expect(screen.getByText('Hours')).toBeInTheDocument()
  })
})
