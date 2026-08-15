import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Testimonials } from './Testimonials'
import { testimonials } from '../data'

describe('Testimonials', () => {
  it('renders the heading and three member testimonials with quotes', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { level: 2, name: 'Testimonials' })).toBeInTheDocument()
    for (const testimonial of testimonials) {
      expect(screen.getByRole('heading', { level: 3, name: testimonial.name })).toBeInTheDocument()
      expect(screen.getAllByText(testimonial.quote).length).toBeGreaterThan(0)
    }
    expect(screen.getAllByText('Customer')).toHaveLength(3)
  })
})
