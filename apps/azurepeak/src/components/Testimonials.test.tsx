import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading and subheading', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: /What Our Guests Say/i })).toBeInTheDocument()
    expect(screen.getByText('Guest Experiences')).toBeInTheDocument()
  })

  it('renders three testimonial cards with quotes and names', () => {
    render(<Testimonials />)
    for (const name of ['Sarah Mitchell', 'James Rodriguez', 'Emily Chen']) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }
    expect(screen.getByText(/breathtaking experience/i)).toBeInTheDocument()
    expect(screen.getByText(/From the moment we arrived/i)).toBeInTheDocument()
    expect(screen.getByText(/definition of luxury/i)).toBeInTheDocument()
  })

  it('renders star ratings for each testimonial', () => {
    const { container } = render(<Testimonials />)
    // 3 testimonials × 5 stars = 15 star icons
    const stars = container.querySelectorAll('.fill-amber-400')
    expect(stars).toHaveLength(15)
  })

  it('renders initial avatars for each guest', () => {
    render(<Testimonials />)
    expect(screen.getByText('S')).toBeInTheDocument()
    expect(screen.getByText('J')).toBeInTheDocument()
    expect(screen.getByText('E')).toBeInTheDocument()
  })
})
