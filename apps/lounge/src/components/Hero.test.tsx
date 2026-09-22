import { describe, it, expect, vi } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders first slide heading', () => {
    render(<Hero />)
    expect(screen.getByText('Welcome to Lounge — your seaside retreat')).toBeInTheDocument()
  })

  it('renders watch video button', () => {
    render(<Hero />)
    expect(screen.getByText('Watch Video')).toBeInTheDocument()
  })

  it('renders slide indicators', () => {
    render(<Hero />)
    const indicators = screen.getAllByLabelText(/Go to slide/)
    expect(indicators).toHaveLength(3)
  })

  it('auto-advances slides', async () => {
    vi.useFakeTimers()
    render(<Hero />)
    expect(screen.getByText('Welcome to Lounge — your seaside retreat')).toBeInTheDocument()
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(
      screen.getByText('Book the perfect accommodations without breaking the bank'),
    ).toBeInTheDocument()
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(screen.getByText('Discover something extraordinary')).toBeInTheDocument()
    vi.useRealTimers()
  })

  it('allows clicking slide indicators', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    await user.click(screen.getByLabelText('Go to slide 3'))
    expect(screen.getByText('Discover something extraordinary')).toBeInTheDocument()
  })
})
