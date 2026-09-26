import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders testimonials section with client name', () => {
    render(<Testimonials />)
    expect(screen.getByTestId('testimonials')).toBeInTheDocument()
    expect(screen.getByText('Client Feedback')).toBeInTheDocument()
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByText('Creative Director, Vogue')).toBeInTheDocument()
  })

  it('renders testimonial quote', () => {
    render(<Testimonials />)
    expect(screen.getByText(/Working with this agency/)).toBeInTheDocument()
  })
})
