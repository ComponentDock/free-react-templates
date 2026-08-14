import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Testimonials } from './Testimonials'
import { testimonials } from '../data'

describe('Testimonials', () => {
  it('renders the centered heading', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: 'Testimonials' })).toBeInTheDocument()
  })

  it('shows each person on the front with name and role', () => {
    render(<Testimonials />)
    for (const testimonial of testimonials) {
      expect(screen.getByRole('heading', { name: testimonial.name })).toBeInTheDocument()
      // Role appears on the front card and in the back author row.
      expect(screen.getAllByText(testimonial.role).length).toBeGreaterThan(0)
    }
  })

  it('hides the quote on the front and reveals it on the back with an avatar', () => {
    const { container } = render(<Testimonials />)
    for (const testimonial of testimonials) {
      expect(screen.getByText(`“${testimonial.quote}”`)).toBeInTheDocument()
      expect(screen.getByAltText(`${testimonial.name} portrait`)).toHaveAttribute(
        'src',
        testimonial.avatar,
      )
    }
    // Flip structure: preserve-3d faces with backface-hidden.
    const flipper = container.querySelector('.\\[transform-style\\:preserve-3d\\]')
    expect(flipper).toBeTruthy()
    expect(flipper?.getAttribute('class')).toContain('group-hover:[transform:rotateY(180deg)]')
  })
})
