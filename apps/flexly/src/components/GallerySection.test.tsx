import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { GallerySection } from './GallerySection'
import { GALLERY } from '../data'

describe('GallerySection', () => {
  it('renders the heading and all gallery images', () => {
    const { container } = render(<GallerySection />)

    expect(screen.getByRole('heading', { name: 'Our Gallery' })).toBeInTheDocument()
    const images = container.querySelectorAll('img')
    expect(images).toHaveLength(GALLERY.length)
    images.forEach((img, i) => {
      expect(img).toHaveAttribute('src', GALLERY[i])
      expect(img).toHaveAttribute('alt', `Gallery photo ${i + 1}`)
    })
  })
})
