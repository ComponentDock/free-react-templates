import { act, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Testimonials } from './Testimonials'
import { testimonials } from '../data'

describe('Testimonials', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the heading and subtitle', () => {
    render(<Testimonials />)
    expect(
      screen.getByRole('heading', { level: 2, name: testimonials.heading }),
    ).toBeInTheDocument()
    expect(screen.getByText(testimonials.subtitle)).toBeInTheDocument()
  })

  it('shows the first testimonial by default', () => {
    render(<Testimonials />)
    expect(screen.getByText(`“${testimonials.items[0]!.quote}”`)).toBeInTheDocument()
    expect(screen.getByText(testimonials.items[0]!.name)).toBeInTheDocument()
    expect(screen.getByText(testimonials.items[0]!.role)).toBeInTheDocument()
  })

  it('marks the first dot as current and renders a dot per testimonial', () => {
    render(<Testimonials />)
    const dots = screen.getAllByRole('button', { name: /Show testimonial/ })
    expect(dots).toHaveLength(testimonials.items.length)
    expect(dots[0]).toHaveAttribute('aria-current', 'true')
    expect(dots[1]).not.toHaveAttribute('aria-current')
  })

  it('jumps to the clicked testimonial', () => {
    render(<Testimonials />)
    fireEvent.click(screen.getByRole('button', { name: 'Show testimonial 2' }))
    expect(screen.getByText(`“${testimonials.items[1]!.quote}”`)).toBeInTheDocument()
  })

  it('cycles to the next testimonial on the interval', () => {
    vi.useFakeTimers()
    render(<Testimonials />)
    act(() => {
      vi.advanceTimersByTime(6000)
    })
    expect(screen.getByText(`“${testimonials.items[1]!.quote}”`)).toBeInTheDocument()
  })

  it('wraps around to the first testimonial after the last', () => {
    vi.useFakeTimers()
    render(<Testimonials />)
    act(() => {
      vi.advanceTimersByTime(6000 * testimonials.items.length)
    })
    expect(screen.getByText(`“${testimonials.items[0]!.quote}”`)).toBeInTheDocument()
  })

  it('clears the interval on unmount', () => {
    vi.useFakeTimers()
    const { unmount } = render(<Testimonials />)
    unmount()
    act(() => {
      vi.advanceTimersByTime(12000)
    })
  })
})
