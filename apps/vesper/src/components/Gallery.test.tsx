import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders the heading and six photos with zoom overlays', () => {
    render(<Gallery />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Vesper Church Photo Gallery' }),
    ).toBeInTheDocument()

    const images = screen.getAllByRole('img', { name: /gallery photo/i })
    expect(images).toHaveLength(6)
    expect(images[0]).toHaveAttribute('src', expect.stringContaining('picsum.photos/seed/vesper-'))

    // Zoom icons (aria-hidden svgs) present on every tile
    expect(document.querySelectorAll('svg').length).toBeGreaterThanOrEqual(6)
  })
})
