import { afterEach, describe, expect, it, vi } from 'vitest'
import { act, fireEvent, render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('shows one testimonial at a time with bar-style pagination', () => {
    render(<Testimonials />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Love By Our Listeners' }),
    ).toBeInTheDocument()

    // All six slides exist; only the first is visible.
    const slides = screen.getAllByRole('heading', { level: 3, hidden: true })
    expect(slides).toHaveLength(6)
    expect(screen.getByRole('heading', { level: 3, name: 'Megan Smith' })).toBeInTheDocument()

    const bars = screen.getAllByRole('button', { name: /Go to slide/ })
    expect(bars).toHaveLength(6)
    expect(bars[0]).toHaveClass('bg-brand')
    expect(bars[1]).toHaveClass('bg-bullet')

    fireEvent.click(bars[2]!)
    expect(screen.getByRole('heading', { level: 3, name: 'Philip Martin' })).toBeInTheDocument()
    expect(screen.queryByRole('heading', { level: 3, name: 'Megan Smith' })).not.toBeInTheDocument()
    expect(bars[2]).toHaveClass('bg-brand')
    expect(bars[0]).toHaveClass('bg-bullet')
  })

  it('auto-advances to the next slide after five seconds', () => {
    vi.useFakeTimers()
    render(<Testimonials />)

    expect(screen.getByRole('heading', { level: 3, name: 'Megan Smith' })).toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(5000)
    })

    expect(screen.getByRole('heading', { level: 3, name: 'Brooke Cagle' })).toBeInTheDocument()
    expect(screen.queryByRole('heading', { level: 3, name: 'Megan Smith' })).not.toBeInTheDocument()
  })
})
