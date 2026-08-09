import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders the heading and a grid of photos', () => {
    render(<Gallery />)
    expect(screen.getByRole('heading', { name: /our gallery/i })).toBeInTheDocument()
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(4)
    for (const image of images) {
      expect(image).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
    }
  })
})
