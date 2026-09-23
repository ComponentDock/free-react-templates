import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading and all testimonials', () => {
    render(<Testimonials />)
    expect(screen.getByText(/What Our Readers Say/i)).toBeInTheDocument()
    expect(screen.getByText('Sarah Mitchell')).toBeInTheDocument()
    expect(screen.getByText('James Porter')).toBeInTheDocument()
    expect(screen.getByText('Emily Chen')).toBeInTheDocument()
  })

  it('renders testimonial quotes', () => {
    render(<Testimonials />)
    expect(screen.getByText(/captivating read/i)).toBeInTheDocument()
    expect(screen.getByText(/masterful blend/i)).toBeInTheDocument()
    expect(screen.getByText(/two sittings/i)).toBeInTheDocument()
  })
})
