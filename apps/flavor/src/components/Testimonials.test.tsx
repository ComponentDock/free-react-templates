import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Testimonials } from './Testimonials'
import { testimonials } from '../data'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Our Customer Says')
  })

  it('renders all three testimonial blockquotes with authors', () => {
    render(<Testimonials />)
    for (const testimonial of testimonials) {
      const cite = screen.getByText((content) => content.includes(testimonial.author))
      expect(cite).toBeInTheDocument()
    }
  })

  it('renders quote text containing testimonial content', () => {
    render(<Testimonials />)
    for (const testimonial of testimonials) {
      const match = screen.getByText((content) => content.includes(testimonial.quote.slice(0, 30)))
      expect(match).toBeInTheDocument()
    }
  })

  it('renders the correct number of blockquote elements', () => {
    render(<Testimonials />)
    const quotes = document.querySelectorAll('blockquote')
    expect(quotes).toHaveLength(testimonials.length)
  })
})
