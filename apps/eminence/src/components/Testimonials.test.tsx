import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders heading', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: 'Testimonials', level: 2 })).toBeInTheDocument()
  })

  it('renders all testimonial cards', () => {
    render(<Testimonials />)
    expect(screen.getByText('Fanny Spencer')).toBeInTheDocument()
    expect(screen.getByText('Michael Torres')).toBeInTheDocument()
    expect(screen.getByText('Sarah Chen')).toBeInTheDocument()
  })

  it('renders testimonial quotes', () => {
    render(<Testimonials />)
    expect(screen.getByText(/exceptional creative partner/)).toBeInTheDocument()
    expect(screen.getByText(/Incredible attention to detail/)).toBeInTheDocument()
    expect(screen.getByText(/talented designer with a rare combination/)).toBeInTheDocument()
  })
})
