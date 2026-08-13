import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Works } from './Works'
import { workTiles } from '../data'

describe('Works', () => {
  it('renders the heading and six photo tiles with hover overlay and plus icon', () => {
    const { container } = render(<Works />)
    expect(screen.getByRole('heading', { name: 'Our Works' })).toBeInTheDocument()

    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(workTiles.length)
    for (const [index, tile] of workTiles.entries()) {
      const link = links[index]!
      expect(link).toHaveAccessibleName(tile.title)
      expect(link.className).toContain('group')
    }

    const images = container.querySelectorAll('img')
    expect(images).toHaveLength(workTiles.length)
    expect(images[0]).toHaveAttribute('src', workTiles[0]!.image)

    // One dark overlay span and one plus icon per tile.
    const overlays = container.querySelectorAll('.bg-black\\/40')
    expect(overlays).toHaveLength(workTiles.length)
    expect(container.querySelectorAll('svg')).toHaveLength(workTiles.length)
    expect(overlays[0]!.className).toContain('opacity-0')
    expect(overlays[0]!.className).toContain('group-hover:opacity-100')
  })
})
