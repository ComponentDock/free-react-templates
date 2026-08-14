import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Blog } from './Blog'
import { BLOG } from '../data'

describe('Blog', () => {
  it('shows the section title and all four posts', () => {
    render(<Blog />)

    expect(screen.getByRole('heading', { level: 2, name: BLOG.heading })).toBeInTheDocument()

    for (const post of BLOG.posts) {
      expect(screen.getByRole('heading', { level: 3, name: post.title })).toBeInTheDocument()
      expect(screen.getByText(post.meta)).toBeInTheDocument()
      expect(screen.getByText(post.comments)).toBeInTheDocument()
      expect(screen.getByText(post.likes)).toBeInTheDocument()
      expect(screen.getByText(post.excerpt)).toBeInTheDocument()
    }
  })

  it('renders two image cards and two media rows', () => {
    const { container } = render(<Blog />)

    const imageCards = BLOG.posts.filter((post) => !post.media)
    const mediaRows = BLOG.posts.filter((post) => post.media)

    // Image cards: img is a direct child of the article. Media rows: article.flex.
    const cardImages = container.querySelectorAll('article:not(.flex) > img')
    expect(cardImages).toHaveLength(imageCards.length)

    const mediaImages = container.querySelectorAll('article.flex img')
    expect(mediaImages).toHaveLength(mediaRows.length)
    expect(mediaRows).toHaveLength(2)
    expect(imageCards).toHaveLength(2)
  })
})
