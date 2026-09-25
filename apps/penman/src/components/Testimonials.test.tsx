import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'
import { describe, it, expect } from 'vitest'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(screen.getByText('Kinds Words From Customers')).toBeInTheDocument()
  })

  it('renders the testimonial label', () => {
    render(<Testimonials />)
    expect(screen.getByText('Testimonial')).toBeInTheDocument()
  })

  it('renders 3 testimonial cards', () => {
    render(<Testimonials />)
    expect(screen.getAllByText('Roger Scott')).toHaveLength(3)
    expect(screen.getAllByText('Marketing Manager')).toHaveLength(3)
  })

  it('renders quote text', () => {
    render(<Testimonials />)
    expect(screen.getAllByText(/far far away/i).length).toBeGreaterThanOrEqual(1)
  })
})
