import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { DESTINATIONS } from '../data/content'
import { FeaturedDestinations } from './FeaturedDestinations'

describe('FeaturedDestinations', () => {
  it('renders the heading and every destination tile with its listing count', () => {
    render(<FeaturedDestinations />)
    expect(screen.getByRole('heading', { level: 2 }).textContent).toBe('Featured Destination')
    const region = screen.getByRole('region', { name: 'Featured destinations' })
    expect(region).toHaveAttribute('data-index', '0')
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(DESTINATIONS.length)
    expect(screen.getAllByText('Paris, Italy')).toHaveLength(2)
    expect(screen.getByText('15 Listing')).toBeInTheDocument()
    expect(screen.getByText('20 Listing')).toBeInTheDocument()
    expect(screen.getAllByRole('img')).toHaveLength(DESTINATIONS.length)
  })

  it('slides the tiles with the arrow controls, clamping at both ends', () => {
    render(<FeaturedDestinations />)
    const region = screen.getByRole('region', { name: 'Featured destinations' })
    const previous = screen.getByRole('button', { name: 'Previous destinations' })
    const next = screen.getByRole('button', { name: 'Next destinations' })
    expect(previous).toBeDisabled()

    for (let step = 0; step < DESTINATIONS.length - 1; step += 1) {
      fireEvent.click(next)
    }
    expect(region).toHaveAttribute('data-index', String(DESTINATIONS.length - 1))
    expect(next).toBeDisabled()
    fireEvent.click(next)
    expect(region).toHaveAttribute('data-index', String(DESTINATIONS.length - 1))

    fireEvent.click(previous)
    expect(region).toHaveAttribute('data-index', String(DESTINATIONS.length - 2))
  })
})
