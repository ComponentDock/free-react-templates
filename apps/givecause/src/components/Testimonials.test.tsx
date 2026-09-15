import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the first testimonial', () => {
    render(<Testimonials />)
    expect(screen.getByText(/GiveCause has been instrumental/)).toBeInTheDocument()
    expect(screen.getByText('Rebecca Adams')).toBeInTheDocument()
    expect(screen.getByText('Community Leader')).toBeInTheDocument()
  })

  it('navigates to next testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: /next testimonial/i }))
    expect(screen.getByText('James Mitchell')).toBeInTheDocument()
    expect(screen.getByText('Monthly Donor')).toBeInTheDocument()
  })

  it('navigates to previous testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    // Go to last, then back to first
    await user.click(screen.getByRole('button', { name: /next testimonial/i }))
    await user.click(screen.getByRole('button', { name: /next testimonial/i }))
    expect(screen.getByText('Lisa Thompson')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /previous testimonial/i }))
    expect(screen.getByText('James Mitchell')).toBeInTheDocument()
  })

  it('wraps around from last to first', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    // Go to last (index 2)
    await user.click(screen.getByRole('button', { name: /next testimonial/i }))
    await user.click(screen.getByRole('button', { name: /next testimonial/i }))
    // Next from last wraps to first
    await user.click(screen.getByRole('button', { name: /next testimonial/i }))
    expect(screen.getByText('Rebecca Adams')).toBeInTheDocument()
  })

  it('wraps around from first to last', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: /previous testimonial/i }))
    expect(screen.getByText('Lisa Thompson')).toBeInTheDocument()
  })
})
