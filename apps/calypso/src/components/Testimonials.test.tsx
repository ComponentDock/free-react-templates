import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section', () => {
    render(<Testimonials />)
    expect(screen.getByTestId('testimonials')).toBeInTheDocument()
  })

  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(screen.getByText('What Clients Say')).toBeInTheDocument()
    expect(screen.getByText('Testimonials')).toBeInTheDocument()
  })

  it('renders the testimonial quote', () => {
    render(<Testimonials />)
    expect(screen.getByText(/Alex transformed our entire product experience/)).toBeInTheDocument()
  })

  it('renders the author info', () => {
    render(<Testimonials />)
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByText('VP of Product, TechCorp')).toBeInTheDocument()
  })

  it('renders the author image', () => {
    render(<Testimonials />)
    const img = screen.getByAltText('Sarah Johnson')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })
})
