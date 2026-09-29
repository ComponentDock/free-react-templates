import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders testimonial text', () => {
    render(<Testimonials />)
    expect(screen.getByText(/Donec imperdiet congue orci/i)).toBeInTheDocument()
  })

  it('renders author name', () => {
    render(<Testimonials />)
    expect(screen.getByText('Robert Thomson')).toBeInTheDocument()
  })

  it('navigates to next testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    // Start at 0, click next → 1
    await user.click(screen.getByRole('button', { name: /next testimonial/i }))
    expect(screen.getByText('Sarah Williams')).toBeInTheDocument()
    // Click next → 2
    await user.click(screen.getByRole('button', { name: /next testimonial/i }))
    expect(screen.getByText('James Cooper')).toBeInTheDocument()
    // Click next → wraps to 0
    await user.click(screen.getByRole('button', { name: /next testimonial/i }))
    expect(screen.getByText('Robert Thomson')).toBeInTheDocument()
  })

  it('navigates to previous testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    // Start at 0, click prev → wraps to 2
    await user.click(screen.getByRole('button', { name: /previous testimonial/i }))
    expect(screen.getByText('James Cooper')).toBeInTheDocument()
    // Click prev → 1
    await user.click(screen.getByRole('button', { name: /previous testimonial/i }))
    expect(screen.getByText('Sarah Williams')).toBeInTheDocument()
    // Click prev → 0
    await user.click(screen.getByRole('button', { name: /previous testimonial/i }))
    expect(screen.getByText('Robert Thomson')).toBeInTheDocument()
  })

  it('navigates via dot indicators', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: /go to testimonial 3/i }))
    expect(screen.getByText('James Cooper')).toBeInTheDocument()
  })
})
