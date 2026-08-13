import { afterEach, describe, expect, it, vi } from 'vitest'
import { act, cleanup, fireEvent, render, screen } from '@testing-library/react'
import { HERO_INTERVAL_MS, TESTIMONIALS } from '../data'
import { Testimonials } from './Testimonials'

afterEach(() => {
  vi.useRealTimers()
  cleanup()
})

describe('Testimonials', () => {
  it('renders the quote icon, current quote and author', () => {
    const { container } = render(<Testimonials />)
    expect(screen.getByRole('region', { name: 'Testimonials' })).toBeInTheDocument()
    expect(container.querySelector('svg')).toBeInTheDocument()
    expect(screen.getByRole('blockquote')).toHaveTextContent(TESTIMONIALS[0]!.quote)
    expect(screen.getByText(TESTIMONIALS[0]!.author)).toBeInTheDocument()
  })

  it('navigates testimonials with prev/next (wrapping) and dots', () => {
    render(<Testimonials />)
    const dots = screen.getAllByRole('button', { name: /Go to testimonial/ })
    expect(dots).toHaveLength(3)
    expect(dots[0]).toHaveAttribute('aria-current', 'true')

    fireEvent.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText(TESTIMONIALS[1]!.author)).toBeInTheDocument()
    expect(dots[1]).toHaveAttribute('aria-current', 'true')

    fireEvent.click(screen.getByRole('button', { name: 'Next testimonial' }))
    fireEvent.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText(TESTIMONIALS[0]!.quote)).toBeInTheDocument()

    // Prev from slide 1 wraps back to the last slide.
    fireEvent.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText(TESTIMONIALS[2]!.quote)).toBeInTheDocument()

    // A dot click jumps straight to that testimonial.
    fireEvent.click(dots[1] as HTMLElement)
    expect(dots[1]).toHaveAttribute('aria-current', 'true')
  })

  it('auto-advances and clears the timer on unmount', () => {
    vi.useFakeTimers()
    const { unmount } = render(<Testimonials />)

    act(() => {
      vi.advanceTimersByTime(HERO_INTERVAL_MS)
    })
    expect(screen.getByText(TESTIMONIALS[1]!.quote)).toBeInTheDocument()
    expect(vi.getTimerCount()).toBe(1)

    unmount()
    expect(vi.getTimerCount()).toBe(0)
  })
})
