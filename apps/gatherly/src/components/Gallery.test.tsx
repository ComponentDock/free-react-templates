import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Gallery } from './Gallery'
import { galleryImages } from '../data'

describe('Gallery', () => {
  it('renders a gap-free strip of four decorative tiles', () => {
    const { container } = render(<Gallery />)
    const section = screen.getByTestId('gallery')
    expect(section).toBeInTheDocument()
    const images = container.querySelectorAll('img')
    expect(images).toHaveLength(galleryImages.length)
    images.forEach((image, index) => {
      expect(image).toHaveAttribute('src', galleryImages[index])
      expect(image).toHaveAttribute('alt', '')
    })
  })
})
