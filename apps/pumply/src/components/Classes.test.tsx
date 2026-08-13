import { describe, expect, it, vi } from 'vitest'
import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Classes } from './Classes'

describe('Classes', () => {
  it('shows the heading, five class cards with categories, and hover overlay markup', () => {
    const { container } = render(<Classes />)
    expect(screen.getByRole('heading', { level: 2, name: 'Classes' })).toHaveClass('text-primary')
    const cards = screen.getAllByRole('heading', { level: 3, name: 'Classes fitness name here' })
    expect(cards).toHaveLength(5)
    expect(screen.getAllByText('Fitness')).toHaveLength(2)
    expect(screen.getAllByText('Cardio Vascular')).toHaveLength(2)
    expect(screen.getByText('Lose Weight')).toBeInTheDocument()
    expect(container.querySelectorAll('img')).toHaveLength(5)
    expect(container.querySelector('[class*="bg-primary/80"]')).toHaveClass('opacity-0')
  })

  it('navigates with the dots and marks the active one', async () => {
    const user = userEvent.setup()
    render(<Classes />)
    expect(screen.getByRole('button', { name: 'Go to slide 1' })).toHaveAttribute(
      'aria-current',
      'true',
    )
    await user.click(screen.getByRole('button', { name: 'Go to slide 3' }))
    expect(screen.getByRole('button', { name: 'Go to slide 3' })).toHaveAttribute(
      'aria-current',
      'true',
    )
    expect(screen.getByRole('button', { name: 'Go to slide 1' })).not.toHaveAttribute(
      'aria-current',
    )
  })

  it('rotates through the slides on a timer and cleans up on unmount', () => {
    vi.useFakeTimers()
    try {
      const { unmount } = render(<Classes />)
      act(() => {
        vi.advanceTimersByTime(5000)
      })
      expect(screen.getByRole('button', { name: 'Go to slide 2' })).toHaveAttribute(
        'aria-current',
        'true',
      )
      act(() => {
        vi.advanceTimersByTime(20000)
      })
      expect(screen.getByRole('button', { name: 'Go to slide 1' })).toHaveAttribute(
        'aria-current',
        'true',
      )
      unmount()
    } finally {
      vi.useRealTimers()
    }
  })
})
