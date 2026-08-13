import { describe, expect, it, vi } from 'vitest'
import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Services } from './Services'

describe('Services', () => {
  it('shows the heading and six green service cards with white icons and titles', () => {
    const { container } = render(<Services />)
    expect(screen.getByRole('heading', { level: 2, name: 'Our Featured Services' })).toHaveClass(
      'text-primary',
    )
    const titles = screen.getAllByRole('heading', { level: 3 }).map((h) => h.textContent)
    expect(titles).toEqual([
      'Weight Lifting',
      'Meditation',
      'Crossfit',
      'Aerobics',
      'Gym',
      'Circling',
    ])
    expect(container.querySelectorAll('div.bg-primary')).toHaveLength(6)
    expect(container.querySelectorAll('svg.text-white')).toHaveLength(6)
  })

  it('navigates with the dots and marks the active one', async () => {
    const user = userEvent.setup()
    render(<Services />)
    expect(screen.getByRole('button', { name: 'Go to slide 1' })).toHaveAttribute(
      'aria-current',
      'true',
    )
    await user.click(screen.getByRole('button', { name: 'Go to slide 6' }))
    expect(screen.getByRole('button', { name: 'Go to slide 6' })).toHaveAttribute(
      'aria-current',
      'true',
    )
    expect(screen.getByRole('button', { name: 'Go to slide 1' })).not.toHaveAttribute(
      'aria-current',
    )
  })

  it('rotates through the cards on a timer and cleans up on unmount', () => {
    vi.useFakeTimers()
    try {
      const { unmount } = render(<Services />)
      act(() => {
        vi.advanceTimersByTime(5000)
      })
      expect(screen.getByRole('button', { name: 'Go to slide 2' })).toHaveAttribute(
        'aria-current',
        'true',
      )
      act(() => {
        vi.advanceTimersByTime(25000)
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
