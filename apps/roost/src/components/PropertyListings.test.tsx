import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PropertyListings } from './PropertyListings'

describe('PropertyListings', () => {
  it('renders the section heading', () => {
    render(<PropertyListings />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Our Property')
  })

  it('renders 4 property cards with prices', () => {
    render(<PropertyListings />)
    const prices = screen.getAllByText(/\$[\d,]+/)
    expect(prices.length).toBeGreaterThanOrEqual(4)
  })

  it('renders property details with beds and baths', () => {
    render(<PropertyListings />)
    expect(screen.getAllByText(/beds/).length).toBeGreaterThanOrEqual(4)
    expect(screen.getAllByText(/bath/).length).toBeGreaterThanOrEqual(4)
  })
})
