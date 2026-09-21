import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders testimonial author names', () => {
    render(<Testimonials />)
    const travis = screen.getAllByText('Travis Crawford')
    const noah = screen.getAllByText('Noah Padilla')
    expect(travis.length).toBeGreaterThanOrEqual(2)
    expect(noah.length).toBeGreaterThanOrEqual(2)
  })

  it('renders author roles', () => {
    render(<Testimonials />)
    const roles = screen.getAllByText('Designer')
    expect(roles.length).toBeGreaterThanOrEqual(2)
  })

  it('renders testimonial quotes', () => {
    render(<Testimonials />)
    const quotes = screen.getAllByText(/Lorem ipsum|Ut enim|Duis aute|Excepteur/)
    expect(quotes.length).toBeGreaterThanOrEqual(2)
  })
})
