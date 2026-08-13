import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('shows the heading and a grid of eight photo tiles', () => {
    const { container } = render(<Gallery />)
    expect(screen.getByRole('heading', { name: 'Gallery' })).toBeInTheDocument()
    const images = container.querySelectorAll('img')
    expect(images).toHaveLength(8)
    for (const image of images) {
      expect(image).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
    }
  })

  it('renders a hover icon overlay on every tile', () => {
    const { container } = render(<Gallery />)
    expect(container.querySelectorAll('svg')).toHaveLength(8)
  })
})
