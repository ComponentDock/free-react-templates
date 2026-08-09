import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading and intro', () => {
    render(<Testimonials />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'What Our Travelers Say' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Real stories from adventurers/)).toBeInTheDocument()
  })

  it('renders the first testimonial with all its details', () => {
    render(<Testimonials />)
    expect(screen.getByText('Sarah Mitchell')).toBeInTheDocument()
    expect(screen.getByText('Adventure Traveler')).toBeInTheDocument()
    expect(screen.getByText('Traveled to Bali, Indonesia')).toBeInTheDocument()
    expect(screen.getByText(/Our trip to Bali was absolutely magical/)).toBeInTheDocument()
  })

  it('renders three testimonial cards with 5-star rows', () => {
    render(<Testimonials />)
    expect(screen.getByText('James Carter')).toBeInTheDocument()
    expect(screen.getByText('Elena Rodriguez')).toBeInTheDocument()
    expect(screen.getAllByLabelText('5 out of 5 stars').length).toBe(3)
    expect(screen.getByText('Traveled to Santorini, Greece')).toBeInTheDocument()
    expect(screen.getByText('Traveled to Machu Picchu, Peru')).toBeInTheDocument()
  })
})
