import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: /Happy Clients/i })).toBeInTheDocument()
  })

  it('displays all 3 testimonials with names and roles', () => {
    render(<Testimonials />)
    expect(screen.getByText('Sarah Mitchell')).toBeInTheDocument()
    expect(screen.getByText('Homeowner')).toBeInTheDocument()
    expect(screen.getByText('James Carter')).toBeInTheDocument()
    expect(screen.getByText('Business Owner')).toBeInTheDocument()
    expect(screen.getByText('Emily Rodriguez')).toBeInTheDocument()
    expect(screen.getByText('Property Manager')).toBeInTheDocument()
  })

  it('displays testimonial quotes', () => {
    render(<Testimonials />)
    expect(screen.getByText(/Excellent service from start to finish/)).toBeInTheDocument()
    expect(screen.getByText(/Professional, punctual, and affordable/)).toBeInTheDocument()
    expect(screen.getByText(/After the storm damage/)).toBeInTheDocument()
  })
})
