import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders section heading', () => {
    render(<Testimonials />)
    expect(screen.getByText('Happy Customer Says')).toBeInTheDocument()
  })

  it('renders testimonial quotes', () => {
    render(<Testimonials />)
    expect(screen.getByText(/Exceptional work on our office renovation/i)).toBeInTheDocument()
    expect(screen.getByText(/From planning to execution/i)).toBeInTheDocument()
    expect(screen.getByText(/Outstanding quality and attention to detail/i)).toBeInTheDocument()
  })

  it('renders author names and companies', () => {
    render(<Testimonials />)
    expect(screen.getByText('Jane Doe')).toBeInTheDocument()
    expect(screen.getByText('XYZ Inc.')).toBeInTheDocument()
    expect(screen.getByText('John Doe')).toBeInTheDocument()
    expect(screen.getByText('ABC Corp.')).toBeInTheDocument()
  })

  it('renders with custom className', () => {
    render(<Testimonials className="extra" />)
    expect(screen.getByTestId('testimonials').className).toContain('extra')
  })
})
