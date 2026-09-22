import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'
import { describe, expect, it } from 'vitest'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('What Our Guests Say')
  })

  it('renders all three testimonial cards', () => {
    render(<Testimonials />)
    expect(screen.getByText('Nice Accommodation')).toBeInTheDocument()
    expect(screen.getByText('Delicious Food')).toBeInTheDocument()
    expect(screen.getByText('Great Service')).toBeInTheDocument()
  })

  it('renders author names', () => {
    render(<Testimonials />)
    const authors = screen.getAllByText('— Omeka Lotus')
    expect(authors).toHaveLength(3)
  })

  it('renders quote text', () => {
    render(<Testimonials />)
    const quotes = screen.getAllByText(/Leather detail shoulder/)
    expect(quotes.length).toBeGreaterThanOrEqual(3)
  })
})
