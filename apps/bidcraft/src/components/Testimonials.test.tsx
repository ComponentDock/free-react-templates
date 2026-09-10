import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: /Happy.*Clients/ })).toBeInTheDocument()
  })

  it('renders testimonial cards with names', () => {
    render(<Testimonials />)
    expect(screen.getByText('Allison Holmes')).toBeInTheDocument()
    expect(screen.getByText('Marcus Chen')).toBeInTheDocument()
    expect(screen.getByText('Sophia Rivera')).toBeInTheDocument()
  })

  it('renders testimonial roles', () => {
    render(<Testimonials />)
    expect(screen.getByText('Designer')).toBeInTheDocument()
    expect(screen.getByText('Collector')).toBeInTheDocument()
    expect(screen.getByText('Entrepreneur')).toBeInTheDocument()
  })

  it('renders testimonial quotes', () => {
    render(<Testimonials />)
    expect(screen.getByText(/Bidcraft made selling/)).toBeInTheDocument()
    expect(screen.getByText(/I found rare collectibles/)).toBeInTheDocument()
    expect(screen.getByText(/As a small business owner/)).toBeInTheDocument()
  })

  it('has the Testimonials landmark', () => {
    render(<Testimonials />)
    expect(screen.getByLabelText('Testimonials')).toBeInTheDocument()
  })
})
