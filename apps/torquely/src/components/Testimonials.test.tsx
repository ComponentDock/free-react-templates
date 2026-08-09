import { describe, expect, it, vi } from 'vitest'
import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading and the first testimonial', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: /Happy Clients & Feedbacks/i })).toBeInTheDocument()
    expect(screen.getByText('Roger Scott')).toBeInTheDocument()
    expect(screen.getByText('Marketing Manager')).toBeInTheDocument()
    expect(screen.getByText(/Vokalia and Consonantia/i)).toBeInTheDocument()
  })

  it('switches testimonials when a dot is activated', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: 'Go to testimonial 3' }))
    expect(screen.getByText(/regelialia/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to testimonial 3' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('auto-advances the carousel on an interval and wraps around', () => {
    vi.useFakeTimers()
    render(<Testimonials />)
    expect(screen.getByText(/Vokalia and Consonantia/i)).toBeInTheDocument()
    act(() => {
      vi.advanceTimersByTime(7000)
    })
    expect(screen.getByText(/Bookmarksgrove/i)).toBeInTheDocument()
    act(() => {
      vi.advanceTimersByTime(7000)
    })
    expect(screen.getByText(/regelialia/i)).toBeInTheDocument()
    act(() => {
      vi.advanceTimersByTime(7000)
    })
    expect(screen.getByText(/Vokalia and Consonantia/i)).toBeInTheDocument()
    vi.useRealTimers()
  })
})
