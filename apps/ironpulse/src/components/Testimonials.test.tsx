import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'
import { describe, expect, it } from 'vitest'

describe('Testimonials', () => {
  it('renders heading and all testimonial cards', () => {
    render(<Testimonials />)
    expect(screen.getByText('What Our Customers Say')).toBeInTheDocument()
    expect(screen.getByText(/IronPulse changed my life/)).toBeInTheDocument()
    expect(screen.getByText(/I lost 30 pounds/)).toBeInTheDocument()
    expect(screen.getByText(/Best gym experience/)).toBeInTheDocument()
  })

  it('renders author names and roles', () => {
    render(<Testimonials />)
    expect(screen.getByText('Jessica Adams')).toBeInTheDocument()
    expect(screen.getByText('Michael Torres')).toBeInTheDocument()
    expect(screen.getByText('Sarah Kim')).toBeInTheDocument()
  })
})
