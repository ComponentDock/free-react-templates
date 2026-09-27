import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(screen.getByText('Client Say About Me')).toBeInTheDocument()
  })

  it('renders all testimonial cards', () => {
    render(<Testimonials />)
    expect(screen.getByText('Elite Martin')).toBeInTheDocument()
    expect(screen.getByText('David Saden')).toBeInTheDocument()
    expect(screen.getByText('Sarah Chen')).toBeInTheDocument()
  })

  it('renders testimonial quotes', () => {
    render(<Testimonials />)
    expect(screen.getByText(/Exceptional work and attention/)).toBeInTheDocument()
    expect(screen.getByText(/Professional, creative, and responsive/)).toBeInTheDocument()
    expect(screen.getByText(/Incredible developer/)).toBeInTheDocument()
  })

  it('renders star ratings', () => {
    const { container } = render(<Testimonials />)
    const stars = container.querySelectorAll('svg.fill-current')
    expect(stars.length).toBe(15) // 3 testimonials x 5 stars
  })
})
