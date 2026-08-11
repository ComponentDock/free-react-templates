import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BlogGrid } from './BlogGrid'
import {
  authorName,
  latestHeading,
  latestPosts,
  paginationLabel,
  postDate,
  postTitle,
} from '../data'

describe('BlogGrid', () => {
  it('renders the Latest Posts heading and a card per post', () => {
    render(<BlogGrid />)
    expect(screen.getByRole('heading', { level: 2, name: latestHeading })).toBeInTheDocument()
    expect(screen.getAllByRole('article')).toHaveLength(latestPosts.length)
  })

  it('renders post meta, title and excerpt on every card', () => {
    render(<BlogGrid />)
    expect(screen.getAllByText(postTitle).length).toBeGreaterThanOrEqual(latestPosts.length)
    expect(screen.getAllByText(authorName).length).toBeGreaterThanOrEqual(latestPosts.length)
    expect(screen.getAllByText(postDate).length).toBeGreaterThanOrEqual(latestPosts.length)
    latestPosts.forEach((post) => {
      expect(screen.getByText(post.excerpt)).toBeInTheDocument()
    })
  })

  it('renders the pagination navigation', () => {
    render(<BlogGrid />)
    expect(screen.getByRole('navigation', { name: paginationLabel })).toBeInTheDocument()
  })
})
