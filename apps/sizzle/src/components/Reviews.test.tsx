import { render, screen, fireEvent, act, cleanup } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { Reviews } from './Reviews'
import { reviews } from '../data'

describe('Reviews', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    cleanup()
    vi.useRealTimers()
  })

  it('renders the first review with avatar, stars, quote and name', () => {
    const { container } = render(<Reviews />)
    const first = reviews[0]!
    expect(screen.getByText(first.quote)).toBeInTheDocument()
    expect(screen.getByText(first.name)).toBeInTheDocument()
    expect(screen.getByLabelText('5 out of 5 stars')).toBeInTheDocument()
    expect(container.querySelector('img')).toHaveAttribute('src', first.avatar)
  })

  it('renders a dot for every review with the first one active', () => {
    render(<Reviews />)
    for (const review of reviews) {
      expect(
        screen.getByRole('button', { name: `Show review from ${review.name}` }),
      ).toBeInTheDocument()
    }
    expect(
      screen.getByRole('button', { name: `Show review from ${reviews[0]!.name}` }),
    ).toHaveClass('bg-brand')
  })

  it('switches reviews when a dot is clicked', () => {
    render(<Reviews />)
    const second = reviews[1]!
    fireEvent.click(screen.getByRole('button', { name: `Show review from ${second.name}` }))
    expect(screen.getByText(second.quote)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: `Show review from ${second.name}` })).toHaveClass(
      'bg-brand',
    )
  })

  it('advances to the next review automatically', () => {
    render(<Reviews />)
    const second = reviews[1]!
    expect(screen.queryByText(second.quote)).not.toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(6000)
    })
    expect(screen.getByText(second.quote)).toBeInTheDocument()
  })
})
