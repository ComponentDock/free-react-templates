import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders heading', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { level: 2, name: /testimonials/i })).toBeInTheDocument()
  })

  it('renders three testimonial cards', () => {
    render(<Testimonials />)
    expect(screen.getByText('Louise Kelly')).toBeInTheDocument()
    expect(screen.getByText('James Morgan')).toBeInTheDocument()
    expect(screen.getByText('Sarah Chen')).toBeInTheDocument()
  })

  it('renders testimonial quotes', () => {
    render(<Testimonials />)
    const quotes = screen.getAllByText(/all-powerful pointing/i)
    expect(quotes.length).toBe(3)
  })

  it('renders author roles', () => {
    render(<Testimonials />)
    expect(screen.getByText('Illustrator Designer')).toBeInTheDocument()
    expect(screen.getByText('Business Consultant')).toBeInTheDocument()
    expect(screen.getByText('Marketing Director')).toBeInTheDocument()
  })

  it('renders author photos', () => {
    render(<Testimonials />)
    expect(screen.getByAltText('Louise Kelly')).toBeInTheDocument()
    expect(screen.getByAltText('James Morgan')).toBeInTheDocument()
    expect(screen.getByAltText('Sarah Chen')).toBeInTheDocument()
  })
})
