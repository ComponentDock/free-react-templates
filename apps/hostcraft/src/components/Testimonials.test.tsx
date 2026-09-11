import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders heading and testimonial cards', () => {
    render(<Testimonials />)
    expect(screen.getByText('Customer Says')).toBeInTheDocument()
    expect(screen.getByText('John Smith')).toBeInTheDocument()
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByText('Mike Williams')).toBeInTheDocument()
  })

  it('renders testimonial quotes', () => {
    render(<Testimonials />)
    expect(screen.getByText(/Hostcraft has been amazing/)).toBeInTheDocument()
    expect(screen.getByText(/Switching to Hostcraft/)).toBeInTheDocument()
    expect(screen.getByText(/Reliable hosting/)).toBeInTheDocument()
  })

  it('renders avatar images', () => {
    render(<Testimonials />)
    expect(screen.getByAltText('John Smith')).toBeInTheDocument()
    expect(screen.getByAltText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByAltText('Mike Williams')).toBeInTheDocument()
  })
})
