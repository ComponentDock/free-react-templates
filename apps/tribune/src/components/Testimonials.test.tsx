import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading', () => {
    render(<Testimonials />)
    expect(screen.getByText('Happy Clients')).toBeInTheDocument()
  })

  it('shows first testimonial by default', () => {
    render(<Testimonials />)
    expect(screen.getByText(/outstanding conference/)).toBeInTheDocument()
    expect(screen.getByText('Alice Morgan')).toBeInTheDocument()
    expect(screen.getByText('CEO, TechCorp')).toBeInTheDocument()
  })

  it('navigates to next testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: /next testimonial/i }))
    expect(screen.getByText(/networking opportunities/)).toBeInTheDocument()
    expect(screen.getByText('Robert Chen')).toBeInTheDocument()
  })

  it('navigates to previous testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: /previous testimonial/i }))
    expect(screen.getByText(/Well-organized/)).toBeInTheDocument()
    expect(screen.getByText('Sarah Williams')).toBeInTheDocument()
  })

  it('navigates via dot indicators', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: /go to testimonial 3/i }))
    expect(screen.getByText(/Well-organized/)).toBeInTheDocument()
  })

  it('wraps around from last to first', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: /next testimonial/i }))
    await user.click(screen.getByRole('button', { name: /next testimonial/i }))
    await user.click(screen.getByRole('button', { name: /next testimonial/i }))
    expect(screen.getByText(/outstanding conference/)).toBeInTheDocument()
  })

  it('wraps around from first to last', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: /previous testimonial/i }))
    expect(screen.getByText(/Well-organized/)).toBeInTheDocument()
  })

  it('navigates backward from non-zero index', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: /next testimonial/i }))
    await user.click(screen.getByRole('button', { name: /previous testimonial/i }))
    expect(screen.getByText(/outstanding conference/)).toBeInTheDocument()
  })
})
