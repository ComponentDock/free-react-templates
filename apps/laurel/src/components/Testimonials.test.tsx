import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/What Our Customers Say/i)
  })

  it('renders all 3 testimonial authors', () => {
    render(<Testimonials />)
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByText('Michael Chen')).toBeInTheDocument()
    expect(screen.getByText('Emily Rodriguez')).toBeInTheDocument()
  })

  it('renders testimonial quotes', () => {
    render(<Testimonials />)
    expect(screen.getByText(/Laurel has completely changed/)).toBeInTheDocument()
  })

  it('renders author images', () => {
    render(<Testimonials />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(3)
  })
})
