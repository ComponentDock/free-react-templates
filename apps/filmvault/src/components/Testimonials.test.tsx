import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders quote text', () => {
    render(<Testimonials />)
    const quotes = screen.getAllByText(/automated process starts/)
    expect(quotes.length).toBeGreaterThanOrEqual(1)
  })

  it('renders founder names', () => {
    render(<Testimonials />)
    expect(screen.getByText('Robart Brown')).toBeInTheDocument()
    expect(screen.getByText('Sarah Mitchell')).toBeInTheDocument()
  })

  it('renders founder images', () => {
    render(<Testimonials />)
    expect(screen.getByAltText('Robart Brown')).toBeInTheDocument()
    expect(screen.getByAltText('Sarah Mitchell')).toBeInTheDocument()
  })

  it('renders founder roles', () => {
    render(<Testimonials />)
    expect(screen.getByText('Creative Designer')).toBeInTheDocument()
    expect(screen.getByText('Photographer')).toBeInTheDocument()
  })

  it('renders dot navigation', () => {
    render(<Testimonials />)
    const dots = document.querySelectorAll('.rounded-full')
    expect(dots.length).toBeGreaterThanOrEqual(2)
  })
})
