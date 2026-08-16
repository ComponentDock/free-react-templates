import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders three tall photo tiles with hover captions', () => {
    render(<Gallery />)
    for (const title of ['Energy Station', 'Skyline Bridge', 'Metro Tunnel']) {
      expect(screen.getByText(title)).toBeInTheDocument()
    }
    const tiles = document.querySelectorAll('a[href="#gallery"]')
    expect(tiles).toHaveLength(3)
    tiles.forEach((tile) => {
      expect(tile).toHaveStyle({
        backgroundImage: expect.stringContaining('picsum.photos/seed/stalwart-gallery'),
      })
    })
  })
})
