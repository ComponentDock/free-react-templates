import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { FoodGallery } from './FoodGallery'

describe('FoodGallery', () => {
  it('renders the gallery heading', () => {
    render(<FoodGallery />)
    expect(screen.getByRole('heading', { name: /food gallery/i })).toBeInTheDocument()
  })

  it('renders 6 food images', () => {
    render(<FoodGallery />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(6)
  })

  it('each image has alt text', () => {
    render(<FoodGallery />)
    const images = screen.getAllByRole('img')
    for (const img of images) {
      expect(img).toHaveAttribute('alt')
      expect(img.getAttribute('alt')).not.toBe('')
    }
  })
})
