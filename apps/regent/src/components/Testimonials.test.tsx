import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'
import { TESTIMONIALS } from '../data'
import { describe, expect, it } from 'vitest'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Testimonials')
  })

  it('renders all 3 testimonials', () => {
    render(<Testimonials />)
    for (const t of TESTIMONIALS) {
      expect(screen.getByText(t.name)).toBeInTheDocument()
      // Quote is wrapped in smart quotes, so use a partial match
      expect(screen.getByText(new RegExp(t.quote.slice(0, 30)))).toBeInTheDocument()
    }
  })

  it('renders testimonial avatars', () => {
    render(<Testimonials />)
    const avatars = screen.getAllByRole('img')
    expect(avatars.length).toBeGreaterThanOrEqual(TESTIMONIALS.length)
  })
})
