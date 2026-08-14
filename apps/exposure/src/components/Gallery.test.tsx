import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders six photo tiles with captions and fullscreen zoom links', () => {
    render(<Gallery />)
    const tiles = document.querySelectorAll('section#gallery img')
    expect(tiles.length).toBe(6)
    expect(screen.getAllByText('The Last man').length).toBe(6)
    expect(screen.getAllByRole('link', { name: /Open The Last man/ }).length).toBe(6)
  })

  it('hides the caption and zoom icon until the tile is hovered', () => {
    render(<Gallery />)
    const tile = document.querySelector('section#gallery .group')!
    const zoom = screen.getAllByRole('link', { name: /Open The Last man/ })[0]!
    const overlay = tile.querySelectorAll('div')[0]!
    const caption = tile.querySelectorAll('div')[1]!

    expect(zoom.className).toContain('opacity-0')
    expect(overlay.className).toContain('group-hover:opacity-90')
    expect(caption.className).toContain('group-hover:opacity-100')
    expect(caption.className).toContain('group-hover:translate-y-0')
  })
})
