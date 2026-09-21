import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TestimonialCarousel } from './TestimonialCarousel'

describe('TestimonialCarousel', () => {
  it('renders section heading', () => {
    render(<TestimonialCarousel />)
    expect(screen.getByText('Testimonial')).toBeInTheDocument()
    expect(screen.getByText('Our client say')).toBeInTheDocument()
  })

  it('renders first testimonial by default', () => {
    render(<TestimonialCarousel />)
    expect(screen.getByText(/The most delicious cakes/)).toBeInTheDocument()
    expect(screen.getByText(/Sarah Johnson/)).toBeInTheDocument()
    expect(screen.getByText(/New York/)).toBeInTheDocument()
  })

  it('renders star ratings', () => {
    render(<TestimonialCarousel />)
    const stars = screen.getAllByRole('img', { hidden: true })
    expect(stars.length).toBeGreaterThan(0)
  })

  it('renders carousel dot buttons', () => {
    render(<TestimonialCarousel />)
    const dots = screen.getAllByRole('button', { name: /show testimonial/i })
    expect(dots.length).toBe(2)
  })

  it('switches testimonial on dot click', async () => {
    const user = userEvent.setup()
    render(<TestimonialCarousel />)
    const dots = screen.getAllByRole('button', { name: /show testimonial/i })
    await user.click(dots[1]!)
    expect(screen.getByText(/Absolutely wonderful bakery/)).toBeInTheDocument()
    expect(screen.getByText(/Michael Chen/)).toBeInTheDocument()
    expect(screen.getByText(/Los Angeles/)).toBeInTheDocument()
  })

  it('returns to first testimonial', async () => {
    const user = userEvent.setup()
    render(<TestimonialCarousel />)
    const dots = screen.getAllByRole('button', { name: /show testimonial/i })
    await user.click(dots[1]!)
    await user.click(dots[0]!)
    expect(screen.getByText(/The most delicious cakes/)).toBeInTheDocument()
  })
})
