import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders 4 gallery images', () => {
    render(<Gallery />)

    const images = screen.getAllByRole('img')
    expect(images.length).toBe(4)

    for (const img of images) {
      expect(img).toHaveAttribute('src', expect.stringContaining('picsum'))
    }
  })
})
