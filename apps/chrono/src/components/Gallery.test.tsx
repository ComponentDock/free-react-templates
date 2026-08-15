import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { galleryImages } from '../data'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders all four gallery tiles with alt text', () => {
    render(<Gallery />)
    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(galleryImages.length)
    for (const tile of galleryImages) {
      expect(screen.getByRole('link', { name: tile.label })).toBeInTheDocument()
    }
  })

  it('renders the images inside each tile', () => {
    const { container } = render(<Gallery />)
    expect(container.querySelectorAll('img')).toHaveLength(galleryImages.length)
  })
})
