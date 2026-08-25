import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ProductiveSection } from './ProductiveSection'

describe('ProductiveSection', () => {
  it('renders the heading with Thrive branding', () => {
    render(<ProductiveSection />)
    expect(screen.getByText('Productive with Thrive')).toBeInTheDocument()
  })

  it('renders the testimonial author', () => {
    render(<ProductiveSection />)
    expect(screen.getByText('John Doe')).toBeInTheDocument()
    expect(screen.getByText(/XYZ Inc\./)).toBeInTheDocument()
  })

  it('renders the testimonial quote', () => {
    render(<ProductiveSection />)
    const quotes = screen.getAllByText(/A small river named Duden/)
    expect(quotes.length).toBeGreaterThanOrEqual(1)
  })

  it('renders the illustration', () => {
    render(<ProductiveSection />)
    expect(screen.getByAltText('Productive illustration')).toBeInTheDocument()
  })
})
