import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Carousel } from './Carousel'

describe('Carousel', () => {
  it('renders three images', () => {
    render(<Carousel />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(3)
  })

  it('uses picsum.photos for images', () => {
    render(<Carousel />)
    const images = screen.getAllByRole('img')
    for (const img of images) {
      expect(img.getAttribute('src')).toContain('picsum.photos')
    }
  })
})
