import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders heading and testimonial cards', () => {
    render(<Testimonials />)
    expect(screen.getByText('What Our Travelers Say')).toBeInTheDocument()
    expect(screen.getByText('Sarah Mitchell')).toBeInTheDocument()
    expect(screen.getByText('James Rodriguez')).toBeInTheDocument()
    expect(screen.getByText('Emily Chen')).toBeInTheDocument()
  })

  it('displays testimonial text', () => {
    render(<Testimonials />)
    expect(screen.getByText(/Jetpath made our Bali trip/)).toBeInTheDocument()
    expect(screen.getByText(/Greece package exceeded/)).toBeInTheDocument()
  })

  it('shows star ratings', () => {
    render(<Testimonials />)
    const stars = document.querySelectorAll('.text-amber-400')
    expect(stars.length).toBeGreaterThanOrEqual(5)
  })
})
