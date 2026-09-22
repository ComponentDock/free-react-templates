import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders the gallery heading', () => {
    render(<Gallery />)
    expect(screen.getByRole('heading', { name: /Our Gallery/i })).toBeInTheDocument()
  })

  it('renders gallery images', () => {
    render(<Gallery />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(1)
    for (const img of images) {
      expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
    }
  })
})
