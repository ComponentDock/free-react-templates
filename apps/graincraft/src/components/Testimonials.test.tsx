import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading and the first testimonial', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: /What Our Clients Say/i })).toBeInTheDocument()
    expect(screen.getByText(/Michael Torres/)).toBeInTheDocument()
  })

  it('navigates to the next testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    const nextBtn = screen.getByRole('button', { name: 'Next testimonial' })
    await user.click(nextBtn)
    expect(screen.getByText(/Sarah Mitchell/)).toBeInTheDocument()
  })

  it('navigates to the previous testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    const prevBtn = screen.getByRole('button', { name: 'Previous testimonial' })
    await user.click(prevBtn)
    expect(screen.getByText(/David Chen/)).toBeInTheDocument()
  })

  it('navigates via dot indicators', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    const dot = screen.getByRole('button', { name: 'Go to testimonial 2' })
    await user.click(dot)
    expect(screen.getByText(/Sarah Mitchell/)).toBeInTheDocument()
  })

  it('wraps next from last testimonial to first', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    // Go to last (David Chen)
    const dot = screen.getByRole('button', { name: 'Go to testimonial 3' })
    await user.click(dot)
    expect(screen.getByText(/David Chen/)).toBeInTheDocument()
    // Click next should wrap to first (Michael Torres)
    const nextBtn = screen.getByRole('button', { name: 'Next testimonial' })
    await user.click(nextBtn)
    expect(screen.getByText(/Michael Torres/)).toBeInTheDocument()
  })

  it('goes to previous testimonial from non-first position', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    // Go to middle (Sarah Mitchell)
    const dot = screen.getByRole('button', { name: 'Go to testimonial 2' })
    await user.click(dot)
    expect(screen.getByText(/Sarah Mitchell/)).toBeInTheDocument()
    // Click prev should go to first (Michael Torres)
    const prevBtn = screen.getByRole('button', { name: 'Previous testimonial' })
    await user.click(prevBtn)
    expect(screen.getByText(/Michael Torres/)).toBeInTheDocument()
  })
})
