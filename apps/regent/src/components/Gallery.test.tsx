import { render, screen } from '@testing-library/react'
import { Gallery } from './Gallery'
import { GALLERY_IMAGES } from '../data'
import { describe, expect, it } from 'vitest'

describe('Gallery', () => {
  it('renders the section heading', () => {
    render(<Gallery />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Our Gallery')
  })

  it('renders all 8 gallery images', () => {
    render(<Gallery />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(GALLERY_IMAGES.length)
  })

  it('each image has hover effect class', () => {
    render(<Gallery />)
    const images = screen.getAllByRole('img')
    for (const img of images) {
      expect(img).toHaveClass('transition-opacity')
    }
  })
})
