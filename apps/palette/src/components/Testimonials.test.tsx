import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the testimonials heading', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: 'Testimonials' })).toBeInTheDocument()
  })

  it('renders all three testimonial cards with names', () => {
    render(<Testimonials />)

    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByText('Michael Chen')).toBeInTheDocument()
    expect(screen.getByText('Emily Rodriguez')).toBeInTheDocument()
  })

  it('renders testimonial positions', () => {
    render(<Testimonials />)
    expect(screen.getByText('CEO, TechStart')).toBeInTheDocument()
    expect(screen.getByText('Marketing Director, InnovateCo')).toBeInTheDocument()
    expect(screen.getByText('Founder, CreativeHub')).toBeInTheDocument()
  })
})
