import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'
import { describe, expect, it } from 'vitest'

describe('Testimonials', () => {
  it('renders the first testimonial by default', () => {
    render(<Testimonials />)
    expect(screen.getByText('Sarah Chen')).toBeInTheDocument()
    expect(screen.getByText('Creative Director')).toBeInTheDocument()
  })

  it('renders the quote text', () => {
    render(<Testimonials />)
    expect(screen.getByText(/Molestie at elementum/)).toBeInTheDocument()
  })

  it('renders navigation buttons', () => {
    render(<Testimonials />)
    expect(screen.getByRole('button', { name: /previous testimonial/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /next testimonial/i })).toBeInTheDocument()
  })

  it('navigates to the next testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    expect(screen.getByText('Sarah Chen')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /next testimonial/i }))
    expect(screen.getByText('James Wilson')).toBeInTheDocument()
  })

  it('navigates to the previous testimonial from middle', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    // Go to next (James Wilson, index 1)
    await user.click(screen.getByRole('button', { name: /next testimonial/i }))
    expect(screen.getByText('James Wilson')).toBeInTheDocument()

    // Go back to previous (Sarah Chen, index 0) - covers c !== 0 branch
    await user.click(screen.getByRole('button', { name: /previous testimonial/i }))
    expect(screen.getByText('Sarah Chen')).toBeInTheDocument()
  })

  it('wraps around from last to first on next', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    // Navigate to last (Emily Park)
    await user.click(screen.getByRole('button', { name: /previous testimonial/i }))
    expect(screen.getByText('Emily Park')).toBeInTheDocument()

    // Next should wrap to first (Sarah Chen)
    await user.click(screen.getByRole('button', { name: /next testimonial/i }))
    expect(screen.getByText('Sarah Chen')).toBeInTheDocument()
  })

  it('wraps around from first to last on previous', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    // Already on first (Sarah Chen)
    expect(screen.getByText('Sarah Chen')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /previous testimonial/i }))
    expect(screen.getByText('Emily Park')).toBeInTheDocument()
  })
})
