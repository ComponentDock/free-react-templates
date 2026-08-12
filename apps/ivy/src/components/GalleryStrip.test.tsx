import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { GalleryStrip } from './GalleryStrip'
import { GALLERY_IMAGES } from '../data'

describe('GalleryStrip', () => {
  it('renders a photo tile for every gallery image', () => {
    render(<GalleryStrip />)
    expect(screen.getByRole('region', { name: 'Campus gallery' })).toBeInTheDocument()
    for (let i = 0; i < GALLERY_IMAGES.length; i += 1) {
      expect(screen.getByRole('link', { name: `Gallery photo ${i + 1}` })).toBeInTheDocument()
    }
  })
})
