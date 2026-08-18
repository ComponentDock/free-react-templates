import { render, screen } from '@testing-library/react'
import { Instagram } from './Instagram'
import { INSTAGRAM, IMAGES } from '../data'
import { describe, expect, it } from 'vitest'

describe('Instagram', () => {
  it('renders the heading and eight lazy image tiles', () => {
    render(<Instagram />)
    expect(screen.getByRole('heading', { name: INSTAGRAM.heading })).toBeInTheDocument()
    const imgs = document.querySelectorAll('section#instagram img')
    expect(imgs).toHaveLength(IMAGES.instagram.length)
    for (const img of imgs) {
      expect(img).toHaveAttribute('loading', 'lazy')
      expect(img).toHaveAttribute('alt', '')
    }
  })

  it('overlays an Instagram icon on every tile', () => {
    render(<Instagram />)
    const tiles = document.querySelectorAll('section#instagram a')
    expect(tiles).toHaveLength(IMAGES.instagram.length)
    for (const tile of tiles) {
      const icon = tile.querySelector('svg')
      expect(icon).not.toBeNull()
      expect(icon!.getAttribute('aria-hidden')).toBe('true')
      expect(tile.querySelector('span')).toHaveClass('opacity-0')
    }
  })

  it('links each tile to the gallery anchor', () => {
    render(<Instagram />)
    const tiles = document.querySelectorAll('section#instagram a')
    for (const tile of tiles) {
      expect(tile).toHaveAttribute('href', '#instagram')
    }
  })
})
