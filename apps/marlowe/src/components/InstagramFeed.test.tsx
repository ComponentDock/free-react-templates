import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { InstagramFeed } from './InstagramFeed'
import { instagramTiles, instagramTitle } from '../data'

describe('InstagramFeed', () => {
  it('renders the title and one linked tile per entry', () => {
    render(<InstagramFeed />)
    const section = screen.getByRole('region', { name: new RegExp(instagramTitle, 'i') })
    expect(section).toBeInTheDocument()
    for (const tile of instagramTiles) {
      expect(screen.getByRole('link', { name: tile.label })).toBeInTheDocument()
    }
  })
})
