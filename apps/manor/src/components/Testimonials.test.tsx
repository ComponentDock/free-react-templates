import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'
import { describe, it, expect } from 'vitest'

describe('Testimonials', () => {
  it('renders section heading', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: 'clients testimonials' })).toBeInTheDocument()
  })

  it('renders all testimonial texts and authors', () => {
    render(<Testimonials />)
    expect(screen.getByText(/Lorem ipsum dolor sit amet/)).toBeInTheDocument()
    expect(screen.getByText('Natalie Smith')).toBeInTheDocument()
    expect(screen.getByText('Client in California')).toBeInTheDocument()
    expect(screen.getByText('James Wilson')).toBeInTheDocument()
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
  })

  it('renders star ratings', () => {
    const { container } = render(<Testimonials />)
    const stars = container.querySelectorAll('.fill-coral-400')
    expect(stars.length).toBeGreaterThanOrEqual(15) // 5 stars × 3 testimonials
  })
})
