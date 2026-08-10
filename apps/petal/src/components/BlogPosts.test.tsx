import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { BlogPosts } from './BlogPosts'
import { posts } from '../data'

describe('BlogPosts', () => {
  it('shows the first three posts with a Load More button', () => {
    render(<BlogPosts />)
    for (const post of posts.slice(0, 3)) {
      expect(screen.getByRole('heading', { level: 3, name: post.title })).toBeInTheDocument()
    }
    expect(
      screen.queryByRole('heading', { level: 3, name: posts[3]!.title }),
    ).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Load More' })).toBeInTheDocument()
  })

  it('reveals the remaining posts when Load More is clicked and hides the button', async () => {
    const user = userEvent.setup()
    render(<BlogPosts />)
    await user.click(screen.getByRole('button', { name: 'Load More' }))
    for (const post of posts) {
      expect(screen.getByRole('heading', { level: 3, name: post.title })).toBeInTheDocument()
    }
    expect(screen.queryByRole('button', { name: 'Load More' })).not.toBeInTheDocument()
  })
})
