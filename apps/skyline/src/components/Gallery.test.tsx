import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders the heading and listing cards with meta', () => {
    render(<Gallery />)
    expect(screen.getByRole('heading', { name: /Luxuries Apartment/i })).toBeInTheDocument()
    const cards = screen.getAllByRole('article')
    expect(cards.length).toBeGreaterThanOrEqual(3)
    expect(screen.getAllByText(/Beds/i).length).toBeGreaterThanOrEqual(3)
    expect(screen.getAllByText(/Baths/i).length).toBeGreaterThanOrEqual(3)
    expect(screen.getAllByText(/Sq Ft/i).length).toBeGreaterThanOrEqual(3)
  })
})
