import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { InstagramStrip } from './InstagramStrip'
import { instagramTiles } from '../data'

describe('InstagramStrip', () => {
  it('renders all square tiles with an instagram icon overlay', () => {
    render(<InstagramStrip />)
    const links = screen.getAllByRole('link', { name: /View photo:/ })
    expect(links).toHaveLength(instagramTiles.length)

    links.forEach((link) => {
      expect(link.className).toContain('group')
      const img = link.querySelector('img')!
      expect(img.className).toContain('aspect-square')
      const overlay = link.querySelector('.bg-ink')!
      expect(overlay.className).toContain('opacity-0')
      expect(overlay.className).toContain('group-hover:opacity-90')
      expect(overlay.querySelector('svg')).not.toBeNull()
    })
  })
})
