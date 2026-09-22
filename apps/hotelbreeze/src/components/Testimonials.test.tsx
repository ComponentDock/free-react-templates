import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the testimonials heading', () => {
    render(<Testimonials />)
    expect(screen.getByText('Testimonials')).toBeInTheDocument()
  })

  it('renders testimonial content', () => {
    render(<Testimonials />)
    expect(screen.getByText(/exceptional stay/)).toBeInTheDocument()
    expect(screen.getByText(/perfect getaway/)).toBeInTheDocument()
  })

  it('renders guest names', () => {
    render(<Testimonials />)
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByText('Michael Chen')).toBeInTheDocument()
  })

  it('renders guest roles', () => {
    render(<Testimonials />)
    expect(screen.getByText('Business Traveler')).toBeInTheDocument()
    expect(screen.getByText('Vacation Guest')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(<Testimonials className="custom-class" />)
    expect(screen.getByText('Testimonials').closest('section')).toHaveClass('custom-class')
  })
})
