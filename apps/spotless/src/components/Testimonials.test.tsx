import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'
import { describe, expect, it } from 'vitest'

describe('Testimonials', () => {
  it('renders two quote cards with customer names over a photo background', () => {
    const { container } = render(<Testimonials />)
    expect(screen.getByText('Testimonials')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'What our customers say' }),
    ).toBeInTheDocument()
    expect(screen.getByText('Sophia Allison')).toBeInTheDocument()
    expect(screen.getByText('James Carter')).toBeInTheDocument()
    expect(screen.getAllByRole('figure')).toHaveLength(2)
    expect(container.querySelector('section#testimonials')).toHaveStyle({
      backgroundImage: expect.stringContaining('spotless-testimonial'),
    })
  })

  it('includes a quote for each customer', () => {
    render(<Testimonials />)
    expect(screen.getByText(/transformed our home/)).toBeInTheDocument()
    expect(screen.getByText(/hire Spotless for our office/)).toBeInTheDocument()
  })
})
