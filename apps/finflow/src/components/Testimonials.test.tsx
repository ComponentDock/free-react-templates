import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the testimonials heading and customer names', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: /Happy Customers/i })).toBeInTheDocument()
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByText('Michael Chen')).toBeInTheDocument()
    expect(screen.getByText('Emily Rodriguez')).toBeInTheDocument()
    expect(screen.getByText('David Kim')).toBeInTheDocument()
  })

  it('displays testimonial quotes', () => {
    render(<Testimonials />)
    expect(screen.getByText(/Finflow transformed/i)).toBeInTheDocument()
    expect(screen.getByText(/The banking solutions/i)).toBeInTheDocument()
  })
})
