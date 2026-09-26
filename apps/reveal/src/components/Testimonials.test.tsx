import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('My Happy Clients')
  })

  it('renders 3 testimonial cards', () => {
    render(<Testimonials />)
    expect(screen.getByText('Eric Ingram')).toBeInTheDocument()
    expect(screen.getByText('Ryan Mullins')).toBeInTheDocument()
    expect(screen.getByText('Erica Miller')).toBeInTheDocument()
  })

  it('renders testimonial positions', () => {
    render(<Testimonials />)
    expect(screen.getByText('Product Designer @Facebook')).toBeInTheDocument()
    expect(screen.getByText('Product Designer @Shopify')).toBeInTheDocument()
    expect(screen.getByText('Product Designer @Twitter')).toBeInTheDocument()
  })
})
