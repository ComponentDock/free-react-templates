import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { PopularDestinations } from './PopularDestinations'

describe('PopularDestinations', () => {
  it('renders section title', () => {
    render(<PopularDestinations />)
    expect(screen.getByText('Popular Destinations')).toBeInTheDocument()
    expect(screen.getByText('simply amazing places')).toBeInTheDocument()
  })

  it('renders all destination names', () => {
    render(<PopularDestinations />)
    for (const name of [
      'Bali',
      'Indonesia',
      'San Francisco',
      'Paris',
      'Phi Phi Island',
      'Mykonos',
    ]) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }
  })

  it('renders prices', () => {
    render(<PopularDestinations />)
    const prices = screen.getAllByText('From $679')
    expect(prices.length).toBe(6)
  })

  it('renders Special Offer badge on first card', () => {
    render(<PopularDestinations />)
    expect(screen.getByText('Special Offer')).toBeInTheDocument()
  })

  it('renders images with alt text', () => {
    render(<PopularDestinations />)
    expect(screen.getByAltText('Bali destination')).toBeInTheDocument()
    expect(screen.getByAltText('Paris destination')).toBeInTheDocument()
  })
})
