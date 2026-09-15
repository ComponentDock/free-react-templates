import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'
import { describe, expect, it } from 'vitest'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Happy Customers')
  })

  it('renders three testimonials with quotes and names', () => {
    render(<Testimonials />)
    expect(screen.getByText(/Proxy made finding our dream home/)).toBeInTheDocument()
    expect(screen.getByText(/From the first consultation/)).toBeInTheDocument()
    expect(screen.getByText(/We were relocating from out of state/)).toBeInTheDocument()
    expect(screen.getByText('— Sarah Mitchell')).toBeInTheDocument()
    expect(screen.getByText('— David Chen')).toBeInTheDocument()
    expect(screen.getByText('— Emily Rodriguez')).toBeInTheDocument()
  })

  it('renders testimonial author images', () => {
    render(<Testimonials />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(3)
    expect(images[0]).toHaveAttribute('alt', 'Sarah Mitchell')
  })
})
