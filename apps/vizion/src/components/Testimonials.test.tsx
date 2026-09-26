import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the first testimonial by default', () => {
    render(<Testimonials />)
    expect(screen.getByText('Robert Thomson')).toBeInTheDocument()
    expect(screen.getByText('Business Owner')).toBeInTheDocument()
  })

  it('renders the quote icon', () => {
    render(<Testimonials />)
    const quoteSection = document.querySelector('svg')
    expect(quoteSection).toBeInTheDocument()
  })

  it('renders navigation dots', () => {
    render(<Testimonials />)
    const dots = screen.getAllByRole('button', { name: /go to testimonial/i })
    expect(dots).toHaveLength(3)
  })

  it('navigates to next testimonial on next button click', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: /next testimonial/i }))
    expect(screen.getByText('Sarah Williams')).toBeInTheDocument()
    expect(screen.getByText('Marketing Director')).toBeInTheDocument()
  })

  it('navigates to previous testimonial on prev button click', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    // Navigate to second item first, then click prev
    await user.click(screen.getByRole('button', { name: /next testimonial/i }))
    expect(screen.getByText('Sarah Williams')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /previous testimonial/i }))
    expect(screen.getByText('Robert Thomson')).toBeInTheDocument()
  })

  it('wraps to last testimonial when clicking prev on first', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: /previous testimonial/i }))
    expect(screen.getByText('James Anderson')).toBeInTheDocument()
  })

  it('wraps to first testimonial when clicking next on last', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    const dots = screen.getAllByRole('button', { name: /go to testimonial/i })
    await user.click(dots[2]!)
    expect(screen.getByText('James Anderson')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /next testimonial/i }))
    expect(screen.getByText('Robert Thomson')).toBeInTheDocument()
  })

  it('navigates to specific testimonial via dot click', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    const dots = screen.getAllByRole('button', { name: /go to testimonial/i })
    await user.click(dots[1]!)
    expect(screen.getByText('Sarah Williams')).toBeInTheDocument()
  })

  it('renders avatar images', () => {
    render(<Testimonials />)
    expect(screen.getByAltText('Robert Thomson')).toBeInTheDocument()
  })
})
