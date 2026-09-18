import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders heading', () => {
    render(<Testimonials />)
    expect(screen.getByText('Our Satisfied Customer says')).toBeInTheDocument()
  })

  it('renders all testimonial cards', () => {
    render(<Testimonials />)
    expect(screen.getByText('John Doe')).toBeInTheDocument()
    expect(screen.getByText('Jane Smith')).toBeInTheDocument()
    expect(screen.getByText('Mike Johnson')).toBeInTheDocument()
  })

  it('shows star ratings', () => {
    render(<Testimonials />)
    expect(screen.getAllByLabelText('5 star rating')).toHaveLength(3)
  })

  it('shows quotes', () => {
    render(<Testimonials />)
    expect(screen.getByText(/Exceptional quality/)).toBeInTheDocument()
  })

  it('has proper aria label', () => {
    render(<Testimonials />)
    expect(screen.getByRole('region', { name: 'Testimonials' })).toBeInTheDocument()
  })
})
