import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { InstagramFeed } from './InstagramFeed'

describe('InstagramFeed', () => {
  it('renders 6 Instagram images', () => {
    render(<InstagramFeed />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(6)
  })

  it('renders Instagram icons for each image', () => {
    render(<InstagramFeed />)
    const icons = screen.getAllByLabelText('Instagram')
    expect(icons.length).toBe(6)
  })
})
