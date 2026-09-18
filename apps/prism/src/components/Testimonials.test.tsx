import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading and all 3 testimonial cards', () => {
    render(<Testimonials />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'What Our Clients Say' }),
    ).toBeInTheDocument()

    expect(screen.getByText('David Smith')).toBeInTheDocument()
    expect(screen.getByText('Creative Director')).toBeInTheDocument()
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByText('Product Manager')).toBeInTheDocument()
    expect(screen.getByText('Michael Chen')).toBeInTheDocument()
    expect(screen.getByText('CEO, TechStart')).toBeInTheDocument()
  })

  it('renders testimonial quotes', () => {
    render(<Testimonials />)

    expect(screen.getByText(/Accessible though WAI-ARIA/)).toBeInTheDocument()
    expect(screen.getByText(/From the moment I started/)).toBeInTheDocument()
    expect(screen.getByText(/An exceptional experience/)).toBeInTheDocument()
  })
})
