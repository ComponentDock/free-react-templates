import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders section title', () => {
    render(<Gallery />)
    expect(screen.getByText('Latest From Our Gallery')).toBeInTheDocument()
  })

  it('renders seven gallery images', () => {
    render(<Gallery />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(7)
    images.forEach((img) => {
      expect(img).toHaveAttribute('alt', 'Gallery item')
    })
  })

  it('renders images with picsum URLs', () => {
    render(<Gallery />)
    const images = screen.getAllByRole('img')
    images.forEach((img) => {
      expect(img.getAttribute('src')).toContain('picsum.photos/seed/fortify-gal-')
    })
  })
})
