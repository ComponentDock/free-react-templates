import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { InstagramFeed } from './InstagramFeed'

describe('InstagramFeed', () => {
  it('shows Follow Us button', () => {
    render(<InstagramFeed />)
    expect(screen.getByRole('link', { name: /follow us on instagram/i })).toBeInTheDocument()
  })

  it('renders 6 Instagram images', () => {
    render(<InstagramFeed />)
    const images = screen.getAllByRole('img', { name: /instagram photo/i })
    expect(images.length).toBe(6)
  })
})
