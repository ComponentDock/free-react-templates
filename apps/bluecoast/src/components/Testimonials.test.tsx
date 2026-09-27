import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(screen.getByText('What our clients say')).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<Testimonials />)
    expect(screen.getByText('Testimonials from happy homeowners')).toBeInTheDocument()
  })

  it('displays 3 testimonial cards', () => {
    render(<Testimonials />)
    expect(screen.getByText('Amazing Experience')).toBeInTheDocument()
    expect(screen.getByText('Professional Service')).toBeInTheDocument()
    expect(screen.getByText('Highly Recommended')).toBeInTheDocument()
  })

  it('shows author names', () => {
    render(<Testimonials />)
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByText('Michael Chen')).toBeInTheDocument()
    expect(screen.getByText('Emily Davis')).toBeInTheDocument()
  })

  it('shows testimonial text', () => {
    render(<Testimonials />)
    expect(screen.getByText(/BlueCoast made finding/)).toBeInTheDocument()
    expect(screen.getByText(/The team was incredibly helpful/)).toBeInTheDocument()
    expect(screen.getByText(/Great selection of properties/)).toBeInTheDocument()
  })

  it('renders author images with alt text', () => {
    render(<Testimonials />)
    expect(screen.getByAltText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByAltText('Michael Chen')).toBeInTheDocument()
    expect(screen.getByAltText('Emily Davis')).toBeInTheDocument()
  })

  it('displays star ratings', () => {
    render(<Testimonials />)
    const stars = document.querySelectorAll('.fill-yellow-400')
    expect(stars.length).toBe(15) // 3 testimonials * 5 stars
  })
})
