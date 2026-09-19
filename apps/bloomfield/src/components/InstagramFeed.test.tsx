import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { InstagramFeed } from './InstagramFeed'

describe('InstagramFeed', () => {
  it('renders five instagram images', () => {
    render(<InstagramFeed />)
    const links = screen.getAllByRole('link')
    const instaLinks = links.filter((l) =>
      l.getAttribute('aria-label')?.startsWith('Instagram post'),
    )
    expect(instaLinks.length).toBe(5)
  })
})
