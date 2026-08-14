import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'
import { TESTIMONIALS } from '../data'

describe('Testimonials', () => {
  it('renders the heading and every quote with its author', () => {
    render(<Testimonials />)

    expect(screen.getByRole('heading', { level: 2, name: 'People Says' })).toBeInTheDocument()

    for (const testimonial of TESTIMONIALS) {
      expect(screen.getByText(new RegExp(testimonial.author))).toBeInTheDocument()
      expect(screen.getByText(new RegExp(testimonial.quote.slice(0, 24)))).toBeInTheDocument()
    }
  })
})
