import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(screen.getByText('What Our Clients Say')).toBeInTheDocument()
    expect(screen.getByText('Testimonials')).toBeInTheDocument()
  })

  it('renders 3 testimonial cards', () => {
    render(<Testimonials />)
    expect(screen.getByText('Arise Naieh')).toBeInTheDocument()
    expect(screen.getByText('Michael Torres')).toBeInTheDocument()
    expect(screen.getByText('Priya Sharma')).toBeInTheDocument()
  })

  it('renders testimonial roles', () => {
    render(<Testimonials />)
    expect(screen.getByText('Property Buyer')).toBeInTheDocument()
    expect(screen.getByText('Property Investor')).toBeInTheDocument()
    expect(screen.getByText('First-time Renter')).toBeInTheDocument()
  })

  it('renders testimonial text', () => {
    render(<Testimonials />)
    expect(screen.getByText(/Exceptional service/)).toBeInTheDocument()
  })

  it('renders star ratings', () => {
    render(<Testimonials />)
    // Each testimonial has 5 star icons
    const stars = document.querySelectorAll('.fill-yellow-400')
    expect(stars.length).toBeGreaterThan(0)
  })
})
