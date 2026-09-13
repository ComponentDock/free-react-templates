import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { InstagramFeed } from './InstagramFeed'

describe('InstagramFeed', () => {
  it('renders 5 instagram images', () => {
    render(<InstagramFeed />)
    expect(screen.getByTestId('instagram-feed')).toBeInTheDocument()
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(5)
  })

  it('each image has alt text', () => {
    render(<InstagramFeed />)
    expect(screen.getByAltText('Instagram photo 1')).toBeInTheDocument()
    expect(screen.getByAltText('Instagram photo 5')).toBeInTheDocument()
  })
})
