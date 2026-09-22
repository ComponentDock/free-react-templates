import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: 'Testimonial' })).toBeInTheDocument()
  })

  it('shows all three testimonial quotes with author names', () => {
    render(<Testimonials />)
    expect(screen.getByText('Mellisa Howard')).toBeInTheDocument()
    expect(screen.getByText('Mike Richardson')).toBeInTheDocument()
    expect(screen.getByText('Charles White')).toBeInTheDocument()
    const quotes = screen.getAllByText(
      /The trainers here|Joining this gym|I appreciate the variety/,
    )
    expect(quotes).toHaveLength(3)
  })
})
