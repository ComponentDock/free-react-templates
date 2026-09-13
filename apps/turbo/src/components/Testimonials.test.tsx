import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the testimonials heading', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: /testimonials/i })).toBeInTheDocument()
  })

  it('renders testimonial quotes', () => {
    render(<Testimonials />)
    const quotes = screen.getAllByText(/quisquam necessitatibus incidunt/i)
    expect(quotes).toHaveLength(2)
  })

  it('renders testimonial authors', () => {
    render(<Testimonials />)
    expect(screen.getByText('John Doe')).toBeInTheDocument()
    expect(screen.getByText('Jane Smith')).toBeInTheDocument()
  })

  it('renders author roles', () => {
    render(<Testimonials />)
    expect(screen.getByText('CEO, Company')).toBeInTheDocument()
    expect(screen.getByText('Marketing Director')).toBeInTheDocument()
  })
})
