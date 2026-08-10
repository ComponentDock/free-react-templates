import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { BlogList } from './BlogList'
import { posts } from '../data'

describe('BlogList', () => {
  it('renders every post row with its title and category tag', () => {
    render(<BlogList />)
    for (const post of posts) {
      expect(screen.getByRole('heading', { level: 3, name: post.title })).toBeInTheDocument()
      expect(screen.getAllByText(post.category).length).toBeGreaterThanOrEqual(1)
    }
  })

  it('renders the image-left, image-right and text-only layout variants', () => {
    render(<BlogList />)
    const textPosts = posts.filter((post) => post.variant === 'text')
    const imagePosts = posts.filter((post) => post.variant !== 'text')
    expect(textPosts.length).toBeGreaterThanOrEqual(1)
    expect(imagePosts.length).toBeGreaterThanOrEqual(1)

    // Image variants render a photo; text-only rows render none.
    expect(screen.getAllByRole('img')).toHaveLength(imagePosts.length)
    // One heading per post.
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(posts.length)
  })
})
