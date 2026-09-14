import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders section heading', () => {
    render(<Testimonials />)
    expect(screen.getByText('Kind Words From Clients')).toBeInTheDocument()
  })

  it('renders all testimonials with names and roles', () => {
    render(<Testimonials />)
    expect(screen.getByText('Sarah Mitchell')).toBeInTheDocument()
    expect(screen.getByText('Bestselling Author')).toBeInTheDocument()
    expect(screen.getByText('David Chen')).toBeInTheDocument()
    expect(screen.getByText('First-time Author')).toBeInTheDocument()
    expect(screen.getByText('Emma Rodriguez')).toBeInTheDocument()
    expect(screen.getByText('Independent Publisher')).toBeInTheDocument()
  })

  it('renders testimonial text', () => {
    render(<Testimonials />)
    expect(screen.getByText(/incredible partner/)).toBeInTheDocument()
    expect(screen.getByText(/transformed my manuscript/)).toBeInTheDocument()
    expect(screen.getByText(/distribution and marketing/)).toBeInTheDocument()
  })
})
