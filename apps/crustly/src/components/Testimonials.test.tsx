import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(screen.getByText('What Our Customers Say')).toBeInTheDocument()
  })

  it('shows the first testimonial by default', () => {
    render(<Testimonials />)
    expect(screen.getByText('Sarah Mitchell')).toBeInTheDocument()
    expect(screen.getByText('Food Blogger')).toBeInTheDocument()
  })

  it('navigates to the next testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    await user.click(screen.getByRole('button', { name: /next testimonial/i }))
    expect(screen.getByText('James Rodriguez')).toBeInTheDocument()
    expect(screen.getByText('Restaurant Critic')).toBeInTheDocument()
  })

  it('navigates to the previous testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    await user.click(screen.getByRole('button', { name: /next testimonial/i }))
    await user.click(screen.getByRole('button', { name: /next testimonial/i }))
    expect(screen.getByText('Emily Chen')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /previous testimonial/i }))
    expect(screen.getByText('James Rodriguez')).toBeInTheDocument()
  })

  it('wraps around from first to last on prev', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    await user.click(screen.getByRole('button', { name: /previous testimonial/i }))
    expect(screen.getByText('Emily Chen')).toBeInTheDocument()
  })

  it('wraps around from last to first on next', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    // Navigate to last (index 2)
    await user.click(screen.getByRole('button', { name: /next testimonial/i }))
    await user.click(screen.getByRole('button', { name: /next testimonial/i }))
    expect(screen.getByText('Emily Chen')).toBeInTheDocument()

    // Click next to wrap around to first
    await user.click(screen.getByRole('button', { name: /next testimonial/i }))
    expect(screen.getByText('Sarah Mitchell')).toBeInTheDocument()
  })
})
