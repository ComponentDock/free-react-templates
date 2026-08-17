import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { News } from './News'
import { NEWS_POSTS } from '../data'

describe('News', () => {
  it('renders the heading and three post cards', () => {
    render(<News />)
    expect(screen.getByRole('heading', { level: 2, name: 'Latest News' })).toBeInTheDocument()
    const articles = screen.getAllByRole('article')
    expect(articles).toHaveLength(3)
    NEWS_POSTS.forEach((post) => {
      expect(screen.getAllByText(post.date).length).toBe(3)
      expect(screen.getAllByRole('link', { name: post.title })).toHaveLength(3)
      expect(screen.getAllByText(post.excerpt).length).toBe(3)
    })
    expect(screen.getAllByRole('link', { name: 'Read more' })).toHaveLength(3)
  })
})
