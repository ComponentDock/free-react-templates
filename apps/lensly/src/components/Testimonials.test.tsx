import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TESTIMONIALS } from '../data'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the light-gray section with a centered header', () => {
    const { container } = render(<Testimonials />)
    const section = container.querySelector('section')
    expect(section?.className).toContain('bg-light')
    expect(screen.getByText('Testimonials')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'What Client Says' })).toBeInTheDocument()
  })

  it('renders three quote cards with titles', () => {
    render(<Testimonials />)
    for (const testimonial of TESTIMONIALS) {
      expect(screen.getByRole('heading', { level: 3, name: testimonial.title })).toBeInTheDocument()
      expect(screen.getByText(testimonial.quote)).toBeInTheDocument()
    }
    expect(screen.getAllByText(/Far far away, behind the word mountains/)).toHaveLength(1)
  })
})
