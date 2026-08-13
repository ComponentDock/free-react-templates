import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Gallery } from './Gallery'
import { galleryImages } from '../data'

describe('Gallery', () => {
  it('renders six square image tiles', () => {
    const { container } = render(<Gallery />)
    expect(galleryImages).toHaveLength(6)
    expect(container.querySelectorAll('img')).toHaveLength(6)
    for (let i = 0; i < galleryImages.length; i += 1) {
      expect(screen.getByRole('link', { name: `Gallery photo ${i + 1}` })).toHaveAttribute(
        'href',
        '#gallery',
      )
    }
  })

  it('overlays an instagram icon on each tile', () => {
    const { container } = render(<Gallery />)
    expect(container.querySelectorAll('svg')).toHaveLength(6)
  })
})
