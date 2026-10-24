import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Testimonials } from './Testimonials'
import { testimonialStars, testimonials } from '../data'

describe('Testimonials', () => {
  it('renders the three quotes with role, name and portrait', () => {
    render(<Testimonials />)
    expect(screen.getByRole('region', { name: 'Testimonials' })).toHaveClass('bg-brand')

    for (const testimonial of testimonials) {
      expect(screen.getAllByAltText(`${testimonial.name} portrait`).length).toBeGreaterThan(0)
      expect(screen.getAllByText(testimonial.quote)).toHaveLength(testimonials.length)
    }
    expect(screen.getByRole('heading', { name: 'Josh Long' })).toBeInTheDocument()
    expect(screen.getAllByRole('heading', { name: 'Jean Doe' })).toHaveLength(2)
    expect(screen.getAllByText('Business Woman')).toHaveLength(2)
    expect(screen.getByText('Business Man')).toBeInTheDocument()
  })

  it('renders four star icons on every card', () => {
    const { container } = render(<Testimonials />)
    expect(container.querySelectorAll('svg')).toHaveLength(testimonials.length * testimonialStars)
  })
})
