import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { trips, tripsSectionTitle } from '../data'
import { Trips } from './Trips'

describe('Trips', () => {
  it('renders the section title and three trip cards with date and title', () => {
    render(<Trips />)
    expect(screen.getByRole('heading', { level: 2, name: tripsSectionTitle })).toBeInTheDocument()
    for (const trip of trips) {
      expect(screen.getByText(trip.date)).toBeInTheDocument()
      expect(screen.getByRole('heading', { level: 3, name: trip.title })).toBeInTheDocument()
    }
  })
})
