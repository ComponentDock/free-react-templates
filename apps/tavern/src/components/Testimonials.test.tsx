import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders section heading', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: 'Testimonial' })).toBeInTheDocument()
  })

  it('renders all testimonial names', () => {
    render(<Testimonials />)
    expect(screen.getByText('Mellisa Howard')).toBeInTheDocument()
    expect(screen.getByText('Mike Richardson')).toBeInTheDocument()
    expect(screen.getByText('Charles White')).toBeInTheDocument()
  })

  it('renders testimonial roles', () => {
    render(<Testimonials />)
    expect(screen.getAllByText('CEO, XYZ Company').length).toBe(3)
  })

  it('renders star ratings as SVG icons', () => {
    render(<Testimonials />)
    const stars = document.querySelectorAll('svg.lucide-star')
    expect(stars.length).toBe(15) // 5 stars x 3 testimonials
  })
})
