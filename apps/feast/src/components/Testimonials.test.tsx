import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: /feedback from customers/i })).toBeInTheDocument()
  })

  it('renders testimonial authors', () => {
    render(<Testimonials />)
    expect(screen.getByText('Adame Nesane')).toBeInTheDocument()
    expect(screen.getByText('Adam Nahan')).toBeInTheDocument()
    expect(screen.getByText('Sarah Mitchell')).toBeInTheDocument()
  })

  it('renders testimonial roles', () => {
    render(<Testimonials />)
    expect(screen.getByText('Chief Customer')).toBeInTheDocument()
    expect(screen.getByText('Event Director')).toBeInTheDocument()
    expect(screen.getByText('Wedding Planner')).toBeInTheDocument()
  })

  it('renders testimonial quotes', () => {
    render(<Testimonials />)
    expect(screen.getByText(/outstanding catering service/i)).toBeInTheDocument()
  })
})
