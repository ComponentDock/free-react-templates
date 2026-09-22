import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading', () => {
    render(<Testimonials />)
    expect(screen.getByText('Our Satisfied Guests Say')).toBeInTheDocument()
  })

  it('renders 3 testimonial cards', () => {
    render(<Testimonials />)
    expect(screen.getByText('Brian Doe')).toBeInTheDocument()
    expect(screen.getByText('Nathalie Miller')).toBeInTheDocument()
    expect(screen.getByText('Shara Jones')).toBeInTheDocument()
  })

  it('renders customer quotes', () => {
    render(<Testimonials />)
    expect(screen.getByText(/absolutely stunning experience/)).toBeInTheDocument()
  })

  it('renders Satisfied Customer labels', () => {
    render(<Testimonials />)
    const labels = screen.getAllByText('Satisfied Customer')
    expect(labels).toHaveLength(3)
  })
})
