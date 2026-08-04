import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('shows the heading and at least six gallery images with accessible labels', () => {
    const { container } = render(<Gallery />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Pets Photo Gallery' }),
    ).toBeInTheDocument()

    const images = Array.from(container.querySelectorAll('img'))
    expect(images.length).toBeGreaterThanOrEqual(6)
    for (const image of images) {
      expect(image).toHaveAttribute('alt')
      expect(image.getAttribute('src')).toMatch(/picsum\.photos\/seed\/petcare-gallery/)
    }
  })
})
