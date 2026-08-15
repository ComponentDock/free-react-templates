import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { morePlacesLabel, places, placesSectionText, placesSectionTitle } from '../data'
import { Places } from './Places'

describe('Places', () => {
  it('renders the section title and its supporting paragraph', () => {
    render(<Places />)
    expect(screen.getByRole('heading', { level: 2, name: placesSectionTitle })).toBeInTheDocument()
    expect(screen.getByText(placesSectionText)).toBeInTheDocument()
  })

  it('renders six place cards with price pill, name, country, stars, review, and days', () => {
    render(<Places />)
    expect(screen.getAllByText(/\$\d+/)).toHaveLength(places.length)
    expect(screen.getAllByText(/Review\)$/)).toHaveLength(places.length)
    expect(screen.getAllByText(/Days$/)).toHaveLength(places.length)
    expect(screen.getAllByLabelText(/rating$/)).toHaveLength(places.length)

    for (const place of places) {
      expect(screen.getByRole('heading', { level: 3, name: place.name })).toBeInTheDocument()
      expect(screen.getAllByText(place.country).length).toBeGreaterThan(0)
      expect(screen.getByText(place.price)).toBeInTheDocument()
      expect(screen.getByText(place.review)).toBeInTheDocument()
      expect(screen.getAllByText(place.days).length).toBeGreaterThan(0)
    }
  })

  it('renders the More Places button below the grid', () => {
    render(<Places />)
    expect(screen.getByRole('link', { name: morePlacesLabel })).toBeInTheDocument()
  })
})
