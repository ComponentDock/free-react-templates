import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders the heading and at least six gallery images with accessible labels', () => {
    render(<Gallery />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Happy Pets Gallery' }),
    ).toBeInTheDocument()

    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(6)
    for (const image of images) {
      expect(image).toHaveAccessibleName()
      expect(image).toHaveAttribute('src', expect.stringContaining('picsum.photos/seed/pawpal-'))
    }
  })
})
