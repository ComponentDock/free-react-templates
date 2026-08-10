import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Blog } from './Blog'
import { bigPosts, mediumPost, normalPosts, smallPosts } from '../data'

describe('Blog', () => {
  it('renders all four card variants with titles and stats', () => {
    render(<Blog />)

    expect(screen.getAllByRole('article')).toHaveLength(10)
    for (const post of normalPosts) {
      expect(screen.getByRole('heading', { name: post.title })).toBeInTheDocument()
    }
    for (const post of bigPosts) {
      expect(screen.getByRole('heading', { name: post.title })).toBeInTheDocument()
    }
    expect(screen.getByRole('heading', { name: mediumPost.title })).toBeInTheDocument()
    for (const post of smallPosts) {
      expect(screen.getByRole('heading', { name: post.title })).toBeInTheDocument()
    }
  })

  it('shows the stats meta bar (likes, comments, views) on cards', () => {
    render(<Blog />)

    expect(screen.getAllByText('57').length).toBeGreaterThanOrEqual(2)
    expect(screen.getAllByText('6').length).toBeGreaterThan(0)
    expect(screen.getAllByText('138').length).toBeGreaterThan(0)
  })

  it('renders detailed card content: category tag, author row and excerpt', () => {
    render(<Blog />)

    const post = bigPosts[0]!
    expect(screen.getAllByText(post.category).length).toBeGreaterThan(0)
    expect(screen.getAllByText(post.author).length).toBeGreaterThan(0)
    expect(screen.getAllByText(post.excerpt).length).toBeGreaterThan(0)
    expect(screen.getByText(post.date)).toBeInTheDocument()
  })

  it('renders the LOAD MORE button with the periwinkle style class', () => {
    render(<Blog />)

    const loadMore = screen.getByRole('link', { name: 'Load More' })
    expect(loadMore).toHaveAttribute('href', '#blog')
    expect(loadMore.className).toContain('bg-peri')
  })
})
