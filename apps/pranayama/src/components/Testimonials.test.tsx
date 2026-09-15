import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the image', () => {
    render(<Testimonials />)

    expect(screen.getByAltText('Yoga practice session')).toBeInTheDocument()
  })

  it('renders Sarah Johnson testimonial', () => {
    render(<Testimonials />)

    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByText('Yoga Student')).toBeInTheDocument()
    expect(screen.getByText(/Pranayama has completely transformed/)).toBeInTheDocument()
  })

  it('renders Michael Chen testimonial', () => {
    render(<Testimonials />)

    expect(screen.getByText('Michael Chen')).toBeInTheDocument()
    expect(screen.getByText('Fitness Instructor')).toBeInTheDocument()
    expect(screen.getByText(/As a fitness professional/)).toBeInTheDocument()
  })

  it('renders initials for each testimonial author', () => {
    render(<Testimonials />)

    expect(screen.getByText('SJ')).toBeInTheDocument()
    expect(screen.getByText('MC')).toBeInTheDocument()
  })

  it('renders exactly two testimonial cards', () => {
    const result = render(<Testimonials />)

    const cards = result.container.querySelectorAll('.rounded-xl')
    expect(cards.length).toBe(2)
  })
})
