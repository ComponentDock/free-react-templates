import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PropertyListings } from './PropertyListings'

describe('PropertyListings', () => {
  it('renders the section heading', () => {
    render(<PropertyListings />)
    expect(screen.getByText('Searching for the Best Places?')).toBeInTheDocument()
  })

  it('renders 6 property cards', () => {
    render(<PropertyListings />)
    const cards = screen.getAllByText('Place perfect for nature lovers')
    expect(cards).toHaveLength(6)
  })

  it('renders location for each property', () => {
    render(<PropertyListings />)
    const locations = screen.getAllByText('London, England')
    expect(locations).toHaveLength(6)
  })

  it('renders prices', () => {
    render(<PropertyListings />)
    const prices = screen.getAllByText('$76,367')
    expect(prices).toHaveLength(6)
  })

  it('renders bed and bath info', () => {
    render(<PropertyListings />)
    expect(screen.getAllByText(/Bed/)).toHaveLength(6)
    expect(screen.getAllByText(/Bath/)).toHaveLength(6)
  })
})
