import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the three testimonial cards with names and roles', () => {
    render(<Testimonials />)
    for (const name of ['Steve Jobs', 'John Doe', 'John Smith']) {
      expect(screen.getByRole('heading', { level: 3, name })).toBeInTheDocument()
      expect(screen.getByAltText(name)).toBeInTheDocument()
    }
    expect(screen.getAllByText('Co-Founder')).toHaveLength(3)
  })

  it('renders a quoted blockquote for each person', () => {
    render(<Testimonials />)
    const quotes = screen.getAllByText(/“/)
    expect(quotes).toHaveLength(3)
  })
})
