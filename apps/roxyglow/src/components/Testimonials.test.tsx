import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the Testimony heading', () => {
    render(<Testimonials />)
    expect(screen.getByText('Testimony')).toBeDefined()
  })

  it('renders the subheading', () => {
    render(<Testimonials />)
    expect(screen.getByText('Our Happy Guest Says')).toBeDefined()
  })

  it('renders all testimonial author names', () => {
    render(<Testimonials />)
    expect(screen.getByText('Sarah Mitchell')).toBeDefined()
    expect(screen.getByText('David Chen')).toBeDefined()
    expect(screen.getByText('Maria Rodriguez')).toBeDefined()
  })

  it('renders star ratings for each testimonial', () => {
    const { container } = render(<Testimonials />)
    const stars = container.querySelectorAll('.fill-brand')
    expect(stars.length).toBe(15) // 3 testimonials x 5 stars
  })

  it('renders testimonial text', () => {
    render(<Testimonials />)
    expect(screen.getByText(/An absolutely stunning hotel/)).toBeDefined()
    expect(screen.getByText(/From the moment we arrived/)).toBeDefined()
    expect(screen.getByText(/The perfect getaway destination/)).toBeDefined()
  })

  it('renders Guests label for each testimonial', () => {
    render(<Testimonials />)
    const labels = screen.getAllByText('Guests')
    expect(labels.length).toBe(3)
  })

  it('renders testimonial avatar images', () => {
    render(<Testimonials />)
    expect(screen.getByAltText('Sarah Mitchell')).toBeDefined()
    expect(screen.getByAltText('David Chen')).toBeDefined()
    expect(screen.getByAltText('Maria Rodriguez')).toBeDefined()
  })
})
