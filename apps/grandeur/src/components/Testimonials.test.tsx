import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders all testimonial author names', () => {
    render(<Testimonials />)
    expect(screen.getByText('Fanny Spencer')).toBeDefined()
    expect(screen.getByText('James Whitmore')).toBeDefined()
    expect(screen.getByText('Elena Rodriguez')).toBeDefined()
  })

  it('renders star ratings for each testimonial', () => {
    const { container } = render(<Testimonials />)
    // Each testimonial has 5 stars, 3 testimonials = 15 stars
    const stars = container.querySelectorAll('.fill-brand')
    expect(stars.length).toBe(15)
  })

  it('renders testimonial text', () => {
    render(<Testimonials />)
    expect(screen.getByText(/As conscious traveling/)).toBeDefined()
    expect(screen.getByText(/An unforgettable stay/)).toBeDefined()
    expect(screen.getByText(/The rooms are beautifully/)).toBeDefined()
  })

  it('renders testimonial avatar images', () => {
    render(<Testimonials />)
    expect(screen.getByAltText('Fanny Spencer')).toBeDefined()
    expect(screen.getByAltText('James Whitmore')).toBeDefined()
    expect(screen.getByAltText('Elena Rodriguez')).toBeDefined()
  })
})
