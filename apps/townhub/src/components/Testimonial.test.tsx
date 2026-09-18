import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Testimonial } from './Testimonial'
import { testimonials } from '../data'

describe('Testimonial', () => {
  it('renders the section heading', () => {
    render(<Testimonial />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('What our clients say')
  })

  it('renders all testimonial cards', () => {
    render(<Testimonial />)
    for (const t of testimonials) {
      expect(screen.getByText(t.name)).toBeInTheDocument()
      expect(screen.getByText(t.title)).toBeInTheDocument()
      expect(screen.getByText(new RegExp(t.quote.slice(0, 30)))).toBeInTheDocument()
    }
  })

  it('renders avatar images for each testimonial', () => {
    render(<Testimonial />)
    const avatars = screen.getAllByRole('img')
    expect(avatars.length).toBeGreaterThanOrEqual(3)
  })

  it('renders star ratings', () => {
    const { container } = render(<Testimonial />)
    const stars = container.querySelectorAll('.fill-yellow-400')
    expect(stars.length).toBeGreaterThanOrEqual(15) // 5 stars × 3 testimonials
  })
})
