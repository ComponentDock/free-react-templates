import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TestimonialSection } from './TestimonialSection'

describe('TestimonialSection', () => {
  it('renders the counter and projects completed', () => {
    render(<TestimonialSection />)
    expect(screen.getByText('5962+')).toBeInTheDocument()
    expect(screen.getByText('Projects Completed')).toBeInTheDocument()
  })

  it('renders testimonial quote and author', () => {
    render(<TestimonialSection />)
    expect(screen.getByText(/few would argue/i)).toBeInTheDocument()
    expect(screen.getByText(/mark wiens/i)).toBeInTheDocument()
    expect(screen.getByText(/google inc/i)).toBeInTheDocument()
  })

  it('renders pagination dots', () => {
    render(<TestimonialSection />)
    const dots = screen.getAllByLabelText(/testimonial/i)
    expect(dots).toHaveLength(3)
  })
})
