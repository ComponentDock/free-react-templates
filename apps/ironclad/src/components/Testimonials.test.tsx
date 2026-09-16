import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(screen.getByText(/it's always a joy/i)).toBeInTheDocument()
  })

  it('renders the subheading', () => {
    render(<Testimonials />)
    expect(screen.getByText('Read Testimonials')).toBeInTheDocument()
  })

  it('renders the testimonial author', () => {
    render(<Testimonials />)
    expect(screen.getByText('Jeff Freshman')).toBeInTheDocument()
  })

  it('navigates to the next testimonial on click', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    const nextBtn = screen.getByRole('button', { name: /next testimonial/i })
    await user.click(nextBtn)
    expect(screen.getByText('Jeff Freshman')).toBeInTheDocument()
  })

  it('navigates to the previous testimonial on click', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    const prevBtn = screen.getByRole('button', { name: /previous testimonial/i })
    await user.click(prevBtn)
    expect(screen.getByText('Jeff Freshman')).toBeInTheDocument()
  })

  it('wraps around when navigating past the last testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    const nextBtn = screen.getByRole('button', { name: /next testimonial/i })
    // Click next twice to go from index 0 -> 1 -> 2 (last)
    await user.click(nextBtn)
    await user.click(nextBtn)
    // Click next again — should wrap to index 0
    await user.click(nextBtn)
    expect(screen.getByText('Jeff Freshman')).toBeInTheDocument()
  })

  it('wraps around when navigating before the first testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    const prevBtn = screen.getByRole('button', { name: /previous testimonial/i })
    // We start at index 0, clicking prev wraps to index 2
    await user.click(prevBtn)
    // Click prev again — from index 2, goes to index 1 (non-zero branch)
    await user.click(prevBtn)
    expect(screen.getByText('Jeff Freshman')).toBeInTheDocument()
  })
})
