import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders section title', () => {
    render(<Testimonials />)
    expect(screen.getByText('Our Testimonials')).toBeInTheDocument()
  })

  it('renders all testimonial cards', () => {
    render(<Testimonials />)
    expect(screen.getByText('James Mitchell')).toBeInTheDocument()
    expect(screen.getByText('Linda Carter')).toBeInTheDocument()
    expect(screen.getByText('Robert Kim')).toBeInTheDocument()
  })

  it('renders testimonial quotes', () => {
    render(<Testimonials />)
    expect(screen.getByText(/Outstanding work on our office complex/)).toBeInTheDocument()
    expect(screen.getByText(/Our home renovation exceeded/)).toBeInTheDocument()
    expect(screen.getByText(/Working with Constructo/)).toBeInTheDocument()
  })

  it('renders testimonial roles', () => {
    render(<Testimonials />)
    expect(screen.getByText('Business Owner')).toBeInTheDocument()
    expect(screen.getByText('Homeowner')).toBeInTheDocument()
    expect(screen.getByText('Architect')).toBeInTheDocument()
  })
})
