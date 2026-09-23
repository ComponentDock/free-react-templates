import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'
import { TESTIMONIALS } from '../data'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'What Our Clients Say' }),
    ).toBeInTheDocument()
  })

  it('renders all 3 testimonial names', () => {
    render(<Testimonials />)

    for (const t of TESTIMONIALS) {
      expect(screen.getByText(t.name)).toBeInTheDocument()
    }
  })

  it('renders all 3 testimonial roles', () => {
    render(<Testimonials />)

    for (const t of TESTIMONIALS) {
      expect(screen.getByText(t.role)).toBeInTheDocument()
    }
  })

  it('renders all 3 testimonial quotes', () => {
    render(<Testimonials />)

    for (const t of TESTIMONIALS) {
      expect(screen.getByText(new RegExp(t.quote.slice(0, 30)))).toBeInTheDocument()
    }
  })

  it('renders avatar images for each testimonial', () => {
    render(<Testimonials />)

    for (const t of TESTIMONIALS) {
      expect(screen.getByRole('img', { name: t.name })).toHaveAttribute('src', t.avatar)
    }
  })
})
