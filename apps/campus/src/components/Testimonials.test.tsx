import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Testimonials } from './Testimonials'
import { testimonials, testimonialsHeading, testimonialsLabel } from '../data'

describe('Testimonials', () => {
  it('renders the heading and all four testimonial items', () => {
    render(<Testimonials />)

    expect(screen.getByRole('region', { name: testimonialsLabel })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: testimonialsHeading })).toBeInTheDocument()
    expect(screen.getAllByRole('figure')).toHaveLength(testimonials.length)
  })

  it('shows quote title, quote, name and green role per item', () => {
    render(<Testimonials />)

    for (const item of testimonials) {
      expect(screen.getByRole('heading', { level: 3, name: item.quoteTitle })).toBeInTheDocument()
      // The quote text is shared across items — assert the count.
      expect(screen.getAllByText(item.quote)).toHaveLength(testimonials.length)
      expect(screen.getByText(item.name)).toBeInTheDocument()
      expect(screen.getAllByText(`, ${item.role}`)).toHaveLength(testimonials.length)
    }
  })

  it('renders one avatar image per testimonial', () => {
    render(<Testimonials />)
    const avatars = document.querySelectorAll('img.rounded-full')
    expect(avatars).toHaveLength(testimonials.length)
  })
})
