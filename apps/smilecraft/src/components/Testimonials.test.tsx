import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading and three testimonial cards', () => {
    render(<Testimonials />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'What Our Patients Say' }),
    ).toBeInTheDocument()

    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByText('Michael Brown')).toBeInTheDocument()
    expect(screen.getByText('Emily Davis')).toBeInTheDocument()

    expect(screen.getByText(/Smilecraft completely transformed/)).toBeInTheDocument()
    expect(screen.getByText(/nervous about dental work/)).toBeInTheDocument()
    expect(screen.getByText(/best dental experience/)).toBeInTheDocument()
  })

  it('renders star ratings for each testimonial', () => {
    render(<Testimonials />)

    const ratings = screen.getAllByLabelText(/out of 5 stars/)
    expect(ratings).toHaveLength(3)
  })
})
