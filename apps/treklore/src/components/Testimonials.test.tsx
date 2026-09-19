import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders section title', () => {
    render(<Testimonials />)
    expect(screen.getByText('Testimonials')).toBeInTheDocument()
    expect(screen.getByText('simply amazing places')).toBeInTheDocument()
  })

  it('renders all testimonial texts', () => {
    render(<Testimonials />)
    expect(screen.getByText(/honeymoon/)).toBeInTheDocument()
    expect(screen.getByText(/guided tours were phenomenal/)).toBeInTheDocument()
    expect(screen.getByText(/Best value for a family/)).toBeInTheDocument()
  })

  it('renders author names', () => {
    render(<Testimonials />)
    expect(screen.getByText('Sarah & James')).toBeInTheDocument()
    expect(screen.getByText('Michael Chen')).toBeInTheDocument()
    expect(screen.getByText('The Martinez Family')).toBeInTheDocument()
  })

  it('renders side navigation', () => {
    render(<Testimonials />)
    expect(screen.getByText('City Breaks Clients 01')).toBeInTheDocument()
    expect(screen.getByText('Cruises Clients 02')).toBeInTheDocument()
    expect(screen.getByText('All Inclusive Clients 03')).toBeInTheDocument()
  })

  it('has accessible landmarks', () => {
    render(<Testimonials />)
    expect(screen.getByRole('complementary')).toBeInTheDocument()
  })
})
