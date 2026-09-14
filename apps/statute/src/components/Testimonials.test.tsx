import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the Testimony heading', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: /Testimony/i })).toBeInTheDocument()
  })

  it('renders both testimonial authors', () => {
    render(<Testimonials />)
    expect(screen.getByText('Sarah Mitchell')).toBeInTheDocument()
    expect(screen.getByText('James Rodriguez')).toBeInTheDocument()
  })

  it('renders testimonial roles', () => {
    render(<Testimonials />)
    expect(screen.getByText('Business Owner')).toBeInTheDocument()
    expect(screen.getByText('Client')).toBeInTheDocument()
  })

  it('renders testimonial quotes', () => {
    render(<Testimonials />)
    expect(screen.getByText(/exceptional representation/i)).toBeInTheDocument()
    expect(screen.getByText(/serious criminal charges/i)).toBeInTheDocument()
  })
})
