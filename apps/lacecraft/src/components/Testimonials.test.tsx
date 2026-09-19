import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'What Our Customers Say' }),
    ).toBeInTheDocument()
  })

  it('renders the Customer Love badge', () => {
    render(<Testimonials />)
    expect(screen.getByText('Customer Love')).toBeInTheDocument()
  })

  it('renders all three testimonial quotes', () => {
    render(<Testimonials />)
    expect(screen.getByText(/Best shoes I've ever owned/)).toBeInTheDocument()
    expect(screen.getByText(/dozens of sneaker brands/)).toBeInTheDocument()
    expect(screen.getByText(/From the ordering experience/)).toBeInTheDocument()
  })

  it('renders author names and roles', () => {
    render(<Testimonials />)
    expect(screen.getByText('Sarah Chen')).toBeInTheDocument()
    expect(screen.getByText('Marathon Runner')).toBeInTheDocument()
    expect(screen.getByText('Marcus Johnson')).toBeInTheDocument()
    expect(screen.getByText('Sneaker Enthusiast')).toBeInTheDocument()
  })

  it('renders trust stats', () => {
    render(<Testimonials />)
    expect(screen.getByText('50K+')).toBeInTheDocument()
    expect(screen.getByText('4.9/5')).toBeInTheDocument()
    expect(screen.getByText('15K+')).toBeInTheDocument()
    expect(screen.getByText('98%')).toBeInTheDocument()
  })
})
