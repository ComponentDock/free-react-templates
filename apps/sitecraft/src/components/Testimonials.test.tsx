import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)

    expect(screen.getByRole('heading', { level: 2, name: 'Client Says' })).toBeInTheDocument()
  })

  it('renders all three testimonial names', () => {
    render(<Testimonials />)

    expect(screen.getByText('Andrew Field')).toBeInTheDocument()
    expect(screen.getByText('Mark Bubble')).toBeInTheDocument()
    expect(screen.getByText('Adam Smith')).toBeInTheDocument()
  })

  it('renders testimonial quotes', () => {
    render(<Testimonials />)

    const quotes = screen.getAllByText(/blind texts/)
    expect(quotes.length).toBeGreaterThanOrEqual(2)
  })

  it('renders testimonial avatars', () => {
    render(<Testimonials />)

    const avatars = screen.getAllByRole('img')
    expect(avatars.length).toBe(3)
    for (const img of avatars) {
      expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
    }
  })
})
