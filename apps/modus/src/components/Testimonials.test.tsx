import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders all three testimonials', () => {
    render(<Testimonials />)
    expect(screen.getByText(/Robert/i)).toBeInTheDocument()
    expect(screen.getByText(/Sarah/i)).toBeInTheDocument()
    expect(screen.getByText(/David/i)).toBeInTheDocument()
  })

  it('renders testimonial quotes', () => {
    render(<Testimonials />)
    const quotes = screen.getAllByText(/all-powerful Pointing/i)
    expect(quotes.length).toBe(3)
  })

  it('renders avatar images', () => {
    render(<Testimonials />)
    const avatars = screen.getAllByRole('img')
    expect(avatars.length).toBe(3)
  })
})
