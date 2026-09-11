import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, act, fireEvent } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders first testimonial by default', () => {
    render(<Testimonials />)
    expect(screen.getByText(/Plea helped me navigate/)).toBeInTheDocument()
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
  })

  it('navigates to next testimonial on next button click', () => {
    render(<Testimonials />)

    fireEvent.click(screen.getByRole('button', { name: /next testimonial/i }))
    expect(screen.getByText(/legal team at Plea/)).toBeInTheDocument()
    expect(screen.getByText('Michael Chen')).toBeInTheDocument()
  })

  it('navigates to previous testimonial', () => {
    render(<Testimonials />)

    fireEvent.click(screen.getByRole('button', { name: /previous testimonial/i }))
    expect(screen.getByText(/family therapy sessions/)).toBeInTheDocument()
    expect(screen.getByText('Emily Rodriguez')).toBeInTheDocument()
  })

  it('auto-advances after 5 seconds', () => {
    render(<Testimonials />)

    act(() => {
      vi.advanceTimersByTime(5000)
    })

    expect(screen.getByText(/legal team at Plea/)).toBeInTheDocument()
  })

  it('renders all navigation buttons', () => {
    render(<Testimonials />)
    expect(screen.getByRole('button', { name: /previous testimonial/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /next testimonial/i })).toBeInTheDocument()
  })
})
