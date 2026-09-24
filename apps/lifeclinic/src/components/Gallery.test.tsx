import { render, screen } from '@testing-library/react'
import { Gallery } from './Gallery'
import { galleryTitle, gallerySeeMore, galleryImages } from '../data'
import { describe, expect, it } from 'vitest'

describe('Gallery', () => {
  it('renders the gallery heading', () => {
    render(<Gallery />)
    expect(screen.getByRole('heading', { level: 2, name: galleryTitle })).toBeInTheDocument()
  })

  it('renders all gallery images', () => {
    render(<Gallery />)
    for (const img of galleryImages) {
      expect(screen.getByAltText(img.alt)).toBeInTheDocument()
    }
  })

  it('renders see more links for each image', () => {
    render(<Gallery />)
    const links = screen.getAllByRole('link', { name: gallerySeeMore })
    expect(links).toHaveLength(galleryImages.length)
  })
})
