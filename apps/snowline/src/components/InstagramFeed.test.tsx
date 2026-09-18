import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { InstagramFeed } from './InstagramFeed'

describe('InstagramFeed', () => {
  it('renders five instagram post images', () => {
    render(<InstagramFeed />)
    const images = screen.getAllByAltText('Instagram post')
    expect(images.length).toBe(5)
  })
})
