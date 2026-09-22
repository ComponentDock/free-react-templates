import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders the section heading and 4 images', () => {
    render(<Gallery />)

    expect(screen.getByRole('heading', { name: 'Our Gallery' })).toBeInTheDocument()

    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(4)
  })

  it('uses picsum.photos for all images with correct alt text', () => {
    render(<Gallery />)

    const images = screen.getAllByRole('img')
    for (const image of images) {
      expect(image.getAttribute('src')).toContain('picsum.photos')
    }

    expect(screen.getByRole('img', { name: 'Resort pool view' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Ocean sunset' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Beach lounge area' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Resort room interior' })).toBeInTheDocument()
  })
})
