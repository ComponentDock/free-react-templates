import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { GALLERY } from '../data'
import { GallerySection } from './GallerySection'

describe('GallerySection', () => {
  it('renders the heading and a grid of 12 captioned tiles', () => {
    render(<GallerySection />)
    expect(screen.getByRole('heading', { level: 2, name: 'Selected Projects' })).toBeInTheDocument()
    const tiles = screen.getAllByRole('button', { name: /Nature Beautiful Work/ })
    expect(tiles).toHaveLength(12)
    expect(tiles[0]).toHaveAttribute('aria-label', 'Nature Beautiful Work 1')
    expect(tiles[11]).toHaveAttribute('aria-label', 'Nature Beautiful Work 12')
  })

  it('opens a lightbox with the full-size image when a tile is clicked', () => {
    render(<GallerySection />)
    fireEvent.click(screen.getByRole('button', { name: 'Nature Beautiful Work 3' }))
    const dialog = screen.getByRole('dialog', { name: 'Image lightbox' })
    expect(dialog).toBeInTheDocument()
    const image = screen.getByAltText('Nature Beautiful Work')
    expect(image).toHaveAttribute('src', GALLERY.photos[2])
  })

  it('closes the lightbox via the close button', () => {
    render(<GallerySection />)
    fireEvent.click(screen.getByRole('button', { name: 'Nature Beautiful Work 1' }))
    fireEvent.click(screen.getByRole('button', { name: 'Close lightbox' }))
    expect(screen.queryByRole('dialog', { name: 'Image lightbox' })).not.toBeInTheDocument()
  })

  it('closes the lightbox when the overlay is clicked', () => {
    render(<GallerySection />)
    fireEvent.click(screen.getByRole('button', { name: 'Nature Beautiful Work 1' }))
    fireEvent.click(screen.getByRole('dialog', { name: 'Image lightbox' }))
    expect(screen.queryByRole('dialog', { name: 'Image lightbox' })).not.toBeInTheDocument()
  })

  it('keeps the lightbox open when the image itself is clicked', () => {
    render(<GallerySection />)
    fireEvent.click(screen.getByRole('button', { name: 'Nature Beautiful Work 1' }))
    fireEvent.click(screen.getByAltText('Nature Beautiful Work'))
    expect(screen.getByRole('dialog', { name: 'Image lightbox' })).toBeInTheDocument()
  })
})
