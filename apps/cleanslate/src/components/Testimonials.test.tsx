import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'
import { describe, it, expect } from 'vitest'

describe('Testimonials', () => {
  it('renders section headings', () => {
    render(<Testimonials />)
    expect(screen.getByText('Testimonies')).toBeInTheDocument()
    expect(screen.getByText('Happy Customers')).toBeInTheDocument()
  })

  it('renders reviewer names', () => {
    render(<Testimonials />)
    expect(screen.getByText('James Peterson')).toBeInTheDocument()
    expect(screen.getByText('Sarah Anderson')).toBeInTheDocument()
    expect(screen.getByText('Michael Chen')).toBeInTheDocument()
  })

  it('renders testimonial text', () => {
    render(<Testimonials />)
    expect(screen.getByText(/fantastic service/)).toBeInTheDocument()
    expect(screen.getByText(/two years/)).toBeInTheDocument()
    expect(screen.getByText(/never looked better/)).toBeInTheDocument()
  })
})
