import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders the heading and at least four photo tiles', () => {
    render(<Gallery />)

    expect(screen.getByRole('heading', { name: 'our image gellary' })).toBeInTheDocument()
    expect(screen.getAllByRole('img').length).toBeGreaterThanOrEqual(4)
  })

  it('uses seeded placeholder images', () => {
    render(<Gallery />)
    const images = screen.getAllByRole('img')
    for (const image of images) {
      expect(image).toHaveAttribute('src', expect.stringContaining('picsum.photos/seed/taper'))
    }
  })
})
