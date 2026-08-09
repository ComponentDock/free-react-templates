import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders the heading and at least four photo tiles', () => {
    render(<Gallery />)
    expect(screen.getByRole('heading', { name: 'Our Gallery' })).toBeInTheDocument()
    const tiles = screen.getAllByRole('img')
    expect(tiles.length).toBeGreaterThanOrEqual(4)
    for (const tile of tiles) {
      expect(tile).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
    }
  })
})
