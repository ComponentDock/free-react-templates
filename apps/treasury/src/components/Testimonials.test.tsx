import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(screen.getByText('Testimonials')).toBeInTheDocument()
  })

  it('renders all testimonial quotes', () => {
    render(<Testimonials />)
    expect(screen.getByText(/Treasury helped us/)).toBeInTheDocument()
    expect(screen.getByText(/The team provided/)).toBeInTheDocument()
    expect(screen.getByText(/Professional, reliable/)).toBeInTheDocument()
  })

  it('renders testimonial authors', () => {
    render(<Testimonials />)
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByText('Michael Chen')).toBeInTheDocument()
    expect(screen.getByText('Emily Rodriguez')).toBeInTheDocument()
  })
})
