import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('shows a grid of at least six images with accessible labels', () => {
    render(<Gallery />)

    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(6)
    for (const image of images) {
      expect(image.getAttribute('alt')).not.toBe('')
      expect(image).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
    }
  })
})
