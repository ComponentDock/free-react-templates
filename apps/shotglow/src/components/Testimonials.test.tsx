import { describe, expect, it, vi } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the testimonials subtitle and first testimonial', () => {
    render(<Testimonials />)
    expect(screen.getByText('Testimonials')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /With Efficiency to Unlock/i })).toBeInTheDocument()
    expect(screen.getByText(/Mitchel Jefferson/)).toBeInTheDocument()
    expect(screen.getByText(/CEO of Softking/)).toBeInTheDocument()
  })

  it('navigates to next testimonial on next button click', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText(/Sarah Mitchell/)).toBeInTheDocument()
    expect(screen.getByText(/Creative Director/)).toBeInTheDocument()
  })

  it('navigates to previous testimonial on prev button click', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText(/David Chen/)).toBeInTheDocument()
  })

  it('auto-advances after 5 seconds', () => {
    vi.useFakeTimers()
    render(<Testimonials />)
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(screen.getByText(/Sarah Mitchell/)).toBeInTheDocument()
    vi.useRealTimers()
  })
})
