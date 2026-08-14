import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'
import { testimonials } from '../data'

describe('Testimonials', () => {
  it('renders the heading and intro', () => {
    render(<Testimonials />)
    expect(
      screen.getByRole('heading', { level: 2, name: /Our Top Client Says/ }),
    ).toBeInTheDocument()
  })

  it('renders three cards with avatar, quote, name and role', () => {
    render(<Testimonials />)
    expect(screen.getAllByRole('figure')).toHaveLength(3)
    for (const testimonial of testimonials) {
      expect(screen.getByText((content) => content.includes(testimonial.quote))).toBeInTheDocument()
      expect(screen.getByText(testimonial.name)).toBeInTheDocument()
      expect(screen.getByText(testimonial.role)).toBeInTheDocument()
      expect(screen.getByRole('img', { name: `Portrait of ${testimonial.name}` })).toHaveAttribute(
        'src',
        testimonial.avatar,
      )
    }
  })
})
