import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Destinations } from './Destinations'
import { DESTINATIONS, DESTINATIONS_TITLE, EXPLORE_LABEL } from '../lib/site'

describe('Destinations', () => {
  it('renders the heading and one card per city', () => {
    render(<Destinations />)

    expect(screen.getByRole('heading', { level: 2, name: DESTINATIONS_TITLE })).toBeInTheDocument()
    expect(screen.getAllByTestId('destination')).toHaveLength(DESTINATIONS.length)
  })

  it('names every city and carries its photograph', () => {
    render(<Destinations />)

    for (const destination of DESTINATIONS) {
      expect(screen.getByRole('heading', { level: 3, name: destination.name })).toBeInTheDocument()
      expect(screen.getByRole('img', { name: destination.name })).toHaveAttribute(
        'src',
        destination.image,
      )
    }
  })

  it('offers an Explore link inside each veil, revealed on hover', () => {
    render(<Destinations />)

    const links = screen.getAllByRole('link', { name: EXPLORE_LABEL })
    expect(links).toHaveLength(DESTINATIONS.length)

    const veils = screen.getAllByTestId('destination-veil')
    expect(veils[0]).toHaveClass('group-hover:opacity-100')
    expect(veils[0]).toHaveClass('opacity-0')
  })

  it('draws the turning dotted ring around every circle', () => {
    render(<Destinations />)

    const rings = screen.getAllByTestId('destination-ring')
    expect(rings).toHaveLength(DESTINATIONS.length)
    expect(rings[0]).toHaveClass('animate-ring')
    expect(rings[0]).toHaveClass('border-dotted')
  })
})
