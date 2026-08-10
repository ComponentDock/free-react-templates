import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { InstagramFeed } from './InstagramFeed'

describe('InstagramFeed', () => {
  it('renders a strip of ten square image tiles, each a link with an accessible name', () => {
    render(<InstagramFeed />)

    const tiles = screen.getAllByRole('link', { name: /instagram post/i })
    expect(tiles).toHaveLength(10)
    expect(screen.getAllByRole('img')).toHaveLength(10)
  })
})
