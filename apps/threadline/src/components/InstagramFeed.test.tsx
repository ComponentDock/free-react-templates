import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { InstagramFeed } from './InstagramFeed'

describe('InstagramFeed', () => {
  it('renders heading and hashtag', () => {
    render(<InstagramFeed />)
    expect(screen.getByRole('heading', { name: /Instagram/i })).toBeInTheDocument()
    expect(screen.getByText('#Threadline')).toBeInTheDocument()
  })

  it('renders six instagram posts', () => {
    render(<InstagramFeed />)
    const posts = screen.getAllByLabelText(/Instagram post/i)
    expect(posts).toHaveLength(6)
  })
})
