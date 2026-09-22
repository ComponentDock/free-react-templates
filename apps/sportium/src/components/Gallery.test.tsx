import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders 5 gallery images', () => {
    render(<Gallery />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(5)
  })

  it('uses picsum.photos for image sources', () => {
    render(<Gallery />)
    const images = screen.getAllByRole('img')
    for (const img of images) {
      expect(img.getAttribute('src')).toContain('picsum.photos')
    }
  })
})
