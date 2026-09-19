import { describe, expect, it, vi, afterEach } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(screen.getByText('Testimonials')).toBeInTheDocument()
  })

  it('renders a testimonial quote', () => {
    render(<Testimonials />)
    expect(screen.getByText(/Phasellus vehicula tempus orci/)).toBeInTheDocument()
  })

  it('renders the author name and role', () => {
    render(<Testimonials />)
    expect(screen.getByText('Jessica Brown')).toBeInTheDocument()
    expect(screen.getByText('Patient')).toBeInTheDocument()
  })

  it('renders navigation buttons', () => {
    render(<Testimonials />)
    expect(screen.getByRole('button', { name: /Previous testimonial/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Next testimonial/i })).toBeInTheDocument()
  })

  it('navigates to next testimonial on next button click', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: /Next testimonial/i }))
    expect(screen.getByText('Mark Wilson')).toBeInTheDocument()
  })

  it('navigates to previous testimonial on prev button click', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: /Previous testimonial/i }))
    expect(screen.getByText('Sarah Davis')).toBeInTheDocument()
  })

  it('auto-advances testimonials after 6 seconds', () => {
    vi.useFakeTimers()
    render(<Testimonials />)
    expect(screen.getByText('Jessica Brown')).toBeInTheDocument()
    act(() => {
      vi.advanceTimersByTime(6000)
    })
    expect(screen.getByText('Mark Wilson')).toBeInTheDocument()
  })
})
