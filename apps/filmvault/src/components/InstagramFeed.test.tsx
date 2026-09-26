import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { InstagramFeed } from './InstagramFeed'

describe('InstagramFeed', () => {
  it('renders 6 Instagram photos', () => {
    render(<InstagramFeed />)
    const images = screen.getAllByAltText(/^Instagram photo/)
    expect(images).toHaveLength(6)
  })

  it('uses picsum.photos for images', () => {
    render(<InstagramFeed />)
    const img = screen.getByAltText('Instagram photo 1')
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })
})
