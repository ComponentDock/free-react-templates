import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'
import { TESTIMONIALS } from '../data'

describe('Testimonials', () => {
  it('renders the heading and all four client quotes', () => {
    render(<Testimonials />)

    expect(screen.getByRole('heading', { level: 2, name: 'Happy Clients' })).toBeInTheDocument()

    /* The source demo repeats the same lorem quote in every card, wrapped
       in curly quotes — match the blockquotes and check each one's text. */
    const quotes = screen.getAllByRole('blockquote')
    expect(quotes).toHaveLength(TESTIMONIALS.length)
    for (const quote of quotes) {
      expect(quote.textContent).toContain(TESTIMONIALS[0]!.quote)
    }
    for (const testimonial of TESTIMONIALS) {
      expect(screen.getByText(testimonial.name)).toBeInTheDocument()
    }
  })
})
