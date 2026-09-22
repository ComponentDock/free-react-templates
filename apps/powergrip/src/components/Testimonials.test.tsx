import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Testimonials } from './Testimonials'
import { testimonials, testimonialsSubtitle, testimonialsTitle } from '../data'

describe('Testimonials', () => {
  it('renders the heading and subtitle', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { level: 2, name: testimonialsTitle })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: testimonialsSubtitle }),
    ).toBeInTheDocument()
  })

  it('renders all testimonial cards with names and quotes', () => {
    render(<Testimonials />)
    for (const t of testimonials) {
      expect(screen.getByText(t.name)).toBeInTheDocument()
      expect(screen.getAllByText(t.quote).length).toBeGreaterThan(0)
      expect(screen.getByRole('img', { name: t.name })).toBeInTheDocument()
    }
  })
})
