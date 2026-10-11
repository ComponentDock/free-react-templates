import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PopularPlaces } from './PopularPlaces'

describe('PopularPlaces', () => {
  it('renders the overlapping photo collage beside the destination heading', () => {
    render(<PopularPlaces />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Popular Places AroundThe World',
    )
    expect(screen.getByText(/consectetur adipisicing elit/)).toBeInTheDocument()
    for (const alt of [
      'Aerial view of a bay',
      'Harbour promenade',
      'Whitewashed hillside houses',
    ]) {
      expect(screen.getByRole('img', { name: alt })).toBeInTheDocument()
    }
  })

  it('renders four destination counter cards with place names and counts', () => {
    render(<PopularPlaces />)
    const destinations: [string, string][] = [
      ['London', '135 Places'],
      ['Turkey', '75 Places'],
      ['Paris', '150 Places'],
      ['Thailand', '85 Places'],
    ]
    for (const [place, count] of destinations) {
      expect(screen.getByRole('heading', { level: 4, name: place })).toBeInTheDocument()
      expect(screen.getByText(count)).toBeInTheDocument()
    }
    expect(document.querySelectorAll('.counter-card')).toHaveLength(4)
  })
})
