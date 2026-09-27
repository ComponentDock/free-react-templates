import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders testimonial cards with names and quotes', () => {
    render(<Testimonials />)
    expect(screen.getByText(/What Our Clients Say/)).toBeInTheDocument()

    expect(screen.getByText('Margaret Lawson')).toBeInTheDocument()
    expect(screen.getByText('James Mitchell')).toBeInTheDocument()
    expect(screen.getByText('Sarah Chen')).toBeInTheDocument()

    expect(screen.getByText(/Working with Residium was an absolute pleasure/)).toBeInTheDocument()
  })

  it('renders author images', () => {
    render(<Testimonials />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(3)
  })
})
