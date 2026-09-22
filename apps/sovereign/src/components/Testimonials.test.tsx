import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders section heading', () => {
    render(<Testimonials />)
    expect(screen.getByText('Guest Reviews')).toBeInTheDocument()
  })

  it('renders all 3 testimonials', () => {
    render(<Testimonials />)
    expect(screen.getByText('Sarah Mitchell')).toBeInTheDocument()
    expect(screen.getByText('James Anderson')).toBeInTheDocument()
    expect(screen.getByText('Elena Rodriguez')).toBeInTheDocument()
  })

  it('displays testimonial quotes', () => {
    render(<Testimonials />)
    expect(screen.getByText(/absolutely stunning hotel/)).toBeInTheDocument()
    expect(screen.getByText(/best hotel experience/)).toBeInTheDocument()
    expect(screen.getByText(/moment we arrived/)).toBeInTheDocument()
  })

  it('displays star ratings', () => {
    render(<Testimonials />)
    // 5 stars per testimonial × 3 = 15 stars
    const stars = document.querySelectorAll('.fill-yellow-400')
    expect(stars.length).toBe(15)
  })

  it('displays avatar images', () => {
    render(<Testimonials />)
    expect(screen.getByAltText('Sarah Mitchell')).toBeInTheDocument()
    expect(screen.getByAltText('James Anderson')).toBeInTheDocument()
    expect(screen.getByAltText('Elena Rodriguez')).toBeInTheDocument()
  })
})
