import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(
      screen.getByRole('heading', { level: 2, name: /What Our Customers Say/i }),
    ).toBeInTheDocument()
  })

  it('renders all three testimonial cards with names and roles', () => {
    render(<Testimonials />)
    expect(screen.getByText('Sarah Mitchell')).toBeInTheDocument()
    expect(screen.getByText('Coffee Enthusiast')).toBeInTheDocument()
    expect(screen.getByText('David Chen')).toBeInTheDocument()
    expect(screen.getByText('Regular Customer')).toBeInTheDocument()
    expect(screen.getByText('Emma Rodriguez')).toBeInTheDocument()
    expect(screen.getByText('Food Blogger')).toBeInTheDocument()
  })

  it('renders testimonial quotes', () => {
    render(<Testimonials />)
    expect(screen.getByText(/best coffee I have ever tasted/i)).toBeInTheDocument()
    expect(screen.getByText(/cozy atmosphere with world-class beans/i)).toBeInTheDocument()
    expect(screen.getByText(/single-origin Ethiopian/i)).toBeInTheDocument()
  })
})
