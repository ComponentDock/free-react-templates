import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section title and heading', () => {
    render(<Testimonials />)

    expect(screen.getByText('Testimonials')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'What Customers Say?' }),
    ).toBeInTheDocument()
  })

  it('renders the testimonial quote and author', () => {
    render(<Testimonials />)

    expect(screen.getByText(/construction project took longer/)).toBeInTheDocument()
    expect(screen.getByText('— Alexander Vasquez')).toBeInTheDocument()
  })

  it('renders star rating icons', () => {
    const { container } = render(<Testimonials />)

    // Stars are lucide SVGs with aria-hidden, so query by CSS class
    const stars = container.querySelectorAll('.lucide-star')
    expect(stars.length).toBe(5)
  })
})
