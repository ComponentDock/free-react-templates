import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'What Our Customers Have to Say',
    )
  })

  it('renders all four testimonial cards', () => {
    render(<Testimonials />)
    const names = ['Sarah Johnson', 'Michael Chen', 'Emily Rodriguez', 'David Park']
    for (const name of names) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }
  })

  it('renders quotes', () => {
    render(<Testimonials />)
    expect(screen.getByText(/completely transformed/i)).toBeInTheDocument()
    expect(screen.getByText(/best investment/i)).toBeInTheDocument()
    expect(screen.getByText(/Beautiful, intuitive/i)).toBeInTheDocument()
    expect(screen.getByText(/From day one/i)).toBeInTheDocument()
  })

  it('renders roles', () => {
    render(<Testimonials />)
    expect(screen.getByText('Product Manager')).toBeInTheDocument()
    expect(screen.getByText('CTO')).toBeInTheDocument()
    expect(screen.getByText('Designer')).toBeInTheDocument()
    expect(screen.getByText('Startup Founder')).toBeInTheDocument()
  })
})
