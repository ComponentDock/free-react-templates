import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders heading Happy Customers', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { level: 2, name: 'Happy Customers' })).toBeInTheDocument()
  })

  it('renders 3 testimonial cards', () => {
    render(<Testimonials />)
    const names = ['Sarah Johnson', 'Michael Chen', 'Emily Rodriguez']
    for (const name of names) {
      expect(screen.getByRole('heading', { level: 4, name })).toBeInTheDocument()
    }
  })

  it('each card has author name and quote', () => {
    render(<Testimonials />)

    // Check each author and their quote
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByText(/exceptional legal guidance/i)).toBeInTheDocument()

    expect(screen.getByText('Michael Chen')).toBeInTheDocument()
    expect(screen.getByText(/attention to detail/i)).toBeInTheDocument()

    expect(screen.getByText('Emily Rodriguez')).toBeInTheDocument()
    expect(screen.getByText(/complex process feel simple/i)).toBeInTheDocument()
  })
})
