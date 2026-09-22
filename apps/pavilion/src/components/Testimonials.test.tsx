import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the testimonial quote', () => {
    render(<Testimonials />)
    expect(screen.getByText(/best hotel experience/i)).toBeInTheDocument()
  })

  it('renders the author name', () => {
    render(<Testimonials />)
    expect(screen.getByText(/Clifford Frazier/i)).toBeInTheDocument()
    expect(screen.getByText(/Regular Client/i)).toBeInTheDocument()
  })

  it('renders 5 star icons', () => {
    render(<Testimonials />)
    const stars = screen.getAllByLabelText('star')
    expect(stars).toHaveLength(5)
  })
})
