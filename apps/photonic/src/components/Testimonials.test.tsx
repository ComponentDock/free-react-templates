import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(screen.getByText('Testimonials')).toBeInTheDocument()
  })

  it('renders all three testimonial authors', () => {
    render(<Testimonials />)
    expect(screen.getByText(/Marrygrace Woodland/)).toBeInTheDocument()
    expect(screen.getByText(/Jean Doe/)).toBeInTheDocument()
    expect(screen.getByText(/Ben Smith/)).toBeInTheDocument()
  })

  it('renders testimonial quotes', () => {
    render(<Testimonials />)
    const quotes = screen.getAllByText(/Lorem ipsum dolor/)
    expect(quotes.length).toBe(3)
  })

  it('renders star ratings', () => {
    const { container } = render(<Testimonials />)
    const stars = container.querySelectorAll('svg')
    expect(stars.length).toBeGreaterThanOrEqual(15)
  })
})
