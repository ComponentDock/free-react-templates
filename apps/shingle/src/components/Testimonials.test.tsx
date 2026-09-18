import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: /Happy Clients/i })).toBeInTheDocument()
  })

  it('renders 3 testimonial cards', () => {
    render(<Testimonials />)
    expect(screen.getByText(/Sarah Johnson/)).toBeInTheDocument()
    expect(screen.getByText(/Michael Chen/)).toBeInTheDocument()
    expect(screen.getByText(/Emily Davis/)).toBeInTheDocument()
  })

  it('renders quotes', () => {
    render(<Testimonials />)
    expect(screen.getByText(/Excellent roofing service/i)).toBeInTheDocument()
    expect(screen.getByText(/Professional team with great attention/i)).toBeInTheDocument()
    expect(screen.getByText(/We have used their services/i)).toBeInTheDocument()
  })
})
