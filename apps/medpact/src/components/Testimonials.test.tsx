import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Testimonials } from './Testimonials'
import { testimonialsTitle, testimonials } from '../data'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(testimonialsTitle)
  })

  it('renders all testimonial names', () => {
    render(<Testimonials />)
    for (const t of testimonials) {
      expect(screen.getByText(t.name)).toBeInTheDocument()
    }
  })

  it('renders testimonial quotes', () => {
    render(<Testimonials />)
    for (const t of testimonials) {
      expect(screen.getByText(new RegExp(t.quote.slice(0, 30)))).toBeInTheDocument()
    }
  })

  it('renders exactly 3 testimonial cards', () => {
    render(<Testimonials />)
    const names = screen.getAllByText(/Johnson|Garcia|Lee/)
    expect(names).toHaveLength(testimonials.length)
  })
})
