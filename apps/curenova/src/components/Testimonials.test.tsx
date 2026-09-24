import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading', () => {
    render(<Testimonials />)
    expect(screen.getByText('Our patients and their opinions')).toBeInTheDocument()
  })

  it('renders all four testimonials', () => {
    render(<Testimonials />)
    expect(screen.getByText('John Peterson')).toBeInTheDocument()
    expect(screen.getByText('Maria Santos')).toBeInTheDocument()
    expect(screen.getByText('David Kim')).toBeInTheDocument()
    expect(screen.getByText('Rachel Johnson')).toBeInTheDocument()
  })

  it('shows testimonial quotes', () => {
    render(<Testimonials />)
    expect(screen.getByText(/exceptional care during my treatment/)).toBeInTheDocument()
    expect(screen.getByText(/modern facilities and compassionate team/)).toBeInTheDocument()
  })

  it('shows 5-star ratings', () => {
    render(<Testimonials />)
    const starLabels = screen.getAllByLabelText('5 out of 5 stars')
    expect(starLabels).toHaveLength(4)
  })

  it('shows patient roles', () => {
    render(<Testimonials />)
    const roles = screen.getAllByText('Patient')
    expect(roles).toHaveLength(4)
  })

  it('shows avatar images', () => {
    render(<Testimonials />)
    expect(screen.getByAltText('John Peterson')).toBeInTheDocument()
    expect(screen.getByAltText('Maria Santos')).toBeInTheDocument()
    expect(screen.getByAltText('David Kim')).toBeInTheDocument()
    expect(screen.getByAltText('Rachel Johnson')).toBeInTheDocument()
  })
})
