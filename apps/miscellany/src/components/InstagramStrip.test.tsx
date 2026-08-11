import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { InstagramStrip } from './InstagramStrip'
import { instagramHeading, instagramTileLabel, instagramTiles } from '../data'

describe('InstagramStrip', () => {
  it('shows the Instagram heading', () => {
    render(<InstagramStrip />)
    expect(screen.getByRole('heading', { name: instagramHeading })).toBeInTheDocument()
  })

  it('renders eight square photo tiles in a single row', () => {
    const { container } = render(<InstagramStrip />)
    const tiles = container.querySelectorAll('a[aria-label^="Instagram photo"]')
    expect(tiles.length).toBe(instagramTiles.length)

    for (let i = 0; i < instagramTiles.length; i += 1) {
      const tile = screen.getByRole('link', { name: instagramTileLabel(i) })
      expect(tile.querySelector('img')).not.toBeNull()
      expect(tile.querySelector('span[aria-hidden="true"]')).not.toBeNull()
    }
  })
})
