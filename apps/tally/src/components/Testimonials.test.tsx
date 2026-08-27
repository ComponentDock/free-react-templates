import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the testimonials section', () => {
    render(<Testimonials />)
    expect(screen.getByText('What Our Clients Say')).toBeInTheDocument()
  })

  it('renders the first testimonial quote', () => {
    render(<Testimonials />)
    expect(screen.getByText(/far far away/i)).toBeInTheDocument()
  })

  it('renders avatar images', () => {
    render(<Testimonials />)
    const avatars = screen.getAllByRole('img', { name: /avatar/i })
    expect(avatars.length).toBeGreaterThanOrEqual(1)
  })

  it('displays name and position for testimonial', () => {
    render(<Testimonials />)
    expect(screen.getByText('John Doe')).toBeInTheDocument()
    expect(screen.getByText('CEO')).toBeInTheDocument()
  })

  it('navigates to next testimonial with arrow buttons', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    const nextBtn = screen.getByRole('button', { name: /next/i })
    await user.click(nextBtn)
    expect(screen.getByText(/second testimonial/i)).toBeInTheDocument()
  })

  it('navigates to previous testimonial with arrow buttons', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    const prevBtn = screen.getByRole('button', { name: /previous/i })
    // Clicking prev from first should go to last
    await user.click(prevBtn)
    expect(screen.getByText(/third testimonial/i)).toBeInTheDocument()
  })
})
