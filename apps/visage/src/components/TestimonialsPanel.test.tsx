import { render, screen } from '@testing-library/react'
import { TestimonialsPanel } from './TestimonialsPanel'

describe('TestimonialsPanel', () => {
  it('renders the section heading', () => {
    render(<TestimonialsPanel />)
    expect(screen.getByText('Testimonials')).toBeInTheDocument()
  })

  it('renders all testimonial cards', () => {
    render(<TestimonialsPanel />)
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByText('Michael Chen')).toBeInTheDocument()
    expect(screen.getByText('Emma Williams')).toBeInTheDocument()
  })

  it('displays roles', () => {
    render(<TestimonialsPanel />)
    expect(screen.getByText('CEO, TechStart')).toBeInTheDocument()
    expect(screen.getByText('Product Manager, InnovateCo')).toBeInTheDocument()
    expect(screen.getByText('Marketing Director, BrandLab')).toBeInTheDocument()
  })

  it('displays testimonial quotes', () => {
    render(<TestimonialsPanel />)
    expect(screen.getByText(/exceptional work/)).toBeInTheDocument()
  })
})
