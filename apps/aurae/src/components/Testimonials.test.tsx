import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders a testimonial quote', () => {
    render(<Testimonials />)
    expect(screen.getByText(/On the other hand/i)).toBeInTheDocument()
  })

  it('renders the author name and role', () => {
    render(<Testimonials />)
    expect(screen.getByText('Denise Thomas')).toBeInTheDocument()
    expect(screen.getByText('Designer')).toBeInTheDocument()
  })

  it('navigates to next testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: /Next testimonial/i }))
    expect(screen.getByText('Maria Santos')).toBeInTheDocument()
  })

  it('navigates to previous testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: /Previous testimonial/i }))
    expect(screen.getByText('Sarah Chen')).toBeInTheDocument()
  })

  it('renders filled star ratings', () => {
    render(<Testimonials />)
    const filledStars = document.querySelectorAll('.fill-brand')
    expect(filledStars.length).toBeGreaterThanOrEqual(1)
  })

  it('wraps around from last to first on next', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    // Navigate to last testimonial (index 2)
    await user.click(screen.getByRole('button', { name: /Next testimonial/i }))
    await user.click(screen.getByRole('button', { name: /Next testimonial/i }))
    expect(screen.getByText('Sarah Chen')).toBeInTheDocument()
    // Click next again - should wrap to first (index 0)
    await user.click(screen.getByRole('button', { name: /Next testimonial/i }))
    expect(screen.getByText('Denise Thomas')).toBeInTheDocument()
  })

  it('wraps around from first to last on previous', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    // At first testimonial (index 0), click prev - should wrap to last (index 2)
    await user.click(screen.getByRole('button', { name: /Previous testimonial/i }))
    expect(screen.getByText('Sarah Chen')).toBeInTheDocument()
  })

  it('navigates backward from middle testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    // Go to second testimonial (index 1)
    await user.click(screen.getByRole('button', { name: /Next testimonial/i }))
    expect(screen.getByText('Maria Santos')).toBeInTheDocument()
    // Go back to first (index 0) — exercises the non-wrapping prev branch
    await user.click(screen.getByRole('button', { name: /Previous testimonial/i }))
    expect(screen.getByText('Denise Thomas')).toBeInTheDocument()
  })
})
