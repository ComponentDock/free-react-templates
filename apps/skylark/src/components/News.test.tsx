import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { News } from './News'
import { BLOG_POSTS, RECENT_NEWS } from '../data'

describe('News', () => {
  it('renders the section heading and every recent news item', () => {
    render(<News />)

    expect(screen.getByRole('heading', { level: 2, name: 'News Latest' })).toBeInTheDocument()
    RECENT_NEWS.forEach((item) => {
      const link = screen.getByRole('heading', { level: 3, name: item.title }).closest('a')!
      expect(within(link).getByText(item.meta)).toBeInTheDocument()
      expect(within(link).getByText(item.author)).toBeInTheDocument()
    })
  })

  it('renders the blog cards with their date badges and titles', () => {
    render(<News />)

    BLOG_POSTS.forEach((post) => {
      const card = screen.getByRole('heading', { level: 3, name: post.title }).closest('article')!
      expect(within(card).getByText(post.date)).toBeInTheDocument()
      expect(within(card).getByText(post.author)).toBeInTheDocument()
    })
  })
})
