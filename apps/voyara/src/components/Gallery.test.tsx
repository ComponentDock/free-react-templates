import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders six edge-to-edge tiles with the shared hover overlay', () => {
    render(<Gallery />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(6)
    expect(images[0]).toHaveAttribute('src', 'https://picsum.photos/seed/voyara-gallery-1/500/500')
    expect(images[5]).toHaveAttribute('src', 'https://picsum.photos/seed/voyara-gallery-6/500/500')
    expect(screen.getAllByTestId('tile-overlay')).toHaveLength(6)
    expect(screen.getAllByText('Resort Holiday package')).toHaveLength(6)
    expect(screen.getByTestId('gallery-grid')).toHaveClass('grid-cols-2', 'lg:grid-cols-6')
  })
})
