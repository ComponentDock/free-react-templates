import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)

    expect(screen.getByRole('heading', { name: /Customer says/i })).toBeInTheDocument()
  })

  it('displays all three testimonial cards', () => {
    render(<Testimonials />)

    expect(screen.getByText('Adame Nesane')).toBeInTheDocument()
    expect(screen.getByText('Chief Customer')).toBeInTheDocument()
    expect(screen.getByText('Adam Nahan')).toBeInTheDocument()
    expect(screen.getByText('Food Critic')).toBeInTheDocument()
    expect(screen.getByText('Maria Santos')).toBeInTheDocument()
    expect(screen.getByText('Regular Guest')).toBeInTheDocument()
  })

  it('shows testimonial quotes', () => {
    render(<Testimonials />)

    expect(screen.getByText(/exceptional dining experience/)).toBeInTheDocument()
    expect(screen.getByText(/Every dish was a masterpiece/)).toBeInTheDocument()
    expect(screen.getByText(/favorite place/)).toBeInTheDocument()
  })

  it('has testimonial avatar images', () => {
    render(<Testimonials />)

    const images = screen.getAllByRole('img')
    const avatarImages = images.filter(
      (img) =>
        img.getAttribute('alt')?.includes('Adame') ||
        img.getAttribute('alt')?.includes('Adam') ||
        img.getAttribute('alt')?.includes('Maria'),
    )
    expect(avatarImages.length).toBe(3)
  })
})
