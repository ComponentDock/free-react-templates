import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders first testimonial by default', () => {
    render(<Testimonials />)
    expect(screen.getByText(/DigiView transformed/i)).toBeInTheDocument()
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByText('CEO, TechStart')).toBeInTheDocument()
  })

  it('navigates to next testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: /Next testimonial/i }))
    expect(screen.getByText(/results speak for themselves/i)).toBeInTheDocument()
    expect(screen.getByText('Michael Chen')).toBeInTheDocument()
  })

  it('navigates to previous testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: /Previous testimonial/i }))
    expect(screen.getByText(/Professional, creative/i)).toBeInTheDocument()
    expect(screen.getByText('Emma Williams')).toBeInTheDocument()
  })

  it('wraps around from last to first on next', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    // Go to last via prev
    await user.click(screen.getByRole('button', { name: /Previous testimonial/i }))
    // Click next to wrap to first
    await user.click(screen.getByRole('button', { name: /Next testimonial/i }))
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
  })

  it('wraps from first to last on prev', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    // Click previous from first to wrap to last
    await user.click(screen.getByRole('button', { name: /Previous testimonial/i }))
    expect(screen.getByText('Emma Williams')).toBeInTheDocument()
  })

  it('navigates forward then backward through testimonials', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    // Go to index 1
    await user.click(screen.getByRole('button', { name: /Next testimonial/i }))
    expect(screen.getByText('Michael Chen')).toBeInTheDocument()
    // Go back to index 0 (prev from non-zero index — covers i - 1 branch)
    await user.click(screen.getByRole('button', { name: /Previous testimonial/i }))
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
  })
})
