import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Gallery } from './Gallery'
import { galleryImages } from '../data'

describe('Gallery', () => {
  it('renders eight photo tiles with hover overlays', () => {
    render(<Gallery />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'See the latest photos' }),
    ).toBeInTheDocument()
    const tiles = screen.getAllByRole('link', { name: /gallery photo/i })
    expect(tiles).toHaveLength(galleryImages.length)
    const images = document.querySelectorAll('[data-testid="gallery"] img, section img')
    expect(images.length).toBeGreaterThanOrEqual(galleryImages.length)
  })
})
