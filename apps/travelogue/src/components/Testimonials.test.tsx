import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'What Our Clients Say' }),
    ).toBeInTheDocument()
  })

  it('renders testimonial quotes with customer names and roles', () => {
    render(<Testimonials />)

    expect(screen.getByText(/An incredible experience from start to finish/)).toBeInTheDocument()
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByText('Frequent Traveler')).toBeInTheDocument()

    expect(screen.getByText(/Professional, attentive, and truly passionate/)).toBeInTheDocument()
    expect(screen.getByText('Michael Chen')).toBeInTheDocument()
    expect(screen.getByText('Adventure Enthusiast')).toBeInTheDocument()

    expect(screen.getByText(/Best travel agency we have ever worked with/)).toBeInTheDocument()
    expect(screen.getByText('Emma Rodriguez')).toBeInTheDocument()
    expect(screen.getByText('Family Vacationer')).toBeInTheDocument()
  })
})
