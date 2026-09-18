import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders three testimonial cards', () => {
    render(<Testimonials />)
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByText('Robert Williams')).toBeInTheDocument()
    expect(screen.getByText('Emily Davis')).toBeInTheDocument()
  })

  it('renders roles', () => {
    render(<Testimonials />)
    expect(screen.getByText('Family Member')).toBeInTheDocument()
    expect(screen.getByText('Resident')).toBeInTheDocument()
    expect(screen.getByText('Healthcare Professional')).toBeInTheDocument()
  })

  it('renders quotes', () => {
    render(<Testimonials />)
    expect(screen.getByText(/care my mother receives/)).toBeInTheDocument()
  })

  it('has light background', () => {
    const { container } = render(<Testimonials />)
    expect(container.firstElementChild).toHaveClass('bg-paper')
  })
})
