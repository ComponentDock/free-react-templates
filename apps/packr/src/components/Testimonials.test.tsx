import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: /our client says/i })).toBeInTheDocument()
  })

  it('renders all three testimonials', () => {
    render(<Testimonials />)
    expect(screen.getAllByText(/Andrew Field/).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/Mark Bubble/).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/Adam Smith/).length).toBeGreaterThan(0)
  })

  it('renders testimonial images', () => {
    render(<Testimonials />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(3)
    expect(images[0]).toHaveAttribute('alt', 'Andrew Field')
  })
})
