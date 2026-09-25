import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading and all three testimonial cards', () => {
    render(<Testimonials />)

    expect(screen.getByRole('heading', { name: 'What Our Patients Say' })).toBeInTheDocument()
    expect(screen.getByText('John Smith')).toBeInTheDocument()
    expect(screen.getByText('Maria Garcia')).toBeInTheDocument()
    expect(screen.getByText('David Thompson')).toBeInTheDocument()
  })

  it('shows star ratings for each testimonial', () => {
    const { container } = render(<Testimonials />)

    // All testimonials have star rating labels
    const starRatings = container.querySelectorAll('[aria-label*="out of 5 stars"]')
    expect(starRatings.length).toBe(3)

    // Verify specific ratings exist
    const fiveStar = container.querySelectorAll('[aria-label="5 out of 5 stars"]')
    expect(fiveStar.length).toBe(2)

    const fourStar = container.querySelectorAll('[aria-label="4 out of 5 stars"]')
    expect(fourStar.length).toBe(1)
  })

  it('includes testimonial quotes', () => {
    render(<Testimonials />)

    expect(screen.getByText(/Excellent service and caring staff/)).toBeInTheDocument()
    expect(screen.getByText(/I have been visiting Curelink for years/)).toBeInTheDocument()
  })

  it('shows circular user photos', () => {
    render(<Testimonials />)

    expect(screen.getByRole('img', { name: 'John Smith' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Maria Garcia' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'David Thompson' })).toBeInTheDocument()
  })

  it('shows position/role for each testimonial', () => {
    render(<Testimonials />)

    const patients = screen.getAllByText('Patient')
    expect(patients.length).toBe(3)
  })
})
