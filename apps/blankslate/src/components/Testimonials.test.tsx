import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: /My satisfied customer says/i })).toBeInTheDocument()
  })

  it('displays all three testimonials', () => {
    render(<Testimonials />)
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByText('Michael Chen')).toBeInTheDocument()
    expect(screen.getByText('Emily Davis')).toBeInTheDocument()
  })

  it('displays testimonial roles', () => {
    render(<Testimonials />)
    expect(screen.getByText('CEO, TechStart')).toBeInTheDocument()
    expect(screen.getByText('Director, GrowthCo')).toBeInTheDocument()
    expect(screen.getByText('Founder, DesignHub')).toBeInTheDocument()
  })
})
