import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders heading', () => {
    render(<Testimonials />)
    expect(screen.getByText('What Our Users Say')).toBeInTheDocument()
  })

  it('renders all 3 testimonial cards', () => {
    render(<Testimonials />)
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByText('Michael Chen')).toBeInTheDocument()
    expect(screen.getByText('Emily Rodriguez')).toBeInTheDocument()
  })

  it('shows roles', () => {
    render(<Testimonials />)
    expect(screen.getByText('Business Owner')).toBeInTheDocument()
    expect(screen.getByText('Frequent Traveler')).toBeInTheDocument()
    expect(screen.getByText('Event Planner')).toBeInTheDocument()
  })

  it('shows quotes', () => {
    render(<Testimonials />)
    expect(screen.getByText(/LocalFinder helped me/)).toBeInTheDocument()
    expect(screen.getByText(/Whenever I visit a new city/)).toBeInTheDocument()
    expect(screen.getByText(/The categories and search/)).toBeInTheDocument()
  })
})
