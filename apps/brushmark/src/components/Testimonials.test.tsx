import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders section heading', () => {
    render(<Testimonials />)
    expect(screen.getByText('Testimonials')).toBeInTheDocument()
    expect(screen.getByText('What Our Clients Say')).toBeInTheDocument()
  })

  it('renders all testimonial items', () => {
    render(<Testimonials />)
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByText('Michael Chen')).toBeInTheDocument()
    expect(screen.getByText('Emma Williams')).toBeInTheDocument()
  })

  it('renders star ratings', () => {
    const { container } = render(<Testimonials />)
    const stars = container.querySelectorAll('svg')
    expect(stars.length).toBeGreaterThanOrEqual(15)
  })

  it('renders testimonial text', () => {
    render(<Testimonials />)
    expect(screen.getByText(/absolute pleasure/)).toBeInTheDocument()
  })

  it('renders roles', () => {
    render(<Testimonials />)
    expect(screen.getByText('CEO, TechStart')).toBeInTheDocument()
  })
})
