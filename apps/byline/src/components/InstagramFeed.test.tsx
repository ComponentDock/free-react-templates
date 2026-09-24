import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { InstagramFeed } from './InstagramFeed'

describe('InstagramFeed', () => {
  it('renders 8 Instagram images', () => {
    render(<InstagramFeed />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(8)
  })

  it('renders Instagram hover links', () => {
    render(<InstagramFeed />)
    const links = screen.getAllByLabelText('View on Instagram')
    expect(links).toHaveLength(8)
  })

  it('has correct alt text', () => {
    render(<InstagramFeed />)
    expect(screen.getByAltText('Instagram post 1')).toBeInTheDocument()
    expect(screen.getByAltText('Instagram post 8')).toBeInTheDocument()
  })
})
