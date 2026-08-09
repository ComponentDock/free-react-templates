import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, vi, describe, expect, it } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('shows the first quote with the customer name and five gold stars', () => {
    render(<Testimonials />)

    expect(screen.getByRole('heading', { name: 'What Clients Say' })).toBeInTheDocument()
    expect(screen.getByText(/Peter has never let me down/i)).toBeInTheDocument()
    expect(screen.getByText('Fanny Spencer')).toBeInTheDocument()
    expect(screen.getByLabelText('Rated 5 out of 5 stars')).toBeInTheDocument()
  })

  it('switches the quote when a thumbnail is clicked', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    await user.click(screen.getByRole('button', { name: 'Show testimonial from Daniel Ortiz' }))
    expect(screen.getByText(/every barbershop should run/i)).toBeInTheDocument()
    expect(screen.getByText('Daniel Ortiz')).toBeInTheDocument()
  })

  it('advances automatically on an interval', () => {
    vi.useFakeTimers()
    render(<Testimonials />)

    act(() => {
      vi.advanceTimersByTime(6000)
    })
    expect(screen.getByText('Marcus Reid')).toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(18000)
    })
    expect(screen.getByText('Fanny Spencer')).toBeInTheDocument()
  })

  it('clears the interval on unmount', () => {
    vi.useFakeTimers()
    const { unmount } = render(<Testimonials />)
    unmount()
    act(() => {
      vi.advanceTimersByTime(12000)
    })
    expect(screen.queryByText('Marcus Reid')).not.toBeInTheDocument()
  })
})
