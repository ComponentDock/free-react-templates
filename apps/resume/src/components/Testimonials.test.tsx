import { act, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the heading and the three testimonial cards', () => {
    render(<Testimonials />)

    expect(
      screen.getByRole('heading', {
        level: 2,
        name: 'Some Possitive Feedback That Encourage Us',
      }),
    ).toBeInTheDocument()
    // only the active slide is visible; all three exist in the DOM
    expect(screen.getAllByText('Bradley Erickson').length).toBe(3)
    expect(screen.getAllByText('UI/UX Designer').length).toBe(3)
    expect(screen.getAllByRole('img', { hidden: true }).length).toBe(3)
    expect(screen.getByText(/conversion went up/i)).toBeInTheDocument()
  })

  it('auto-advances the testimonial slider on a timer', () => {
    vi.useFakeTimers()
    render(<Testimonials />)

    expect(screen.getByRole('button', { name: 'Show testimonial 1' })).toHaveAttribute(
      'aria-current',
      'true',
    )

    act(() => {
      vi.advanceTimersByTime(6000)
    })

    expect(screen.getByRole('button', { name: 'Show testimonial 2' })).toHaveAttribute(
      'aria-current',
      'true',
    )

    act(() => {
      vi.advanceTimersByTime(6000)
    })
    expect(screen.getByRole('button', { name: 'Show testimonial 3' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('switches testimonials when a dot is activated', () => {
    render(<Testimonials />)

    fireEvent.click(screen.getByRole('button', { name: 'Show testimonial 3' }))

    expect(screen.getByRole('button', { name: 'Show testimonial 3' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('cleans up the timer on unmount', () => {
    vi.useFakeTimers()
    const { unmount } = render(<Testimonials />)

    unmount()

    act(() => {
      vi.advanceTimersByTime(12000)
    })
    expect(screen.queryByRole('button', { name: 'Show testimonial 1' })).not.toBeInTheDocument()
  })
})
