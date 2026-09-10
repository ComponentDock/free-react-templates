import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { level: 2, name: /Why Choose Us/i })).toBeInTheDocument()
  })

  it('renders both testimonial cards with names and roles', () => {
    render(<Testimonials />)
    expect(screen.getByText('Sarah Mitchell')).toBeInTheDocument()
    expect(screen.getByText('Operations Director at TechCorp')).toBeInTheDocument()
    expect(screen.getByText('James Rodriguez')).toBeInTheDocument()
    expect(screen.getByText('CEO at StartupHub')).toBeInTheDocument()
  })

  it('renders testimonial quotes', () => {
    render(<Testimonials />)
    expect(screen.getByText(/Transformed our customer support/i)).toBeInTheDocument()
    expect(screen.getByText(/handles everything seamlessly/i)).toBeInTheDocument()
  })
})
