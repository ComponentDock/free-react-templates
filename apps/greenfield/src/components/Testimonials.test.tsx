import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders section heading', () => {
    render(<Testimonials />)
    expect(screen.getByText('Testimonials')).toBeInTheDocument()
    expect(screen.getByText('What Our Clients Say')).toBeInTheDocument()
  })

  it('renders all testimonial cards', () => {
    render(<Testimonials />)
    expect(screen.getByText('John Smith')).toBeInTheDocument()
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByText('Michael Brown')).toBeInTheDocument()
  })

  it('renders testimonial quotes', () => {
    render(<Testimonials />)
    expect(screen.getByText(/Greenfield has transformed/)).toBeInTheDocument()
    expect(screen.getByText(/Excellent service/)).toBeInTheDocument()
    expect(screen.getByText(/The quality of their dairy/)).toBeInTheDocument()
  })

  it('renders stat', () => {
    render(<Testimonials />)
    expect(screen.getByText('500+')).toBeInTheDocument()
  })
})
