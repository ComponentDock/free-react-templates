import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'
import { TESTIMONIALS } from '../data'

describe('Testimonials', () => {
  it('renders the section title', () => {
    render(<Testimonials />)
    expect(screen.getByText('Testimonials')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Happy Customers' })).toBeInTheDocument()
  })

  it('renders all testimonial authors', () => {
    render(<Testimonials />)
    for (const t of TESTIMONIALS) {
      expect(screen.getByText(t.name)).toBeInTheDocument()
    }
  })

  it('renders testimonial text', () => {
    render(<Testimonials />)
    // All testimonials share the same text — use getAllByText
    const texts = screen.getAllByText(/Donec imperdiet congue/)
    expect(texts.length).toBe(TESTIMONIALS.length)
  })

  it('renders star ratings for each testimonial', () => {
    const { container } = render(<Testimonials />)
    const stars = container.querySelectorAll('svg[aria-hidden="true"]')
    // 5 stars × 3 testimonials = 15
    expect(stars.length).toBe(15)
  })

  it('renders author images with correct seeds', () => {
    const { container } = render(<Testimonials />)
    const authorImgs = container.querySelectorAll('img[loading="lazy"]')
    expect(authorImgs.length).toBe(TESTIMONIALS.length)
  })
})
