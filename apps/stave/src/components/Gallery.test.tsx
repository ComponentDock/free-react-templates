import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders the heading', () => {
    render(<Gallery />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Image Galleries')
  })

  it('renders 5 gallery images', () => {
    render(<Gallery />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(5)
  })

  it('uses picsum.photos for all images', () => {
    render(<Gallery />)
    const images = screen.getAllByRole('img')
    for (const img of images) {
      expect(img.getAttribute('src')).toContain('picsum.photos')
    }
  })

  it('images have sequential alt text', () => {
    render(<Gallery />)
    expect(screen.getByRole('img', { name: 'Gallery image 1' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Gallery image 5' })).toBeInTheDocument()
  })
})
