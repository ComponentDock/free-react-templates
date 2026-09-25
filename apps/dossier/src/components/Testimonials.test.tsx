import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Client Testimonial')
  })

  it('renders both testimonial cards', () => {
    render(<Testimonials />)
    expect(screen.getByText('Sarah Chen')).toBeInTheDocument()
    expect(screen.getByText('Michael Torres')).toBeInTheDocument()
  })

  it('renders testimonial quotes', () => {
    render(<Testimonials />)
    expect(screen.getByText(/design work transformed our product/)).toBeInTheDocument()
    expect(screen.getByText(/fantastic experience/)).toBeInTheDocument()
  })

  it('renders author roles', () => {
    render(<Testimonials />)
    expect(screen.getByText('CEO, TechStart Inc.')).toBeInTheDocument()
    expect(screen.getByText('CTO, InnovateCo')).toBeInTheDocument()
  })
})
