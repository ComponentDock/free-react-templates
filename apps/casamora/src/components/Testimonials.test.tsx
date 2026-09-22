import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the testimonials heading', () => {
    render(<Testimonials />)
    expect(screen.getByText('Testimonial')).toBeInTheDocument()
  })

  it('renders testimonial quotes', () => {
    render(<Testimonials />)
    expect(screen.getByText(/exceptional stay/)).toBeInTheDocument()
    expect(screen.getByText(/perfect getaway/)).toBeInTheDocument()
    expect(screen.getByText(/Impeccable service/)).toBeInTheDocument()
  })

  it('renders author names', () => {
    render(<Testimonials />)
    expect(screen.getByText('Jean Smith')).toBeInTheDocument()
    expect(screen.getByText('John Doe')).toBeInTheDocument()
    expect(screen.getByText('Jane Doe')).toBeInTheDocument()
  })

  it('renders author photos', () => {
    render(<Testimonials />)
    expect(screen.getByAltText('Jean Smith')).toBeInTheDocument()
    expect(screen.getByAltText('John Doe')).toBeInTheDocument()
    expect(screen.getByAltText('Jane Doe')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(<Testimonials className="custom-class" />)
    expect(screen.getByText('Testimonial').closest('section')).toHaveClass('custom-class')
  })
})
