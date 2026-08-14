import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Testimonials } from './Testimonials'
import { testimonials } from '../data'

describe('Testimonials', () => {
  it('renders the title and all testimonial cards with author and role', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: /Client.s Feedback About Me/ })).toBeInTheDocument()
    for (const testimonial of testimonials) {
      expect(screen.getByText(testimonial.quote)).toBeInTheDocument()
      expect(screen.getByRole('heading', { name: testimonial.name })).toBeInTheDocument()
      expect(screen.getByText(testimonial.role)).toBeInTheDocument()
      expect(screen.getByRole('img', { name: `Avatar of ${testimonial.name}` })).toBeInTheDocument()
    }
  })
})
