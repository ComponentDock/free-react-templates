import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Portfolio } from './Portfolio'

describe('Portfolio', () => {
  it('renders six See More photo tiles', () => {
    render(<Portfolio />)
    const tiles = screen.getAllByRole('link', { name: 'See More' })
    expect(tiles).toHaveLength(6)

    for (const [index, tile] of tiles.entries()) {
      expect(tile).toHaveAttribute('href', '#portfolio')
      const image = tile.querySelector('img')
      expect(image).toHaveAttribute(
        'src',
        `https://picsum.photos/seed/haute-portfolio-${index + 1}/800/1000`,
      )
    }
  })
})
