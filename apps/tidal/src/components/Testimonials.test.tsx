import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { level: 2, name: 'Tourist Feedback' })).toBeInTheDocument()
  })

  it('renders all three testimonial cards', () => {
    render(<Testimonials />)

    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByText('Michael Chen')).toBeInTheDocument()
    expect(screen.getByText('Emma Williams')).toBeInTheDocument()
  })

  it('renders testimonial images', () => {
    render(<Testimonials />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(3)
    for (const img of images) {
      expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
    }
  })

  it('renders star ratings for each testimonial', () => {
    render(<Testimonials />)
    const stars = screen.getAllByRole('img', { hidden: true })
    expect(stars.length).toBeGreaterThan(0)
  })
})
