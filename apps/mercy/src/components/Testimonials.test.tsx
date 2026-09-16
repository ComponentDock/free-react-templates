import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: /What People Say About Us/i })).toBeInTheDocument()
  })

  it('renders all testimonial cards with names and roles', () => {
    render(<Testimonials />)
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByText('Michael Chen')).toBeInTheDocument()
    expect(screen.getByText('Emily Rodriguez')).toBeInTheDocument()
    expect(screen.getByText('David Thompson')).toBeInTheDocument()
  })

  it('renders star ratings', () => {
    render(<Testimonials />)
    const ratings = screen.getAllByText(/5 out of 5 stars/i)
    expect(ratings).toHaveLength(4)
  })
})
