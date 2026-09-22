import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section title', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: 'Testimonials' })).toBeInTheDocument()
  })

  it('renders 3 testimonial cards with names', () => {
    render(<Testimonials />)
    expect(screen.getByText('Diane Smith')).toBeInTheDocument()
    expect(screen.getByText('Mark Johnson')).toBeInTheDocument()
    expect(screen.getByText('Sarah Williams')).toBeInTheDocument()
  })

  it('renders star ratings', () => {
    render(<Testimonials />)
    const ratings = screen.getAllByLabelText(/out of 5 stars/)
    expect(ratings).toHaveLength(3)
  })

  it('renders the Join Now CTA', () => {
    render(<Testimonials />)
    const ctas = screen.getAllByRole('link', { name: 'Join Now' })
    expect(ctas.length).toBeGreaterThanOrEqual(1)
  })
})
