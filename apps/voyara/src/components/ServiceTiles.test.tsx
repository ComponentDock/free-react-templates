import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ServiceTiles } from './ServiceTiles'

describe('ServiceTiles', () => {
  it('renders the centred Superb Facilities header', () => {
    render(<ServiceTiles />)
    expect(screen.getByRole('heading', { level: 1, name: 'Superb Facilities' })).toBeInTheDocument()
    expect(screen.getByText(/plan the holiday/i)).toBeInTheDocument()
  })

  it('renders three image tiles with the gradient hover overlay and title', () => {
    render(<ServiceTiles />)
    const tiles = screen.getAllByRole('link', { name: 'Resort Holiday package' })
    expect(tiles).toHaveLength(3)
    expect(tiles.map((tile) => tile.getAttribute('href'))).toEqual(['#book', '#book', '#book'])

    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(3)
    expect(images[0]).toHaveAttribute('src', 'https://picsum.photos/seed/voyara-service-1/400/300')
    expect(screen.getAllByTestId('tile-overlay')).toHaveLength(3)
    expect(screen.getAllByTestId('tile-overlay')[0]).toHaveClass('group-hover:opacity-100')
    expect(screen.getAllByText('Resort Holiday package')).toHaveLength(3)
  })
})
