import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(
      screen.getByRole('heading', { name: /What Our Priority Client.s Say/i }),
    ).toBeInTheDocument()
  })

  it('renders a testimonial quote with an author name', () => {
    render(<Testimonials />)
    expect(screen.getByText(/beautifully balanced/i)).toBeInTheDocument()
    expect(screen.getByText(/Olivia Carter/i)).toBeInTheDocument()
  })
})
