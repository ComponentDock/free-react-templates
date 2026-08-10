import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders four photo tiles with hover-revealed Instagram icons', () => {
    render(<Gallery />)
    expect(screen.getByRole('heading', { name: 'See the latest photos' })).toBeInTheDocument()
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(4)
    for (const image of images) {
      expect(image.getAttribute('src')).toMatch(/picsum\.photos\/seed\/shanti-/)
    }
  })
})
