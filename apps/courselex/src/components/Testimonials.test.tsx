import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/What Our Learners Say/i)
  })

  it('renders all 3 testimonial authors', () => {
    render(<Testimonials />)
    expect(screen.getByText(/Alex Turner/)).toBeInTheDocument()
    expect(screen.getByText(/Maria Santos/)).toBeInTheDocument()
    expect(screen.getByText(/David Kim/)).toBeInTheDocument()
  })

  it('renders testimonial review text', () => {
    render(<Testimonials />)
    expect(screen.getByText(/Courselex helped me discover/i)).toBeInTheDocument()
    expect(screen.getByText(/overwhelmed by options/i)).toBeInTheDocument()
  })

  it('renders star ratings for each testimonial', () => {
    const { container } = render(<Testimonials />)
    const stars = container.querySelectorAll('.fill-yellow-400')
    // 3 testimonials × 5 stars each = 15 stars
    expect(stars.length).toBe(15)
  })

  it('has 3 dot navigation buttons', () => {
    render(<Testimonials />)
    const dots = screen.getAllByRole('button', { name: /go to testimonial/i })
    expect(dots.length).toBe(3)
  })

  it('allows clicking dot navigation', async () => {
    render(<Testimonials />)
    const user = userEvent.setup()
    const dots = screen.getAllByRole('button', { name: /go to testimonial/i })
    await user.click(dots[2]!)
    // Dot 3 should now be active (teal background)
    expect(dots[2]).toHaveClass('bg-teal-grad-start')
  })
})
