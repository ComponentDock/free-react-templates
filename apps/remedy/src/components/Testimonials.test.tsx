import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(screen.getByText('Happy Customers')).toBeInTheDocument()
  })

  it('renders all testimonial authors', () => {
    render(<Testimonials />)
    expect(screen.getByText(/kelly holmes/i)).toBeInTheDocument()
    expect(screen.getByText(/rebecca morando/i)).toBeInTheDocument()
    expect(screen.getByText(/lucas gallone/i)).toBeInTheDocument()
  })

  it('renders testimonial quotes', () => {
    render(<Testimonials />)
    expect(screen.getByText(/go-to pharmacy/i)).toBeInTheDocument()
    expect(screen.getByText(/wide selection/i)).toBeInTheDocument()
    expect(screen.getByText(/great prices/i)).toBeInTheDocument()
  })
})
