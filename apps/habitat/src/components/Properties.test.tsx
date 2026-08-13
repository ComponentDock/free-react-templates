import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Properties } from './Properties'

describe('Properties', () => {
  it('renders the heading and a grid of property cards', () => {
    render(<Properties />)
    expect(screen.getByRole('heading', { level: 2, name: 'Hotel Rooms' })).toBeInTheDocument()
    const cards = screen.getAllByRole('article')
    expect(cards).toHaveLength(6)
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(6)
  })

  it('renders heart links, stats, prices and view buttons on every card', () => {
    render(<Properties />)
    expect(screen.getAllByRole('link', { name: /^Save / })).toHaveLength(6)
    expect(screen.getAllByText('For Sale')).toHaveLength(6)
    expect(screen.getAllByText('$345,000').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByRole('link', { name: 'View Property' })).toHaveLength(6)
    expect(screen.getAllByText('Location')).toHaveLength(6)
    expect(screen.getAllByText('Show on Map')).toHaveLength(6)
    expect(screen.getAllByText('Lot Size')).toHaveLength(6)
    expect(screen.getAllByText('Beds')).toHaveLength(6)
    expect(screen.getAllByText('Baths')).toHaveLength(6)
    expect(screen.getAllByText('Garage')).toHaveLength(6)
  })
})
